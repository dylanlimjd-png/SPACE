import { chrome, loadText, PLANS } from "../lib/app.js";

let detCache = null;

// Read the processed floor plans live from the room's tables, in the shape the prototype patch expects.
async function loadDetections(ctx) {
  if (detCache) return detCache;
  const num = (v) => { if (v === null || v === undefined || v === "") return null; const x = Number(v); return Number.isFinite(x) ? x : null; };
  const plans = [];
  const failed = [];
  for (const p of PLANS) {
    try {
      const q = (t) => ctx.db.rows(`SELECT * FROM ${t}_p${p.n} LIMIT 400`, [], ctx.signal);
      const [w, o, r, f] = await Promise.all([q("walls"), q("openings"), q("rooms"), q("fixtures")]);
      if (ctx.signal.aborted) return null;
      plans.push({
        n: p.n,
        name: p.name,
        walls: w.map((x) => ({ id: String(x.wall_id), x1: num(x.x1), y1: num(x.y1), x2: num(x.x2), y2: num(x.y2), t: num(x.thickness_mm), ext: !!x.exterior_guess, cls: x.wall_class || "", status: x.length_status || "", notes: String(x.rationale_notes || "") }))
          .filter((x) => [x.x1, x.y1, x.x2, x.y2].every((v) => v !== null)),
        openings: o.map((x) => {
          const g = [num(x.gap_x1_mm), num(x.gap_y1_mm), num(x.gap_x2_mm), num(x.gap_y2_mm)];
          return { id: String(x.opening_id), wall: x.wall_id ? String(x.wall_id) : "", kind: x.kind || "", off: num(x.offset_mm) || 0, w: num(x.width_mm) || 0, into: x.swing_into || "", hinge: x.hinge_side || "", gap: g.every((v) => v !== null) ? g : null, drop: num(x.threshold_drop_mm) };
        }),
        rooms: r.map((x) => {
          let poly = [];
          try { poly = JSON.parse(String(x.polygon_json)); } catch (e) { poly = []; }
          return { id: String(x.room_id), name: x.room_name || x.label_text || "", label: x.label_text || "", poly, area: num(x.area_sqm) };
        }).filter((x) => Array.isArray(x.poly) && x.poly.length >= 3),
        fixtures: f.map((x) => ({ type: x.fixture_type || "", room: x.room || "" })),
      });
    } catch (err) {
      if (ctx.signal.aborted) return null;
      failed.push(p.name);
      ctx.reportError(err);
    }
  }
  detCache = { plans, failed };
  return detCache;
}

export default async function render(ctx) {
  const root = chrome(ctx, `
    <div class="proto-bar">
      <div><div class="eyebrow">Prototype data source</div><h1>SPACE Studio v0.5</h1>
      <p class="lede" style="margin:0">The single-file HTML prototype, running inside the app. In <b>Upload</b>, the floor plans processed by Structured Detection are listed: pick one and its walls, doors and windows appear as <b>Existing</b> in <b>Edit</b>. The prototype keeps its own sign-in and projects in the frame's browser storage.</p></div>
      <a class="btn" href="prototype/SPACE_Studio_v0.5.html.txt" target="_blank">View HTML source</a>
    </div>
    <p class="notice" id="detnote">Reading the processed floor plans…</p>
    <div id="host"><div class="notice">Loading the prototype…</div></div>
  `);
  const host = root.querySelector("#host");
  const note = root.querySelector("#detnote");
  try {
    const [src, patch, det] = await Promise.all([
      loadText("prototype/SPACE_Studio_v0.5.html.txt", ctx.signal),
      loadText("prototype/detected.js", ctx.signal),
      loadDetections(ctx),
    ]);
    if (ctx.signal.aborted || !det) return;
    const data = JSON.stringify({ plans: det.plans, failed: det.failed }).replace(/</g, "\\u003c");
    const html = src + "\n<script>window.DET=" + data + ";<" + "/script>\n<script>" + patch + "<" + "/script>\n";
    note.textContent = det.plans.length
      ? `${det.plans.length} processed floor plans available in the prototype's Upload section.` + (det.failed.length ? ` Not loaded: ${det.failed.join(", ")}.` : "")
      : "No processed floor plans could be read, so the prototype runs with its own samples only.";
    const frame = document.createElement("iframe");
    frame.className = "proto-frame";
    frame.title = "SPACE Studio v0.5";
    frame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms allow-modals");
    frame.srcdoc = html;
    host.innerHTML = "";
    host.appendChild(frame);
    return () => frame.remove();
  } catch (err) {
    if (ctx.signal.aborted) return;
    note.textContent = "";
    host.innerHTML = '<div class="notice">The prototype could not be loaded.</div>';
    ctx.reportError(err);
  }
}
