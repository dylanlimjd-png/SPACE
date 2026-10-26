/* SPACE Studio patch: floor plans processed by the Structured Detection playbook.
   Loaded by pages/prototype.js after the prototype script. window.DET holds the detected
   walls, openings, rooms and fixtures per plan, read live from the room's tables. */
(function () {
  const DET = window.DET || { plans: [] };
  const KIND = { single_swing_door: 'door', double_swing_door: 'door', entrance_door: 'door', shelter_door: 'door', bifold_door: 'door', sliding_door: 'door', opening_no_door: 'opening', window: 'window', casement_window: 'window', louvre_window: 'window' };
  const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const escA = (s) => esc(s).replace(/'/g, '&#39;').replace(/"/g, '&quot;');

  function program(name, c) {
    const n = (name || '').toLowerCase();
    if (/bath|wc|toilet/.test(n)) return /master|main/.test(n) ? 'Master Bath' : 'Common Bath';
    if (/kitchen/.test(n)) return 'Kitchen';
    if (/service/.test(n)) return 'Service Yard';
    if (/store|shelter|pantry/.test(n)) return 'Store / Shelter';
    if (/living|dining/.test(n)) return 'Living';
    if (/bed/.test(n)) {
      if (/master|main/.test(n) && !c.m) { c.m = 1; return 'Master Bedroom'; }
      c.b = (c.b || 1) + 1;
      return c.b === 2 ? 'Bedroom 2' : 'Bedroom 3';
    }
    if (/study/.test(n)) return 'Study';
    if (/foyer/.test(n)) return 'Foyer';
    if (/hall|corridor/.test(n)) return 'Hallway';
    return 'Unassigned';
  }

  // The prototype finds rooms only where walls meet on exactly the same coordinates, so
  // detected coordinates are grouped (within 80 mm) onto one shared value per line.
  function clusters(vals) {
    const s = [...new Set(vals.map((v) => Math.round(v)))].sort((a, b) => a - b);
    const out = []; let g = [];
    for (const v of s) { if (g.length && v - g[0] > 80) { out.push(g); g = []; } g.push(v); }
    if (g.length) out.push(g);
    return out.map((x) => ({ lo: x[0], hi: x[x.length - 1], c: Math.round(x.reduce((a, b) => a + b, 0) / x.length / 10) * 10 }));
  }
  const snapper = (cl) => (v) => {
    let best = null, bd = 1e9;
    for (const k of cl) { const d = v < k.lo ? k.lo - v : (v > k.hi ? v - k.hi : 0); if (d < bd) { bd = d; best = k; } }
    return best ? best.c : Math.round(v);
  };

  function build(P) {
    const gaps = P.openings.filter((o) => o.gap);
    const SX = snapper(clusters(P.walls.flatMap((w) => [w.x1, w.x2]).concat(gaps.flatMap((o) => [o.gap[0], o.gap[2]]))));
    const SY = snapper(clusters(P.walls.flatMap((w) => [w.y1, w.y2]).concat(gaps.flatMap((o) => [o.gap[1], o.gap[3]]))));
    const walls = [], byId = {}, skipped = [], skippedO = [], bounds = [];
    // Structural class: the playbook's measured class where it has one (plans 3-5). Plans read before the
    // wall census existed (1-2) carry no class, so it is estimated from the playbook's own wall notes
    // (solid black / thick / shelter = structural; thin, hollow, single line = not) and the drawn thickness.
    const estimate = (w) => {
      const n = (w.notes || '').toLowerCase();
      if (/^thin |hollow|non-structural|hairline|single thin|railing/.test(n)) return 'non_structural';
      return (/thick|solid|heavy|black|structural|shelter/.test(n) || (w.t || 0) >= 250) ? 'structural' : 'non_structural';
    };
    for (const w of P.walls) {
      if (!w.cls) { w.cls = estimate(w); w.est = true; }   // only walls the playbook left unclassified
      const dx = w.x2 - w.x1, dy = w.y2 - w.y1;
      if (Math.min(Math.abs(dx), Math.abs(dy)) > 60) { skipped.push(w.id); continue; }
      const axis = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
      const fixed = axis === 'x' ? SY((w.y1 + w.y2) / 2) : SX((w.x1 + w.x2) / 2);
      const a = axis === 'x' ? SX(Math.min(w.x1, w.x2)) : SY(Math.min(w.y1, w.y2));
      const b = axis === 'x' ? SX(Math.max(w.x1, w.x2)) : SY(Math.max(w.y1, w.y2));
      if (b - a < 150) { skipped.push(w.id); continue; }
      const o = { id: w.id, axis, fixed, a, b, t: Math.max(80, Math.min(w.cls === 'non_structural' ? 150 : 300, Math.round(w.t || 100))), ext: !!w.ext || w.cls === 'structural', type: 'full', state: 'existing', opens: [], det: { t0: w.t, cls: w.cls, status: w.status, est: !!w.est } };
      walls.push(o); byId[w.id] = { w: o, src: w };
    }
    const rooms = P.rooms.map((r) => {
      const xs = r.poly.map((p) => p[0]), ys = r.poly.map((p) => p[1]);
      return { ...r, cx: (Math.min(...xs) + Math.max(...xs)) / 2, cy: (Math.min(...ys) + Math.max(...ys)) / 2 };
    });
    const roomBy = (name) => rooms.find((r) => r.name === name);
    function mk(op, k, a, b) {
      return { id: op.id, kind: k, a, b, sill: k === 'window' ? (op.kind === 'louvre_window' ? 1500 : 900) : 0, head: 2100, state: 'existing', det: op.kind };
    }
    function swing(w, o, op, sign) {
      if (o.kind !== 'door') return;
      const r = roomBy(op.into);
      if (!r) return;               // no named room: the prototype's own door logic decides
      const c = w.axis === 'x' ? r.cy : r.cx;
      if (Math.abs(c - w.fixed) <= 150) return;
      o.into = c > w.fixed ? 1 : -1;
      if (op.hinge === 'start' || op.hinge === 'end') o.hinge = ((op.hinge === 'start') === (sign > 0)) ? 'a' : 'b'; else o.hinge = 'a';
      o.lock = true;
    }
    let nOpen = 0, nGap = 0;
    for (const op of P.openings) {
      const k = KIND[op.kind];
      if (!op.wall && op.gap) {
        const g = op.gap;
        if (!k) { bounds.push({ id: op.id, kind: op.kind, x1: g[0], y1: g[1], x2: g[2], y2: g[3], drop: op.drop }); continue; }
        const axis = Math.abs(g[2] - g[0]) >= Math.abs(g[3] - g[1]) ? 'x' : 'y';
        const fixed = axis === 'x' ? SY((g[1] + g[3]) / 2) : SX((g[0] + g[2]) / 2);
        const a = axis === 'x' ? SX(Math.min(g[0], g[2])) : SY(Math.min(g[1], g[3]));
        const b = axis === 'x' ? SX(Math.max(g[0], g[2])) : SY(Math.max(g[1], g[3]));
        if (b - a < 250) { skippedO.push(op.id); continue; }
        const vw = { id: 'gap-' + op.id, axis, fixed, a, b, t: 30, ext: false, type: 'full', state: 'existing', opens: [], virt: true };
        const o = mk(op, k, a, b);
        swing(vw, o, op, (axis === 'x' ? g[2] >= g[0] : g[3] >= g[1]) ? 1 : -1);
        vw.opens.push(o); walls.push(vw); nOpen++; nGap++;
        continue;
      }
      const E = byId[op.wall];
      if (!E || !k) { skippedO.push(op.id); continue; }
      const W = E.w, S = E.src;
      const sign = (W.axis === 'x' ? S.x2 >= S.x1 : S.y2 >= S.y1) ? 1 : -1;
      const st = W.axis === 'x' ? S.x1 : S.y1;
      const p0 = st + sign * (op.off || 0), p1 = p0 + sign * (op.w || 0);
      const a = Math.max(W.a, Math.round(Math.min(p0, p1) / 10) * 10), b = Math.min(W.b, Math.round(Math.max(p0, p1) / 10) * 10);
      if (b - a < 250) { skippedO.push(op.id); continue; }
      const o = mk(op, k, a, b);
      swing(W, o, op, sign);
      W.opens.push(o); nOpen++;
    }
    const cnt = {};
    rooms.forEach((r) => { r.prog = program(r.name, cnt); });
    const progAt = [];   // filled per room once the room shapes are known (see detectRooms below)
    return { walls, progAt, nOpen, info: { plan: P.n, name: P.name, nEst: walls.filter((x) => x.det && x.det.est).length, rooms, bounds, skipped, skippedO, nWalls: walls.length - nGap, nOpen, nGap, nFix: P.fixtures.length } };
  }

  window.loadDetected = function (n) {
    const P = DET.plans.find((p) => p.n === n);
    if (!P) return;
    // keep the current plan so a plan that cannot be built never leaves the studio half-loaded
    const keep = { file: STATE.file, kind: STATE.kind, detected: STATE.detected, walls: STATE.walls, progAt: STATE.progAt, floorAt: STATE.floorAt, items: STATE.items, carp: STATE.carp, log: STATE.log, rev: STATE.rev, view: STATE.view };
    try { loadDetectedInner(P); } catch (err) {
      console.error('loadDetected failed for ' + P.name, err);
      Object.assign(STATE, keep);
      try { if (STATE.walls.length) recompute(); else render(); } catch (e2) { render(); }
      toast('Could not load ' + P.name + ' - ' + (err && err.message ? err.message : 'unexpected error'));
    }
  };
  function loadDetectedInner(P) {
    const m = build(P);
    if (!m.walls.length) throw new Error('no usable walls in the playbook output');
    STATE.file = P.name; STATE.kind = 'HDB'; STATE.detected = m.info; STATE.walls = m.walls; STATE.progAt = m.progAt;
    STATE.floorAt = []; STATE.items = []; STATE.carp = []; STATE.log = []; STATE.rev = 0; STATE.maxSeen = 0;
    STATE.selWall = null; STATE.selItem = null; STATE.selRoom = null; STATE.addPt = null; STATE.tool = 'select';
    STATE.view = 'existing'; STATE.hist = []; STATE.redo = [];
    recompute('Plan loaded: ' + P.name + ' - ' + m.info.nWalls + ' walls, ' + m.nOpen + ' openings, ' + (STATE.M ? STATE.M.rooms.length : 0) + ' rooms from Structured Detection');
    if (!STATE.M) throw new Error('the plan produced no model');
    go(1);
  }

  // ---- Rooms: the prototype's flood fill needs every wall to meet exactly, which a reading of a
  // drawing rarely does (open boundaries, small gaps). While a detected plan has no wall edits,
  // rooms are taken from the playbook's room polygons, snapped onto the wall lines. After a wall
  // is demolished or added, the prototype's own detection takes over again.
  const _dr = detectRooms;
  detectRooms = function (walls) {
    const D = STATE.detected;
    if (!D || !D.rooms || walls !== STATE.walls || walls.some((w) => w.state !== 'existing')) return _dr(walls);
    const xs0 = [], ys0 = [];
    for (const w of walls) {
      if (w.axis === 'x') { ys0.push(w.fixed); xs0.push(w.a, w.b); } else { xs0.push(w.fixed); ys0.push(w.a, w.b); }
    }
    const nearest = (arr) => { const u = [...new Set(arr)].sort((p, q) => p - q); return (v) => { let b = v, bd = 250; for (const c of u) { const d = Math.abs(c - v); if (d < bd) { bd = d; b = c; } } return Math.round(b / 10) * 10; }; };
    const nx = nearest(xs0), ny = nearest(ys0);
    const polys = D.rooms.map((r) => r.poly.map((p) => [nx(p[0]), ny(p[1])]));
    const all = polys.flat();
    const mx = snapper(clusters(all.map((p) => p[0]))), my = snapper(clusters(all.map((p) => p[1])));
    const inside = (pl, x, y) => { let c = false; for (let i = 0, j = pl.length - 1; i < pl.length; j = i++) { const a = pl[i], b = pl[j]; if ((a[1] > y) !== (b[1] > y) && x < (b[0] - a[0]) * (y - a[1]) / (b[1] - a[1]) + a[0]) c = !c; } return c; };
    const out = [];
    polys.forEach((pl0, i) => {
      const pl = pl0.map((p) => [mx(p[0]), my(p[1])]);
      const gx = [...new Set(pl.map((p) => p[0]))].sort((a, b) => a - b), gy = [...new Set(pl.map((p) => p[1]))].sort((a, b) => a - b);
      const cells = [];
      for (let a = 0; a < gx.length - 1; a++) for (let b = 0; b < gy.length - 1; b++) {
        const x0 = gx[a], x1 = gx[a + 1], y0 = gy[b], y1 = gy[b + 1];
        if (x1 - x0 < 120 || y1 - y0 < 120) continue;
        if (inside(pl, (x0 + x1) / 2, (y0 + y1) / 2)) cells.push({ x0, y0, x1, y1 });
      }
      if (!cells.length) return;
      const area = cells.reduce((s, c) => s + (c.x1 - c.x0) * (c.y1 - c.y0), 0);
      let cx = 0, cy = 0;
      for (const c of cells) { const A = (c.x1 - c.x0) * (c.y1 - c.y0); cx += A * (c.x0 + c.x1) / 2; cy += A * (c.y0 + c.y1) / 2; }
      cx /= area; cy /= area;
      if (!cells.some((c) => cx >= c.x0 && cx <= c.x1 && cy >= c.y0 && cy <= c.y1)) {
        const big = cells.reduce((m, c) => ((c.x1 - c.x0) * (c.y1 - c.y0) > (m.x1 - m.x0) * (m.y1 - m.y0) ? c : m));
        cx = (big.x0 + big.x1) / 2; cy = (big.y0 + big.y1) / 2;
      }
      out.push({ cells, area, cx, cy, open: false, prog: D.rooms[i].prog, bbox: { x0: Math.min(...cells.map((c) => c.x0)), x1: Math.max(...cells.map((c) => c.x1)), y0: Math.min(...cells.map((c) => c.y0)), y1: Math.max(...cells.map((c) => c.y1)) } });
    });
    if (!out.length) return _dr(walls);
    out.sort((p, q) => q.area - p.area);
    const rooms = out.map((r, i) => ({ id: 'R' + (i + 1), ...r }));
    for (const r of rooms) {
      if (r.prog && !STATE.progAt.some((p) => inRoom(r, p.x, p.y))) STATE.progAt.push({ x: r.cx, y: r.cy, program: r.prog, conf: true, area: r.area });
    }
    const bx = walls.flatMap((w) => (w.axis === 'x' ? [w.a, w.b] : [w.fixed])), by = walls.flatMap((w) => (w.axis === 'x' ? [w.fixed] : [w.a, w.b]));
    return { rooms, open: [], bounds: { x0: Math.min(...bx), x1: Math.max(...bx), y0: Math.min(...by), y1: Math.max(...by) } };
  };

  // ---- Projects: always land on 1 Upload; Save keeps every edit; the project list can be filtered
  const _ls = loadSample;
  loadSample = function (k) { STATE.detected = null; STATE.view = 'changes'; _ls(k); };

  const _np = newProject;
  newProject = function () { STATE.detected = null; _np(); go(0); };

  // everything an edit can change goes into the saved project, including the plan view and display options
  const _pd = projectData;
  projectData = function () {
    const d = _pd();
    d.detected = STATE.detected || null;
    d.view = STATE.view;
    d.showTags = STATE.showTags;
    d.yaw = STATE.iso ? STATE.iso.yaw : 0;
    d.selRoom = STATE.selRoom || null;
    d.showStruct = STATE.showStruct;
    return d;
  };

  const _op = openProject;
  openProject = function (id) {
    const p = myProjects().find((x) => x.id === id);
    const sd = (p && p.data) || {};
    STATE.detected = sd.detected || null;
    _op(id);
    if (sd.view) STATE.view = sd.view; else if (STATE.detected) STATE.view = 'existing';
    if (sd.showTags !== undefined) STATE.showTags = sd.showTags;
    if (sd.showStruct !== undefined) STATE.showStruct = sd.showStruct;
    if (sd.yaw != null && STATE.iso) STATE.iso.yaw = sd.yaw;
    go(0);
  };

  // a save that reports what it did, and says so when the browser refuses to store it
  saveProject = function () {
    if (!STATE.project || !STATE.user) return false;
    clearTimeout(saveT);
    const o = store(); o.projects = o.projects || [];
    const i = o.projects.findIndex((p) => p.id === STATE.project.id);
    const rec = { ...STATE.project, owner: STATE.user.email, updated: new Date().toISOString(), data: projectData() };
    if (i >= 0) o.projects[i] = rec; else o.projects.push(rec);
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(o));
      if (!(localStorage.getItem(STORE_KEY) || '').includes(rec.updated)) return false;
    } catch (e) { return false; }
    STATE.project.updated = rec.updated;
    renderChip();
    return true;
  };
  window.saveNow = function () {
    if (!STATE.project) { toast('Create or open a project first - there is nothing to save to'); return; }
    const ok = saveProject();
    toast(ok ? 'Project saved - ' + (STATE.M ? STATE.M.live.length : STATE.walls.length) + ' walls, ' + STATE.items.length + ' pieces, ' + STATE.carp.length + ' carpentry, ' + STATE.log.length + ' changes' : 'Could not save - browser storage is full or blocked');
  };
  const _sp = showProjects;
  showProjects = function () { if (STATE.project) saveProject(); _sp(); };
  const _so = signOut;
  signOut = function () { if (STATE.project) saveProject(); _so(); };
  const _sv = setView;
  setView = function (v) { _sv(v); autosave(); };
  window.addEventListener('pagehide', () => { try { saveProject(); } catch (e) { /* nothing to save */ } });

  window.filterProjects = function (q) {
    const t = (q || '').trim().toLowerCase();
    let n = 0;
    document.querySelectorAll('#proj-list .proj').forEach((el) => { const ok = !t || (el.dataset.q || '').includes(t); el.style.display = ok ? '' : 'none'; if (ok) n++; });
    const list = document.getElementById('proj-list');
    let none = document.getElementById('proj-none');
    if (!n && list) {
      if (!none) { none = document.createElement('p'); none.id = 'proj-none'; none.className = 'note'; none.textContent = 'No projects match this filter.'; list.after(none); }
      none.style.display = '';
    } else if (none) none.style.display = 'none';
  };

  // ---- Edit stage header: project name top left, floor plan name top right in bold
  function decorate() {
    const top = document.querySelector('.top');
    if (!top) return;
    let bar = document.getElementById('namebar');
    if (STATE.cur !== 1 || !STATE.M) { if (bar) bar.remove(); return; }
    // a full-width strip on top of the header: project name left, floor plan name right in bold
    if (!bar) {
      bar = document.createElement('div'); bar.id = 'namebar';
      bar.innerHTML = "<div id='projname'></div><b id='planname'></b>";
      top.insertBefore(bar, top.firstChild);
    }
    bar.style.cssText = 'flex:0 0 100%;display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin-bottom:2px';
    const pn = document.getElementById('projname'), fn = document.getElementById('planname');
    pn.style.cssText = 'font-size:13px;font-weight:600;color:var(--ink);text-align:left';
    pn.textContent = STATE.project ? STATE.project.name : 'No project open';
    fn.style.cssText = 'font-weight:700;font-size:15px;color:var(--ink);text-align:right';
    fn.textContent = STATE.file || '';
    const sub = document.getElementById('sub');
    if (sub) sub.textContent = STAGES[1].s;
  }
  const _rd = render;
  render = function () { _rd(); try { decorate(); } catch (e) { /* header decoration is cosmetic */ } };

  // ---- Edit stage: detected rooms, names and open boundaries on the plan
  function overlay(o) {
    const D = STATE.detected, B = allBounds(), pad = 44, maxW = o.w || 640, maxH = o.h || 460;
    const s = Math.min((maxW - pad * 2) / (B.x1 - B.x0), (maxH - pad * 2) / (B.y1 - B.y0));
    const X = (v) => (pad + (v - B.x0) * s).toFixed(1), Y = (v) => (pad + (v - B.y0) * s).toFixed(1);
    const under = D.rooms.map((r) => `<polygon points='${r.poly.map((p) => X(p[0]) + ',' + Y(p[1])).join(' ')}' fill='#F3EDE5' fill-opacity='.75' stroke='#DDD3C8' stroke-width='.8' pointer-events='none'/>`).join('');
    const lab = D.rooms.map((r) => {
      const nm = esc(r.name || r.label || r.id);
      const ar = r.area ? `<text x='${X(r.cx)}' y='${(+Y(r.cy) + 10).toFixed(1)}' font-size='8.5' fill='#6B6966' text-anchor='middle' font-family='IBM Plex Mono,monospace' pointer-events='none' paint-order='stroke' stroke='#fff' stroke-width='3' stroke-opacity='.75'>${(+r.area).toFixed(1)} m&#178;</text>` : '';
      return `<text x='${X(r.cx)}' y='${(+Y(r.cy) - 2).toFixed(1)}' font-size='10' font-weight='500' fill='#373837' text-anchor='middle' pointer-events='none' paint-order='stroke' stroke='#fff' stroke-width='3' stroke-opacity='.75'>${nm}</text>` + ar;
    }).join('');
    const bd = D.bounds.map((b) => `<line x1='${X(b.x1)}' y1='${Y(b.y1)}' x2='${X(b.x2)}' y2='${Y(b.y2)}' stroke='#7B5EA7' stroke-width='1.8' stroke-dasharray='2 3' pointer-events='none'><title>${esc(b.kind)}${b.drop ? ' - drop ' + b.drop + ' mm' : ''}</title></line>`).join('');
    return { under, over: lab + bd };
  }
  // ---- Structural / non-structural marking (from the playbook's wall_class), switchable in Edit
  const hasClass = () => !!(STATE.detected && STATE.walls.some((w) => !w.virt && w.det && w.det.cls));
  const isStruct = (w) => w.det && w.det.cls === 'structural';
  function structMarks(o) {
    const B = allBounds(), pad = 44, maxW = o.w || 640, maxH = o.h || 460;
    const s = Math.min((maxW - pad * 2) / (B.x1 - B.x0), (maxH - pad * 2) / (B.y1 - B.y0));
    const X = (v) => pad + (v - B.x0) * s, Y = (v) => pad + (v - B.y0) * s;
    const bands = [], marks = [];
    for (const w of STATE.walls) {
      if (w.virt || w.state === 'demolished' || !(w.det && w.det.cls)) continue;
      const h = w.axis === 'x';
      const x1 = h ? X(w.a) : X(w.fixed), y1 = h ? Y(w.fixed) : Y(w.a), x2 = h ? X(w.b) : X(w.fixed), y2 = h ? Y(w.fixed) : Y(w.b);
      const lw = Math.max(3, w.t * s);
      if (isStruct(w)) {
        bands.push(`<line x1='${x1.toFixed(1)}' y1='${y1.toFixed(1)}' x2='${x2.toFixed(1)}' y2='${y2.toFixed(1)}' stroke='#C0392B' stroke-width='${lw.toFixed(1)}' stroke-linecap='butt' pointer-events='none'><title>${esc(w.id)} - structural${w.det && w.det.est ? ' (estimated)' : ''}</title></line>`);
        const len = Math.hypot(x2 - x1, y2 - y1);
        const t = len > 70 ? 0.22 : 0.5, off = len > 70 ? 0 : 12;
        const mx = x1 + (x2 - x1) * t + (h ? 0 : off), my = y1 + (y2 - y1) * t + (h ? -off : 0);
        marks.push(`<g pointer-events='none'><circle cx='${mx.toFixed(1)}' cy='${my.toFixed(1)}' r='6.5' fill='#fff' stroke='#C0392B' stroke-width='1.2'/><text x='${mx.toFixed(1)}' y='${(my + 3.2).toFixed(1)}' font-size='8.5' font-weight='700' fill='#C0392B' text-anchor='middle' font-family='IBM Plex Mono,monospace'>S</text></g>`);
      } else {
        bands.push(`<line x1='${x1.toFixed(1)}' y1='${y1.toFixed(1)}' x2='${x2.toFixed(1)}' y2='${y2.toFixed(1)}' stroke='#2F6DB5' stroke-width='${Math.max(1.4, Math.min(lw, 3)).toFixed(1)}' stroke-opacity='.85' stroke-linecap='butt' pointer-events='none'><title>${esc(w.id)} - non-structural${w.det && w.det.est ? ' (estimated)' : ''}</title></line>`);
      }
    }
    return bands.join('') + marks.join('');
  }

  const _plan = planSVG;
  planSVG = function (o) {
    o = o || {};
    const D = STATE.detected;
    if (!D || !STATE.M) return _plan(o);
    const edit = !o.furn && !o.theme && !o.dims;
    let svg = _plan(edit ? Object.assign({}, o, { nolabel: true }) : o);
    svg = svg.replace(/<text[^>]*>open \u2014 exterior breached[^<]*<\/text>/g, '').replace(/fill='#F6E4DE'|fill="#F6E4DE"/g, 'fill="none"');
    if (!edit) return svg;
    const ov = overlay(o);
    svg = svg.replace('fill="#fff"/>', (m) => m + ov.under);
    const sm = (hasClass() && STATE.showStruct !== false) ? structMarks(o) : '';
    return svg.replace(/<\/svg>\s*$/, sm + ov.over + '</svg>');
  };

  const _edit = SCREEN.edit;
  SCREEN.edit = function () {
    let h = _edit();
    const D = STATE.detected;
    if (!D) return h;
    const note = `<div class='explain'><b>Mapped from Structured Detection &middot; ${esc(D.name)}.</b> ${D.nWalls} walls and ${D.nOpen} doors, windows and openings were read from the playbook output and placed as <b>Existing</b>. Wall lines are snapped to shared coordinates (within 80 mm) so rooms can close, and drawn 80-300 mm thick (the detected thickness is kept on the wall). Rooms come from the playbook's room outlines; once you demolish or add a wall, the prototype's own room detection takes over, which needs closed walls. ${D.nGap ? D.nGap + ' door(s) sit on open boundaries and get a short stub wall. ' : ''}${D.bounds.length ? D.bounds.length + ' open boundar' + (D.bounds.length === 1 ? 'y is' : 'ies are') + ' drawn dotted purple, not as walls. ' : ''}${D.skipped.length ? D.skipped.length + ' wall(s) not mapped (diagonal or too short): ' + esc(D.skipped.join(', ')) + '. ' : ''}${D.skippedO.length ? D.skippedO.length + ' opening(s) not mapped: ' + esc(D.skippedO.join(', ')) + '. ' : ''}${D.nFix} fixtures are in the playbook output and are not placed here.</div>`;
    h = h.replace('<div class="stats">', () => note + '<div class="stats">');
    if (hasClass()) {
      const live = STATE.walls.filter((w) => !w.virt && w.state !== 'demolished' && w.det && w.det.cls);
      const ns = live.filter(isStruct).length, nn = live.length - ns, on = STATE.showStruct !== false, nEst = live.filter((w) => w.det && w.det.est).length;
      h = h.replace(/(onclick="STATE\.showTags=STATE\.showTags===false;render\(\)">Wall IDs<\/button>)/, (m) => m + `<button class="${on ? 'on' : ''}" onclick="toggleStruct()" title="Mark structural walls (red, S) and non-structural walls (blue) from the playbook">Structural marks</button>`);
      h = h.replace('<span><i style="background:#7A98A3"></i>window</span></div>', (m) => m.replace('</div>', '') + (on ? `<span><i style="background:#C0392B"></i>structural \u00b7 S (${ns})</span><span><i style="background:#2F6DB5"></i>non-structural (${nn})</span>${nEst ? `<span>(${nEst} of them estimated)</span>` : ''}` : '') + '</div>');
      if (on) h = h.replace(note, () => note + `<div class='explain' style='border-left-color:#C0392B'><b>Structural marking.</b> ${ns} walls are marked <b style='color:#C0392B'>structural</b> (red, with an S) and ${nn} <b style='color:#2F6DB5'>non-structural</b> (blue line), as classified by the playbook from the drawing (solid black ink = structural).${nEst ? ' <b>' + nEst + ' wall' + (nEst === 1 ? '' : 's') + ' had no class in the playbook output, so they are <b>estimated</b> from the playbook\'s wall notes and thickness (thick / solid / black = structural); confirm those against the drawing.' : ''} Use <b>Structural marks</b> above the plan to hide or show the marking. Structural walls are the ones the prototype refuses to hack when they are exterior; check the others with the engineer before any demolition.</div>`);
    }
    return h;
  };
  window.toggleStruct = function () { STATE.showStruct = STATE.showStruct === false; render(); autosave(); };

  // ---- Upload stage: a vertical, filterable list of the processed floor plans
  const hay = (p) => (p.name + ' ' + p.rooms.map((r) => r.name || r.label || '').join(' ')).toLowerCase();
  window.filterDetected = function (q) {
    STATE.detQ = q;
    const t = (q || '').trim().toLowerCase();
    let n = 0;
    document.querySelectorAll('#det-list .det-row').forEach((el) => { const ok = !t || (el.dataset.q || '').includes(t); el.style.display = ok ? '' : 'none'; if (ok) n++; });
    const none = document.getElementById('det-none'); if (none) none.style.display = n ? 'none' : '';
    const c = document.getElementById('det-count'); if (c) c.textContent = n + ' of ' + DET.plans.length + ' plans';
  };
  const _up = SCREEN.upload;
  SCREEN.upload = function () {
    const h = _up();
    if (!DET.plans.length && !(DET.failed || []).length) return h;
    const t = (STATE.detQ || '').trim().toLowerCase();
    const shown = DET.plans.filter((p) => !t || hay(p).includes(t)).length;
    const failedRows = (DET.failed || []).map((nm) => `<div class='selcard det-row' data-q='${escA(nm.toLowerCase())}' style='flex:none;width:100%;display:flex;justify-content:space-between;align-items:center;gap:14px;opacity:.6;cursor:default'><div><b>${esc(nm)}</b><span>The playbook output for this plan could not be read, so it cannot be loaded.</span></div><span class='tag t-warn'>unavailable</span></div>`).join('');
    const rows = failedRows + DET.plans.map((p) => {
      const on = STATE.file === p.name;
      const names = p.rooms.map((r) => r.name || r.label).filter(Boolean);
      const ok = !t || hay(p).includes(t);
      return `<div class='selcard det-row ${on ? 'on' : ''}' data-q='${escA(hay(p))}' onclick='loadDetected(${p.n})' style='flex:none;width:100%;display:${ok ? 'flex' : 'none'};justify-content:space-between;align-items:center;gap:14px'><div style='min-width:0'><b>${esc(p.name)}</b><span>${p.walls.length} walls &middot; ${p.openings.length} openings &middot; ${p.rooms.length} rooms &middot; ${p.fixtures.length} fixtures</span><span>${esc(names.slice(0, 7).join(', '))}${names.length > 7 ? ' &hellip;' : ''}</span></div><span class='tag ${on ? 't-ok' : 't-new'}' style='white-space:nowrap'>${on ? 'loaded' : 'load'}</span></div>`;
    }).join('');
    return h + `<div class='card' style='margin-top:18px'><h3>Processed by Structured Detection</h3><p class='sub'>${DET.plans.length} floor plans read by the playbook${(DET.failed || []).length ? ' (' + DET.failed.length + ' unavailable)' : ''} &middot; pick one to load its walls, doors and windows as the Existing plan in Edit</p>
      <div class='row' style='margin-bottom:8px'><input type='text' id='det-filter' placeholder='Filter by plan name or room (e.g. balcony)' value='${escA(STATE.detQ || '')}' oninput='filterDetected(this.value)' aria-label='Filter processed floor plans' style='flex:1;min-width:220px'/><span id='det-count' class='note' style='margin:0'>${shown} of ${DET.plans.length} plans</span></div>
      <div id='det-list' style='display:flex;flex-direction:column;gap:8px;max-height:380px;overflow:auto;padding:2px'>${rows}</div>
      <p id='det-none' class='note' style='display:${shown ? 'none' : ''}'>No processed plan matches this filter.</p>
      <p class='note'>The detected geometry is a reading of the drawing, not a survey: wall lengths marked conditional in the playbook output stay conditional here. Check the plan against the original before editing.</p></div>`;
  };

  render();
})();
