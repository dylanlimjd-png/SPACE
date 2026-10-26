import { chrome, loadText, tableHtml, PLANS } from "../lib/app.js";
import { esc } from "@corvic/live";

let selected = 5;
let tab = "walls";

const TABS = {
  walls: { label: "Walls", cols: ["wall_id", "rooms", "length_mm", "length_status", "thickness_mm", "wall_class", "ink_width_mm", "fill_ratio", "inset", "doors_windows", "confidence", "revision_tag"] },
  openings: { label: "Openings", cols: ["opening_id", "wall_id", "kind", "rooms_joined", "offset_mm", "width_mm", "swing_into", "hinge_side", "threshold_drop_mm", "plausibility", "confidence"] },
  rooms: { label: "Rooms", cols: ["room_id", "label_text", "room_name", "program_guess", "area_sqm", "wall_ids", "door_ids", "unlabelled", "confidence", "notes"] },
  fixtures: { label: "Fixtures", cols: ["fixture_id", "fixture_type", "room", "position_note", "confidence"] },
};

export default async function render(ctx) {
  const chips = PLANS.map((p) => `<button type="button" class="chip${p.n === selected ? " on" : ""}" data-plan="${p.n}">${esc(p.name)}</button>`).join("");
  const root = chrome(ctx, `
    <div class="eyebrow">Playbook output</div>
    <h1>Structured Detection</h1>
    <p class="lede">Walls, openings, rooms and fixtures extracted from each floor plan, with the plan redrawn from the extracted coordinates and laid over the source image for checking.</p>
    <div class="chips" id="chips">${chips}</div>
    <div id="plan"></div>
  `);
  root.querySelector("#chips").addEventListener("click", (e) => {
    const b = e.target.closest("[data-plan]");
    if (!b) return;
    selected = Number(b.dataset.plan);
    root.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", Number(c.dataset.plan) === selected));
    paint();
  }, { signal: ctx.signal });

  const planEl = root.querySelector("#plan");
  let seq = 0;

  async function paint() {
    const mine = ++seq;
    const n = selected;
    const plan = PLANS.find((p) => p.n === n);
    planEl.innerHTML = '<div class="notice">Loading…</div>';
    try {
      const q = (t) => ctx.db.rows(`SELECT * FROM ${t}_p${n} LIMIT 300`, [], ctx.signal);
      const [walls, openings, rooms, fixtures] = await Promise.all([q("walls"), q("openings"), q("rooms"), q("fixtures")]);
      const notes = await loadText(`detection/plan${n}_review_notes.md`, ctx.signal).catch(() => null);
      if (ctx.signal.aborted || mine !== seq) return;
      const data = { walls, openings, rooms, fixtures };
      const structural = walls.filter((w) => w.wall_class === "structural").length;
      const hasClass = walls.some((w) => "wall_class" in w);
      const conf = (rs) => { const v = rs.map((r) => r.confidence).filter((x) => typeof x === "number"); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; };
      const wc = conf(walls);
      const area = rooms.reduce((a, r) => a + (typeof r.area_sqm === "number" ? r.area_sqm : 0), 0);
      const kpi = (v, l, s = "") => `<div class="card"><div class="v">${v}</div><div class="l">${l}</div>${s ? `<div class="s">${s}</div>` : ""}</div>`;
      planEl.innerHTML = `
        <div class="grid kpi">
          ${kpi(walls.length, "Walls", hasClass ? `${structural} structural` : "class not recorded for this plan")}
          ${kpi(openings.length, "Openings")}
          ${kpi(rooms.length, "Rooms", `${area.toFixed(1)} m² listed`)}
          ${kpi(fixtures.length, "Fixtures")}
          ${kpi(wc === null ? "–" : wc.toFixed(2), "Mean wall confidence", "average of per-wall scores")}
        </div>
        <h2>${esc(plan.name)}</h2>
        <div class="figs">
          <figure class="fig"><img src="detection/plan${n}_drawing.png" alt="Redrawn plan"><figcaption>Redrawn from the extracted coordinates</figcaption></figure>
          <figure class="fig"><img src="detection/plan${n}_overlay.png" alt="Overlay on source"><figcaption>Extracted walls and openings over the source image</figcaption></figure>
        </div>
        <div class="tabs" id="tabs">${Object.entries(TABS).map(([k, t]) => `<button type="button" class="tab${k === tab ? " on" : ""}" data-tab="${k}">${t.label} (${data[k].length})</button>`).join("")}</div>
        <div class="tablewrap" id="tbl"></div>
        <details class="box"><summary>Review notes</summary>${notes ? `<pre class="notes">${esc(notes)}</pre>` : '<div class="notice">No review notes file for this plan.</div>'}</details>
      `;
      const tbl = planEl.querySelector("#tbl");
      const show = () => { tbl.innerHTML = tableHtml(data[tab], TABS[tab].cols); };
      show();
      planEl.querySelector("#tabs").addEventListener("click", (e) => {
        const b = e.target.closest("[data-tab]");
        if (!b) return;
        tab = b.dataset.tab;
        planEl.querySelectorAll(".tab").forEach((t) => t.classList.toggle("on", t.dataset.tab === tab));
        show();
      }, { signal: ctx.signal });
    } catch (err) {
      if (ctx.signal.aborted) return;
      planEl.innerHTML = '<div class="notice">This plan could not be loaded.</div>';
      ctx.reportError(err);
    }
  }
  await paint();
}
