# SPACE: Structured Detection playbook vs. implementation

Date: 2026-10-23. Compared: playbook custom-playbook-1o655a65 against the SPACE pipeline (custom-pipeline-464j566t), the app and the Studio.
Basis: the pipeline notes and the verify module check list were read; draft and redraw code were not read line by line, so those rows are "Not verified".

## Summary

- Implemented: 5
- Not implemented: 21
- Not verified: 4
- Partial: 14

## Not implemented

| # | Area | Item | Detail |
|---|---|---|---|
| 1 | Pipeline stage | locate_input: symbol legend, user-notes constraints | Input is an uploaded image row. No symbol legend; no way to state corrections such as "wall A connects to wall B". |
| 3 | Pipeline stage | calibrate_scale: fit mm/px from dimension ticks | scale_mm_per_px is null with confidence 0; the app must align the walls to the image itself. |
| 5 | Pipeline stage | classify_openings: enlarged crop per opening, six door-vs-window tests | Opening kinds are what the model read. No crops, no kind_basis tests. |
| 7 | check_topology | (a) endpoints on grid lines | There is no grid. |
| 12 | check_topology | (h) area reconciliation to printed areas | Not seen. |
| 13 | check_topology | (i1) every room edge is a wall or declared open boundary |  |
| 14 | check_topology | (i2) reverse ink scan for unmodelled lines | Needs the source image and a scale. |
| 15 | check_topology | (j) wall exists (wall_without_ink) | No ink check; a wall can be invented to close a room. |
| 17 | check_topology | (l) re-run checks after splitting walls | Not applicable until splitting exists. |
| 18 | check_topology | (m) wall census: ink width, fill ratio, grid_on_face | wall_class is model-read, not measured from ink. |
| 25 | check_topology | (t) solid-block sweep (posts, piers) |  |
| 27 | check_topology | (v) inset-wall flag | inset columns are not in the wall output. |
| 28 | check_topology | (w) corner continuation (free_end_turn) |  |
| 29 | check_topology | (x) pinned thick-wall threshold on revision | No revisions; only the latest version per request. |
| 35 | Overlay | overlay_check: overlay on source image, per-wall offsets | Depends on calibrate_scale. |
| 36 | Overlay | Door-swing ink test; review notes re-published |  |
| 37 | Process | Revision rule (stable wall ids, Changed/New tags) | A new request is a full re-read. |
| 40 | App/Studio | Pillars and small solid posts | Adapter sets pillars to an empty list; pipeline never finds posts. |
| 41 | App/Studio | Inset walls and markers | Pipeline never flags them. |
| 43 | App/Studio | Review notes as a document | Findings table exists; Studio does not show it as notes. |
| 44 | App/Studio | Several floors per upload | One image gives one floor. |

## Partially implemented

| # | Area | Item | Detail |
|---|---|---|---|
| 2 | Pipeline stage | derive_grid: dimension chains, grid lines, two-route confirmation | Chain sums are checked but no grid-line table is built. Without printed chains every wall length is conditional. |
| 4 | Pipeline stage | extract_plan: model passes | Model draft with self-critique pass runs. Per-region wall passes tied to a grid and the fixtures pass: not verified. |
| 6 | Pipeline stage | Bath/WC, balcony and HDB main-door passes | bath_no_door, bath_no_louvre, kitchen_access and main_door are checked in code and reported; nothing is looked up in the image, so gaps are flagged, not fixed. |
| 10 | check_topology | (f) plausibility and swing | Atypical widths, kind_alternative, swing_missing, swing_room checked. Doors to unlabelled spaces/ledges and no_window: not verified. |
| 16 | check_topology | (k) short_end: extend walls to the wall met | Detected and reported ("extension not applied"), not fixed. |
| 22 | check_topology | (q) main_door | Exactly-one and unequal-leaf checks. Main door joins living room: not verified. |
| 23 | check_topology | (r) drop_marked | threshold_drop_mm is in the opening table; the "every DROP leader is recorded" check is not implemented. |
| 30 | Publishing | Wall table columns | Missing ink_width_mm, fill_ratio, wall_class_basis, inset*, ink_centre_offset_mm, convention, assumption, doors_windows. |
| 31 | Publishing | Opening table columns | No crop-based kind_basis; position_basis not asserted. Clearance and swing columns exist. |
| 32 | Publishing | Rooms, fixtures, JSON, review notes as artifacts | Same data is in pipeline tables; no allocated artifacts and no markdown review notes, only the findings table. |
| 33 | Drawing | draw_plan: redraw with S, I, main-door, drop, louvre markers | A verification PNG is produced. Which markers it draws, and the label-collision and count checks: not verified. |
| 38 | App/Studio | Measured reading accuracy | No pipeline scale, so the app auto-aligns the image to the walls and measures; if alignment fails, accuracy falls back to pipeline confidence. |
| 39 | App/Studio | Structural walls | Model-read class plus exterior walls marked structural; not a measured solid-ink fill. |
| 42 | App/Studio | Door swings from the crop | swing_into/hinge used when the model gave them; not verified against the image. |

## Not verified

| # | Area | Item | Detail |
|---|---|---|---|
| 11 | check_topology | (g) change counts vs raw draft | Not seen in the verify module. |
| 19 | check_topology | (n) balcony_no_access | Not seen in the check list. |
| 24 | check_topology | (s) drying_rack | Fixtures table exists; rack-specific check not seen. |
| 34 | Drawing | Swing-side assertions (swing_mismatch) | Not seen. |

## Implemented

| # | Area | Item | Detail |
|---|---|---|---|
| 8 | check_topology | (b)(c) duplicates, dangling ends | overlapping_walls, dangling_endpoint. |
| 9 | check_topology | (d) opening fits its wall | opening_bounds. |
| 20 | check_topology | (o) kitchen_access | Reported. |
| 21 | check_topology | (p) bath_no_louvre | Reported. |
| 26 | check_topology | (u) door clearance of at least 50 mm | Shifted or narrowed in code. |

## Suggested priorities

1. Scale fit (calibrate_scale): removes the scale guesswork.
2. Wall census (ink width and fill): measured structural classification.
3. Wall existence and solid-block sweeps: stop invented walls, find missed posts and piers.
