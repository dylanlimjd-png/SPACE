import { esc } from "@corvic/live";

export const PLANS = [
  { n: 1, name: "floorplan HDB.png", short: "Plan 1" },
  { n: 2, name: "floorplan HDB (2).png", short: "Plan 2" },
  { n: 3, name: "floorplan HDB (3).png", short: "Plan 3" },
  { n: 4, name: "floorplan HDB (4).png", short: "Plan 4" },
  { n: 5, name: "floorplan HDB (5).png", short: "Plan 5" },
];

// Overview and Structured Detection are hidden from the nav (still reachable by their address).
const ROUTES = [
  ["prototype", "Prototype"],
];

export function chrome(ctx, bodyHtml) {
  const cur = ctx.route.path || "home";
  const links = ROUTES.map(([p, t]) => `<a href="${p}"${(cur === p || (cur === "" && p === "prototype")) ? ' aria-current="page"' : ""}>${esc(t)}</a>`).join("");
  ctx.content.innerHTML = `<header class="topbar"><span class="brand">SPACE</span><nav>${links}</nav><span class="muted" style="margin-left:auto;font-size:12px">Beta</span></header><main class="page">${bodyHtml}</main>`;
  return ctx.content.querySelector(".page");
}

export async function loadText(path, signal) {
  const r = await fetch(path, { signal });
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return r.text();
}

export function fmt(v) {
  if (v === null || v === undefined || v === "") return "";
  if (typeof v === "number") return Number.isInteger(v) ? v.toLocaleString() : v.toFixed(2);
  return String(v);
}

// Render a table from plain row objects, showing only the listed columns that exist.
export function tableHtml(rows, cols, limit = 120) {
  if (!rows.length) return '<div class="notice">No rows.</div>';
  const have = cols.filter((c) => c in rows[0]);
  const head = have.map((c) => `<th>${esc(c)}</th>`).join("");
  const body = rows.slice(0, limit).map((r) => `<tr>${have.map((c) => {
    const v = r[c];
    if (c === "wall_class" && v) return `<td><span class="tag ${v === "structural" ? "structural" : ""}">${esc(v)}</span></td>`;
    if (c === "length_status" && v) return `<td><span class="tag ${v === "conditional" || v === "undetermined" ? "cond" : ""}">${esc(v)}</span></td>`;
    return `<td${typeof v === "number" ? ' class="num"' : ""}>${esc(fmt(v))}</td>`;
  }).join("")}</tr>`).join("");
  const more = rows.length > limit ? `<div class="notice">Showing ${limit} of ${rows.length} rows.</div>` : "";
  return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>${more}`;
}
