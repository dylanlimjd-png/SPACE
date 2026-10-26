# Review notes — floorplan HDB (4).png

> **LOW-CONFIDENCE WARNING (overall_confidence = 0.30).** 0.30: the minimum room confidence, set by Access Balcony.


> Revision 3 (the Bedroom 3 south-west corner wall wl-62 was added on a user report, wl-25 now runs to y=4858 and wl-26 was moved to x=6980; revision 2 was the second run of this plan under the updated playbook rules). Walls and openings changed or new: wl-41 (Changed); wl-45 (Changed); wl-46 (Changed); wl-47 (Changed); wl-48 (Changed); wl-1 (Changed); wl-2 (Changed); wl-3 (Changed); wl-4 (Changed); wl-5 (Changed); wl-38 (Changed); wl-39 (Changed); wl-40 (Changed); wl-6 (Changed); wl-7 (Changed); wl-8 (Changed); wl-9 (Changed); wl-10 (Changed); wl-11 (Changed); wl-12 (Changed); wl-13 (Changed); wl-49 (Changed); wl-50 (Changed); wl-51 (Changed); wl-52 (Changed); wl-53 (Changed); wl-36 (Changed); wl-37 (Changed); wl-35 (Changed); wl-14 (Changed); wl-54 (Changed); wl-55 (Changed); wl-15 (Changed); wl-43 (Changed); wl-16 (Changed); wl-44 (Changed); wl-20 (Changed); wl-42 (Changed); wl-18 (Changed); wl-17 (Changed); wl-19 (Changed); wl-21 (Changed); wl-22 (Changed); wl-23 (Changed); wl-24 (Changed); wl-25 (Changed); wl-26 (Changed); wl-62 (New); wl-27 (Changed); wl-28 (Changed); wl-29 (Changed); wl-30 (Changed); wl-31 (Changed); wl-32 (Changed); wl-33 (Changed); wl-34 (Changed); wl-56 (Changed); wl-57 (Changed); wl-58 (Changed); wl-59 (Changed); wl-60 (Changed); wl-61 (Changed); D1 (Changed); D2 (Changed); D6 (Changed); D8 (Changed)

## Wall table (62 walls: 60 conditional, 1 derived, 1 undetermined; one row per wall, sorted by first room)

| Floor plan | Room(s) | Wall | Type | Inset | Length (mm) | Status | Measurement / arithmetic | Rationale / notes | x1,y1 → x2,y2 | Thick | Openings | Rev |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| floorplan HDB (4).png | Access Balcony, Exterior | wl-12 | non_structural |  | 1500 | conditional | 10100 - 8600 = 1500 (ends: grid line / read from the ink; see the assumption) | West end of the Access Balcony: a thin solid black line that carries the gate D9. **Assumption:** the south end y=10100 is the top of the corner block wl-61, read from the ink; the north end is the apartment south line | -120,8600 → -120,10100 | 140 | D9 | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-13 | non_structural |  |  | undetermined | 16350 - 0 = 16350 (ends: grid line / grid line; see the assumption) | South railing and window line of the Access Balcony. **Drawn extent:** PLACEHOLDER: the east end is not dimensioned; the window line runs about 1000 mm past x=16350, which is not modelled. | 0,10400 → 16350,10400 | 100 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-56 | non_structural | thin_solid_black | 624 | conditional | 4192 - 3568 = 624 (ends: read from the ink / read from the ink; see the assumption) | Solid black block between two window units on the Access Balcony south window line. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the sweep | 3568,10232 → 4192,10232 | 139 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-57 | non_structural | thin_solid_black | 624 | conditional | 7185 - 6561 = 624 (ends: read from the ink / read from the ink; see the assumption) | Solid black block between two window units on the Access Balcony south window line. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the sweep | 6561,10232 → 7185,10232 | 139 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-58 | non_structural | thin_solid_black | 624 | conditional | 9889 - 9265 = 624 (ends: read from the ink / read from the ink; see the assumption) | Solid black block between two window units on the Access Balcony south window line. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the sweep | 9265,10232 → 9889,10232 | 139 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-59 | non_structural | thin_solid_black | 624 | conditional | 13494 - 12870 = 624 (ends: read from the ink / read from the ink; see the assumption) | Solid black block between two window units on the Access Balcony south window line. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the sweep | 12870,10232 → 13494,10232 | 139 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-60 | non_structural | thin_solid_black | 624 | conditional | 16475 - 15851 = 624 (ends: read from the ink / read from the ink; see the assumption) | Solid black block between two window units on the Access Balcony south window line. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the sweep | 15851,10232 → 16475,10232 | 139 |  | Changed |
| floorplan HDB (4).png | Access Balcony, Exterior | wl-61 | non_structural | thin_solid_black | 790 | conditional | 280 - -510 = 790 (ends: read from the ink / read from the ink; see the assumption) | Solid block at the south-west corner of the Access Balcony (the corner of the west end line and the south window line). **Assumption:** extent read from the crop | -510,10175 → 280,10175 | 150 |  | Changed |
| floorplan HDB (4).png | Balcony, Exterior | wl-4 | non_structural |  | 3259 | conditional | 13032 - 9773 = 3259 (ends: read from the ink / read from the ink; see the assumption) | Top wall of the Balcony: a hollow window box (W4) between the piers wl-47 and wl-48. **Assumption:** both ends are pier faces read from the ink | 9773,165 → 13032,165 | 420 | W4 | Changed |
| floorplan HDB (4).png | Balcony, Living/Dining | wl-30 | non_structural |  | 3365 | conditional | 13100 - 9735 = 3365 (ends: read from the ink / read from the ink; see the assumption) | South edge of the Balcony: a single thin line with a 100 DROP leader (the Balcony is entered from Living/Dining across it). **Assumption:** y=2150 is read from the ink; the old model put it at 2600, which is the Bath/WC 1 line, not printed here | 9735,2150 → 13100,2150 | 60 | D10 | Changed |
| floorplan HDB (4).png | Balcony, Bedroom 2 | wl-31 | non_structural |  | 1104 | conditional | 2150 - 1046 = 1104 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between the Balcony and Bedroom 2, from the pier wl-48 to the Balcony south edge. **Assumption:** the south end is the Balcony south edge, read from the ink **Drawn extent:** cross-axis centre-line moved -45 mm to the ink centre (x=13074) (check (m)) | 13074,1046 → 13074,2150 | 100 |  | Changed |
| floorplan HDB (4).png | Balcony, Bedroom 2, Exterior | wl-48 | structural |  | 905 | conditional | 1046 - 141 = 905 (ends: read from the ink / read from the ink; see the assumption) | Pier between the Balcony and Bedroom 2, on the line x=13050. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 13205,141 → 13205,1046 | 347 |  | Changed |
| floorplan HDB (4).png | Bath/WC 1, Exterior | wl-1 | non_structural |  | 1548 | conditional | 3741 - 2193 = 1548 (ends: read from the ink / read from the ink; see the assumption) | Top wall of Bath/WC 1: a window strip between two lines (W1), between the piers wl-41 and wl-45. **Assumption:** both ends are pier faces read from the ink | 2193,75 → 3741,75 | 150 | W1 | Changed |
| floorplan HDB (4).png | Bath/WC 1, Exterior | wl-18 | structural |  | 277 | conditional | 2470 - 2193 = 277 (ends: read from the ink / read from the ink; see the assumption) | Horizontal foot of the L-shaped solid block: the jog where the Bath/WC 1 west wall steps east to the Bath/WC 2 west wall. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 2193,2510 → 2470,2510 | 223 |  | Changed |
| floorplan HDB (4).png | Bath/WC 1, Bath/WC 2 | wl-19 | non_structural |  | 1310 | conditional | 3780 - 2470 = 1310 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bath/WC 1 and Bath/WC 2. **Assumption:** the west end is the face of the jog wl-18; the east end is the centre-line of wl-21/wl-22 | 2470,2560 → 3780,2560 | 100 |  | Changed |
| floorplan HDB (4).png | Bath/WC 1, Exterior | wl-20 | non_structural |  | 1160 | conditional | 1788 - 628 = 1160 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bath/WC 1 between its piers: a hollow box with slat ticks, the louvre window W9 (non-structural). **Assumption:** both ends are weight changes read from the ink | 2060,628 → 2060,1788 | 231 | W9 | Changed |
| floorplan HDB (4).png | Bath/WC 1, Main Bedroom | wl-21 | non_structural |  | 1537 | conditional | 2560 - 1023 = 1537 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bath/WC 1 and the Main Bedroom; it carries the Bath/WC 1 door D1. **Assumption:** the north end is the south end of the pier wl-45 | 3780,1023 → 3780,2560 | 115 | D1 | Changed |
| floorplan HDB (4).png | Bath/WC 1, Exterior | wl-41 | structural |  | 487 | conditional | 628 - 141 = 487 (ends: read from the ink / read from the ink; see the assumption) | North-west pier of Bath/WC 1. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 2066,141 → 2066,628 | 254 |  | Changed |
| floorplan HDB (4).png | Bath/WC 1, Exterior | wl-42 | structural |  | 835 | conditional | 2623 - 1788 = 835 (ends: read from the ink / read from the ink; see the assumption) | South-west pier of Bath/WC 1 (vertical leg of the L-shaped solid block). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 2066,1788 → 2066,2623 | 254 |  | Changed |
| floorplan HDB (4).png | Bath/WC 1, Main Bedroom, Exterior | wl-45 | structural |  | 882 | conditional | 1023 - 141 = 882 (ends: read from the ink / read from the ink; see the assumption) | Pier between Bath/WC 1 and the Main Bedroom, on the line x=3750 (its west face). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 3915,141 → 3915,1023 | 347 |  | Changed |
| floorplan HDB (4).png | Bath/WC 2, Kitchen | wl-16 | non_structural |  | 1248 | conditional | 3718 - 2470 = 1248 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bath/WC 2, a thin double line that carries its door D2. **Assumption:** both ends are pier faces read from the ink | 2470,4850 → 3718,4850 | 110 | D2 | Changed |
| floorplan HDB (4).png | Bath/WC 2, Exterior | wl-17 | non_structural |  | 1948 | conditional | 4571 - 2623 = 1948 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bath/WC 2: a hollow box (outer line at x about 2090, slotted inner line at about 2440) with a dashed slat symbol, the louvre window W10. **Assumption:** the faces x 2090 and 2440 are read from the ink; no printed dimension | 2265,2623 → 2265,4571 | 350 | W10 | Changed |
| floorplan HDB (4).png | Bath/WC 2, Main Bedroom | wl-22 | non_structural |  | 2035 | conditional | 4595 - 2560 = 2035 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bath/WC 2 and the Main Bedroom. **Assumption:** the south end is the north end of the pier wl-44 | 3780,2560 → 3780,4595 | 115 |  | Changed |
| floorplan HDB (4).png | Bath/WC 2, Kitchen | wl-43 | structural |  | 329 | conditional | 4900 - 4571 = 329 (ends: read from the ink / grid line; see the assumption) | Pier at the south-west corner of Bath/WC 2. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 2354,4571 → 2354,4900 | 231 |  | Changed |
| floorplan HDB (4).png | Bath/WC 2, Main Bedroom, Kitchen | wl-44 | structural |  | 324 | conditional | 4919 - 4595 = 324 (ends: read from the ink / read from the ink; see the assumption) | Pier at the south-east corner of Bath/WC 2 (Bath/WC 2 / Main Bedroom / Kitchen). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 3891,4595 → 3891,4919 | 347 |  | Changed |
| floorplan HDB (4).png | Bedroom 2, Exterior | wl-5 | non_structural |  | 2451 | conditional | 15830 - 13379 = 2451 (ends: read from the ink / read from the ink; see the assumption) | Top wall of Bedroom 2: a hollow window box (W5) from the pier wl-48 to the corner block wl-38. **Assumption:** both ends read from the ink | 13379,165 → 15830,165 | 420 | W5 | Changed |
| floorplan HDB (4).png | Bedroom 2, Exterior | wl-6 | structural |  | 4370 | conditional | 4800 - 430 = 4370 (ends: read from the ink / grid line; see the assumption) | Thick east wall of Bedroom 2, solid black. | 16211,430 → 16211,4800 | 208 |  | Changed |
| floorplan HDB (4).png | Bedroom 2, Living/Dining | wl-32 | non_structural |  | 2650 | conditional | 4800 - 2150 = 2650 (ends: read from the ink / grid line; see the assumption) | West wall of Bedroom 2 facing Living/Dining; its door D6 is at the south end. **Assumption:** the north end is the Balcony south edge, read from the ink **Drawn extent:** cross-axis centre-line moved -45 mm to the ink centre (x=13074) (check (m)) | 13074,2150 → 13074,4800 | 115 | D6 | Changed |
| floorplan HDB (4).png | Bedroom 2, Study/Bedroom | wl-33 | non_structural |  | 2988 | conditional | 16107 - 13119 = 2988 (ends: read from the ink / read from the ink; see the assumption) | Thin wall between Bedroom 2 and Study/Bedroom. **Assumption:** the east end is the face of the thick east wall | 13119,4765 → 16107,4765 | 93 |  | Changed |
| floorplan HDB (4).png | Bedroom 2, Exterior | wl-38 | structural |  | 470 | conditional | 16300 - 15830 = 470 (ends: read from the ink / read from the ink; see the assumption) | North-east corner block, solid black, joining the top window box to the thick east wall. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). (the block merges with the east wall in the sweep; extent read from the crop) **Assumption:** extent read from the crop | 15830,310 → 16300,310 | 240 |  | Changed |
| floorplan HDB (4).png | Bedroom 3, Exterior | wl-3 | non_structural |  | 2358 | conditional | 9450 - 7092 = 2358 (ends: read from the ink / read from the ink; see the assumption) | Top wall of Bedroom 3: a hollow window box (W3) between the piers wl-46 and wl-47. **Assumption:** both ends are pier faces read from the ink | 7092,165 → 9450,165 | 420 | W3 | Changed |
| floorplan HDB (4).png | Bedroom 3, Living/Dining | wl-27 | non_structural |  | 1785 | conditional | 9685 - 7900 = 1785 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bedroom 3 from the east jamb of its door D5 to the east wall. **Assumption:** the west end is the east jamb of D5 read from the ink | 7900,4858 → 9685,4858 | 100 |  | Changed |
| floorplan HDB (4).png | Bedroom 3, Balcony | wl-28 | non_structural |  | 1104 | conditional | 2150 - 1046 = 1104 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bedroom 3 and the Balcony, from the pier wl-47 to the Balcony south edge. **Assumption:** the south end is the Balcony south edge, read from the ink | 9685,1046 → 9685,2150 | 110 |  | Changed |
| floorplan HDB (4).png | Bedroom 3, Living/Dining | wl-29 | non_structural |  | 2708 | conditional | 4858 - 2150 = 2708 (ends: read from the ink / read from the ink; see the assumption) | East wall of Bedroom 3 facing Living/Dining. **Assumption:** the north end is the Balcony south edge, read from the ink | 9685,2150 → 9685,4858 | 110 |  | Changed |
| floorplan HDB (4).png | Bedroom 3, Balcony, Exterior | wl-47 | structural |  | 905 | conditional | 1046 - 141 = 905 (ends: read from the ink / read from the ink; see the assumption) | Pier between Bedroom 3 and the Balcony, on the line x=9750. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 9611,141 → 9611,1046 | 324 |  | Changed |
| floorplan HDB (4).png | Bedroom 3, Living/Dining | wl-62 | non_structural |  | 310 | conditional | 7090 - 6780 = 310 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bedroom 3 from its south-west corner (where wl-25 turns east) to the west jamb of its door D5; found by the user, missed by the first run because it is only 310 mm long and the wall pass stopped wl-25 at y=4800. **Assumption:** the west end is the centre-line of wl-25; the east end is the west jamb of D5, both read from the ink (ink y about 4831-4904, centre about 4860) | 6780,4858 → 7090,4858 | 100 |  | New |
| floorplan HDB (4).png | Exterior | wl-39 | non_structural |  | 650 | conditional | 16950 - 16300 = 650 (ends: read from the ink / read from the ink; see the assumption) | Hook-shaped solid bar beyond the north-east corner, a bracket outside the flat boundary (a ledge or planter is the hypothesis, not confirmed). Solid black, so recorded as a structural piece, conditional. **Assumption:** extent read from the crop; use unconfirmed | 16300,115 → 16950,115 | 150 |  | Changed |
| floorplan HDB (4).png | Exterior | wl-40 | structural |  | 315 | conditional | 430 - 115 = 315 (ends: read from the ink / read from the ink; see the assumption) | Vertical leg of the hook-shaped solid bar beyond the north-east corner (see wl-39). **Assumption:** extent read from the crop; use unconfirmed | 16850,115 → 16850,430 | 200 |  | Changed |
| floorplan HDB (4).png | Kitchen, Access Balcony | wl-11 | non_structural |  | 3605 | conditional | 3718 - 113 = 3605 (ends: read from the ink / read from the ink; see the assumption) | South wall of the Kitchen with the counter run along it. **Assumption:** both ends are pier faces read from the ink | 113,8565 → 3718,8565 | 100 |  | Changed |
| floorplan HDB (4).png | Kitchen, Exterior | wl-14 | non_structural | thin_solid_black | 2810 | conditional | 7700 - 4890 = 2810 (ends: read from the ink / read from the ink; see the assumption) | West wall of the Kitchen: a thin solid black line (counter run along it). **Assumption:** both ends are weight changes read from the ink | -46,4890 → -46,7700 | 100 |  | Changed |
| floorplan HDB (4).png | Kitchen, Exterior | wl-15 | non_structural |  | 1824 | conditional | 2239 - 415 = 1824 (ends: read from the ink / read from the ink; see the assumption) | North wall of the Kitchen: a framed window box with three arcs (the casement window D3) that opens north onto the blank open yard. **Assumption:** the east end is the face of the pier wl-43; the printed 4900 is the south face | 415,4745 → 2239,4745 | 300 | D3 | Changed |
| floorplan HDB (4).png | Kitchen, Exterior | wl-54 | structural |  | 900 | conditional | 8600 - 7700 = 900 (ends: read from the ink / grid line; see the assumption) | Pier at the south-west corner of the Kitchen. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the crop | -46,7700 → -46,8600 | 311 |  | Changed |
| floorplan HDB (4).png | Kitchen, Exterior | wl-55 | structural |  | 905 | conditional | 415 - -490 = 905 (ends: read from the ink / read from the ink; see the assumption) | Solid block at the north-west corner of the Kitchen, on the line y=4900 (its south face). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). **Assumption:** extent read from the crop | -490,4745 → 415,4745 | 290 |  | Changed |
| floorplan HDB (4).png | Living/Dining, Access Balcony | wl-9 | non_structural | thin_hollow | 6309 | conditional | 13182 - 6873 = 6309 (ends: read from the ink / read from the ink; see the assumption) | South edge of Living/Dining: a thin double line with the main door D8, the glazing W6 and W7 and the piers wl-50, wl-51, wl-52 and the post wl-53 along it. **Assumption:** both ends are the centre-lines of the end piers wl-50 and wl-53 | 6873,8600 → 13182,8600 | 100 | D8, W6, W7 | Changed |
| floorplan HDB (4).png | Living/Dining, Access Balcony | wl-51 | structural |  | 897 | conditional | 8600 - 7703 = 897 (ends: read from the ink / grid line; see the assumption) | Pier on the Living south edge on the line x=9750. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 9577,7703 → 9577,8600 | 346 |  | Changed |
| floorplan HDB (4).png | Living/Dining, Access Balcony | wl-53 | structural |  | 201 | conditional | 8600 - 8399 = 201 (ends: read from the ink / grid line; see the assumption) | Small solid post on the Living south edge east of the main door D8: the east jamb post of the door. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). Found by the sweep, not by the long-run scan. **Assumption:** both ends read from the ink | 8167,8399 → 8167,8600 | 208 |  | Changed |
| floorplan HDB (4).png | Main Bedroom, Exterior | wl-2 | non_structural |  | 2658 | conditional | 6746 - 4088 = 2658 (ends: read from the ink / read from the ink; see the assumption) | Top wall of the Main Bedroom: a hollow window box (W2) between the piers wl-45 and wl-46. **Assumption:** both ends are pier faces read from the ink | 4088,165 → 6746,165 | 420 | W2 | Changed |
| floorplan HDB (4).png | Main Bedroom, Kitchen | wl-23 | non_structural |  | 1246 | conditional | 6165 - 4919 = 1246 (ends: read from the ink / read from the ink; see the assumption) | West wall of the Main Bedroom lower box, facing the Kitchen (the 1300 dimension runs along it). **Assumption:** y=6165 is read from the ink; the printed 1300 puts it at 6200 | 3993,4919 → 3993,6165 | 100 |  | Changed |
| floorplan HDB (4).png | Main Bedroom, Living/Dining | wl-24 | non_structural |  | 2147 | conditional | 6140 - 3993 = 2147 (ends: read from the ink / read from the ink; see the assumption) | Bottom wall of the Main Bedroom lower box; it ends at the west jamb of the door D4 (the door gap is an open boundary). **Assumption:** the east end x=6140 is the west jamb of D4 read from the ink | 3993,6165 → 6140,6165 | 100 |  | Changed |
| floorplan HDB (4).png | Main Bedroom, Bedroom 3 | wl-25 | non_structural |  | 3812 | conditional | 4858 - 1046 = 3812 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between the Main Bedroom and Bedroom 3, from the pier wl-46 down to the south-west corner of Bedroom 3 (y=4858), where it turns east into wl-62. **Assumption:** the north end is the south end of the pier wl-46; the south end is the corner with wl-62, read from the ink | 6780,1046 → 6780,4858 | 100 |  | Changed |
| floorplan HDB (4).png | Main Bedroom, Living/Dining | wl-26 | non_structural |  | 412 | conditional | 5270 - 4858 = 412 (ends: read from the ink / read from the ink; see the assumption) | Short stub below the Bedroom 3 south wall (wl-62), a thin double line ending at the door D4 swing; centre-line x=6980 read from the ink (the first reading, x=6925, was about 55 mm too far west). **Assumption:** extent and centre-line read from the crop (ink x about 6930-7030) | 6980,4858 → 6980,5270 | 100 |  | Changed |
| floorplan HDB (4).png | Main Bedroom, Bedroom 3, Exterior | wl-46 | structural |  | 905 | conditional | 1046 - 141 = 905 (ends: read from the ink / read from the ink; see the assumption) | Pier between the Main Bedroom and Bedroom 3, on the line x=6750 (its west face). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 6919,141 → 6919,1046 | 347 |  | Changed |
| floorplan HDB (4).png | Store, Access Balcony | wl-10 | non_structural |  | 2658 | conditional | 6700 - 4042 = 2658 (ends: read from the ink / read from the ink; see the assumption) | South wall of the Store, a thin double line. **Assumption:** both ends are pier faces read from the ink | 4042,8553 → 6700,8553 | 116 |  | Changed |
| floorplan HDB (4).png | Store, Living/Dining | wl-35 | non_structural |  | 2658 | conditional | 6700 - 4042 = 2658 (ends: read from the ink / read from the ink; see the assumption) | North wall of the Store, a thin line with the door D7 (dashed arc). **Assumption:** y=7450 is read from the ink; the printed 1200 puts it at 7400; both ends are pier or box faces | 4042,7450 → 6700,7450 | 100 | D7 | Changed |
| floorplan HDB (4).png | Store, Kitchen | wl-36 | non_structural |  | 253 | conditional | 7703 - 7450 = 253 (ends: read from the ink / read from the ink; see the assumption) | West wall of the Store above the pier: a white box (hollow piece). **Assumption:** both ends are weight changes read from the ink | 3880,7450 → 3880,7703 | 324 |  | Changed |
| floorplan HDB (4).png | Store, Living/Dining | wl-37 | non_structural |  | 253 | conditional | 7703 - 7450 = 253 (ends: read from the ink / read from the ink; see the assumption) | East wall of the Store above the pier: a white box (hollow piece). **Assumption:** both ends are weight changes read from the ink | 6873,7450 → 6873,7703 | 347 |  | Changed |
| floorplan HDB (4).png | Store, Kitchen, Exterior | wl-49 | structural |  | 897 | conditional | 8600 - 7703 = 897 (ends: read from the ink / grid line; see the assumption) | Pier at the south-west corner of the Store (Kitchen / Store / Access Balcony edge). Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 3880,7703 → 3880,8600 | 324 |  | Changed |
| floorplan HDB (4).png | Store, Living/Dining, Access Balcony | wl-50 | structural |  | 897 | conditional | 8600 - 7703 = 897 (ends: read from the ink / grid line; see the assumption) | Pier at the south-east corner of the Store on the line x=6750. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 6873,7703 → 6873,8600 | 347 |  | Changed |
| floorplan HDB (4).png | Study/Bedroom, Exterior | wl-7 | structural |  | 3800 | derived | 8600 - 4800 = 3800 (grid lines) | Thick east wall of Study/Bedroom, solid black. | 16211,4800 → 16211,8600 | 208 |  | Changed |
| floorplan HDB (4).png | Study/Bedroom, Access Balcony | wl-8 | non_structural |  | 2752 | conditional | 16107 - 13355 = 2752 (ends: read from the ink / read from the ink; see the assumption) | South wall of Study/Bedroom, a thin double line with a sliding window (W8), from the pier wl-52 to the east wall. **Assumption:** both ends are pier and wall faces read from the ink | 13355,8577 → 16107,8577 | 100 | W8 | Changed |
| floorplan HDB (4).png | Study/Bedroom, Living/Dining | wl-34 | non_structural | thin_solid_black | 2926 | conditional | 7726 - 4800 = 2926 (ends: grid line / read from the ink; see the assumption) | West wall of Study/Bedroom facing Living/Dining: a double line that narrows to a single line; no door arc found on it. **Assumption:** the south end is the north end of the pier wl-52 | 13119,4800 → 13119,7726 | 50 |  | Changed |
| floorplan HDB (4).png | Study/Bedroom, Living/Dining, Access Balcony | wl-52 | structural |  | 874 | conditional | 8600 - 7726 = 874 (ends: read from the ink / grid line; see the assumption) | Pier at the south-west corner of Study/Bedroom on the line x=13050. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth). | 13182,7726 → 13182,8600 | 346 |  | Changed |

## Wall types

- **Two types:** 20 structural (thick solid black ink, including small solid posts), 42 non-structural (every other wall); 9 of the non-structural walls are inset walls.
- **structural walls:** 20 structural pieces (thick, filled solid black): wl-6, wl-7, wl-18, wl-38, wl-40, wl-41, wl-42, wl-43, wl-44, wl-45, wl-46, wl-47, wl-48, wl-49, wl-50, wl-51, wl-52, wl-53, wl-54, wl-55. Each is marked S in the drawing.
- **non-structural walls:** everything else: the thin black lines, the hollow window boxes (top wall, Kitchen north wall, Bath/WC boxes), the thin double lines and the Balcony edge line.
- **old model changes:** The old run had no thick or solid walls at all: its thin grid-line walls (100-250 mm) hid the piers, the 208 mm solid east wall and the corner blocks, and it put the Balcony south edge at y=2600 (the ink is at about 2150).
- **small thick-looking elements:** the post wl-53 (208 x 255 mm, solid) at the east jamb of D8 and the Bath/WC 2 pier wl-43 (231 x 348 mm) are below or near the pier threshold but solid, so structural (rule 7). The bracket wl-39/wl-40 at the north-east corner is solid but lies outside the flat boundary: by width wl-40 (200 mm) is structural and wl-39 (150 mm) is non-structural, a single hook split by the census; both are conditional and its use is unconfirmed. It is not tested for inset.
- **wl-9:** thin_hollow: bounds Living/Dining and steps in from the structural wl-50 (347 mm): width 100 mm is 29% of it
- **wl-14:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 1.00; joins the structural wl-54, wl-55
- **wl-34:** thin_solid_black: bounds Living/Dining and steps in from the structural wl-52 (346 mm): width 23 mm is 7% of it
- **wl-56:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 0.82
- **wl-57:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 0.82
- **wl-58:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 0.82
- **wl-59:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 0.82
- **wl-60:** thin_solid_black: flat boundary wall printed thin solid black: width 139 mm (below 158 mm, 85% of the 186 mm threshold), fill 0.82
- **wl-61:** thin_solid_black: flat boundary wall printed thin solid black: width 150 mm (below 158 mm, 85% of the 186 mm threshold), fill 1.00

## Door clearance (at least 50 mm)

- **D1 (wl-21):** shifted: clear gap 50 mm to host start at the start and 612 mm to wl-19 at the end (was 32 / 630 mm; offset 32 -> 50, width 825 -> 825 mm)
- **D2 (wl-16):** shifted: clear gap 347 mm to host start at the start and 50 mm to wl-44 at the end (was 400 / -2 mm; offset 400 -> 347, width 850 -> 850 mm)
- **D6 (wl-32):** shifted: clear gap 1678 mm to wl-30 at the start and 50 mm to wl-33 at the end (was 1700 / 28 mm; offset 1730 -> 1708, width 810 -> 810 mm)
- **D7 (wl-35):** clear: clear gap 948 mm to wl-36 at the start and 930 mm to wl-37 at the end
- **D8 (wl-9):** narrowed: clear gap 50 mm to wl-50 at the start and 51 mm to wl-53 at the end (was 14 / 3 mm; offset 187 -> 224, width 1000 -> 915 mm)
- **D9 (wl-12):** clear: clear gap 80 mm to host start at the start and 510 mm to host end at the end

## Length convention

- **length convention:** Along-axis length is grid line to grid line wherever both ends lie on a printed grid line; where an end is a pier face or a jamb read from the ink it is conditional. Cross-axis, a wall is drawn at the measured ink centre (check (m)); every move from the printed grid line is listed. Room polygons stay on the printed grid lines. No area convention is printed.

## Dimension chains and which close

- **top (x):** 1950+1800+3000+3000+3300+3300; sum 16350; overall 16350; CLOSES (residual 0). Datum x=0 at the left tick of the top chain (level with the kitchen left wall). Closes to the printed overall 16350.
- **right (y):** 4800+3800; sum 8600; overall 8600; CLOSES (residual 0). Datum y=0 at the top tick of the right chain. Closes to the printed overall 8600. Gives the Bedroom 2 / Study partition at y=4800.
- **left (y):** 2600+2300+3700+1800; sum 10400; overall None; partial or not printed. Datum y=0 at the top tick of the left chain. 2600+2300+3700 = 8600 closes to the printed right overall 8600; the last 1800 reaches the Access Balcony south edge y=10400, for which no overall is printed.
- **left (y), apartment part:** 2600+2300+3700; sum 8600; overall 8600; CLOSES (residual 0). Closes to the printed overall 8600 of the right chain (independent route).
- **bottom (x):** not printed; sum None; overall None; partial or not printed. No bottom chain. The east end of the Access Balcony is not dimensioned.
- **interior 1300 (y):** 1300; sum None; overall None; partial or not printed. Partial: Main Bedroom lower box depth, from the Bath/WC 2 / Kitchen line (y=4900) to the Main Bedroom bottom wall.
- **interior 1200 (y):** 1200; sum None; overall None; partial or not printed. Partial: Store depth, from the Store top wall to the apartment south line (y=8600).

## Derived grid lines

| Axis | Position (mm) | Status | Arithmetic | Confirmed by | Note |
|---|---|---|---|---|---|
| x | 0 | derived | datum = left tick of the top chain | chain start + overall 16350 tick | Datum x=0 is the left tick of the top chain (level with the Kitchen left wall). |
| x | 1950 | derived | 1950 | cumulative + 16350 - (1800+3000+3000+3300+3300) | Left wall of Bath/WC 1 (tick). |
| x | 3750 | derived | 1950 + 1800 = 3750 | cumulative + 16350 - (3000+3000+3300+3300) | Bath/WC 1 / Main Bedroom wall (tick). |
| x | 6750 | derived | 3750 + 3000 = 6750 | cumulative + 16350 - (3000+3300+3300) | Main Bedroom / Bedroom 3 wall (tick). |
| x | 9750 | derived | 6750 + 3000 = 9750 | cumulative + 16350 - (3300+3300) | Bedroom 3 / Living and Balcony west wall (tick). |
| x | 13050 | derived | 9750 + 3300 = 13050 | cumulative + 16350 - 3300 | Balcony / Bedroom 2 and Study wall (tick). |
| x | 16350 | derived | 13050 + 3300 = 16350 | chain closure to printed overall 16350 | Right wall of Bedroom 2 and Study = printed overall width. |
| x | 0 | conditional | assumed = x0 | single route (alignment) | Kitchen left wall and Access Balcony west end assumed on x=0 (the top-chain datum lies on the extension line of the Kitchen left wall). |
| x | 16350 | conditional | assumed = x6 | single route (alignment) | East end of the Access Balcony is not dimensioned; assumed to align with x=16350. |
| x | 3750 | conditional | assumed = x2 | single route (alignment) | Store west wall assumed on x=3750 (aligned with the column below the Bath/WC 1 / Main Bedroom wall). |
| x | 6750 | conditional | assumed = x3 | single route (alignment) | Store east wall assumed on x=6750 (aligned with the column below the Main Bedroom / Bedroom 3 wall). |
| y | 0 | derived | datum = top tick of the left and right chains | left chain + right chain | Datum y=0 is the top edge of the apartment (top tick). |
| y | 2600 | derived | 2600 | cumulative + 8600 - (2300+3700) | Bath/WC 1 south wall (tick). |
| y | 4900 | derived | 2600 + 2300 = 4900 | cumulative + 8600 - 3700 | Bath/WC 2 south wall and Kitchen top wall (tick). |
| y | 4800 | derived | 4800 | cumulative + 8600 - 3800 | Bedroom 2 / Study partition (tick). |
| y | 8600 | derived | 4900 + 3700 = 8600 | left chain + right chain (two chains close) | South line of the apartment = printed overall 8600; the right chain also sums to 8600. |
| y | 10400 | conditional | 8600 + 1800 = 10400 | single route | Access Balcony south edge from the 1800 tick; no overall is printed for this line. |
| y | 6200 | conditional | 4900 + 1300 = 6200 | single route | Main Bedroom lower box bottom wall: 1300 is printed from the Kitchen top line; single route. |
| y | 7400 | conditional | 8600 - 1200 = 7400 | single route | Store top wall: 1200 is printed up from the apartment south line; single route. |

## Scale fit

- **scale_mm_per_px:** 23.15 mm per pixel (x 23.11, y 23.20), spread 0.46% over 12 segments, confidence 0.91, from the tick fit; residual of the top tick span against the printed 16350: 0.7 mm.
- **Fit summary:** scale_mm_per_px_x = 23.11; scale_mm_per_px_y = 23.2; scale_mm_per_px = 23.15; spread_pct = 0.462; n_segments = 12; x0_px = 73.11; y0_px = 88.92; confidence = 0.9076; tick_span_residual_mm_x = 0.6816

## Automated checks

| Check | Result |
|---|---|
| (a) endpoints on grid lines or on another wall | Free ends and ink-read ends are listed under (c) and in each wall assumption; they are conditional, not derived. |
| (b) duplicate / overlapping walls | PASS: no overlapping pairs |
| (c) dangling endpoints | FREE ENDS (21): door jambs, nibs, the open yard side of the Kitchen block, the open east side of the Access Balcony and the bracket pieces; none is closed by an invented wall; connection tolerance is half of each wall thickness plus 30 mm: wl-40(16850,430), wl-13(0,10400), wl-13(16350,10400), wl-51(9577,7703), wl-53(8167,8399), wl-55(-490,4745), wl-24(6140,6165), wl-26(6980,5270), wl-27(7900,4858), wl-56(3568,10232), wl-56(4192,10232), wl-57(6561,10232), wl-57(7185,10232), wl-58(9265,10232), wl-58(9889,10232), wl-59(12870,10232), wl-59(13494,10232), wl-60(15851,10232), wl-60(16475,10232), wl-61(-510,10175), wl-61(280,10175) |
| (d) openings fit their walls | PASS: all 18 wall-hosted openings fit |
| (f) door plausibility | PASS: no door joins two bedrooms. Not identified: the Study/Bedroom own door (no arc or gap on its west wall). |
| (i1) room edges covered by a wall or an open boundary | PASS: every room polygon edge lies within 330 mm of a wall or on a recorded open boundary |
| (i2) unmodelled ink runs | run by the reverse scan of overlay_check; its result and the resolution of each run are in the Drawing verification section. |
| (j) wall existence (ink coverage) | PASS: every scored wall has ink within tolerance on at least half of its samples. Coverage: wl-1 1.00, wl-3 1.00, wl-5 1.00, wl-6 1.00, wl-7 1.00, wl-9 1.00, wl-10 1.00, wl-11 1.00, wl-12 1.00, wl-13 1.00, wl-36 1.00, wl-37 1.00, wl-35 1.00, wl-14 1.00, wl-16 1.00, wl-19 1.00, wl-21 1.00, wl-22 1.00, wl-23 1.00, wl-24 1.00, wl-25 1.00, wl-26 1.00, wl-62 1.00, wl-27 1.00, wl-28 1.00, wl-29 1.00, wl-31 1.00, wl-32 1.00, wl-33 1.00, wl-34 1.00 |
| (k) short ends | Free ends are listed under (c). The old walls wl-18 (jog), wl-26 and wl-24 were re-cut: wl-24 now ends at the west jamb of D4 and wl-27 at the east jamb of D5. |
| (m) thick walls versus grid lines | cross-axis centre-lines moved to the ink centre: wl-31 -45 mm; wl-32 -45 mm. Pier positions are the block centres from the sweep and sit on a face of their grid line (grid_on_face): wl-45 (x=3750 is its west face), wl-46, wl-47, wl-48 and the south piers. Room polygons were not moved. |
| (n) balcony access | PASS: the Balcony is entered across its south edge by the glazed sliding door D10 (balcony access rule, 100 DROP printed); the Access Balcony is the common walkway entered through D8 and D9. |
| (o) kitchen access | marked_open_boundary: the Kitchen opens to Living/Dining across O1 (x about 3993, y 6200-7400); no door or wall is drawn there and none was invented. |
| (p) bath louvre | PASS: Bath/WC 1 louvre W9 (slat ticks seen); Bath/WC 2 louvre W10 (dashes seen, no slat ticks, so confidence 0.45). No louvre_not_seen. |
| (q) main door | PASS: exactly one entrance_door (D8) joining Living/Dining and the Access Balcony; leaves 915 mm (large, in, hinge west) and 458 mm each (gate pair, out, hinge both); threshold_drop_mm = 100 (printed). |
| (r) floor drops (drop_marked) | two DROP leaders seen, both recorded: 100 DROP at the main door D8 and 100 DROP on the Balcony south edge (D10), both printed values. No other drop is printed. |
| (s) drying rack | no_rack_seen: this plan has no service yard or service balcony, so there is no strip to search; nothing outside the flat boundary resembles a rack (the bracket at the north-east corner, wl-39/wl-40, is solid and outside the boundary, so it is not a rack). |
| (t) solid-block sweep (solid_block_uncovered) | PASS after resolution: 21 solid blocks of at least 100 mm were found over the whole plan (4 x 4 px erosion, 2 px growth); 12 of them lay on no wall of the first-run table (the piers, corner blocks, door post and window-line blocks). Each was opened on a crop and added as a wall of the rebuilt table (wl-38 to wl-61); classes come from the census (width against the 186 mm threshold). Two of the 21 blocks (blocks 1 and 9) are the merged thick east wall and the Kitchen west wall run, covered by wl-6/wl-7 and wl-14/wl-54. The text-glyph blobs found on plan (3) do not occur here: this plan has no solid text. |
| (u) door clearance (door_clearance) | PASS: 6 wall-hosted door-like openings checked, 4 adjusted, 0 clearance_unmet; smallest clear gap after the fix 50 mm (rule: at least 50 mm). The doors D4 and D5 sit on open boundaries and have no host wall: their jambs are the gap ends, placed from the ink. |
| (v) inset walls (inset_wall) | 9 inset walls: wl-9, wl-14, wl-34, wl-56, wl-57, wl-58, wl-59, wl-60, wl-61 (thin_solid_black: wl-14, wl-34, wl-56, wl-57, wl-58, wl-59, wl-60, wl-61; thin_hollow: wl-9). They stay non_structural. Living and boundary walls tested and not inset: wl-12 (width 162 mm, fill 1.00); wl-35 (width 93 mm, fill 0.50); wl-24 (width 93 mm, fill 0.50); wl-26 (width 92 mm, fill 0.50); wl-62 (width 116 mm, fill 0.40); wl-27 (width 93 mm, fill 0.50); wl-29 (width 116 mm, fill 0.40); wl-30 (width 60 mm, fill n/a); wl-32 (width 116 mm, fill 0.40). |

## Topology: touching rooms and shared walls

| Room pair | Shared wall pieces |
|---|---|
| Kitchen / Living/Dining | open boundary O1 (no wall), about 1235 mm |
| Main Bedroom / Living/Dining | wl-24 (about 2150 mm) and the door D4 on an open boundary (x 6140-7040 at y 6165) |
| Bedroom 3 / Living/Dining | wl-27 (about 1785 mm), wl-29 and the door D5 on an open boundary (x 7090-7900 at y 4858) |

## Changes against the first run (user corrections)

- **wl-41 (Changed):** structural North-west pier of Bath/WC 1. Solid black block read by the solid-block sweep (4 x 4 px erosion, 2 px growth).
- **wl-45 (Changed):** structural Pier between Bath/WC 1 and the Main Bedroom, on the line x=3750 (its west face). Solid black block read by the
- **wl-46 (Changed):** structural Pier between the Main Bedroom and Bedroom 3, on the line x=6750 (its west face). Solid black block read by the
- **wl-47 (Changed):** structural Pier between Bedroom 3 and the Balcony, on the line x=9750. Solid black block read by the solid-block sweep (4
- **wl-48 (Changed):** structural Pier between the Balcony and Bedroom 2, on the line x=13050. Solid black block read by the solid-block sweep (
- **wl-1 (Changed):** non_structural Top wall of Bath/WC 1: a window strip between two lines (W1), between the piers wl-41 and wl-45.
- **wl-2 (Changed):** non_structural Top wall of the Main Bedroom: a hollow window box (W2) between the piers wl-45 and wl-46.
- **wl-3 (Changed):** non_structural Top wall of Bedroom 3: a hollow window box (W3) between the piers wl-46 and wl-47.
- **wl-4 (Changed):** non_structural Top wall of the Balcony: a hollow window box (W4) between the piers wl-47 and wl-48.
- **wl-5 (Changed):** non_structural Top wall of Bedroom 2: a hollow window box (W5) from the pier wl-48 to the corner block wl-38.
- **wl-38 (Changed):** structural North-east corner block, solid black, joining the top window box to the thick east wall. Solid black block rea
- **wl-39 (Changed):** non_structural Hook-shaped solid bar beyond the north-east corner, a bracket outside the flat boundary (a ledge or planter is
- **wl-40 (Changed):** structural Vertical leg of the hook-shaped solid bar beyond the north-east corner (see wl-39).
- **wl-6 (Changed):** structural Thick east wall of Bedroom 2, solid black.
- **wl-7 (Changed):** structural Thick east wall of Study/Bedroom, solid black.
- **wl-8 (Changed):** non_structural South wall of Study/Bedroom, a thin double line with a sliding window (W8), from the pier wl-52 to the east wa
- **wl-9 (Changed):** non_structural South edge of Living/Dining: a thin double line with the main door D8, the glazing W6 and W7 and the piers wl-
- **wl-10 (Changed):** non_structural South wall of the Store, a thin double line.
- **wl-11 (Changed):** non_structural South wall of the Kitchen with the counter run along it.
- **wl-12 (Changed):** non_structural West end of the Access Balcony: a thin solid black line that carries the gate D9.
- **wl-13 (Changed):** non_structural South railing and window line of the Access Balcony.
- **wl-49 (Changed):** structural Pier at the south-west corner of the Store (Kitchen / Store / Access Balcony edge). Solid black block read by 
- **wl-50 (Changed):** structural Pier at the south-east corner of the Store on the line x=6750. Solid black block read by the solid-block sweep
- **wl-51 (Changed):** structural Pier on the Living south edge on the line x=9750. Solid black block read by the solid-block sweep (4 x 4 px er
- **wl-52 (Changed):** structural Pier at the south-west corner of Study/Bedroom on the line x=13050. Solid black block read by the solid-block 
- **wl-53 (Changed):** structural Small solid post on the Living south edge east of the main door D8: the east jamb post of the door. Solid blac
- **wl-36 (Changed):** non_structural West wall of the Store above the pier: a white box (hollow piece).
- **wl-37 (Changed):** non_structural East wall of the Store above the pier: a white box (hollow piece).
- **wl-35 (Changed):** non_structural North wall of the Store, a thin line with the door D7 (dashed arc).
- **wl-14 (Changed):** non_structural West wall of the Kitchen: a thin solid black line (counter run along it).
- **wl-54 (Changed):** structural Pier at the south-west corner of the Kitchen. Solid black block read by the solid-block sweep (4 x 4 px erosio
- **wl-55 (Changed):** structural Solid block at the north-west corner of the Kitchen, on the line y=4900 (its south face). Solid black block re
- **wl-15 (Changed):** non_structural North wall of the Kitchen: a framed window box with three arcs (the casement window D3) that opens north onto 
- **wl-43 (Changed):** structural Pier at the south-west corner of Bath/WC 2. Solid black block read by the solid-block sweep (4 x 4 px erosion,
- **wl-16 (Changed):** non_structural South wall of Bath/WC 2, a thin double line that carries its door D2.
- **wl-44 (Changed):** structural Pier at the south-east corner of Bath/WC 2 (Bath/WC 2 / Main Bedroom / Kitchen). Solid black block read by the
- **wl-20 (Changed):** non_structural West wall of Bath/WC 1 between its piers: a hollow box with slat ticks, the louvre window W9 (non-structural).
- **wl-42 (Changed):** structural South-west pier of Bath/WC 1 (vertical leg of the L-shaped solid block). Solid black block read by the solid-b
- **wl-18 (Changed):** structural Horizontal foot of the L-shaped solid block: the jog where the Bath/WC 1 west wall steps east to the Bath/WC 2
- **wl-17 (Changed):** non_structural West wall of Bath/WC 2: a hollow box (outer line at x about 2090, slotted inner line at about 2440) with a das
- **wl-19 (Changed):** non_structural Thin double-line wall between Bath/WC 1 and Bath/WC 2.
- **wl-21 (Changed):** non_structural Thin double-line wall between Bath/WC 1 and the Main Bedroom; it carries the Bath/WC 1 door D1.
- **wl-22 (Changed):** non_structural Thin double-line wall between Bath/WC 2 and the Main Bedroom.
- **wl-23 (Changed):** non_structural West wall of the Main Bedroom lower box, facing the Kitchen (the 1300 dimension runs along it).
- **wl-24 (Changed):** non_structural Bottom wall of the Main Bedroom lower box; it ends at the west jamb of the door D4 (the door gap is an open bo
- **wl-25 (Changed):** non_structural Thin double-line wall between the Main Bedroom and Bedroom 3, from the pier wl-46 down to the south-west corne
- **wl-26 (Changed):** non_structural Short stub below the Bedroom 3 south wall (wl-62), a thin double line ending at the door D4 swing; centre-line
- **wl-62 (New):** non_structural South wall of Bedroom 3 from its south-west corner (where wl-25 turns east) to the west jamb of its door D5; f
- **wl-27 (Changed):** non_structural South wall of Bedroom 3 from the east jamb of its door D5 to the east wall.
- **wl-28 (Changed):** non_structural Thin double-line wall between Bedroom 3 and the Balcony, from the pier wl-47 to the Balcony south edge.
- **wl-29 (Changed):** non_structural East wall of Bedroom 3 facing Living/Dining.
- **wl-30 (Changed):** non_structural South edge of the Balcony: a single thin line with a 100 DROP leader (the Balcony is entered from Living/Dinin
- **wl-31 (Changed):** non_structural Thin double-line wall between the Balcony and Bedroom 2, from the pier wl-48 to the Balcony south edge.
- **wl-32 (Changed):** non_structural West wall of Bedroom 2 facing Living/Dining; its door D6 is at the south end.
- **wl-33 (Changed):** non_structural Thin wall between Bedroom 2 and Study/Bedroom.
- **wl-34 (Changed):** non_structural West wall of Study/Bedroom facing Living/Dining: a double line that narrows to a single line; no door arc foun
- **wl-56 (Changed):** non_structural Solid black block between two window units on the Access Balcony south window line. Solid black block read by 
- **wl-57 (Changed):** non_structural Solid black block between two window units on the Access Balcony south window line. Solid black block read by 
- **wl-58 (Changed):** non_structural Solid black block between two window units on the Access Balcony south window line. Solid black block read by 
- **wl-59 (Changed):** non_structural Solid black block between two window units on the Access Balcony south window line. Solid black block read by 
- **wl-60 (Changed):** non_structural Solid black block between two window units on the Access Balcony south window line. Solid black block read by 
- **wl-61 (Changed):** non_structural Solid block at the south-west corner of the Access Balcony (the corner of the west end line and the south wind
- **D1 (Changed):** single_swing_door Bath/WC 1 door onto the Main Bedroom (the old run was unsure of the wall); the leaf stands west at the north j
- **D2 (Changed):** single_swing_door Bath/WC 2 door onto the Kitchen; the leaf stands north at the east jamb and the arc sweeps over Bath/WC 2.
- **D6 (Changed):** single_swing_door Bedroom 2 door at the south end of its west wall (dashed arc); the arc sweeps into Bedroom 2.
- **D8 (Changed):** entrance_door Main door with gate. The large leaf swings in (Living/Dining), the gate pair swings out (Access Balcony); floo

## Open boundaries

- **Kitchen / Living-Dining (O1):** No door and no wall between y 6200 and 7400 on x about 3993; the printed 1300 and 1200 dimensions bracket the gap.
- **Door gaps D4 and D5:** The doors D4 (Main Bedroom lower box) and D5 (Bedroom 3) stand on open boundaries; no wall line is drawn along the gaps.
- **Open yard north of the Kitchen:** The area x 0-2090, y 2600-4745 (west of Bath/WC 2, north of the Kitchen) is blank; it is not a room and the casement window D3 opens onto it.
- **Access Balcony east side:** No wall closes the east end of the Access Balcony.

## Doors and openings

| Opening | Kind | Wall | Joins | Offset (mm) | Width (mm) | Swing into | Hinge | Swing basis | Plausibility | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | wl-21 | Bath/WC 1 <-> Main Bedroom | 50 | 825 | Bath/WC 1 | start | read_from_crop | plausible: en-suite door between the Main Bedroom and Bath/WC 1 | 0.50 |
| D2 | single_swing_door | wl-16 | Bath/WC 2 <-> Kitchen | 347 | 850 | Bath/WC 2 | end | read_from_crop | plausible | 0.50 |
| D3 | casement_window | wl-15 | Kitchen <-> Exterior | 0 | 1824 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| D4 | single_swing_door |  | Main Bedroom <-> Living/Dining | 0 | 900 | Main Bedroom | end | read_from_crop | plausible: bedroom door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.40 |
| D5 | single_swing_door |  | Bedroom 3 <-> Living/Dining | 0 | 810 | Bedroom 3 | start | read_from_crop | plausible: bedroom door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.40 |
| D6 | single_swing_door | wl-32 | Bedroom 2 <-> Living/Dining | 1708 | 810 | Bedroom 2 | end | read_from_crop | plausible | 0.40 |
| D7 | single_swing_door | wl-35 | Store <-> Living/Dining | 948 | 780 | Living/Dining | end | read_from_crop | plausible | 0.45 |
| D8 | entrance_door | wl-9 | Living/Dining <-> Access Balcony | 224 | 915 | Living/Dining | start | read_from_crop | plausible: main door off the living area (the access balcony is the common walkway outside) | 0.45 |
| D9 | double_swing_door | wl-12 | Access Balcony <-> Exterior | 80 | 910 | Exterior | start | read_from_crop | plausible: gate to the common access balcony | 0.35 |
| D10 | sliding_door | wl-30 | Balcony <-> Living/Dining | 0 | 3365 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| O1 | kitchen_boundary |  | Kitchen <-> Living/Dining | 0 | 1235 |  |  |  | open boundary: no door drawn (HDB rule 1) | 0.40 |
| W1 | window | wl-1 | Bath/WC 1 <-> Exterior | 100 | 1150 |  |  |  | n/a (window, ledge or open boundary) | 0.40 |
| W2 | window | wl-2 | Main Bedroom <-> Exterior | 100 | 2450 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W3 | window | wl-3 | Bedroom 3 <-> Exterior | 120 | 2100 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W4 | window | wl-4 | Balcony <-> Exterior | 100 | 3050 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W5 | window | wl-5 | Bedroom 2 <-> Exterior | 120 | 2130 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W6 | window | wl-9 | Living/Dining <-> Access Balcony | 1450 | 1000 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W7 | window | wl-9 | Living/Dining <-> Access Balcony | 2930 | 3150 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W8 | window | wl-8 | Study/Bedroom <-> Access Balcony | 100 | 2650 |  |  |  | n/a (window, ledge or open boundary) | 0.35 |
| W9 | louvre_window | wl-20 | Bath/WC 1 <-> Exterior | 0 | 1160 |  |  |  | n/a (window, ledge or open boundary) | 0.50 |
| W10 | louvre_window | wl-17 | Bath/WC 2 <-> Exterior | 0 | 1948 |  |  |  | n/a (window, ledge or open boundary) | 0.45 |

- **expected doors present:** Main Bedroom D4 (and D1 to Bath/WC 1); Bedroom 3 D5; Bedroom 2 D6; Bath/WC 2 D2; Store D7; main door D8 with gate; gate D9; Balcony D10. Kitchen: no door (open boundary O1). The Kitchen casement window D3 opens north onto the open yard.
- **NOT identified / uncertain:** Study/Bedroom own door (no arc found); the dashed arcs D4 to D7 are doors not supplied by HDB (a dashed arc is an opening only in the HDB legend); D9 and D4 hinge sides are read from one crop each; the cross-marked box beside D9 is not classified; all offsets and widths are estimated from crops (position_basis = estimated).

## Openings whose kind or swing rests on weak evidence

| Opening | Kind | Kind alternative | Kind basis | Swing basis | Confidence | Note |
|---|---|---|---|---|---|---|
| D1 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 810 mm, leaf standing west at the north jamb | read_from_crop | 0.50 | Bath/WC 1 door onto the Main Bedroom (the old run was unsure of the wall); the leaf stands west at the north jamb and the arc sweeps over Bath/WC 1. |
| D2 | single_swing_door |  | test 1-2: bare arc on a bare gap, one leaf of about 850 mm, leaf standing north at the east jamb | read_from_crop | 0.50 | Bath/WC 2 door onto the Kitchen; the leaf stands north at the east jamb and the arc sweeps over Bath/WC 2. |
| D3 | casement_window | bifold_door | tests 1, 2, 4, 5 (regression list: plan 4 D3): three equal arcs of about 600 mm on a framed box with a sill line, Kitchen has no other window, swings north into the open yard |  | 0.40 | Casement window (the old run read it as a bifold door). Three bays of about 600 mm on a framed box; swings north into the blank open yard outside. |
| D4 | single_swing_door |  | test 1-2: dashed arc, leaf of about 880 mm: closed along the bottom line of the Main Bedroom lower box, open position pointing north; hinge at the east end | read_from_crop | 0.40 | Main Bedroom door onto Living in the bottom wall of the lower box (dashed arc, so a door not supplied by HDB); the wall wl-24 stops at its west jamb and there is no wall line along the gap (door on an open boundary). The old run put it on the east side of the box. |
| D5 | single_swing_door |  | test 1-2: dashed arc, leaf of about 770 mm standing north from the west jamb at x=7090 | read_from_crop | 0.40 | Bedroom 3 door at the west end of its south wall (dashed arc); the hinge is at the west jamb, the arc sweeps into Bedroom 3. No wall line along the gap (door on an open boundary). |
| D6 | single_swing_door |  | test 1-2: dashed arc, leaf of about 810 mm lying along the Bedroom 2 / Study partition when open; hinge at the south end of the gap | read_from_crop | 0.40 | Bedroom 2 door at the south end of its west wall (dashed arc); the arc sweeps into Bedroom 2. |
| D7 | single_swing_door |  | test 1-2: dashed arc, leaf of about 700 mm standing north at the east jamb | read_from_crop | 0.45 | Store door (dashed arc) on the Store north wall; the hinge is at the east jamb and the arc sweeps north into Living/Dining. |
| D8 | entrance_door |  | HDB rule 3: the door off the living area to the access balcony: one large leaf of about 1000 mm (arc into Living/Dining, hinge on the west jamb) plus a double-leaf gate of two 500 mm leaves swinging out to the Access Balcony, marked 100 DROP | read_from_crop | 0.45 | Main door with gate. The large leaf swings in (Living/Dining), the gate pair swings out (Access Balcony); floor drop 100 mm printed. |
| D9 | double_swing_door |  | test 6: one large leaf of about 950 mm swinging out (west, exterior) plus a pair of two small leaves swinging into the Access Balcony: a gate system | read_from_crop | 0.35 | Gate at the west end of the Access Balcony: the large leaf swings out, the gate pair swings in; no DROP printed here. |
| D10 | sliding_door |  | balcony access: the only link between Living/Dining and the Balcony is the unbroken thin line on its south edge, with a 100 DROP leader; no leaf, no arc |  | 0.40 | Glazed sliding door across the Balcony south edge (balcony access rule); floor drop 100 mm printed. Width spans the clear gap between the Balcony side walls. |
| O1 | kitchen_boundary |  | HDB rule 1: the Kitchen side towards Living/Dining has no door and no wall between y 6200 and y 7400 (the printed 1300 and 1200 dimensions bracket the gap) |  | 0.40 | Open boundary between the Kitchen and Living/Dining: no door, no wall; the Kitchen is entered from Living/Dining. |
| W1 | window | louvre_window | a white strip between two lines in the Bath/WC 1 top wall |  | 0.40 | Window strip in the Bath/WC 1 top wall. |
| W2 | window |  | a long white box between two sill lines in the Main Bedroom top wall |  | 0.50 | Window box in the Main Bedroom top wall. |
| W3 | window |  | a long white box between two sill lines in the Bedroom 3 top wall |  | 0.50 | Window box in the Bedroom 3 top wall. |
| W4 | window |  | a long white box between two sill lines in the Balcony top wall |  | 0.50 | Window box in the Balcony top wall. |
| W5 | window |  | a long white box between two sill lines in the Bedroom 2 top wall |  | 0.50 | Window box in the Bedroom 2 top wall. |
| W6 | window |  | double glazing line between the post wl-53 and the pier wl-51 on the Living south edge |  | 0.35 | Glazing between the post and the pier on the Living south edge. |
| W7 | window |  | sliding glazing (double line with a small catch) east of the pier wl-51 |  | 0.35 | Sliding glazing on the Living south edge. |
| W8 | window |  | sliding glazing (double line with a small catch) on the Study/Bedroom south wall |  | 0.35 | Sliding window on the Study/Bedroom south wall. |
| W9 | louvre_window |  | HDB rule 2: a narrow slatted box on the Bath/WC 1 west wall (slat ticks seen) |  | 0.50 | Louvre window of Bath/WC 1: a narrow box with slat ticks in the west wall between the piers. |
| W10 | louvre_window |  | HDB rule 2: a narrow box with a dashed centre/slat line on the Bath/WC 2 west wall (dashes seen, no ticks) |  | 0.45 | Louvre window of Bath/WC 2: a long narrow box with dashes in the west wall. |

## Missing dimensions that would resolve each conditional / undetermined row

- **wl-1 (conditional):** printed width of the window bay
- **wl-2 (conditional):** printed width of the window bay
- **wl-3 (conditional):** printed width of the window bay
- **wl-4 (conditional):** printed width of the window bay
- **wl-5 (conditional):** printed width of the window bay
- **wl-38 (conditional):** printed size of the corner block
- **wl-39 (conditional):** printed size and use of the bracket
- **wl-40 (conditional):** printed size and use of the bracket
- **wl-8 (conditional):** printed position of the pier face
- **wl-9 (conditional):** printed pier positions
- **wl-10 (conditional):** printed Store width
- **wl-11 (conditional):** printed position of the pier faces
- **wl-12 (conditional):** printed depth of the Access Balcony
- **wl-13 (undetermined):** printed east end of the Access Balcony
- **wl-53 (conditional):** printed size of the post
- **wl-36 (conditional):** printed length of the hollow piece
- **wl-37 (conditional):** printed length of the hollow piece
- **wl-35 (conditional):** a second printed route to y=7400
- **wl-14 (conditional):** printed length of the thin piece
- **wl-54 (conditional):** printed size of the pier
- **wl-55 (conditional):** printed size of the block
- **wl-15 (conditional):** printed position of the pier face
- **wl-16 (conditional):** printed position of the pier faces
- **wl-20 (conditional):** printed length of the slot
- **wl-17 (conditional):** printed position of the Bath/WC 2 west wall
- **wl-19 (conditional):** printed position of the Bath/WC 2 west wall
- **wl-21 (conditional):** printed position of the pier end
- **wl-22 (conditional):** printed position of the pier end
- **wl-23 (conditional):** a second printed route to y=6200
- **wl-24 (conditional):** printed position of the door jamb
- **wl-25 (conditional):** printed position of the pier end
- **wl-26 (conditional):** printed length of the stub
- **wl-62 (conditional):** printed position of the door jamb and of the wall line
- **wl-27 (conditional):** printed position of the door jamb
- **wl-28 (conditional):** printed depth of the Balcony
- **wl-29 (conditional):** printed depth of the Balcony
- **wl-30 (conditional):** printed depth of the Balcony
- **wl-31 (conditional):** printed depth of the Balcony
- **wl-32 (conditional):** printed depth of the Balcony
- **wl-33 (conditional):** printed position of the east wall face
- **wl-34 (conditional):** printed position of the pier end
- **wl-56 (conditional):** printed size of the block
- **wl-57 (conditional):** printed size of the block
- **wl-58 (conditional):** printed size of the block
- **wl-59 (conditional):** printed size of the block
- **wl-60 (conditional):** printed size of the block
- **wl-61 (conditional):** printed depth of the Access Balcony

## Area reconciliation

- **printed floor area:** The caption reads 5-ROOM IMPROVED (CORRIDOR) and SCALE 1:100; no floor-area figure or convention is printed, so no reconciliation is possible (not verified).
- **computed room areas:** Bath/WC 1 4.7 m2; Bath/WC 2 3.6 m2; Main Bedroom 18.6 m2; Bedroom 3 14.4 m2; Balcony 7.1 m2; Bedroom 2 15.8 m2; Study/Bedroom 12.5 m2; Living/Dining 36.3 m2; Kitchen 13.9 m2; Store 3.6 m2; Access Balcony 29.4 m2. Polygons run grid line to grid line.

## Model and effort path

- **model path:** The first run of this plan used claude-sonnet-5-5 in small sequential passes (effort applied by prompt; the endpoint rejects reasoning_effort and caps output at 4096 tokens). That draft was not re-run in this revision, so no new model call was made; its tables were kept as the revision base.  The walls, openings and rooms were rebuilt from enlarged crops, the scale fit and a measured ink census; the first-run wall ids were kept and new ids start at wl-38.

## Drawing verification

### Render log

| Render | Label overlaps | Walls drawn / table | Openings drawn / table | Swing guessed | Swing mismatch | Visual problems | Action |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 62 / 62 | 21 / 21 | 0 | 0 | Opened render 1 (revision 3) at overview size and compared it with the source crop: wl-62 closes the Bedroom 3 south-west corner between wl-25 and the west jamb of D5, and the stub wl-26 starts at it at x=6980. The D4 and D5 swings, the piers, the Balcony and the Access Balcony are unchanged from revision 2. Nits: the D9 caption crosses the wl-12 label; the east-wall bracket (wl-39, wl-40) is small. | Revision 3: accepted after 1 render. Counts equal the tables (62 walls, 21 openings, 20 structural markers, 9 inset markers); every drawn door keeps at least 50 mm clearance. [mismatch ids: none] |

### Overlay registration against the source image

57 walls scored, 5 not scored (undetermined or diagonal), 1 flagged (off register or no ink), 8 unmodelled ink runs listed. Largest median offset among scored walls: 155 mm.

| Wall | Type | Inset | Status | Thick (mm) | Median offset (mm) | Max offset (mm) | Ink coverage | Tolerance (mm) | Flag | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| wl-12 | non_structural |  | conditional | 140 | -21 | 60 | 1.00 | 139 | ok |  |
| wl-13 | non_structural |  | undetermined | 100 |  |  |  | 120 | not scored | undetermined placeholder geometry: not scored |
| wl-56 | non_structural | thin_solid_black | conditional | 139 | -24 | 24 | 1.00 | 139 | ok |  |
| wl-57 | non_structural | thin_solid_black | conditional | 139 | -24 | 24 | 1.00 | 139 | ok |  |
| wl-58 | non_structural | thin_solid_black | conditional | 139 | -24 | 57 | 1.00 | 139 | ok |  |
| wl-59 | non_structural | thin_solid_black | conditional | 139 | -24 | 24 | 1.00 | 139 | ok |  |
| wl-60 | non_structural | thin_solid_black | conditional | 139 | -1 | 69 | 1.00 | 139 | ok |  |
| wl-61 | non_structural | thin_solid_black | conditional | 150 | -2 | 118 | 1.00 | 145 | ok |  |
| wl-4 | non_structural |  | conditional | 420 | -94 | 163 | 1.00 | 280 | ok |  |
| wl-30 | non_structural |  | conditional | 60 |  |  |  | 100 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-31 | non_structural |  | conditional | 100 | -42 | 42 | 1.00 | 119 | ok |  |
| wl-48 | structural |  | conditional | 347 | -11 | 81 | 1.00 | 243 | ok |  |
| wl-1 | non_structural |  | conditional | 150 | -27 | 66 | 1.00 | 145 | ok |  |
| wl-18 | structural |  | conditional | 223 | -26 | 101 | 1.00 | 181 | ok |  |
| wl-19 | non_structural |  | conditional | 100 | 17 | 179 | 0.96 | 120 | ok |  |
| wl-20 | non_structural |  | conditional | 231 |  |  |  | 185 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-21 | non_structural |  | conditional | 115 | -39 | 54 | 1.00 | 127 | ok |  |
| wl-41 | structural |  | conditional | 254 | -23 | 23 | 1.00 | 196 | ok |  |
| wl-42 | structural |  | conditional | 254 | -23 | 92 | 1.00 | 196 | ok |  |
| wl-45 | structural |  | conditional | 347 | -23 | 23 | 1.00 | 243 | ok |  |
| wl-16 | non_structural |  | conditional | 110 | -47 | 47 | 1.00 | 125 | ok |  |
| wl-17 | non_structural |  | conditional | 350 |  |  |  | 244 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-22 | non_structural |  | conditional | 115 | 31 | 177 | 0.95 | 127 | ok |  |
| wl-43 | structural |  | conditional | 231 | -22 | 22 | 1.00 | 185 | ok |  |
| wl-44 | structural |  | conditional | 347 | -11 | 22 | 1.00 | 243 | ok |  |
| wl-5 | non_structural |  | conditional | 420 | -94 | 140 | 1.00 | 280 | ok |  |
| wl-6 | structural |  | conditional | 208 | 10 | 33 | 1.00 | 173 | ok |  |
| wl-32 | non_structural |  | conditional | 115 | -42 | 131 | 0.97 | 127 | ok |  |
| wl-33 | non_structural |  | conditional | 93 | -31 | 62 | 1.00 | 116 | ok |  |
| wl-38 | structural |  | conditional | 240 | -18 | 86 | 1.00 | 190 | ok |  |
| wl-3 | non_structural |  | conditional | 420 | -94 | 163 | 1.00 | 280 | ok |  |
| wl-27 | non_structural |  | conditional | 100 | -31 | 38 | 1.00 | 120 | ok |  |
| wl-28 | non_structural |  | conditional | 110 | -27 | 50 | 1.00 | 124 | ok |  |
| wl-29 | non_structural |  | conditional | 110 | 42 | 42 | 1.00 | 124 | ok |  |
| wl-47 | structural |  | conditional | 324 | -23 | 23 | 0.94 | 231 | ok |  |
| wl-62 | non_structural |  | conditional | 100 | 38 | 55 | 0.83 | 120 | ok |  |
| wl-39 | non_structural |  | conditional | 150 | -15 | 107 | 1.00 | 145 | ok |  |
| wl-40 | structural |  | conditional | 200 | 18 | 120 | 1.00 | 169 | ok |  |
| wl-11 | non_structural |  | conditional | 100 | 25 | 42 | 1.00 | 120 | ok |  |
| wl-14 | non_structural | thin_solid_black | conditional | 100 | -3 | 9 | 1.00 | 119 | ok |  |
| wl-15 | non_structural |  | conditional | 300 |  |  |  | 220 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-54 | structural |  | conditional | 311 | -3 | 20 | 1.00 | 225 | ok |  |
| wl-55 | structural |  | conditional | 290 | -11 | 82 | 1.00 | 215 | ok |  |
| wl-9 | non_structural | thin_hollow | conditional | 100 | -155 | 167 | 0.29 | 120 | off_register | /median offset/ 155 mm vs tolerance 120 mm; ink coverage 0.29 |
| wl-51 | structural |  | conditional | 346 | -12 | 23 | 1.00 | 242 | ok |  |
| wl-53 | structural |  | conditional | 208 | -23 | 46 | 1.00 | 173 | ok |  |
| wl-2 | non_structural |  | conditional | 420 | -94 | 163 | 1.00 | 280 | ok |  |
| wl-23 | non_structural |  | conditional | 100 | 26 | 26 | 1.00 | 119 | ok |  |
| wl-24 | non_structural |  | conditional | 100 | 30 | 169 | 0.98 | 120 | ok |  |
| wl-25 | non_structural |  | conditional | 100 | 24 | 57 | 1.00 | 119 | ok |  |
| wl-26 | non_structural |  | conditional | 100 | -26 | 43 | 1.00 | 119 | ok |  |
| wl-46 | structural |  | conditional | 347 | -35 | 104 | 1.00 | 243 | ok |  |
| wl-10 | non_structural |  | conditional | 116 | -38 | 54 | 1.00 | 128 | ok |  |
| wl-35 | non_structural |  | conditional | 100 | 21 | 21 | 1.00 | 120 | ok |  |
| wl-36 | non_structural |  | conditional | 324 | 139 | 162 | 1.00 | 231 | ok |  |
| wl-37 | non_structural |  | conditional | 347 | 150 | 150 | 1.00 | 243 | ok |  |
| wl-49 | structural |  | conditional | 324 | -23 | 23 | 1.00 | 231 | ok |  |
| wl-50 | structural |  | conditional | 347 | -23 | 23 | 1.00 | 243 | ok |  |
| wl-7 | structural |  | derived | 208 | -13 | 105 | 1.00 | 173 | ok |  |
| wl-8 | non_structural |  | conditional | 100 | -62 | 62 | 1.00 | 120 | ok |  |
| wl-34 | non_structural | thin_solid_black | conditional | 50 | 5 | 28 | 1.00 | 94 | ok |  |
| wl-52 | structural |  | conditional | 346 | -23 | 23 | 1.00 | 242 | ok |  |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 16521 to 17261 at y=4826 (739 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 6214 to 7023 at y=6160 (808 mm); weight double; in Main Bedroom |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 1014 to 2054 at y=8143 (1039 mm); weight double; in Kitchen |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 1014 to 6445 at y=9952 (5430 mm); weight single; in Access Balcony |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y -322 to 1138 at x=-2 (1461 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 6403 to 7192 at x=4018 (788 mm); weight single; in Living/Dining |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 3805 to 5220 at x=17214 (1414 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 1 to 3434 at x=17237 (3432 mm); weight single; in (outside every room polygon) |

### Overlay flags and how each was resolved

- **wl-9 (off_register, ink 0.29, median -155 mm):** The Living/Dining south edge is a thin double glazing line on the same line as the piers wl-50, wl-51, wl-52 and the post wl-53; the dark-ink scan most likely locks onto the heavier pier ink beside the glazing (a likely cause, not separately verified). The line is plainly visible on the crop and on the overlay, so the wall is kept; the flag is accepted, not cleared.
- **unmodelled: vertical x about 4018, y 6403-7192 (788 mm, single, Living/Dining):** This is the thin single line that marks the Kitchen / Living-Dining open boundary: it is the marking recorded as O1 (HDB rule 1), so it is not a wall. Resolved as the open-boundary marking.
- **unmodelled: horizontal x 6214-7023, y 6160 (808 mm, double, Main Bedroom):** The dashed closing line of the door D4 along the bottom of the Main Bedroom lower box, east of the wall wl-24. Resolved as a door symbol on an open boundary, not a wall.
- **unmodelled: horizontal x 1014-2054, y 8143 (1039 mm, double, Kitchen):** The back edge of the Kitchen base cabinet runs along the south wall (counter fixture F7). Resolved as a fixture, not a wall.
- **unmodelled: horizontal x 1014-6445, y 9952 (5430 mm, single, Access Balcony):** A long single line above the south window run of the Access Balcony (the upper line of the railing and window band). It is part of the same south window line that is held as the placeholder wall wl-13; not added as a separate wall. Not enlarged line by line, so the reading is by position: not verified.
- **unmodelled: vertical x about 17214 and 17237, y 1-5220; vertical x=-2, y -322-1138; horizontal x 16521-17261, y=4826:** Dimension lines and extension lines of the right chain (4800, 8600), of the top chain on the left, and the tick of the 4800 dimension, all outside the flat boundary. Resolved as dimension lines.
- **door swing check coverage:** D4 and D5 (doors on open boundaries) and the glazing, windows and casement windows have no host wall, so the swing check could not draw them; D9 is a guess by the check. Their swings were compared with the crops by eye only: not tested in code.
- **wl-62 added (user report, revision 3):** The Bedroom 3 south wall between its south-west corner (x 6780) and the west jamb of D5 (x 7090) was missing: wl-25 stopped at y=4800 and the stub wl-26 began at x=6925, so nothing joined them. wl-62 (310 mm, non_structural) closes the corner; wl-25 now runs to y=4858 and wl-26 was moved to x=6980 and starts at y=4858.


### Door swing check against the source ink

6 doors checked: 1 guessed, 5 ok.

| Opening | Kind | Swing into | Hinge | Swing basis | Ink drawn | Ink mirror side | Ink other hinge | Ink both mirrored | Flag |
|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | Bath/WC 1 | start | read_from_crop | 1.00 | 0.06 | 0.39 | 0.06 | ok |
| D2 | single_swing_door | Bath/WC 2 | end | read_from_crop | 1.00 | 0.25 | 0.53 | 0.25 | ok |
| D6 | single_swing_door | Bedroom 2 | end | read_from_crop | 1.00 | 0.06 | 0.28 | 0.06 | ok |
| D7 | single_swing_door | Living/Dining | end | read_from_crop | 0.69 | 0.36 | 0.39 | 0.50 | ok |
| D8 | entrance_door | Living/Dining | start | read_from_crop | 0.81 | 0.39 | 0.42 | 0.39 | ok |
| D9 | double_swing_door | Exterior | start | read_from_crop |  |  |  |  | guessed |

## Placeholders

- **drawing placeholders:** Red dashed wall wl-13 (the Access Balcony south line) is placeholder geometry. Orange walls are conditional. Door and window positions are estimated. The bracket wl-39/wl-40 and the Access Balcony blocks wl-56 to wl-61 are conditional readings.
