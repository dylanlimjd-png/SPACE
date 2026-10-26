import { chrome, PLANS } from "../lib/app.js";
import { esc } from "@corvic/live";

export default async function render(ctx) {
  const root = chrome(ctx, `
    <div class="eyebrow">Beta</div>
    <h1>SPACE Studio and Structured Detection</h1>
    <p class="lede">Two things are brought into this app: the SPACE Studio v0.5 prototype (extracted from the <b>Prototype</b> data source) and the outputs of the <b>Structured Detection</b> playbook for five HDB floor plans. Nothing here is connected to a data pipeline.</p>
    <div class="grid c3">
      <a class="card" href="prototype" style="text-decoration:none;color:inherit"><h3>Prototype</h3><p>SPACE Studio v0.5 in a frame. Upload lists the processed floor plans; the one you pick appears as Existing in Edit.</p></a>
      <a class="card" href="detection" style="text-decoration:none;color:inherit"><h3>Structured Detection</h3><p>Redrawn plan, overlay on the source image, wall, opening, room and fixture tables, and review notes per plan.</p></a>
    </div>
    <h2>Detection outputs per plan</h2>
    <div id="counts" class="tablewrap" style="border-top:1px solid var(--border);border-radius:10px"><div class="notice" style="padding:12px">Loading…</div></div>
  `);

  try {
    const sel = PLANS.map((p) => `(SELECT count(*) FROM walls_p${p.n}) AS w${p.n}, (SELECT count(*) FROM openings_p${p.n}) AS o${p.n}, (SELECT count(*) FROM rooms_p${p.n}) AS r${p.n}, (SELECT count(*) FROM fixtures_p${p.n}) AS f${p.n}`).join(", ");
    const [c] = await ctx.db.rows(`SELECT ${sel}`, [], ctx.signal);
    if (ctx.signal.aborted) return;
    const body = PLANS.map((p) => `<tr><td><a href="detection">${esc(p.name)}</a></td><td class="num">${c["w" + p.n]}</td><td class="num">${c["o" + p.n]}</td><td class="num">${c["r" + p.n]}</td><td class="num">${c["f" + p.n]}</td></tr>`).join("");
    root.querySelector("#counts").innerHTML = `<table><thead><tr><th>Floor plan</th><th>Walls</th><th>Openings</th><th>Rooms</th><th>Fixtures</th></tr></thead><tbody>${body}</tbody></table>`;
  } catch (err) {
    if (ctx.signal.aborted) return;
    root.querySelector("#counts").innerHTML = '<div class="notice">Counts could not be loaded.</div>';
    ctx.reportError(err);
  }
}
