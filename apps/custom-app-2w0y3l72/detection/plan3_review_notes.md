# Review notes — floorplan HDB (3).png

> **LOW-CONFIDENCE WARNING (overall_confidence = 0.25).** 0.25: the minimum room confidence, set by Unlabelled space (U1), Access Balcony.


> Revision 3 (revision 2 plus: the missed solid post wl-50 added as structural, door clearance of at least 50 mm, structural and non-structural walls marked in the overlay, inset walls flagged): wl-18 (removed); wl-1 (Changed); wl-2 (Changed); wl-3 (Changed); wl-4 (Changed); wl-5 (Changed); wl-35 (New); wl-6 (Changed); wl-36 (New); wl-7 (Changed); wl-8 (Changed); wl-37 (New); wl-9 (Changed); wl-10 (Changed); wl-12 (Changed); wl-13 (Changed); wl-14 (Changed); wl-15 (Changed); wl-19 (Changed); wl-20 (Changed); wl-21 (Changed); wl-22 (Changed); wl-23 (Changed); wl-24 (Changed); wl-25 (Changed); wl-26 (Changed); wl-27 (Changed); wl-28 (Changed); wl-29 (Changed); wl-30 (Changed); wl-31 (Changed); wl-32 (Changed); wl-33 (Changed); wl-34 (Changed); wl-38 (New); wl-39 (New); wl-40 (New); wl-41 (New); wl-42 (New); wl-43 (New); wl-44 (New); wl-45 (New); wl-46 (New); wl-47 (New); wl-48 (New); wl-49 (New); wl-50 (New); D2 (Changed); D4 (Changed); D5 (Changed); D6 (Changed); D7 (Changed); D8 (Changed); D9 (Changed); D10 (New); O1 (New); W1 (Changed); W2 (Changed); W3 (Changed); W4 (Changed); W5 (Changed); W9 (Changed); W10 (New); W11 (New); W12 (New)

## Wall table (49 walls: 37 conditional, 6 derived, 6 undetermined; one row per wall, sorted by first room)

| Floor plan | Room(s) | Wall | Type | Inset | Length (mm) | Status | Measurement / arithmetic | Rationale / notes | x1,y1 → x2,y2 | Thick | Openings | Rev |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| floorplan HDB (3).png | Access Balcony, Exterior | wl-9 | non_structural |  |  | undetermined | 10850 - 9550 = 1300 (ends: grid line / read from the ink; see the assumption) | West end of the Access Balcony: a hairline and a double line; carries the gate D9. **Drawn extent:** PLACEHOLDER: y=10850 is read from the ink; the balcony depth is not printed. | 0,9550 → 0,10850 | 200 | D9 | Changed |
| floorplan HDB (3).png | Access Balcony, Exterior | wl-34 | non_structural |  |  | undetermined | 10200 - 1000 = 9200 (ends: read from the ink / grid line; see the assumption) | South railing line of the Access Balcony: a thin line east of the corner block. **Drawn extent:** PLACEHOLDER: y=11350 is read from the drawing. | 1000,11350 → 10200,11350 | 160 |  | Changed |
| floorplan HDB (3).png | Access Balcony, Exterior | wl-38 | structural |  |  | undetermined | 11350 - 10850 = 500 (ends: read from the ink / read from the ink; see the assumption) | South-west corner of the Access Balcony, vertical leg of the L-shaped solid block (placeholder depth). **Drawn extent:** PLACEHOLDER: y=11350 is read from the drawing. | 0,10850 → 0,11350 | 315 |  | New |
| floorplan HDB (3).png | Access Balcony, Exterior | wl-49 | structural |  |  | undetermined | 1000 - 0 = 1000 (ends: grid line / read from the ink; see the assumption) | South-west corner of the Access Balcony, horizontal leg of the L-shaped solid block (placeholder depth). **Drawn extent:** PLACEHOLDER: the balcony depth is not printed. | 0,11284 → 1000,11284 | 274 |  | New |
| floorplan HDB (3).png | Bath/WC 1, Exterior | wl-4 | non_structural |  | 1620 | conditional | 8420 - 6800 = 1620 (ends: read from the ink / read from the ink; see the assumption) | Top wall of Bath/WC 1 with a window strip (W4); runs from the pier wl-40 to the pier wl-24. **Assumption:** both ends read from the ink (pier faces) **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=30 (30 mm) (check (m)) | 6800,30 → 8420,30 | 150 | W4 | Changed |
| floorplan HDB (3).png | Bath/WC 1, Bedroom 2 | wl-22 | non_structural |  | 1794 | conditional | 8420 - 6626 = 1794 (ends: read from the ink / read from the ink; see the assumption) | Bottom wall of Bath/WC 1, a thin double line; drawn from the centre-line of the pier wl-42 to the centre-line of the pier wl-25. **Assumption:** both ends are the centre-lines of the piers it meets | 6626,2650 → 8420,2650 | 115 |  | Changed |
| floorplan HDB (3).png | Bath/WC 1, Exterior | wl-24 | structural |  | 760 | conditional | 760 - 0 = 760 (ends: grid line / read from the ink; see the assumption) | North-east pier of Bath/WC 1. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=8550 to the ink centre x=8420 (130 mm) (check (m)) | 8420,0 → 8420,760 | 292 |  | Changed |
| floorplan HDB (3).png | Bath/WC 1, Unlabelled space (U1) | wl-25 | structural |  | 700 | conditional | 2650 - 1950 = 700 (ends: read from the ink / grid line; see the assumption) | South-east pier of Bath/WC 1, beside the unlabelled space. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=8550 to the ink centre x=8420 (130 mm) (check (m)) | 8420,1950 → 8420,2650 | 292 |  | Changed |
| floorplan HDB (3).png | Bath/WC 1, Exterior | wl-45 | non_structural |  | 1190 | conditional | 1950 - 760 = 1190 (ends: read from the ink / read from the ink; see the assumption) | East wall of Bath/WC 1 between its two piers: a white box with slat ticks, the louvre window W11 (non-structural). **Assumption:** both ends are weight changes read from the ink | 8420,760 → 8420,1950 | 230 | W11 | New |
| floorplan HDB (3).png | Bath/WC 2, Exterior | wl-1 | non_structural |  | 1650 | derived | 1650 - 0 = 1650 (grid lines) | Top wall of Bath/WC 2, a window strip between two lines (W3). **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=40 (40 mm) (check (m)) | 0,40 → 1650,40 | 150 | W3 | Changed |
| floorplan HDB (3).png | Bath/WC 2, Exterior | wl-5 | structural |  | 400 | conditional | 400 - 0 = 400 (ends: grid line / read from the ink; see the assumption) | North-west corner pier of Bath/WC 2: Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). | 0,0 → 0,400 | 300 |  | Changed |
| floorplan HDB (3).png | Bath/WC 2, Kitchen/Dining, Exterior | wl-6 | structural |  | 950 | conditional | 3150 - 2200 = 950 (ends: read from the ink / read from the ink; see the assumption) | West wall pier, solid fill, from the south end of the Bath/WC 2 slot across the Bath/WC 2 / Kitchen line y=2350 to y about 3150. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). | 0,2200 → 0,3150 | 315 |  | Changed |
| floorplan HDB (3).png | Bath/WC 2, Service Balcony | wl-10 | non_structural |  | 2350 | derived | 2350 - 0 = 2350 (grid lines) | Thin wall between Bath/WC 2 and the Service Balcony. | 1650,0 → 1650,2350 | 110 |  | Changed |
| floorplan HDB (3).png | Bath/WC 2, Kitchen/Dining | wl-11 | non_structural |  | 1650 | derived | 1650 - 0 = 1650 (grid lines) | Bottom wall of Bath/WC 2; carries its door D1. | 0,2350 → 1650,2350 | 100 | D1 |  |
| floorplan HDB (3).png | Bath/WC 2, Exterior | wl-35 | non_structural |  | 1800 | conditional | 2200 - 400 = 1800 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bath/WC 2, middle piece: a black bar with a white slot on each side (window slot), fill about 0.5, non-structural. It carries the louvre candidate W10. **Assumption:** both ends are weight changes read from the ink | 0,400 → 0,2200 | 315 | W10 | New |
| floorplan HDB (3).png | Bedroom 2, Exterior | wl-28 | non_structural |  | 2900 | conditional | 6050 - 3150 = 2900 (ends: read from the ink / grid line; see the assumption) | East wall of Bedroom 2 between the piers: a hollow window slot (W5), fill about 0.6, non-structural. **Assumption:** the north end y=3150 is the south end of the pier wl-46, read from the ink | 10215,3150 → 10215,6050 | 235 | W5 | Changed |
| floorplan HDB (3).png | Bedroom 2, Bedroom 3 | wl-30 | non_structural |  | 2515 | conditional | 10215 - 7700 = 2515 (ends: read from the ink / read from the ink; see the assumption) | Partition between Bedroom 2 and Bedroom 3; it starts at the thin wall wl-44 (x=7700) and runs to the east wall. **Assumption:** the west end is the T with wl-44 at x=7700, read from the ink and the printed 1200 lobby width | 7700,6050 → 10215,6050 | 95 |  | Changed |
| floorplan HDB (3).png | Bedroom 3, Exterior | wl-29 | non_structural |  | 2500 | conditional | 8550 - 6050 = 2500 (ends: grid line / read from the ink; see the assumption) | East wall of Bedroom 3 between the piers: a hollow window slot (W6), non-structural. **Assumption:** the south end y=8550 is the north end of the pier wl-47, read from the ink | 10215,6050 → 10215,8550 | 235 | W6 | Changed |
| floorplan HDB (3).png | Bedroom 3, Access Balcony | wl-33 | non_structural |  | 3565 | conditional | 10180 - 6615 = 3565 (ends: read from the ink / read from the ink; see the assumption) | South edge of Bedroom 3 (glazing double line, W9); centred 46 mm north of the grid line y=9550. **Drawn extent:** cross-axis centre-line moved from the grid line y=9550 to the ink centre y=9504 (46 mm) (check (m)) | 6615,9504 → 10180,9504 | 115 | W9 | Changed |
| floorplan HDB (3).png | Bedroom 3, Exterior | wl-47 | structural |  | 1000 | conditional | 9550 - 8550 = 1000 (ends: read from the ink / grid line; see the assumption) | Pier at the south end of the Bedroom 3 east wall. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=10200 to the ink centre x=10180 (20 mm) (check (m)) | 10180,8550 → 10180,9550 | 292 |  | New |
| floorplan HDB (3).png | Kitchen/Dining, Main Bedroom | wl-14 | non_structural |  | 2350 | conditional | 5500 - 3150 = 2350 (ends: read from the ink / grid line; see the assumption) | Thin double-line wall between Kitchen/Dining and the Main Bedroom, from the pier wl-41 down to the line y=5500. **Assumption:** the north end y=3150 is the south end of the pier wl-41, read from the ink **Drawn extent:** cross-axis centre-line moved from the grid line x=3750 to the ink centre x=3465 (285 mm) (check (m)) | 3465,3150 → 3465,5500 | 115 |  | Changed |
| floorplan HDB (3).png | Kitchen/Dining, Exterior | wl-36 | non_structural | thin_solid_black | 1150 | conditional | 4300 - 3150 = 1150 (ends: read from the ink / grid line; see the assumption) | West wall of Kitchen/Dining below the pier: a thin black line (about 110 mm), thin so non-structural. **Assumption:** the north end y=3150 is the end of the pier, read from the ink | 0,3150 → 0,4300 | 110 |  | New |
| floorplan HDB (3).png | Living, Exterior | wl-8 | non_structural | thin_solid_black | 3150 | conditional | 8650 - 5500 = 3150 (ends: grid line / read from the ink; see the assumption) | West wall of Living, a thin black line (about 110 mm), non-structural. **Assumption:** the south end y=8650 is the north end of the pier wl-37, read from the ink | 0,5500 → 0,8650 | 110 |  | Changed |
| floorplan HDB (3).png | Living, Bedroom 3 | wl-31 | non_structural | thin_hollow | 1950 | conditional | 8650 - 6700 = 1950 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Living and Bedroom 3, from the lower end of the 1200 gap down to the pier wl-43. **Assumption:** the north end y=6700 is the lower end of the printed 1200 gap; the ink shows a nib at y about 6790 **Drawn extent:** cross-axis centre-line moved from the grid line x=6750 to the ink centre x=6503 (247 mm) (check (m)) | 6503,6700 → 6503,8650 | 110 |  | Changed |
| floorplan HDB (3).png | Living, Access Balcony | wl-32 | non_structural | thin_hollow | 6615 | conditional | 6615 - 0 = 6615 (ends: grid line / read from the ink; see the assumption) | South edge of Living (glazing double line, the main door D8 and the piers); the double line is centred 46 mm north of the grid line y=9550. **Drawn extent:** cross-axis centre-line moved from the grid line y=9550 to the ink centre y=9504 (46 mm) (check (m)) | 0,9504 → 6615,9504 | 115 | D8, W7, W8 | Changed |
| floorplan HDB (3).png | Living, Exterior | wl-37 | structural |  | 900 | conditional | 9550 - 8650 = 900 (ends: read from the ink / grid line; see the assumption) | West wall pier of Living at the Access Balcony edge. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). | 0,8650 → 0,9550 | 300 |  | New |
| floorplan HDB (3).png | Living, Bedroom 3 | wl-43 | structural |  | 900 | conditional | 9550 - 8650 = 900 (ends: read from the ink / grid line; see the assumption) | Pier on the line x=6750 at the Access Balcony edge. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=6750 to the ink centre x=6615 (135 mm) (check (m)) | 6615,8650 → 6615,9550 | 292 |  | New |
| floorplan HDB (3).png | Living, Bedroom 2, Bedroom 3 | wl-44 | non_structural |  | 1200 | conditional | 6700 - 5500 = 1200 (ends: grid line / read from the ink; see the assumption) | Thin wall at the east side of the 1200 x 1200 lobby, between Living and Bedrooms 2 and 3, with the partition wl-30 branching east at y=6050. Not modelled in the first run (found by the reverse ink scan and by the crop of the lobby). **Assumption:** x=7700 is the ink position and equals 6500 + the printed 1200 lobby width; y=5500 and 6700 are the printed gap ends | 7700,5500 → 7700,6700 | 110 |  | New |
| floorplan HDB (3).png | Living, Access Balcony | wl-48 | structural |  | 900 | conditional | 9550 - 8650 = 900 (ends: read from the ink / grid line; see the assumption) | Pier on the Living south edge east of the main door. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). | 3569,8650 → 3569,9550 | 315 |  | New |
| floorplan HDB (3).png | Living, Access Balcony | wl-50 | structural |  | 204 | conditional | 9470 - 9266 = 204 (ends: read from the ink / read from the ink; see the assumption) | Solid square post (about 204 x 205 mm) on the Living south edge, between the glazing W7 (ends x=2150) and the main door D8 (starts x=2440): the jamb post of the door. A small solid-black block just north of the glazing double line; missed by the first pass because it is shorter than the 600 mm unmodelled-run limit and sits inside the tolerance band of wl-32 (found by the user and by the solid-block sweep, table solid blocks k4). **Assumption:** both ends read from the ink: the south end meets the glazing line of wl-32, the north end is the top of the block | 2311,9266 → 2311,9470 | 204 |  | New |
| floorplan HDB (3).png | Main Bedroom, Exterior | wl-3 | non_structural |  | 2100 | conditional | 6175 - 4075 = 2100 (ends: read from the ink / read from the ink; see the assumption) | Main Bedroom top wall between its two piers: a hollow window box (W1), non-structural. **Assumption:** both ends are the pier edges wl-39 / wl-40, read from the ink **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=221 (221 mm) (check (m)) | 4075,221 → 6175,221 | 390 | W1 | Changed |
| floorplan HDB (3).png | Main Bedroom, Living | wl-19 | non_structural |  | 3365 | conditional | 6830 - 3465 = 3365 (ends: read from the ink / read from the ink; see the assumption) | Bottom wall of the Main Bedroom, a thin double line; carries its door D5. It runs on past the thin wall wl-21 to a nib at x=6830, the hinge jamb of the Bedroom 2 door. **Assumption:** the east end x=6830 is the nib end read from the ink; the west end is the centre-line of wl-14 | 3465,5500 → 6830,5500 | 110 | D5 | Changed |
| floorplan HDB (3).png | Main Bedroom, Bath/WC 1 | wl-20 | non_structural |  | 1850 | conditional | 2250 - 400 = 1850 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between the Main Bedroom and Bath/WC 1; carries the Bath/WC 1 door D4. **Assumption:** both ends are pier edges read from the ink | 6750,400 → 6750,2250 | 115 | D4 | Changed |
| floorplan HDB (3).png | Main Bedroom, Bedroom 2 | wl-21 | non_structural |  | 2350 | conditional | 5500 - 3150 = 2350 (ends: read from the ink / grid line; see the assumption) | Thin double-line wall between the Main Bedroom and Bedroom 2, from the pier wl-42 to the line y=5500. **Assumption:** the north end y=3150 is the south end of the pier wl-42, read from the ink **Drawn extent:** cross-axis centre-line moved from the grid line x=6750 to the ink centre x=6514 (236 mm) (check (m)) | 6514,3150 → 6514,5500 | 95 |  | Changed |
| floorplan HDB (3).png | Main Bedroom, Bath/WC 1, Exterior | wl-40 | structural |  | 625 | conditional | 6800 - 6175 = 625 (ends: read from the ink / read from the ink; see the assumption) | Top pier between the Main Bedroom and Bath/WC 1. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=221 (221 mm) (check (m)) | 6175,221 → 6800,221 | 390 |  | New |
| floorplan HDB (3).png | Main Bedroom, Bath/WC 1, Bedroom 2 | wl-42 | structural |  | 900 | conditional | 3150 - 2250 = 900 (ends: read from the ink / read from the ink; see the assumption) | Pier on the line x=6750 (Main Bedroom / Bath/WC 1 / Bedroom 2). Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=6750 to the ink centre x=6626 (124 mm) (check (m)) | 6626,2250 → 6626,3150 | 315 |  | New |
| floorplan HDB (3).png | Service Balcony, Exterior | wl-2 | non_structural |  | 1800 | conditional | 3450 - 1650 = 1800 (ends: grid line / read from the ink; see the assumption) | Top wall of the Service Balcony, a hollow window box (W2); it ends in the top pier wl-39. **Assumption:** the east end x=3450 is the west edge of the pier wl-39, read from the ink **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=80 (80 mm) (check (m)) | 1650,80 → 3450,80 | 200 | W2 | Changed |
| floorplan HDB (3).png | Service Balcony, Kitchen/Dining | wl-12 | non_structural |  | 1909 | conditional | 3559 - 1650 = 1909 (ends: grid line / read from the ink; see the assumption) | Bottom wall of the Service Balcony; carries its door D2 and a narrow top-hung window W12. It runs on to the centre-line of the pier wl-41. **Assumption:** the east end is the centre-line of wl-41 (the wall runs on to the wall it meets) **Drawn extent:** printed 2100 grid line to grid line; drawn to the centre-line of the pier wl-41 (x=3559), because the grid line x=3750 lies on the east face of that wall | 1650,2350 → 3559,2350 | 100 | D2, W12 | Changed |
| floorplan HDB (3).png | Service Balcony, Main Bedroom | wl-13 | non_structural |  | 1850 | conditional | 2250 - 400 = 1850 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between the Service Balcony and the Main Bedroom, drawn between the top pier wl-39 and the pier wl-41. **Assumption:** both ends are pier edges read from the ink **Drawn extent:** cross-axis centre-line moved from the grid line x=3750 to the ink centre x=3670 (80 mm) (check (m)) | 3670,400 → 3670,2250 | 135 |  | Changed |
| floorplan HDB (3).png | Service Balcony, Main Bedroom, Exterior | wl-39 | structural |  | 625 | conditional | 4075 - 3450 = 625 (ends: read from the ink / read from the ink; see the assumption) | Top pier between the Service Balcony and the Main Bedroom, centred on the line x=3750. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line y=0 to the ink centre y=221 (221 mm) (check (m)) | 3450,221 → 4075,221 | 390 |  | New |
| floorplan HDB (3).png | Service Balcony, Kitchen/Dining, Main Bedroom | wl-41 | structural |  | 900 | conditional | 3150 - 2250 = 900 (ends: read from the ink / read from the ink; see the assumption) | Pier on the line x=3750 (Service Balcony / Kitchen / Main Bedroom). Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=3750 to the ink centre x=3559 (191 mm) (check (m)) | 3559,2250 → 3559,3150 | 315 |  | New |
| floorplan HDB (3).png | Store, Exterior | wl-7 | non_structural | thin_solid_black | 1200 | derived | 5500 - 4300 = 1200 (grid lines) | West wall of the Store, a thin black line (about 110 mm), non-structural. | 0,4300 → 0,5500 | 110 |  | Changed |
| floorplan HDB (3).png | Store, Kitchen/Dining | wl-15 | non_structural |  | 1650 | derived | 1650 - 0 = 1650 (grid lines) | Top wall of the Store, a thin double line; the ink lies about 90 mm below the grid line y=4300 (first run: off register, 6% ink). **Drawn extent:** cross-axis centre-line moved from the grid line y=4300 to the ink centre y=4391 (91 mm) (check (m)) | 0,4391 → 1650,4391 | 100 |  | Changed |
| floorplan HDB (3).png | Store, Kitchen/Dining | wl-16 | non_structural |  | 1200 | conditional | 5500 - 4300 = 1200 (ends: grid line / grid line; see the assumption) | Right wall of the Store; carries its door D3. **Assumption:** The Store width is printed as 1700 but the top chain puts the wall at 1650; the 50 mm difference is treated as a face versus centre-line effect and the grid line is kept. | 1650,4300 → 1650,5500 | 100 | D3 |  |
| floorplan HDB (3).png | Store, Living | wl-17 | non_structural |  | 1650 | derived | 1650 - 0 = 1650 (grid lines) | Bottom wall of the Store. | 0,5500 → 1650,5500 | 100 |  |  |
| floorplan HDB (3).png | Unlabelled space (U1), Bedroom 2 | wl-23 | non_structural |  | 1760 | conditional | 10180 - 8420 = 1760 (ends: read from the ink / read from the ink; see the assumption) | Bedroom 2 / unlabelled space wall; carries the casement window D7 (user-confirmed casement window; id kept from the first run). **Assumption:** both ends are the centre-lines of the piers it meets | 8420,2650 → 10180,2650 | 100 | D7 | Changed |
| floorplan HDB (3).png | Unlabelled space (U1), Exterior | wl-26 | non_structural |  |  | undetermined | 10000 - 8420 = 1580 (ends: read from the ink / read from the ink; see the assumption) | Thin single line across the top of the small unlabelled space: probably a ledge outline, kept as a placeholder wall of the first run. **Drawn extent:** PLACEHOLDER: y=2040 is read from the ink; no printed dimension. | 8420,2040 → 10000,2040 | 60 |  | Changed |
| floorplan HDB (3).png | Unlabelled space (U1), Exterior | wl-27 | non_structural |  |  | undetermined | 2650 - 2040 = 610 (ends: read from the ink / grid line; see the assumption) | Thin double line at the east side of the small unlabelled space: probably a ledge outline, kept as a placeholder wall of the first run. **Drawn extent:** PLACEHOLDER: x=10000 is read from the ink. | 10000,2040 → 10000,2650 | 100 |  | Changed |
| floorplan HDB (3).png | Unlabelled space (U1), Bedroom 2, Exterior | wl-46 | structural |  | 900 | conditional | 3150 - 2250 = 900 (ends: read from the ink / read from the ink; see the assumption) | Pier at the north end of the Bedroom 2 east wall. Structural pier: solid black fill, thick, measured from the ink (bounds of the filled block read at the fitted scale, about +-50 mm). **Drawn extent:** cross-axis centre-line moved from the grid line x=10200 to the ink centre x=10180 (20 mm) (check (m)) | 10180,2250 → 10180,3150 | 335 |  | New |

## Wall types

- **Two types:** 16 structural (thick solid black ink, including the small solid post wl-50), 33 non-structural (every other wall); 5 of the non-structural walls are inset walls.
- **structural walls:** 16 structural pieces (thick and filled solid black, fill at least 0.8): wl-5 (292 mm, fill 1.00), wl-6 (315 mm, fill 1.00), wl-24 (404 mm, fill 0.78), wl-25 (371 mm, fill 0.88), wl-37 (292 mm, fill 1.00), wl-38 (303 mm, fill 1.00), wl-39 (503 mm, fill 0.82), wl-40 (503 mm, fill 0.82), wl-41 (315 mm, fill 1.00), wl-42 (315 mm, fill 1.00), wl-43 (292 mm, fill 1.00), wl-46 (315 mm, fill 1.00), wl-47 (292 mm, fill 1.00), wl-48 (360 mm, fill 0.94), wl-49 (274 mm, fill 1.00), wl-50 (270 mm, fill 0.83). Each is marked S in the drawing.
- **non-structural walls:** everything else, including the thin black lines (about 110 mm) of the Store, Kitchen and Living west walls, the hollow window slots and boxes, and the thin double lines.
- **class changed by the census:** none: the census agrees with the crop reading for every scored wall
- **census overrides (second measure):** wl-1 -> non_structural: band scan 331 mm / fill 0.80 is contaminated by the outer top line and the corner pier wl-5; the solid-block detector finds no solid block along this wall (window strip between two lines); wl-23 -> non_structural: band scan 571 mm / fill 1.00 is contaminated by the pier wl-46 at its east end; the solid-block detector finds no solid block along this wall (thin double line with the casement window); wl-32 -> non_structural: band scan 274 mm, fill 1.00 merges the double glazing line with the piers wl-37, wl-48 and wl-43 on the same line; the solid-block detector finds the piers as separate blocks and none along the glazing between them; wl-50 -> structural: a solid-block sweep (4 x 4 px erosion) over the whole plan finds an isolated solid block x 2209-2413, y 9266-9470 (204 x 204 mm, fill 1.00) that no modelled wall covered; it is below the 240 mm pier threshold in both directions but is solid black, twice as heavy as the thin black lines (about 110 mm) and is the post between the glazing W7 and the door D8: classed structural (solid post), user-confirmed reading; wl-24 -> structural: band scan 404 mm / fill 0.78 includes the outer line east of the pier; the solid-block detector finds a solid block x 8266-8558 (292 mm), fill 1.00, y 27-758: a pier
- **class_unclear:** wl-4 (measured ink width 206 mm, fill 0.56, threshold 238 mm; class_unclear), wl-9 (measured ink width 79 mm, fill 0.69, threshold 238 mm; class_unclear; placeholder geometry), wl-10 (measured ink width 135 mm, fill 0.55, threshold 238 mm; class_unclear), wl-13 (measured ink width 135 mm, fill 0.50, threshold 238 mm; class_unclear), wl-19 (measured ink width 91 mm, fill 0.50, threshold 238 mm; class_unclear), wl-20 (measured ink width 112 mm, fill 0.60, threshold 238 mm; class_unclear), wl-21 (measured ink width 90 mm, fill 0.50, threshold 238 mm; class_unclear), wl-29 (measured ink width 315 mm, fill 0.57, threshold 238 mm; class_unclear), wl-30 (measured ink width 91 mm, fill 0.50, threshold 238 mm; class_unclear), wl-31 (measured ink width 112 mm, fill 0.60, threshold 238 mm; class_unclear), wl-44 (measured ink width 90 mm, fill 0.50, threshold 238 mm; class_unclear)
- **small thick-looking elements not classed structural:** the solid post wl-50 (204 x 204 mm, fill 1.00) at the west jamb of the main door D8 is below the 240 mm pier threshold in both directions but is classed structural as a solid post (solid-block sweep, user-confirmed); it was missed by the first pass. All other solid blobs the sweep found (about 13, each 181 mm or less in both directions, 0.9 to 1.0 fill) sit inside room labels and dimension text and are glyphs, not walls (located by position, not individually enlarged). One 906 x 181 mm solid run at x 9540-10446, y 11180-11362 lies on the Access Balcony south railing wl-34 (placeholder): not inspected, not verified.
- **wl-7:** thin_solid_black: flat boundary wall printed thin solid black: width 112 mm (below 143 mm, 60% of the 238 mm threshold), fill 1.00
- **wl-8:** thin_solid_black: bounds the Living and steps in from the structural wl-37 (300 mm): width 112 mm is 37% of it; flat boundary wall printed thin solid black: width 112 mm (below 143 mm, 60% of the 238 mm threshold), fill 1.00
- **wl-31:** thin_hollow: bounds the Living and steps in from the structural wl-43 (292 mm): width 112 mm is 38% of it
- **wl-32:** thin_hollow: bounds the Living and steps in from the structural wl-37 (300 mm): width 115 mm is 38% of it
- **wl-36:** thin_solid_black: flat boundary wall printed thin solid black: width 135 mm (below 143 mm, 60% of the 238 mm threshold), fill 1.00; joins the structural wl-6

## Door clearance (at least 50 mm)

- **D1 (wl-11):** clear: clear gap 522 mm to wl-6 at the start and 95 mm to wl-10 at the end
- **D2 (wl-12):** shifted: clear gap 50 mm to wl-10 at the start and 846 mm to wl-41 at the end (was -5 / 902 mm; offset 50 -> 105, width 800 -> 800 mm)
- **D3 (wl-16):** clear: clear gap 129 mm to wl-15 at the start and 60 mm to wl-17 at the end
- **D4 (wl-20):** clear: clear gap 544 mm to wl-40 at the start and 490 mm to host end at the end
- **D5 (wl-19):** shifted: clear gap 2024 mm to wl-14 at the start and 50 mm to wl-21 at the end (was 2098 / -24 mm; offset 2155 -> 2081, width 870 -> 870 mm)
- **D6 (open boundary):** narrowed: clear gap 50 mm to host start at the start and 55 mm to wl-44 at the end (was 0 / -55 mm; offset 0 -> 0, width 870 -> 710 mm)
- **D8 (wl-32):** narrowed: clear gap 50 mm to wl-50 at the start and 54 mm to wl-48 at the end (was 27 / 22 mm; offset 2440 -> 2463, width 950 -> 895 mm)
- **D9 (wl-9):** clear: clear gap 348 mm to wl-32 at the start and 50 mm to host end at the end
- **D10 (open boundary):** narrowed: clear gap 50 mm to host start at the start and 55 mm to wl-44 at the end (was 0 / -55 mm; offset 0 -> 0, width 870 -> 710 mm)
- **W12 (wl-12):** window moved from offset 900 to 955 mm to keep 50 mm clear of the door D2

## Length convention

- **length convention:** Along-axis length is grid line to grid line wherever both ends lie on a printed grid line; where an end is a pier edge or a jamb read from the ink it is conditional. Cross-axis, a wall is drawn on its grid line unless check (m) or the overlay showed its ink centre elsewhere, in which case the centre-line is moved to the ink centre and the move is listed (grid_on_face). Room polygons stay on the printed grid lines. No area convention is printed.

## Dimension chains and which close

- **top (x):** 1650+2100+3000+1800+1500+150; sum 10200; overall 10200; CLOSES (residual 0). Printed overall 10200 (tick to tick). Chain starts at left tick (x=0, left wall outer area) and ends at the 150 stub past the right wall. Closes.
- **left (y):** 2350+1950+1200+4050; sum 9550; overall 9550; CLOSES (residual 0). Datum y=0 at top wall outer tick. Closes to printed overall 9550 (right chain shares the same overall).
- **right (y):** 2650+3400+3500; sum 9550; overall 9550; CLOSES (residual 0). Same datum y=0 at top tick. Closes to 9550. Gives the Bath/WC 1 bottom, Bedroom 2/3 partition lines.
- **bottom (x):** not printed; sum None; overall None; partial or not printed. No bottom dimension chain. Access Balcony depth is not printed.
- **interior store width:** 1700; sum None; overall None; partial or not printed. Partial: store interior width, start at left inner face (not printed which face).
- **interior door gap:** 1200 (vertical), 1200 (horizontal); sum None; overall None; partial or not printed. Partial: door / gap widths at the Bedroom 2 / Bedroom 3 / Living junction, not grid chains.

## Derived grid lines

| Axis | Position (mm) | Status | Arithmetic | Confirmed by | Note |
|---|---|---|---|---|---|
| x | 0 | derived | datum = left tick of the top chain | chain start + overall 10200 tick | Datum x=0 is the outer left tick (left wall outer area); every x value is measured from it. |
| x | 0 | conditional | assumed = x0 | single route (alignment) | Access Balcony west face assumed on x=0 (aligned with the west wall); not printed. |
| x | 1650 | derived | 1650 | cumulative from start + 10200 - (2100+3000+1800+1500+150) | Wall between Bath/WC 2 and Service Balcony, measured at the printed tick (wall centre assumed at tick). |
| x | 1700 | conditional | 1700 (printed, interior) | single route | Printed 1700 beside the Store/Living west edge vs the grid 1650: 50 mm discrepancy, treated as a wall-thickness effect; the grid value 1650 is kept. |
| x | 3750 | derived | 1650 + 2100 = 3750 | cumulative from start + 10200 - (3000+1800+1500+150) | Wall between Service Balcony / Kitchen and Main Bedroom, at printed tick. |
| x | 6750 | derived | 3750 + 3000 = 6750 | cumulative from start + 10200 - (1800+1500+150) | Main Bedroom east wall / Bath/WC 1 west wall, at printed tick. |
| x | 8550 | derived | 6750 + 1800 = 8550 | cumulative from start + 10200 - (1500+150) | Bath/WC 1 east wall (west edge of the ledge bay), at printed tick. |
| x | 10050 | derived | 8550 + 1500 = 10050 | cumulative from start + 10200 - 150 | Inner face of the east wall at the ledge bay. |
| x | 10200 | derived | 10050 + 150 = 10200 | chain closure to printed overall 10200 | Outer face of the east wall = printed overall width. |
| x | 10200 | conditional | assumed = x6 | single route (alignment) | Access Balcony east end assumed on x=10200 (aligned with the east wall); not printed. |
| y | 0 | derived | datum = top tick of the left and right chains | left chain + right chain | Datum y=0 at the top of the plan (top wall outer tick); both chains start here. |
| y | 1950 | undetermined | not derivable | none | Read from the drawing only; no printed dimension. |
| y | 2350 | derived | 2350 | cumulative from start + 9550 - (1950+1200+4050) | South face of Bath/WC 2 / Service Balcony, at printed tick. |
| y | 2650 | derived | 2650 | cumulative from start + 9550 - (3400+3500) | South edge of Bath/WC 1 and of the east ledge bay; Bedroom 2 north wall. |
| y | 4300 | derived | 2350 + 1950 = 4300 | cumulative from start + 9550 - (1200+4050) | Kitchen/Dining south edge / Store north edge. |
| y | 5500 | derived | 4300 + 1200 = 5500 | cumulative from start + 9550 - 4050 | Store south edge and Main Bedroom south wall (same line by alignment in the drawing). |
| y | 6050 | derived | 2650 + 3400 = 6050 | cumulative from start + 9550 - 3500 | Bedroom 2 / Bedroom 3 partition. |
| y | 6700 | conditional | 5500 + 1200 = 6700 | single route | The printed vertical 1200 starts at the y=5500 line (living top wall). |
| y | 9550 | derived | 5500 + 4050 = 9550 | left chain + right chain (two chains close) | Living south edge = printed overall height 9550; the right chain also sums to 9550. |
| y | 11350 | undetermined | not derivable | none | Balcony depth is not printed; 11350 is a placeholder read from the drawing. |
| x | 7700 | conditional | 6500 + 1200 = 7700 | single route | The printed horizontal 1200 runs from the ink line of the thin wall wl-21/wl-31 (x about 6500) to the lobby wall. |

## Scale fit

- **scale_mm_per_px:** 22.66 mm per pixel (x 22.47, y 22.84), spread 1.37% over 12 segments, confidence 0.73, from the tick fit; residual of the top tick span against the printed 10200: -9 mm.
- **Fit summary:** scale_mm_per_px_x = 22.5; scale_mm_per_px_y = 22.8; scale_mm_per_px = 22.7; spread_pct = 1.37; n_segments = 12; x0_px = 72.7; y0_px = 73.3; confidence = 0.726; tick_span_residual_mm_x = -9.32

## Automated checks

| Check | Result |
|---|---|
| (a) endpoints on grid lines or on another wall | OFF-GRID FREE ENDS, resolved by crop: wl-19, wl-31, wl-48, wl-50 - wl-19 and wl-31 end in the hinge nibs of the lobby doors (x=6830 and the gap end y=6700) and wl-48 is a pier whose north end is a free end on the Living south edge; none is closed by an invented wall |
| (b) duplicate / overlapping walls | PASS: no overlapping pairs |
| (c) dangling endpoints | FREE ENDS (7), door jambs and nibs, the lobby wall ends and the open east side of the Access Balcony, none closed by an invented wall; connection tolerance is half of each wall thickness plus 30 mm: wl-19(6830,5500), wl-31(6503,6700), wl-34(10200,11350), wl-44(7700,5500), wl-44(7700,6700), wl-48(3569,8650), wl-50(2311,9266) |
| (d) openings fit their walls | PASS: all 20 wall-hosted openings fit |
| (f) door plausibility | PASS: no door joins two bedrooms; every bedroom, both baths, the Service Balcony, the Store and the main entrance carry a door; Bedroom 2 door D10 was not identified in the first run. |
| (i1) room edges covered by a wall or an open boundary | PASS: every room polygon edge lies within 320 mm of a wall or on a recorded open boundary |
| (i2) unmodelled ink runs | run by the reverse scan of overlay_check; its result and the resolution of each run are in the Drawing verification section. |
| (j) wall existence (ink coverage) | LOW COVERAGE, resolved by crop (walls kept): wl-15 (0.09), wl-33 (0.29) - these are light grey double lines that the dark threshold (grey < 110) mostly misses; both are plainly visible on the enlarged crops, so the walls exist. Walls with coverage: wl-1 1.00, wl-4 1.00, wl-5 1.00, wl-6 1.00, wl-36 1.00, wl-7 1.00, wl-8 1.00, wl-37 1.00, wl-10 0.98, wl-11 0.94, wl-12 0.89, wl-13 1.00, wl-14 1.00, wl-15 0.09, wl-16 0.86, wl-17 0.97, wl-19 0.96, wl-20 1.00, wl-21 1.00, wl-22 0.86, wl-23 0.60, wl-24 1.00, wl-25 1.00, wl-28 1.00, wl-29 1.00, wl-30 0.96, wl-31 1.00, wl-32 0.70, wl-33 0.29, wl-39 1.00, wl-40 1.00, wl-41 1.00, wl-42 1.00, wl-43 1.00, wl-44 0.96, wl-46 1.00, wl-47 1.00, wl-48 1.00, wl-50 1.00 |
| (k) short ends | Free ends are listed under (c); the lobby wall wl-44 ends are door jambs, wl-19 and wl-31 end in hinge nibs; each was checked on the crop. The wall wl-18 (Kitchen/Dining to Living, a single thin line with a nib) was removed under HDB rule 1 and recorded as the open boundary O1. |
| (m) thick walls versus grid lines | cross-axis centre-lines moved to the ink centre: wl-1 y=40 from the grid line 0 (thin wall, offset beyond tolerance); wl-2 y=80 from the grid line 0 (grid_on_face); wl-3 y=221 from the grid line 0 (grid_on_face); wl-4 y=30 from the grid line 0 (thin wall, offset beyond tolerance); wl-13 x=3670 from the grid line 3750 (thin wall, offset beyond tolerance); wl-14 x=3465 from the grid line 3750 (thin wall, offset beyond tolerance); wl-15 y=4391 from the grid line 4300 (thin wall, offset beyond tolerance); wl-21 x=6514 from the grid line 6750 (thin wall, offset beyond tolerance); wl-24 x=8420 from the grid line 8550 (grid_on_face); wl-25 x=8420 from the grid line 8550 (grid_on_face); wl-31 x=6503 from the grid line 6750 (thin wall, offset beyond tolerance); wl-32 y=9504 from the grid line 9550 (thin wall, offset beyond tolerance); wl-33 y=9504 from the grid line 9550 (thin wall, offset beyond tolerance); wl-39 y=221 from the grid line 0 (grid_on_face); wl-40 y=221 from the grid line 0 (grid_on_face); wl-41 x=3559 from the grid line 3750 (grid_on_face); wl-42 x=6626 from the grid line 6750 (grid_on_face); wl-43 x=6615 from the grid line 6750 (grid_on_face); wl-46 x=10180 from the grid line 10200 (grid_on_face); wl-47 x=10180 from the grid line 10200 (grid_on_face). The polygons were not moved. |
| (n) balcony access | PASS: the Service Balcony is entered by D2; the Access Balcony is the common walkway entered through the main door D8 and the gate D9. |
| (o) kitchen access | marked_open_boundary: Kitchen/Dining opens to Living across O1 (a single thin line from x=1650 to the nib at x about 3465); no door is drawn there and none was invented. The Store door D3 opens onto the kitchen. |
| (p) bath louvre | Bath/WC 1: louvre W11 (slat ticks seen). Bath/WC 2: louvre W10 recorded as louvre_not_seen (no slat-tick symbol; the long slot in the west wall is the placeholder). louvre_not_seen: W10. |
| (q) main door | PASS: exactly one entrance_door (D8) joining Living and the access balcony; unequal leaves 895 and 448 mm; large leaf swings into Living (hinge east), the gate pair swings out to the Access Balcony (hinge both); threshold_drop_mm = 100 (printed 100 DROP). |
| (r) floor drops (drop_marked) | one DROP seen: "100 DROP" on the main door D8, recorded as threshold_drop_mm=100 (printed value). No other DROP leader or text is printed (Access Balcony edge, Bath/WC doors and the Service Balcony door carry none). The drop lifts the living area above the wet access balcony. |
| (s) drying rack | drying_rack found: F5, a long narrow grey-shaded bar at y about -90 to -40 just outside the Service Balcony north wall, x 1650-3440 (the width of its window); recorded as a fixture, not a wall or window. The box F6 inside the yard is a different fixture. |
| (t) solid-block sweep (solid_block_uncovered) | PASS after resolution: 30 solid blocks of at least 100 mm were found over the whole plan (4 x 4 px erosion of the grey < 128 mask, grown back by 2 px); 17 lie on a modelled wall (the post wl-50 among them: it was added in this revision after the user found it, and the sweep now finds it as covered); 13 lie on no wall. None of those 13 is read as a wall: the largest is 202 x 183 mm, none sits on a wall line, and they sit in rows at the positions of the heavy letters of room labels and dimension text ((7221,221); (727,495); (6996,586); (2569,769); (524,838); (906,3327); (8075,3830); (3985,3875); (6075,3875); (8749,3875); (8075,8033); (8749,8101); (4861,8741)). They were located by position, not each enlarged, so each is a glyph by reading, not verified one by one. |
| (u) door clearance (door_clearance) | PASS: 9 door-like openings checked, 6 adjusted (shifted, narrowed or a window moved aside), 0 clearance_unmet; the smallest clear gap to a wall face, pier, nib or opening after the fix is 50 mm (rule: at least 50 mm). The new offsets and widths are what the drawing, the overlay and the swing check use; the opening table carries clearance_start_mm, clearance_end_mm and clearance_note. |
| (v) inset walls (inset_wall) | 5 inset walls: wl-36, wl-7, wl-8, wl-31, wl-32 (thin_solid_black: wl-36, wl-7, wl-8; thin_hollow: wl-31, wl-32). They stay non_structural. Living and boundary walls tested and not inset: wl-1 (width 150 mm, fill n/a, joins wl-5); wl-2 (width 200 mm, fill n/a, joins wl-39); wl-3 (width 390 mm, fill n/a, joins wl-39, wl-40); wl-4 (width 206 mm, fill 0.56, joins wl-24, wl-40); wl-35 (width 315 mm, fill n/a, joins wl-5, wl-6); wl-17 (width 114 mm, fill 0.40, joins no structural piece); wl-19 (width 91 mm, fill 0.50, joins no structural piece); wl-28 (width 315 mm, fill 0.50, joins wl-46); wl-29 (width 315 mm, fill 0.57, joins wl-47); wl-44 (width 90 mm, fill 0.50, joins no structural piece); wl-45 (width 230 mm, fill n/a, joins wl-24, wl-25). |
| schema validation of the final JSON | PASS: required keys present, confidences in [0,1], unique wall ids, opening wall_ids exist (blank only for door_on_open_boundary and the kitchen boundary), polygons have 3+ vertices. |

## Topology: touching rooms and shared walls

| Room pair | Shared wall pieces |
|---|---|
| Kitchen/Dining / Living | open boundary O1 (no wall), 1815 mm |
| Bedroom 2 / Living | open boundary with the door D10 (x 6830-7700 at y=5500) and the wall wl-44 (x=7700, y 5500-6050) |
| Bedroom 3 / Living | open boundary with the door D6 (x 6830-7700 at y=6700) and the wall wl-44 (y 6050-6700) |
| Bedroom 2 / Bedroom 3 | wl-30 (2515 mm) from the T with wl-44 to the east wall |

## Changes against the first run (user corrections)

- **wl-18 (removed):** Kitchen/Dining to Living line: a single thin line, recorded as the open boundary O1 (HDB rule 1)
- **wl-1 (Changed):** non_structural Top wall of Bath/WC 2, a window strip between two lines (W3).
- **wl-2 (Changed):** non_structural Top wall of the Service Balcony, a hollow window box (W2); it ends in the top pier wl-39.
- **wl-3 (Changed):** non_structural Main Bedroom top wall between its two piers: a hollow window box (W1), non-structural.
- **wl-4 (Changed):** non_structural Top wall of Bath/WC 1 with a window strip (W4); runs from the pier wl-40 to the pier wl-24.
- **wl-5 (Changed):** structural North-west corner pier of Bath/WC 2: Structural pier: solid black fill, thick, measured from the ink (bounds o
- **wl-35 (New):** non_structural West wall of Bath/WC 2, middle piece: a black bar with a white slot on each side (window slot), fill about 0.5
- **wl-6 (Changed):** structural West wall pier, solid fill, from the south end of the Bath/WC 2 slot across the Bath/WC 2 / Kitchen line y=235
- **wl-36 (New):** non_structural West wall of Kitchen/Dining below the pier: a thin black line (about 110 mm), thin so non-structural.
- **wl-7 (Changed):** non_structural West wall of the Store, a thin black line (about 110 mm), non-structural.
- **wl-8 (Changed):** non_structural West wall of Living, a thin black line (about 110 mm), non-structural.
- **wl-37 (New):** structural West wall pier of Living at the Access Balcony edge. Structural pier: solid black fill, thick, measured from t
- **wl-9 (Changed):** non_structural West end of the Access Balcony: a hairline and a double line; carries the gate D9.
- **wl-10 (Changed):** non_structural Thin wall between Bath/WC 2 and the Service Balcony.
- **wl-12 (Changed):** non_structural Bottom wall of the Service Balcony; carries its door D2 and a narrow top-hung window W12. It runs on to the ce
- **wl-13 (Changed):** non_structural Thin double-line wall between the Service Balcony and the Main Bedroom, drawn between the top pier wl-39 and t
- **wl-14 (Changed):** non_structural Thin double-line wall between Kitchen/Dining and the Main Bedroom, from the pier wl-41 down to the line y=5500
- **wl-15 (Changed):** non_structural Top wall of the Store, a thin double line; the ink lies about 90 mm below the grid line y=4300 (first run: off
- **wl-19 (Changed):** non_structural Bottom wall of the Main Bedroom, a thin double line; carries its door D5. It runs on past the thin wall wl-21 
- **wl-20 (Changed):** non_structural Thin double-line wall between the Main Bedroom and Bath/WC 1; carries the Bath/WC 1 door D4.
- **wl-21 (Changed):** non_structural Thin double-line wall between the Main Bedroom and Bedroom 2, from the pier wl-42 to the line y=5500.
- **wl-22 (Changed):** non_structural Bottom wall of Bath/WC 1, a thin double line; drawn from the centre-line of the pier wl-42 to the centre-line 
- **wl-23 (Changed):** non_structural Bedroom 2 / unlabelled space wall; carries the casement window D7 (user-confirmed casement window; id kept fro
- **wl-24 (Changed):** structural North-east pier of Bath/WC 1. Structural pier: solid black fill, thick, measured from the ink (bounds of the f
- **wl-25 (Changed):** structural South-east pier of Bath/WC 1, beside the unlabelled space. Structural pier: solid black fill, thick, measured 
- **wl-26 (Changed):** non_structural Thin single line across the top of the small unlabelled space: probably a ledge outline, kept as a placeholder
- **wl-27 (Changed):** non_structural Thin double line at the east side of the small unlabelled space: probably a ledge outline, kept as a placehold
- **wl-28 (Changed):** non_structural East wall of Bedroom 2 between the piers: a hollow window slot (W5), fill about 0.6, non-structural.
- **wl-29 (Changed):** non_structural East wall of Bedroom 3 between the piers: a hollow window slot (W6), non-structural.
- **wl-30 (Changed):** non_structural Partition between Bedroom 2 and Bedroom 3; it starts at the thin wall wl-44 (x=7700) and runs to the east wall
- **wl-31 (Changed):** non_structural Thin double-line wall between Living and Bedroom 3, from the lower end of the 1200 gap down to the pier wl-43.
- **wl-32 (Changed):** non_structural South edge of Living (glazing double line, the main door D8 and the piers); the double line is centred 46 mm n
- **wl-33 (Changed):** non_structural South edge of Bedroom 3 (glazing double line, W9); centred 46 mm north of the grid line y=9550.
- **wl-34 (Changed):** non_structural South railing line of the Access Balcony: a thin line east of the corner block.
- **wl-38 (New):** structural South-west corner of the Access Balcony, vertical leg of the L-shaped solid block (placeholder depth).
- **wl-39 (New):** structural Top pier between the Service Balcony and the Main Bedroom, centred on the line x=3750. Structural pier: solid 
- **wl-40 (New):** structural Top pier between the Main Bedroom and Bath/WC 1. Structural pier: solid black fill, thick, measured from the i
- **wl-41 (New):** structural Pier on the line x=3750 (Service Balcony / Kitchen / Main Bedroom). Structural pier: solid black fill, thick, 
- **wl-42 (New):** structural Pier on the line x=6750 (Main Bedroom / Bath/WC 1 / Bedroom 2). Structural pier: solid black fill, thick, meas
- **wl-43 (New):** structural Pier on the line x=6750 at the Access Balcony edge. Structural pier: solid black fill, thick, measured from th
- **wl-44 (New):** non_structural Thin wall at the east side of the 1200 x 1200 lobby, between Living and Bedrooms 2 and 3, with the partition w
- **wl-45 (New):** non_structural East wall of Bath/WC 1 between its two piers: a white box with slat ticks, the louvre window W11 (non-structur
- **wl-46 (New):** structural Pier at the north end of the Bedroom 2 east wall. Structural pier: solid black fill, thick, measured from the 
- **wl-47 (New):** structural Pier at the south end of the Bedroom 3 east wall. Structural pier: solid black fill, thick, measured from the 
- **wl-48 (New):** structural Pier on the Living south edge east of the main door. Structural pier: solid black fill, thick, measured from t
- **wl-49 (New):** structural South-west corner of the Access Balcony, horizontal leg of the L-shaped solid block (placeholder depth).
- **wl-50 (New):** structural Solid square post (about 204 x 205 mm) on the Living south edge, between the glazing W7 (ends x=2150) and the 
- **D2 (Changed):** single_swing_door Service Balcony door from Kitchen/Dining; hinge on the west jamb, arc over the balcony.
- **D4 (Changed):** single_swing_door En-suite style door between the Main Bedroom and Bath/WC 1; hinge on the north jamb, arc inside Bath/WC 1.
- **D5 (Changed):** single_swing_door Main Bedroom door onto Living; hinge on the east jamb, the leaf stands north and the arc sweeps over the Main 
- **D6 (Changed):** single_swing_door Bedroom 3 door, from the lobby; the leaf stands south at the west jamb (nib) and the arc sweeps into Bedroom 3
- **D7 (Changed):** casement_window Casement window (id kept from the first run, which read it as a double door). The bay it opens onto is U1, an 
- **D8 (Changed):** entrance_door Main door with gate. Large leaf swings in (Living), the gate pair swings out (Access Balcony), floor drop 100 
- **D9 (Changed):** double_swing_door Gate at the west end of the Access Balcony: large leaf swings out, the gate pair swings in; no DROP printed he
- **D10 (New):** single_swing_door Bedroom 2 door, from the lobby (not identified in the first run); the leaf stands north at the west jamb (the 
- **O1 (New):** kitchen_boundary Open boundary between Kitchen/Dining and Living (marked by a single thin line and a nib); the Store door D3 op
- **W1 (Changed):** window Long window box in the Main Bedroom top wall.
- **W2 (Changed):** window Window box in the Service Balcony top wall.
- **W3 (Changed):** window Window strip in the Bath/WC 2 top wall.
- **W4 (Changed):** window Window strip in the Bath/WC 1 top wall.
- **W5 (Changed):** window Long window slot in the Bedroom 2 east wall.
- **W9 (Changed):** window Glazing in the Bedroom 3 south edge.
- **W10 (New):** louvre_window Louvre window of Bath/WC 2 (placeholder reading, louvre_not_seen): the long double slot in the west wall.
- **W11 (New):** louvre_window Louvre window of Bath/WC 1: a narrow box with slat ticks in the east wall between the two piers.
- **W12 (New):** window Top-hung (ventilation) window beside D2, between the Service Balcony and Kitchen/Dining (hypothesis).

## Open boundaries

- **Kitchen/Dining / Living (O1):** A single thin line and a nib mark the boundary; no door, no wall.
- **Lobby doors:** D10 and D6 stand on open boundaries (no wall line along the door gaps).
- **Access Balcony east side:** No wall is drawn on the east side of the Access Balcony.
- **Small unlabelled space (U1):** Its upper edge is a thin single line (placeholder wall wl-26); the ledge outline continues to the top edge.
- **Bedroom 2 / Bedroom 3 bottoms:** none: the first run listed the west end of the partition as drawn from x=6750; it starts at the lobby wall x=7700.

## Doors and openings

| Opening | Kind | Wall | Joins | Offset (mm) | Width (mm) | Swing into | Hinge | Swing basis | Plausibility | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | wl-11 | Bath/WC 2 <-> Kitchen/Dining | 680 | 820 | Bath/WC 2 | end | read_from_crop | plausible: the bath is entered from the Kitchen/Dining side | 0.50 |
| D2 | single_swing_door | wl-12 | Service Balcony <-> Kitchen/Dining | 105 | 800 | Service Balcony | start | read_from_crop | plausible | 0.50 |
| D3 | single_swing_door | wl-16 | Store <-> Kitchen/Dining | 270 | 820 | Kitchen/Dining | end | read_from_crop | plausible | 0.50 |
| D4 | single_swing_door | wl-20 | Main Bedroom <-> Bath/WC 1 | 560 | 800 | Bath/WC 1 | start | read_from_crop | plausible: en-suite door between the Main Bedroom and Bath/WC 1 | 0.50 |
| D5 | single_swing_door | wl-19 | Main Bedroom <-> Living | 2081 | 870 | Main Bedroom | end | read_from_crop | plausible | 0.50 |
| D6 | single_swing_door |  | Bedroom 3 <-> Living | 0 | 710 | Bedroom 3 | start | read_from_crop | plausible: bedroom door from the lobby; on an open boundary (door_on_open_boundary) | 0.40 |
| D7 | casement_window | wl-23 | Unlabelled space (U1) <-> Bedroom 2 | 180 | 1430 |  |  |  | n/a (window, ledge or open boundary) | 0.45 |
| D8 | entrance_door | wl-32 | Living <-> Access Balcony | 2463 | 895 | Living | end | read_from_crop | plausible: main door off the living area (the access balcony is the common walkway outside) | 0.45 |
| D9 | double_swing_door | wl-9 | Access Balcony <-> Exterior | 360 | 890 | Exterior | end | read_from_crop | plausible: gate to the common access balcony | 0.40 |
| D10 | single_swing_door |  | Bedroom 2 <-> Living | 0 | 710 | Bedroom 2 | start | read_from_crop | plausible: bedroom door from the lobby; on an open boundary (door_on_open_boundary) | 0.40 |
| O1 | kitchen_boundary |  | Kitchen/Dining <-> Living | 0 | 1815 |  |  |  | open boundary: no door drawn (HDB rule 1) | 0.40 |
| W1 | window | wl-3 | Main Bedroom <-> Exterior | 0 | 2100 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W2 | window | wl-2 | Service Balcony <-> Exterior | 0 | 1790 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W3 | window | wl-1 | Bath/WC 2 <-> Exterior | 320 | 1220 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W4 | window | wl-4 | Bath/WC 1 <-> Exterior | 20 | 1120 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W5 | window | wl-28 | Bedroom 2 <-> Exterior | 20 | 2800 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W6 | window | wl-29 | Bedroom 3 <-> Exterior | 150 | 2150 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W7 | window | wl-32 | Living <-> Access Balcony | 150 | 2000 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W8 | window | wl-32 | Living <-> Access Balcony | 3750 | 2650 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W9 | window | wl-33 | Bedroom 3 <-> Access Balcony | 235 | 3150 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W10 | louvre_window | wl-35 | Bath/WC 2 <-> Exterior | 0 | 1800 |  |  |  | n/a (window, ledge or open boundary) | 0.30 |
| W11 | louvre_window | wl-45 | Bath/WC 1 <-> Exterior | 0 | 1190 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W12 | window | wl-12 | Service Balcony <-> Kitchen/Dining | 955 | 550 |  |  |  | n/a (window, ledge or open boundary) | 0.30 |

- **expected doors present:** Main Bedroom D5 (and D4 to Bath/WC 1); Bedroom 2 D10; Bedroom 3 D6; Bath/WC 2 D1; Service Balcony D2; Store D3; main door D8 (with gate); gate D9. Kitchen/Dining: no door, open boundary O1.
- **NOT identified / uncertain:** The small box W12 beside D2 (top-hung window or fixed panel); the Bath/WC 2 louvre (not seen); the exact hinge nibs of D6 and D10 (read from one crop each); the cross-marked small box on the west wall above D9 (not classified, probably a fixed panel or post). All door and window offsets and widths are estimated from enlarged crops (position_basis = estimated).
- **ledge candidate U1:** The unlabelled bay beside Bath/WC 1 (U1) is narrow, open at the top, railed by thin lines and entered only through the casement window D7: an air-con ledge candidate (hypothesis, not confirmed).

## Openings whose kind or swing rests on weak evidence

| Opening | Kind | Kind alternative | Kind basis | Swing basis | Confidence | Note |
|---|---|---|---|---|---|---|
| D1 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 820 mm | read_from_crop | 0.50 | Bath/WC 2 door onto Kitchen/Dining; the leaf stands at the east jamb and the arc sweeps over the bathroom. |
| D2 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 800 mm | read_from_crop | 0.50 | Service Balcony door from Kitchen/Dining; hinge on the west jamb, arc over the balcony. |
| D3 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 820 mm | read_from_crop | 0.50 | Store door; hinge on the south jamb, the leaf and arc sweep into Kitchen/Dining. |
| D4 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 800 mm | read_from_crop | 0.50 | En-suite style door between the Main Bedroom and Bath/WC 1; hinge on the north jamb, arc inside Bath/WC 1. |
| D5 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 870 mm | read_from_crop | 0.50 | Main Bedroom door onto Living; hinge on the east jamb, the leaf stands north and the arc sweeps over the Main Bedroom. |
| D6 | single_swing_door |  | test 1-2: bare arc, leaf of about 830 mm standing south from the nib end at x=6830 | read_from_crop | 0.40 | Bedroom 3 door, from the lobby; the leaf stands south at the west jamb (nib) and the arc sweeps into Bedroom 3. No wall line is drawn along the gap (door on an open boundary). The first run put it on wl-31 with its own offset. |
| D7 | casement_window |  | user-confirmed casement window (regression list): two arcs on a framed box with a sill line, span about 1430 mm, swinging north into the unlabelled bay (probably an air-con ledge) |  | 0.45 | Casement window (id kept from the first run, which read it as a double door). The bay it opens onto is U1, an air-con ledge candidate. |
| D8 | entrance_door |  | HDB rule 3: the door off the living area to the access balcony: one large leaf of about 950 mm (arc into Living, hinge on the east jamb) plus a double-leaf gate of two 475 mm leaves (swinging out to the access balcony), marked 100 DROP | read_from_crop | 0.45 | Main door with gate. Large leaf swings in (Living), the gate pair swings out (Access Balcony), floor drop 100 mm printed. |
| D9 | double_swing_door |  | test 6: one large leaf of about 890 mm swinging out (west, exterior) plus a pair of two 445 mm leaves swinging into the Access Balcony: a gate system, not the main door (the main door opens off the Living) | read_from_crop | 0.40 | Gate at the west end of the Access Balcony: large leaf swings out, the gate pair swings in; no DROP printed here. |
| D10 | single_swing_door |  | test 1-2: bare arc, leaf of about 830 mm standing north from the nib end at x=6830 | read_from_crop | 0.40 | Bedroom 2 door, from the lobby (not identified in the first run); the leaf stands north at the west jamb (the nib of wl-19) and the arc sweeps into Bedroom 2. Door on an open boundary. |
| O1 | kitchen_boundary |  | HDB rule 1: the Kitchen/Dining side towards Living carries only a single thin line and a nib at the east end, with no door and no wall |  | 0.40 | Open boundary between Kitchen/Dining and Living (marked by a single thin line and a nib); the Store door D3 opens onto it. No door and no wall. |
| W1 | window |  | test 1: a long white box between two sill lines in the Main Bedroom top wall, between two solid piers |  | 0.50 | Long window box in the Main Bedroom top wall. |
| W2 | window |  | test 1: a white box between two lines in the Service Balcony top wall |  | 0.40 | Window box in the Service Balcony top wall. |
| W3 | window | louvre_window | a white strip between two lines in the Bath/WC 2 top wall |  | 0.40 | Window strip in the Bath/WC 2 top wall. |
| W4 | window | louvre_window | a white strip between two lines in the Bath/WC 1 top wall |  | 0.40 | Window strip in the Bath/WC 1 top wall. |
| W5 | window |  | a white slot inside the thick east wall |  | 0.40 | Long window slot in the Bedroom 2 east wall. |
| W6 | window |  | a white slot inside the thick east wall |  | 0.40 | Long window slot in the Bedroom 3 east wall. |
| W7 | window |  | double glazing line on the Living south edge |  | 0.35 | Glazing at the west end of the Living south edge. |
| W8 | window |  | double glazing line on the Living south edge |  | 0.35 | Glazing at the east end of the Living south edge. |
| W9 | window |  | double glazing line on the Bedroom 3 south edge |  | 0.35 | Glazing in the Bedroom 3 south edge. |
| W10 | louvre_window | window | HDB rule 2: Bath/WC 2 has no slat-tick symbol, so the long window slot in its west wall is taken as the louvre; symbol not seen |  | 0.30 | Louvre window of Bath/WC 2 (placeholder reading, louvre_not_seen): the long double slot in the west wall. |
| W11 | louvre_window |  | HDB rule 2: a white box with small slat ticks on its inner edge in the Bath/WC 1 east wall |  | 0.50 | Louvre window of Bath/WC 1: a narrow box with slat ticks in the east wall between the two piers. |
| W12 | window | fixed panel | a small narrow box with an inner line beside the Service Balcony door: read as a top-hung window |  | 0.30 | Top-hung (ventilation) window beside D2, between the Service Balcony and Kitchen/Dining (hypothesis). |

## Missing dimensions that would resolve each conditional / undetermined row

- **wl-2 (conditional):** printed position of the pier edge
- **wl-3 (conditional):** printed width of the window bay
- **wl-4 (conditional):** printed position of the pier faces
- **wl-35 (conditional):** printed length of the slot
- **wl-9 (undetermined):** printed depth of the Access Balcony
- **wl-12 (conditional):** printed position of the pier wl-41
- **wl-16 (conditional):** Which face the printed 1700 refers to.
- **wl-19 (conditional):** printed position of the nib
- **wl-22 (conditional):** printed position of the piers
- **wl-26 (undetermined):** printed depth of the unlabelled space
- **wl-27 (undetermined):** printed width of the ledge bay
- **wl-30 (conditional):** printed position of the T
- **wl-31 (conditional):** printed position of the gap end
- **wl-34 (undetermined):** printed depth of the Access Balcony
- **wl-38 (undetermined):** printed depth of the Access Balcony
- **wl-44 (conditional):** printed position of the wall
- **wl-49 (undetermined):** printed depth of the Access Balcony
- **wl-50 (conditional):** printed size of the post

## Area reconciliation

- **printed floor area:** No floor-area figure or area convention is printed on this plan, so no reconciliation against a printed figure is possible (not verified).
- **computed room areas:** Bath/WC 2 3.9 m2; Service Balcony 4.9 m2; Kitchen/Dining 9.8 m2; Store 2.0 m2; Main Bedroom 16.5 m2; Bath/WC 1 4.8 m2; Unlabelled space (U1) 1.2 m2; Bedroom 2 11.2 m2; Bedroom 3 11.5 m2; Living 28.5 m2; Access Balcony 18.4 m2. Polygons run grid line to grid line; Access Balcony and U1 rest on placeholder lines.

## Model and effort path

- **model path:** claude-sonnet-5-5 was run again in small sequential passes (effort applied by prompt; the endpoint rejects reasoning_effort and caps output at 4096 tokens). The new draft held 22 walls and 10 openings and was weaker than the verified first-run tables (34 walls, 18 openings), so by the revision rule the rebuild started from the previously published tables and kept their ids; the draft supplied only cross-checks (it also put the east wall on x=10050, the inner face of the ledge bay, and missed the lobby).

## Drawing verification

### Render log

| Render | Label overlaps | Walls drawn / table | Openings drawn / table | Swing guessed | Swing mismatch | Visual problems | Action |
|---|---|---|---|---|---|---|---|
| 4 | 0 | 49 / 49 | 23 / 23 | 0 | 0 | Render 3 and 4 of revision 3 (49 walls). Opened render 3 at original size and render 4 at overview size. Render 3 had the footer text over the x-axis label; render 4 moves the footer below the axes. The post wl-50 now carries an S marker. Five inset walls carry an I marker: wl-7, wl-8 and wl-36 are drawn as thin solid black lines (the source prints them thin solid black); wl-31 and wl-32 are thin hollow lines and keep the hollow outline. Doors are drawn at their clearance-adjusted offsets: D8 is narrowed to 895 mm (leaf 895, gate 2 x 448) to keep 50 mm clear of wl-50 and wl-48, D6 and D10 to 710 mm. Remaining nits: the D9 caption touches the wl-38 label; the D7 arcs are small; the I markers sit beside the walls, not on them. | Accepted after 4 renders in total. Counts equal the tables (49 walls, 23 openings, 16 structural markers, 5 inset markers); every drawn door keeps at least 50 mm clearance. [mismatch ids: none] |

### Overlay registration against the source image

38 walls scored, 11 not scored (undetermined or diagonal), 3 flagged (off register or no ink), 3 unmodelled ink runs listed. Largest median offset among scored walls: 147 mm.

| Wall | Type | Inset | Status | Thick (mm) | Median offset (mm) | Max offset (mm) | Ink coverage | Tolerance (mm) | Flag | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| wl-9 | non_structural |  | undetermined | 200 |  |  |  | 167 | not scored | undetermined placeholder geometry: not scored |
| wl-34 | non_structural |  | undetermined | 160 |  |  |  | 149 | not scored | undetermined placeholder geometry: not scored |
| wl-38 | structural |  | undetermined | 315 |  |  |  | 225 | not scored | undetermined placeholder geometry: not scored |
| wl-49 | structural |  | undetermined | 274 |  |  |  | 206 | not scored | undetermined placeholder geometry: not scored |
| wl-4 | non_structural |  | conditional | 150 | 20 | 129 | 0.67 | 144 | ok |  |
| wl-22 | non_structural |  | conditional | 115 | -8 | 168 | 0.91 | 126 | ok |  |
| wl-24 | structural |  | conditional | 292 | -31 | 98 | 1.00 | 213 | ok |  |
| wl-25 | structural |  | conditional | 292 | -31 | 59 | 1.00 | 213 | ok |  |
| wl-45 | non_structural |  | conditional | 230 |  |  |  | 182 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-1 | non_structural |  | derived | 150 | 10 | 139 | 0.57 | 144 | ok |  |
| wl-5 | structural |  | conditional | 300 | -15 | 19 | 1.00 | 217 | ok |  |
| wl-6 | structural |  | conditional | 315 | -26 | 26 | 1.00 | 225 | ok |  |
| wl-10 | non_structural |  | derived | 110 | -25 | 171 | 0.98 | 122 | ok |  |
| wl-11 | non_structural |  | derived | 100 | -5 | 109 | 0.86 | 119 | ok |  |
| wl-35 | non_structural |  | conditional | 315 |  |  |  | 225 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-28 | non_structural |  | conditional | 235 |  |  |  | 185 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-30 | non_structural |  | conditional | 95 | -5 | 165 | 0.94 | 116 | ok |  |
| wl-29 | non_structural |  | conditional | 235 | 62 | 62 | 1.00 | 185 | ok |  |
| wl-33 | non_structural |  | conditional | 115 | -147 | 147 | 0.29 | 126 | off_register | /median offset/ 147 mm vs tolerance 126 mm; ink coverage 0.29 |
| wl-47 | structural |  | conditional | 292 | 7 | 18 | 1.00 | 213 | ok |  |
| wl-14 | non_structural |  | conditional | 115 | -42 | 48 | 1.00 | 125 | ok |  |
| wl-36 | non_structural | thin_solid_black | conditional | 110 | -26 | 37 | 1.00 | 122 | ok |  |
| wl-8 | non_structural | thin_solid_black | conditional | 110 | -37 | 120 | 0.98 | 122 | ok |  |
| wl-31 | non_structural | thin_hollow | conditional | 110 | -35 | 35 | 1.00 | 122 | ok |  |
| wl-32 | non_structural | thin_hollow | conditional | 115 | -135 | 147 | 0.06 | 126 | no_ink | /median offset/ 135 mm vs tolerance 126 mm; ink coverage 0.06 |
| wl-37 | structural |  | conditional | 300 | -37 | 37 | 1.00 | 217 | ok |  |
| wl-43 | structural |  | conditional | 292 | -1 | 10 | 1.00 | 213 | ok |  |
| wl-44 | non_structural |  | conditional | 110 | 15 | 153 | 0.96 | 122 | ok |  |
| wl-48 | structural |  | conditional | 315 | -11 | 45 | 1.00 | 225 | ok |  |
| wl-50 | structural |  | conditional | 204 | -11 | 90 | 1.00 | 169 | ok |  |
| wl-3 | non_structural |  | conditional | 390 |  |  |  | 264 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-19 | non_structural |  | conditional | 110 | 20 | 48 | 1.00 | 124 | ok |  |
| wl-20 | non_structural |  | conditional | 115 | 21 | 33 | 1.00 | 125 | ok |  |
| wl-21 | non_structural |  | conditional | 95 | 33 | 33 | 1.00 | 115 | ok |  |
| wl-40 | structural |  | conditional | 390 | -23 | 103 | 1.00 | 264 | ok |  |
| wl-42 | structural |  | conditional | 315 | -1 | 1 | 1.00 | 225 | ok |  |
| wl-2 | non_structural |  | conditional | 200 |  |  |  | 169 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-12 | non_structural |  | conditional | 100 | -5 | 121 | 0.56 | 119 | ok |  |
| wl-13 | non_structural |  | conditional | 135 | -28 | 68 | 1.00 | 135 | ok |  |
| wl-39 | structural |  | conditional | 390 | -23 | 34 | 1.00 | 264 | ok |  |
| wl-41 | structural |  | conditional | 315 | 10 | 21 | 1.00 | 225 | ok |  |
| wl-7 | non_structural | thin_solid_black | derived | 110 | -37 | 37 | 1.00 | 122 | ok |  |
| wl-15 | non_structural |  | derived | 100 | -24 | 59 | 0.09 | 119 | no_ink | /median offset/ 24 mm vs tolerance 119 mm; ink coverage 0.09 |
| wl-16 | non_structural |  | conditional | 100 | 9 | 54 | 1.00 | 117 | ok |  |
| wl-17 | non_structural |  | derived | 100 | 20 | 31 | 1.00 | 119 | ok |  |
| wl-23 | non_structural |  | conditional | 100 | -42 | 168 | 0.60 | 119 | ok |  |
| wl-26 | non_structural |  | undetermined | 60 |  |  |  | 99 | not scored | undetermined placeholder geometry: not scored |
| wl-27 | non_structural |  | undetermined | 100 |  |  |  | 117 | not scored | undetermined placeholder geometry: not scored |
| wl-46 | structural |  | conditional | 335 | 7 | 105 | 1.00 | 235 | ok |  |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 254 to 1737 at y=6250 (1483 mm); weight single; in Living |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y -213 to 814 at x=10052 (1027 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y -213 to 837 at x=10186 (1050 mm); weight single; in (outside every room polygon) |

### Overlay flags and how each was resolved

- **wl-32 (no_ink 0.00, median -135 mm) and wl-33 (off_register, ink 0.29):** the Living and Bedroom 3 south edges are drawn as light grey double glazing lines, which the dark threshold (grey < 110) misses. The walls were moved 46 mm north to the double-line centre (y=9504) in this revision, but the flags persist after the move (median offset still about -135 to -147 mm, most likely the dark-ink scan locking onto the heavier pier ink on the same line rather than a registration error of the glazing; this was not separately verified). Both lines are plainly visible on the enlarged crops and the overlay picture shows the drawn walls on them, so the walls are kept; the flags are accepted, not cleared.
- **wl-15 (no_ink 0.09):** the Store top wall is a light grey double line at y about 4391, 91 mm below the grid line; it was moved there. Residual low coverage is the same light-grey effect. Resolved by crop.
- **Unmodelled run, horizontal x 254-1737 at y=6250 (Living):** this is the printed 1700 dimension line with its tick, not a wall. Resolved as a dimension line.
- **Unmodelled runs, vertical at x=10052 and x=10186, y -213 to 837:** two thin extension lines above the north-east corner, outside the flat (dimension extension lines of the 150 stub). Resolved as dimension lines.
- **Not resolved:** the east edge of the Access Balcony and the depth of the balcony are not printed, so wl-9, wl-34, wl-38 and wl-49 stay placeholders (not scored).


### Door swing check against the source ink

7 doors checked: 1 guessed, 6 ok.

| Opening | Kind | Swing into | Hinge | Swing basis | Ink drawn | Ink mirror side | Ink other hinge | Ink both mirrored | Flag |
|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | Bath/WC 2 | end | read_from_crop | 0.69 | 0.00 | 0.44 | 0.00 | ok |
| D2 | single_swing_door | Service Balcony | start | read_from_crop | 0.50 | 0.00 | 0.14 | 0.00 | ok |
| D3 | single_swing_door | Kitchen/Dining | end | read_from_crop | 0.97 | 0.58 | 0.39 | 0.31 | ok |
| D4 | single_swing_door | Bath/WC 1 | start | read_from_crop | 0.75 | 0.08 | 0.39 | 0.08 | ok |
| D5 | single_swing_door | Main Bedroom | end | read_from_crop | 0.97 | 0.36 | 0.22 | 0.28 | ok |
| D8 | entrance_door | Living | end | read_from_crop | 0.92 | 0.31 | 0.50 | 0.36 | ok |
| D9 | double_swing_door | Exterior | end | read_from_crop |  |  |  |  | guessed |

## Placeholders

- **drawing placeholders:** Red dashed walls wl-9, wl-26, wl-27, wl-34, wl-38, wl-49 are placeholder geometry (the Access Balcony depth and the ledge bay edges); their lengths are undetermined. Orange walls are conditional. Door and window positions are estimated, not printed. The drying rack extent is an estimate.
