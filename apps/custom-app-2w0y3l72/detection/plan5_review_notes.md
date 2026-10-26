# Review notes — floorplan HDB (5).png

> **LOW-CONFIDENCE WARNING (overall_confidence = 0.30).** 0.30: the minimum room confidence, set by Unlabelled space (U2).


> Revision 4 (user rule applied: where the Balcony boundary has a drop, the line at the drop is not a wall and the boundary stays open: wl-30 and the sliding door D9 are removed and the open boundary O2 is added; revision 3 rule kept: any wall filled in with solid black ink is structural, whatever the width, which moved wl-6, wl-14, wl-17, wl-46, wl-52 and wl-65 to structural; no JSON and no schema were produced at the user request, and no new model call was made). Walls and openings changed or new: wl-30 (removed); D1 (Changed); O2 (New)

## Wall table (58 walls: 58 conditional; one row per wall, sorted by first room)

| Floor plan | Room(s) | Wall | Type | Inset | Length (mm) | Status | Measurement / arithmetic | Rationale / notes | x1,y1 → x2,y2 | Thick | Openings | Rev |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| floorplan HDB (5).png | Balcony, Unlabelled space (U2), Exterior | wl-24 | structural |  | 1344 | conditional | 13965 - 12621 = 1344 (ends: read from the ink / read from the ink; see the assumption) | Solid pier at the south end of the U2 west wall. **Assumption:** ends read from the ink | 10498,12621 → 10498,13965 | 254 |  |  |
| floorplan HDB (5).png | Balcony, Exterior | wl-28 | non_structural |  | 3881 | conditional | 10371 - 6490 = 3881 (ends: read from the ink / read from the ink; see the assumption) | South wall of the Balcony: several parallel lines with dashed catches (sliding window W6). **Assumption:** ends read from the ink | 6490,13640 → 10371,13640 | 270 | W6 |  |
| floorplan HDB (5).png | Balcony, Unlabelled space (U2) | wl-68 | structural |  | 1236 | conditional | 12621 - 11385 = 1236 (ends: read from the ink / read from the ink; see the assumption) | Thick solid west wall of U2 beside the Balcony; it carries the main door D8. **Assumption:** ends read from the ink | 10480,11385 → 10480,12621 | 205 | D8 |  |
| floorplan HDB (5).png | Bath/WC 1, Master Bedroom | wl-3 | non_structural |  | 1750 | conditional | 7800 - 6050 = 1750 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bath/WC 1, a thin double line; it carries its door D1. **Assumption:** ends read from the ink | 6050,2820 → 7800,2820 | 110 | D1 |  |
| floorplan HDB (5).png | Bath/WC 1, Exterior | wl-6 | structural |  | 1897 | conditional | 7873 - 5976 = 1897 (ends: read from the ink / read from the ink; see the assumption) | Top bar of Bath/WC 1: a thin solid black bar. **Assumption:** ends read from the ink | 5976,155 → 7873,155 | 185 |  |  |
| floorplan HDB (5).png | Bath/WC 1, Exterior | wl-8 | non_structural |  | 2065 | conditional | 2312 - 247 = 2065 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bath/WC 1, a thin double line; the upper part is the slatted louvre box W9. **Assumption:** ends read from the ink | 6050,247 → 6050,2312 | 135 | W9 |  |
| floorplan HDB (5).png | Bath/WC 1, Bath/WC 2 | wl-9 | non_structural |  | 2595 | conditional | 2842 - 247 = 2595 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bath/WC 1 and Bath/WC 2. **Assumption:** ends read from the ink | 7800,247 → 7800,2842 | 135 |  |  |
| floorplan HDB (5).png | Bath/WC 1, Master Bedroom | wl-48 | non_structural |  | 530 | conditional | 2842 - 2312 = 530 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bath/WC 1 beside the Master Bedroom, a thin double line. **Assumption:** ends read from the ink | 6050,2312 → 6050,2842 | 230 |  |  |
| floorplan HDB (5).png | Bath/WC 2, Master Bedroom | wl-4 | structural |  | 1021 | conditional | 8821 - 7800 = 1021 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bath/WC 2, west half: a solid black bar. **Assumption:** ends read from the ink | 7800,2866 → 8821,2866 | 232 |  |  |
| floorplan HDB (5).png | Bath/WC 2, Kitchen | wl-5 | non_structural |  | 499 | conditional | 9320 - 8821 = 499 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bath/WC 2, east half: a thin double line. **Assumption:** ends read from the ink | 8821,2860 → 9320,2860 | 110 |  |  |
| floorplan HDB (5).png | Bath/WC 2, Kitchen | wl-10 | non_structural |  | 2459 | conditional | 2915 - 456 = 2459 (ends: read from the ink / read from the ink; see the assumption) | East wall of Bath/WC 2, a thin double line; it carries its door D2. **Assumption:** ends read from the ink | 9320,456 → 9320,2915 | 110 | D2 |  |
| floorplan HDB (5).png | Bath/WC 2, Exterior | wl-45 | non_structural |  | 555 | conditional | 8428 - 7873 = 555 (ends: read from the ink / read from the ink; see the assumption) | White box with a dashed centre line in the Bath/WC 2 top wall: the louvre window W3. **Assumption:** ends read from the ink | 7873,155 → 8428,155 | 185 | W3 |  |
| floorplan HDB (5).png | Bath/WC 2, Exterior | wl-46 | structural |  | 762 | conditional | 9190 - 8428 = 762 (ends: read from the ink / read from the ink; see the assumption) | Top bar of Bath/WC 2 east of the louvre: a thin solid black bar. **Assumption:** ends read from the ink | 8428,155 → 9190,155 | 185 |  |  |
| floorplan HDB (5).png | Bath/WC 2, Kitchen, Exterior | wl-47 | structural |  | 394 | conditional | 456 - 62 = 394 (ends: read from the ink / read from the ink; see the assumption) | Solid corner block at the north-east corner of Bath/WC 2. **Assumption:** ends read from the ink | 9306,62 → 9306,456 | 232 |  |  |
| floorplan HDB (5).png | Bedroom 2, Exterior | wl-1 | non_structural |  | 2343 | conditional | 3085 - 742 = 2343 (ends: read from the ink / read from the ink; see the assumption) | North wall of Bedroom 2: a hollow box with two bays of casement arcs (W1) above a double sill line. **Assumption:** ends read from the ink | 742,2616 → 3085,2616 | 608 | W1 |  |
| floorplan HDB (5).png | Bedroom 2, Exterior | wl-35 | non_structural |  | 3778 | conditional | 6690 - 2912 = 3778 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bedroom 2, a thin double line. **Assumption:** ends read from the ink **Drawn extent:** cross-axis centre-line moved -45 mm to the ink centre (x=-15) (check (m)) | -15,2912 → -15,6690 | 100 |  |  |
| floorplan HDB (5).png | Bedroom 2, Store | wl-36 | non_structural |  | 2150 | conditional | 2210 - 60 = 2150 (ends: read from the ink / read from the ink; see the assumption) | Wall between Bedroom 2 and the Store, a thin double line. **Assumption:** ends read from the ink **Drawn extent:** cross-axis centre-line moved +70 mm to the ink centre (y=7596) (check (m)) | 60,7596 → 2210,7596 | 116 |  |  |
| floorplan HDB (5).png | Bedroom 2, Living/Dining | wl-42 | non_structural |  | 1464 | conditional | 7597 - 6133 = 1464 (ends: read from the ink / read from the ink; see the assumption) | East wall of Bedroom 2 facing the lobby, a thin double line. **Assumption:** ends read from the ink | 3100,6133 → 3100,7597 | 190 |  |  |
| floorplan HDB (5).png | Bedroom 2, Master Bedroom | wl-57 | structural |  | 926 | conditional | 3653 - 2727 = 926 (ends: read from the ink / read from the ink; see the assumption) | Pier between Bedroom 2 and the Master Bedroom (upper), solid black. **Assumption:** ends read from the ink | 3190,2727 → 3190,3653 | 240 |  |  |
| floorplan HDB (5).png | Bedroom 2, Master Bedroom | wl-58 | non_structural |  | 1553 | conditional | 5206 - 3653 = 1553 (ends: read from the ink / read from the ink; see the assumption) | Thin double-line wall between Bedroom 2 and the Master Bedroom. **Assumption:** ends read from the ink | 3100,3653 → 3100,5206 | 115 |  |  |
| floorplan HDB (5).png | Bedroom 2, Master Bedroom | wl-59 | structural |  | 927 | conditional | 6133 - 5206 = 927 (ends: read from the ink / read from the ink; see the assumption) | Pier between Bedroom 2 and the Master Bedroom (lower), solid black. **Assumption:** ends read from the ink | 3190,5206 → 3190,6133 | 240 |  |  |
| floorplan HDB (5).png | Bedroom 2, Store, Exterior | wl-60 | structural |  | 1227 | conditional | 7917 - 6690 = 1227 (ends: read from the ink / read from the ink; see the assumption) | Pier on the west wall at the Bedroom 2 / Store boundary, solid black. **Assumption:** ends read from the ink | -3,6690 → -3,7917 | 254 |  |  |
| floorplan HDB (5).png | Bedroom 3, Exterior | wl-32 | non_structural |  | 2961 | conditional | 3061 - 100 = 2961 (ends: read from the ink / read from the ink; see the assumption) | South wall of Bedroom 3: several parallel lines between the two piers (window W5). **Assumption:** ends read from the ink | 100,13500 → 3061,13500 | 235 | W5 |  |
| floorplan HDB (5).png | Bedroom 3, Exterior | wl-33 | non_structural |  | 3742 | conditional | 12598 - 8856 = 3742 (ends: read from the ink / read from the ink; see the assumption) | West wall of Bedroom 3, a thin double line. **Assumption:** ends read from the ink **Drawn extent:** cross-axis centre-line moved -70 mm to the ink centre (x=-40) (check (m)) | -40,8856 → -40,12598 | 100 |  |  |
| floorplan HDB (5).png | Bedroom 3, Living/Dining | wl-41 | non_structural | thin_hollow | 3798 | conditional | 12598 - 8800 = 3798 (ends: read from the ink / read from the ink; see the assumption) | East wall of Bedroom 3 facing Living/Dining, a thin double line. **Assumption:** ends read from the ink | 3095,8800 → 3095,12598 | 145 |  |  |
| floorplan HDB (5).png | Bedroom 3, Exterior | wl-61 | structural |  | 1043 | conditional | 13641 - 12598 = 1043 (ends: read from the ink / read from the ink; see the assumption) | Pier at the south-west corner of Bedroom 3, solid black. **Assumption:** ends read from the ink | -27,12598 → -27,13641 | 254 |  |  |
| floorplan HDB (5).png | Bedroom 3, Living/Dining, Exterior | wl-63 | structural |  | 1043 | conditional | 13641 - 12598 = 1043 (ends: read from the ink / read from the ink; see the assumption) | Pier at the south-east corner of Bedroom 3, solid black. **Assumption:** ends read from the ink | 3177,12598 → 3177,13641 | 232 |  |  |
| floorplan HDB (5).png | Exterior | wl-26 | structural |  | 1108 | conditional | 15008 - 13900 = 1108 (ends: grid line / read from the ink; see the assumption) | Thick solid stub of the U2 east wall projecting beyond the south wall (the printed 14900). **Assumption:** ends read from the ink | 13494,13900 → 13494,15008 | 231 |  |  |
| floorplan HDB (5).png | Exterior | wl-51 | structural |  | 694 | conditional | 14188 - 13494 = 694 (ends: read from the ink / read from the ink; see the assumption) | Thick solid stub of the U2 north wall projecting east beyond the U2 east wall. **Assumption:** ends read from the ink | 13494,6440 → 14188,6440 | 215 |  |  |
| floorplan HDB (5).png | Exterior, Bedroom 2 | wl-54 | structural |  | 600 | conditional | 2912 - 2312 = 600 (ends: read from the ink / read from the ink; see the assumption) | Left arm of the thick U-shaped block at the north-west corner of Bedroom 2. **Assumption:** ends read from the ink | -598,2312 → -598,2912 | 213 |  |  |
| floorplan HDB (5).png | Exterior, Bedroom 2 | wl-55 | structural |  | 600 | conditional | 2912 - 2312 = 600 (ends: read from the ink / read from the ink; see the assumption) | Right arm of the thick U-shaped block at the north-west corner of Bedroom 2. **Assumption:** ends read from the ink | 612,2312 → 612,2912 | 280 |  |  |
| floorplan HDB (5).png | Exterior, Bedroom 2 | wl-56 | structural |  | 1413 | conditional | 708 - -705 = 1413 (ends: read from the ink / read from the ink; see the assumption) | Bottom bar of the thick U-shaped block at the north-west corner of Bedroom 2. **Assumption:** ends read from the ink | -705,2817 → 708,2817 | 191 |  |  |
| floorplan HDB (5).png | Kitchen, Exterior | wl-11 | non_structural |  | 2013 | conditional | 11436 - 9423 = 2013 (ends: read from the ink / read from the ink; see the assumption) | North wall of the Kitchen: a framed window box with three arcs (casement window D7) and a narrow fixed panel beside the shaft. **Assumption:** ends read from the ink | 9423,225 → 11436,225 | 290 | D7 |  |
| floorplan HDB (5).png | Kitchen, Exterior | wl-17 | structural |  | 5062 | conditional | 6440 - 1378 = 5062 (ends: read from the ink / read from the ink; see the assumption) | Kitchen east wall, a thin solid black line (the sink run lies along it). **Assumption:** ends read from the ink | 12004,1378 → 12004,6440 | 115 |  |  |
| floorplan HDB (5).png | Kitchen, Unlabelled space (U2) | wl-21 | structural |  | 1524 | conditional | 12004 - 10480 = 1524 (ends: read from the ink / read from the ink; see the assumption) | Thick solid wall between the Kitchen and U2. **Assumption:** ends read from the ink | 10480,6440 → 12004,6440 | 215 |  |  |
| floorplan HDB (5).png | Living/Dining, Kitchen | wl-20 | structural |  | 728 | conditional | 9400 - 8672 = 728 (ends: read from the ink / read from the ink; see the assumption) | Horizontal foot of the L-shaped solid block: the Kitchen south-west corner, ending where the open boundary O1 starts. **Assumption:** ends read from the ink | 8672,6415 → 9400,6415 | 210 |  |  |
| floorplan HDB (5).png | Living/Dining, Unlabelled space (U2) | wl-23 | structural |  | 4945 | conditional | 11385 - 6440 = 4945 (ends: read from the ink / read from the ink; see the assumption) | Thick solid west wall of U2 beside Living/Dining. **Assumption:** ends read from the ink | 10480,6440 → 10480,11385 | 205 |  |  |
| floorplan HDB (5).png | Living/Dining, Balcony | wl-29 | non_structural | thin_hollow | 1390 | conditional | 12775 - 11385 = 1390 (ends: read from the ink / read from the ink; see the assumption) | West wall of the Balcony, a thin double line. **Assumption:** ends read from the ink | 6385,11385 → 6385,12775 | 110 |  |  |
| floorplan HDB (5).png | Living/Dining, Exterior | wl-31 | non_structural |  | 2284 | conditional | 5577 - 3293 = 2284 (ends: read from the ink / read from the ink; see the assumption) | South wall of Living/Dining: several parallel lines between the piers (sliding window W4). **Assumption:** ends read from the ink | 3293,13500 → 5577,13500 | 235 | W4 |  |
| floorplan HDB (5).png | Living/Dining, Exterior | wl-64 | structural |  | 525 | conditional | 13925 - 13400 = 525 (ends: read from the ink / read from the ink; see the assumption) | Small solid pier on the Living south edge. **Assumption:** ends read from the ink | 5681,13400 → 5681,13925 | 208 |  |  |
| floorplan HDB (5).png | Living/Dining, Exterior | wl-65 | structural |  | 495 | conditional | 6280 - 5785 = 495 (ends: read from the ink / read from the ink; see the assumption) | Short solid bar joining the small pier to the big pier on the Living south edge. **Assumption:** ends read from the ink | 5785,13457 → 6280,13457 | 115 |  |  |
| floorplan HDB (5).png | Living/Dining, Balcony, Exterior | wl-66 | structural |  | 1150 | conditional | 13925 - 12775 = 1150 (ends: read from the ink / read from the ink; see the assumption) | Big solid pier between Living/Dining and the Balcony at the south edge. **Assumption:** ends read from the ink | 6385,12775 → 6385,13925 | 210 |  |  |
| floorplan HDB (5).png | Living/Dining | wl-67 | non_structural |  | 270 | conditional | 11385 - 11115 = 270 (ends: read from the ink / read from the ink; see the assumption) | Free nib: the Balcony west wall runs about 270 mm north of the Balcony north edge into Living/Dining. **Assumption:** ends read from the ink | 6385,11115 → 6385,11385 | 110 |  |  |
| floorplan HDB (5).png | Master Bedroom, Exterior | wl-2 | non_structural |  | 2674 | conditional | 5990 - 3316 = 2674 (ends: read from the ink / read from the ink; see the assumption) | North wall of the Master Bedroom: a hollow box with two bays of casement arcs (W2), a small fixed panel at its west end. **Assumption:** ends read from the ink | 3316,2616 → 5990,2616 | 608 | W2 |  |
| floorplan HDB (5).png | Master Bedroom, Kitchen | wl-18 | non_structural |  | 2744 | conditional | 5610 - 2866 = 2744 (ends: read from the ink / read from the ink; see the assumption) | Master Bedroom east wall facing the Kitchen strip (the 600 dimension), a thin double line. **Assumption:** ends read from the ink | 8730,2866 → 8730,5610 | 100 |  |  |
| floorplan HDB (5).png | Master Bedroom, Living/Dining | wl-44 | non_structural | thin_hollow | 3851 | conditional | 7041 - 3190 = 3851 (ends: read from the ink / read from the ink; see the assumption) | South wall of the Master Bedroom lower box, a thin double line; it stops at the west jamb of the door D3 (found on the ink-run table: a double line 116 mm across). **Assumption:** ends read from the ink | 3190,6075 → 7041,6075 | 116 |  |  |
| floorplan HDB (5).png | Master Bedroom, Living/Dining | wl-49 | non_structural | thin_hollow | 846 | conditional | 8672 - 7826 = 846 (ends: read from the ink / read from the ink; see the assumption) | South wall of the Master Bedroom lower box east of the door D3 leaf, a thin double line running into the L-shaped block (the 400 dimension). **Assumption:** ends read from the ink | 7826,6075 → 8672,6075 | 116 |  |  |
| floorplan HDB (5).png | Master Bedroom, Kitchen | wl-50 | structural |  | 910 | conditional | 6520 - 5610 = 910 (ends: read from the ink / read from the ink; see the assumption) | Vertical leg of the L-shaped solid block at the Kitchen south-west corner. **Assumption:** ends read from the ink | 8672,5610 → 8672,6520 | 215 |  |  |
| floorplan HDB (5).png | Store, Exterior | wl-34 | non_structural |  | 939 | conditional | 8856 - 7917 = 939 (ends: read from the ink / read from the ink; see the assumption) | West wall of the Store, a thin double line. **Assumption:** ends read from the ink **Drawn extent:** cross-axis centre-line moved -60 mm to the ink centre (x=-30) (check (m)) | -30,7917 → -30,8856 | 100 |  |  |
| floorplan HDB (5).png | Store, Bedroom 3 | wl-39 | non_structural |  | 2192 | conditional | 2252 - 60 = 2192 (ends: read from the ink / read from the ink; see the assumption) | Wall between the Store and Bedroom 3, a thin double line. **Assumption:** ends read from the ink | 60,8856 → 2252,8856 | 116 |  |  |
| floorplan HDB (5).png | Store, Living/Dining | wl-62 | non_structural |  | 676 | conditional | 8909 - 8233 = 676 (ends: read from the ink / read from the ink; see the assumption) | Narrow white box: the stub at the south-east corner of the Store, east of which the Store door swings. **Assumption:** ends read from the ink | 2122,8233 → 2122,8909 | 105 |  |  |
| floorplan HDB (5).png | Unlabelled space (U1), Kitchen | wl-12 | structural |  | 1296 | conditional | 1378 - 82 = 1296 (ends: read from the ink / read from the ink; see the assumption) | West wall of the lift or stair shaft (box with a crossed X): solid black. **Assumption:** ends read from the ink | 11498,82 → 11498,1378 | 200 |  |  |
| floorplan HDB (5).png | Unlabelled space (U1), Exterior | wl-14 | structural |  | 1296 | conditional | 1378 - 82 = 1296 (ends: read from the ink / read from the ink; see the assumption) | East wall of the shaft: solid black. **Assumption:** ends read from the ink | 12388,82 → 12388,1378 | 115 |  |  |
| floorplan HDB (5).png | Unlabelled space (U1), Exterior | wl-52 | structural |  | 1009 | conditional | 12445 - 11436 = 1009 (ends: read from the ink / read from the ink; see the assumption) | Top bar of the shaft: solid black, with open post stubs above it at the two corners. **Assumption:** ends read from the ink | 11436,355 → 12445,355 | 140 |  |  |
| floorplan HDB (5).png | Unlabelled space (U1), Kitchen, Exterior | wl-53 | structural |  | 1009 | conditional | 12445 - 11436 = 1009 (ends: read from the ink / read from the ink; see the assumption) | Bottom bar of the shaft above the Kitchen: solid black. **Assumption:** ends read from the ink | 11436,1275 → 12445,1275 | 280 |  |  |
| floorplan HDB (5).png | Unlabelled space (U2), Exterior | wl-22 | structural |  | 1490 | conditional | 13494 - 12004 = 1490 (ends: read from the ink / read from the ink; see the assumption) | Thick solid north wall of U2, east of the Kitchen east wall. **Assumption:** ends read from the ink | 12004,6440 → 13494,6440 | 215 |  |  |
| floorplan HDB (5).png | Unlabelled space (U2), Exterior | wl-25 | structural |  | 7460 | conditional | 13900 - 6440 = 7460 (ends: read from the ink / grid line; see the assumption) | Thick solid east wall of U2, with a window slot (W7). **Assumption:** ends read from the ink | 13494,6440 → 13494,13900 | 231 | W7 |  |
| floorplan HDB (5).png | Unlabelled space (U2), Exterior | wl-27 | non_structural |  | 2744 | conditional | 13370 - 10626 = 2744 (ends: read from the ink / read from the ink; see the assumption) | South wall of U2: several parallel lines with dashed catches (sliding window W8). **Assumption:** ends read from the ink | 10626,13640 → 13370,13640 | 270 | W8 |  |

## Wall types

- **Two types:** 30 structural (filled in with solid black ink, whatever the width, including small solid posts and thin solid black bars), 28 non-structural (every other wall); 4 of the non-structural walls are inset walls.
- **structural walls:** 30 structural pieces (filled in with solid black ink, whatever the width: user rule, plan (5) revision 3): wl-4, wl-6, wl-12, wl-14, wl-17, wl-20, wl-21, wl-22, wl-23, wl-24, wl-25, wl-26, wl-46, wl-47, wl-50, wl-51, wl-52, wl-53, wl-54, wl-55, wl-56, wl-57, wl-59, wl-60, wl-61, wl-63, wl-64, wl-65, wl-66, wl-68. Each is marked S in the drawing.
- **non-structural walls:** everything else: the thin double lines, the hollow window boxes and the glazing bands (no solid black fill).
- **revision 3 reclassification (user rule):** User rule: any wall filled in with solid black ink is structural, whatever the width of the ink. 0 walls changed class: . A single hairline stroke is not a filled band: wl-36 (ink 23 mm, one line) stays non_structural.
- **old model changes:** The first run had only thin grid-line walls: it missed the piers, the solid U2 walls, the corner blocks and the NW U-shaped block, and it placed the bedroom north walls on the printed sill line (y=2700) as 150 mm walls instead of the 608 mm window boxes.
- **wl-29:** thin_hollow: bounds Living/Dining and steps in from the structural wl-66 (210 mm): width 116 mm is 55% of it
- **wl-41:** thin_hollow: bounds Living/Dining and steps in from the structural wl-63 (232 mm): width 116 mm is 50% of it
- **wl-44:** thin_hollow: bounds Living/Dining and steps in from the structural wl-59 (240 mm): width 116 mm is 48% of it
- **wl-49:** thin_hollow: bounds Living/Dining and steps in from the structural wl-50 (215 mm): width 116 mm is 54% of it

## Door clearance (at least 50 mm)

- **D1 (wl-3):** shifted: clear gap 50 mm to wl-48 at the start and 854 mm to wl-9 at the end (was 32 / 872 mm; offset 100 -> 118, width 710 -> 710 mm)
- **D2 (wl-10):** clear: clear gap 924 mm to host start at the start and 705 mm to wl-5 at the end
- **D8 (wl-68):** clear: clear gap 335 mm to host start at the start and 51 mm to host end at the end

## Length convention

- **length convention:** Along-axis length is grid line to grid line wherever both ends lie on a printed grid line (only x=0, x=3200 and y=0, 2700, 7500, 8900, 13600, 13900 are derived); everywhere else an end is a pier face, jamb or wall end read from the ink and the length is conditional. Cross-axis, a wall is drawn at the measured ink centre (check (m)). Room polygons run along the ink centre-lines. No area convention is printed.

## Dimension chains and which close

- **top (x):** 3200+2800+100+1650+100+1550+2100+1000; sum 12500; overall 12000; partial or not printed. Datum x=0 at the left tick (Bedroom 2 / Store west wall). Does NOT close: the chain sums to 12500 but the printed overall is 12000. The overall tick sits inside the last 1000 segment (its end is at the middle of that segment, x=12000, on the kitchen east wall); hypothesis: the overall is taken to the centre line of the kitchen east wall while the 1000 spans the shaft. Not forced to close. The 100 segments are wall thicknesses (face-to-face convention).
- **bottom (x):** 3200+3200+4100+3000; sum 13500; overall None; partial or not printed. Datum x=0 at the left tick. No overall is printed along the bottom, so the chain cannot be closed; it agrees with the top chain only at x=3200.
- **left (y):** 2700+4800+1400+4700; sum 13600; overall 13600; CLOSES (residual 0). Datum y=0 at the top tick. Closes to the printed left overall 13600 (residual 0). A further 300 reaches the outer glazing line at y=13900 (13600+300 = 13900).
- **right (y):** 6300+4900+2200+300; sum 13700; overall 14900; partial or not printed. Chain starts about 200 mm below the start of the printed overall 14900 (the 200 is not printed). 200+6300+4900+2200 = 13600 matches the left chain, which is how y=200 is inferred. The overall 14900 exceeds 13900 by 1000 (the thick east wall projects beyond the glazing line); that 1000 is not printed. Partial, not forced to close.
- **interior 600 (x):** 600; sum None; overall None; partial or not printed. Partial: width of the Kitchen strip west of the Bath/WC 2 east wall (x=9400 minus 600 = 8800).
- **interior 400 (y):** 400; sum None; overall None; partial or not printed. Partial: gap between the Master Bedroom south wall and the Kitchen bottom wall line (y=6500 minus 400 = 6100).
- **interior 7300 (y):** 7300; sum None; overall None; partial or not printed. Partial: Living Room depth from the Master Bedroom south wall (y=6100) to the inner face of the south glazing; 6100+7300 = 13400, which is 200 mm short of the grid line y=13600 and is consistent with the dimension being face to face (half-thicknesses of the two walls).

## Derived grid lines

| Axis | Position (mm) | Status | Arithmetic | Confirmed by | Note |
|---|---|---|---|---|---|
| x | 0 | derived | datum = left tick of the top and bottom chains | top chain + bottom chain | West wall of Bedroom 2, the Store and Bedroom 3. |
| x | 3200 | derived | 3200 | top chain + bottom chain (two chains) | Wall between the west bedrooms and the Master Bedroom/Living (top tick 3200 and bottom tick 3200). |
| x | 6050 | conditional | 3200 + 2800 + 100/2 = 6050 | single route | Centre-line of the 100 mm Bath/WC 1 west wall (ticks 6000 and 6100 are its two faces). The top chain does not close to the printed 12000. |
| x | 7800 | conditional | 6100 + 1650 + 100/2 = 7800 | single route | Centre-line of the 100 mm Bath/WC 1 / Bath/WC 2 wall (ticks 7750 and 7850 are its faces). |
| x | 9400 | conditional | 7850 + 1550 = 9400 | single route | Bath/WC 2 east wall, taken at the printed tick. |
| x | 8800 | conditional | 9400 - 600 = 8800 | single route | Kitchen west wall and Master Bedroom east wall, from the printed 600 between it and the Bath/WC 2 east wall. |
| x | 11500 | conditional | 9400 + 2100 = 11500 | single route | West face of the lift/stair shaft; end of the Kitchen top French doors. |
| x | 12000 | conditional | printed overall 12000; also 11500 + 1000/2 | overall tick; centre assumption | Kitchen east wall; the printed overall 12000 ends here. Assumes the 1000 shaft is centred on it. |
| x | 12500 | conditional | 11500 + 1000 = 12500 | single route | East face of the shaft; the top chain sums to 12500, not the printed overall 12000 (the overall ends at the shaft centre). |
| x | 6400 | conditional | 3200 + 3200 = 6400 | single route | West column of the Balcony and Living south end. No bottom overall is printed. |
| x | 10500 | conditional | 6400 + 4100 = 10500 | single route | Thick wall between Living/Balcony and the unlabelled space U2. |
| x | 13500 | conditional | 10500 + 3000 = 13500 | single route | Thick east wall of U2; end of the bottom chain. |
| x | 2200 | undetermined | not derivable | none | Store and lobby east line (Store door wall): read from the drawing only. |
| y | 0 | derived | datum = top tick of the left and right overalls | left chain + right overall | Outer top of the plan; top walls are drawn centred on this line (their outer face then projects 100 mm above it). |
| y | 2700 | derived | 2700 | 13600 - (4800+1400+4700) | Bedroom 2 / Master Bedroom north (window) wall and Bath/WC south wall (hypothesis: the Bath/WC south wall is on this line within about 100 mm). |
| y | 7500 | derived | 2700 + 4800 = 7500 | left chain + 13600 - (1400+4700) | Bedroom 2 south wall / Store top wall. |
| y | 8900 | derived | 7500 + 1400 = 8900 | left chain + 13600 - 4700 | Store bottom wall / Bedroom 3 north wall. |
| y | 13600 | derived | 8900 + 4700 = 13600 | chain closes to the printed overall 13600 | South glazing line of Bedroom 3 and Living (printed left overall 13600). |
| y | 13900 | derived | 13600 + 300 = 13900 | left chain + right chain | South glazing line of the Balcony and U2 (the left chain 13600+300 and the right chain 200+6300+4900+2200+300 both reach 13900). |
| y | 14900 | conditional | printed overall 14900 | single route | South end of the east wall of U2 (right overall 14900 from y=0); 1000 beyond the glazing line. |
| y | 6500 | conditional | 200 + 6300 = 6500 | single route | Kitchen bottom wall / top wall of U2. The right chain starts at an unprinted 200. |
| y | 11400 | conditional | 6500 + 4900 = 11400; also 13600 - 2200 | two routes sharing the right chain | Top edge of the Balcony. The two routes both depend on the right chain. |
| y | 6100 | conditional | 6500 - 400 = 6100 | single route | Master Bedroom south wall. |
| y | 1400 | undetermined | not derivable | none | South wall of the lift/stair shaft: read from the drawing only. |

## Scale fit

- **scale_mm_per_px:** 23.15 mm per pixel (x 23.13, y 23.17), spread 0.68% over 17 segments, confidence 0.86, from the tick fit; residual of the top tick span against the printed 12000: -9.5 mm.
- **Fit summary:** scale_mm_per_px_x = 23.13; scale_mm_per_px_y = 23.17; scale_mm_per_px = 23.15; spread_pct = 0.6773; n_segments = 17; x0_px = 88.66; y0_px = 88.33; confidence = 0.8645; tick_span_residual_mm_x = -9.52; skew_x_px_top_minus_bottom = 2.085; skew_y_px_right_minus_left = 3.27

## Automated checks

| Check | Result |
|---|---|
| (a) endpoints on grid lines or on another wall | Ends that are not on a printed grid line are read from the ink and are conditional (see each wall assumption). |
| (b) duplicate / overlapping walls | PASS: no overlapping pairs |
| (c) dangling endpoints | FREE ENDS (15): door jambs, the nib at the Balcony west wall, shaft posts and wall stubs; none is closed by an invented wall; connection tolerance is half of each wall thickness plus 30 mm: wl-44(7041,6075), wl-49(7826,6075), wl-20(9400,6415), wl-51(14188,6440), wl-14(12388,82), wl-54(-598,2312), wl-42(3100,7597), wl-36(2210,7596), wl-62(2122,8233), wl-41(3095,8800), wl-64(5681,13925), wl-66(6385,13925), wl-67(6385,11115), wl-24(10498,13965), wl-26(13494,15008) |
| (d) openings fit their walls | PASS: all 13 wall-hosted openings fit |
| (f) door plausibility | PASS: no door joins two bedrooms. All six bedroom, store and bath doors are read from a crop; D3 to D6 stand on open boundaries (no wall line along the gap). |
| (i1) room edges covered by a wall or an open boundary | PASS: every room polygon edge lies on a wall or on a recorded open boundary |
| (i2) unmodelled ink runs | run by the reverse scan of overlay_check; its result and the resolution of each run are in the Drawing verification section. |
| (j) wall existence (ink coverage) | PASS: every scored wall has ink within tolerance on at least half of its samples. Hollow boxes are not scored by the census; the overlay stage scores them. Coverage: wl-3 1.00, wl-4 1.00, wl-5 1.00, wl-6 1.00, wl-8 1.00, wl-9 1.00, wl-10 1.00, wl-12 1.00, wl-14 1.00, wl-17 1.00, wl-18 1.00, wl-20 1.00, wl-21 1.00, wl-22 1.00, wl-23 1.00, wl-24 1.00, wl-25 1.00, wl-26 1.00, wl-29 1.00, wl-33 1.00, wl-34 1.00, wl-35 1.00, wl-36 1.00, wl-39 1.00, wl-41 1.00, wl-42 1.00, wl-44 1.00, wl-46 1.00, wl-47 1.00, wl-48 1.00, wl-49 1.00, wl-50 1.00, wl-51 1.00, wl-52 1.00, wl-53 1.00, wl-54 1.00, wl-55 1.00, wl-56 1.00, wl-57 1.00, wl-58 1.00, wl-59 1.00, wl-60 1.00, wl-61 1.00, wl-63 1.00, wl-64 1.00, wl-65 1.00, wl-66 1.00, wl-67 1.00, wl-68 1.00 |
| (k) short ends | Free ends are listed under (c). The Master Bedroom south wall stops at the west jamb of D3 and begins again east of its leaf; the Bedroom 2 and Bedroom 3 south and north walls stop at the jambs of D4 and D6 (open boundaries). |
| (m) thick walls versus grid lines | cross-axis centre-lines moved to the ink centre: wl-35 -45 mm; wl-34 -60 mm; wl-33 -70 mm; wl-36 +70 mm. Thickness replaced by the measured width where it differed by more than 50 mm: wl-48 135 -> 230; wl-12 125 -> 200; wl-53 209 -> 280; wl-55 193 -> 280; wl-42 115 -> 190. Room polygons run on the ink centre-lines. |
| (n) balcony access | PASS: the Balcony is open to Living/Dining across its north edge, the open boundary O2 (100 DROP printed; the line at the drop is not a wall, user rule, plan 5 revision 4); the Balcony is reached from outside through the main door D8. |
| (o) kitchen access | marked_open_boundary: the Kitchen opens to Living/Dining across O1 (x 9400-10380, a thin single line with a 100 DROP leader); no door or wall is drawn there and none was invented. |
| (p) bath louvre | PASS: Bath/WC 1 louvre W9 (slat ticks seen); Bath/WC 2 louvre W3 (dashes seen, no slat ticks, so confidence 0.45). No louvre_not_seen. |
| (q) main door | PASS: exactly one entrance_door (D8) joining the Balcony and U2; leaves 850 mm (large, swings in towards the Balcony, hinge south) and 425 mm each (gate pair, swings out into U2); no DROP is printed at the door. It does not open off the living area directly: the Balcony stands between D8 and Living/Dining (assumption, see the review notes). |
| (r) floor drops (drop_marked) | three 100 DROP leaders seen, all recorded: at the Bath/WC 1 door D1, on the Kitchen / Living-Dining boundary O1 and on the Balcony / Living-Dining boundary O2; all are printed values. No other drop is printed. |
| (s) drying rack | no_rack_seen: this plan has no service yard, so there is no strip to search; nothing outside the flat boundary resembles a rack. |
| (t) solid-block sweep (solid_block_uncovered) | PASS: 14 solid blocks of at least 100 mm were found over the plan (4 x 4 px erosion, 2 px growth); 14 are covered by a modelled wall, 0 unresolved. Each block is listed under sweep; the large merged block 3 is the run of thick U2 walls and the glazing lines between the piers. |
| (u) door clearance (door_clearance) | PASS: 3 wall-hosted door-like openings checked, 1 adjusted, 0 clearance_unmet; smallest clear gap after the fix 50 mm (rule: at least 50 mm). D3 to D6 sit on open boundaries and have no host wall: their jambs are the gap ends, placed from the ink. |
| (v) inset walls (inset_wall) | 4 inset walls: wl-29, wl-41, wl-44, wl-49 (thin_solid_black: none; thin_hollow: wl-44, wl-49, wl-41, wl-29). They stay non_structural. Living and boundary walls tested and not inset: wl-8 (width 139 mm, fill 0.33); wl-42 (width 185 mm, fill 0.38); wl-35 (width 116 mm, fill 0.40); wl-34 (width 139 mm, fill 0.33); wl-33 (width 116 mm, fill 0.40); wl-67 (width 110 mm, fill n/a). |
| (w) corner continuation (free_end_turn) | not automated in this module: the free ends listed under (c) were looked at on the crops (door jambs, the Balcony nib, shaft posts, the Store stub, the west-wall piers); the overlay reverse scan with its 150 mm limit at free ends is the in-code test. |
| (x) pinned threshold | not applicable: the class no longer uses a width threshold (user rule: filled solid black ink is structural, whatever the width), so there is no threshold to pin. The natural-break value 180 mm is kept for information only. |

## Topology: touching rooms and shared walls

| Room pair | Shared wall pieces |
|---|---|
| Balcony / Living/Dining | 2 wall piece(s): wl-29 (1390), wl-66 (1150); sum 2540 mm |
| Balcony / Unlabelled space (U2) | 2 wall piece(s): wl-24 (1344), wl-68 (1236); sum 2580 mm |
| Bath/WC 1 / Bath/WC 2 | 1 wall piece(s): wl-9 (2595); sum 2595 mm |
| Bath/WC 1 / Master Bedroom | 2 wall piece(s): wl-3 (1750), wl-48 (530); sum 2280 mm |
| Bath/WC 2 / Kitchen | 3 wall piece(s): wl-5 (499), wl-10 (2459), wl-47 (394); sum 3352 mm |
| Bath/WC 2 / Master Bedroom | 1 wall piece(s): wl-4 (1021); sum 1021 mm |
| Bedroom 2 / Living/Dining | 1 wall piece(s): wl-42 (1464); sum 1464 mm |
| Bedroom 2 / Master Bedroom | 3 wall piece(s): wl-57 (926), wl-58 (1553), wl-59 (927); sum 3406 mm |
| Bedroom 2 / Store | 2 wall piece(s): wl-36 (2150), wl-60 (1227); sum 3377 mm |
| Bedroom 3 / Living/Dining | 2 wall piece(s): wl-41 (3798), wl-63 (1043); sum 4841 mm |
| Bedroom 3 / Store | 1 wall piece(s): wl-39 (2192); sum 2192 mm |
| Kitchen / Living/Dining | 1 wall piece(s): wl-20 (728); sum 728 mm |
| Kitchen / Master Bedroom | 2 wall piece(s): wl-18 (2744), wl-50 (910); sum 3654 mm |
| Kitchen / Unlabelled space (U1) | 2 wall piece(s): wl-12 (1296), wl-53 (1009); sum 2305 mm |
| Kitchen / Unlabelled space (U2) | 1 wall piece(s): wl-21 (1524); sum 1524 mm |
| Living/Dining / Master Bedroom | 2 wall piece(s): wl-44 (3851), wl-49 (846); sum 4697 mm |
| Living/Dining / Store | 1 wall piece(s): wl-62 (676); sum 676 mm |
| Living/Dining / Unlabelled space (U2) | 1 wall piece(s): wl-23 (4945); sum 4945 mm |
| Kitchen / Living/Dining | open boundary O1 (no wall), about 980 mm, plus the L-shaped block |
| Balcony / Living/Dining | open boundary O2 (no wall), about 3940 mm at the 100 DROP; the Balcony west wall wl-29, the pier wl-66 and the U2 wall wl-68 are the side walls |

## Changes against the first run (user corrections)

- **wl-30 (removed):** removed: no wall of the rebuilt model lies on its line
- **D1 (Changed):** single_swing_door Bath/WC 1 door onto the Master Bedroom; the leaf stands north at the west jamb and the arc sweeps over Bath/WC
- **O2 (New):** balcony_boundary Open boundary between the Balcony and Living/Dining at a 100 DROP (the earlier runs read it as the wall wl-30 

## Open boundaries

- **Kitchen / Living-Dining (O1):** No door and no wall between x 9400 and 10380 on y about 6330; a thin single line with a 100 DROP leader marks it.
- **Balcony / Living-Dining (O2):** No wall and no door between x 6440 and 10380 on y 11385: the line there carries a 100 DROP leader, so by the user rule it is a level change and the boundary stays open (kind balcony_boundary).
- **Door gaps D3 to D6:** The doors D3 (Master Bedroom), D4 (Bedroom 2), D5 (Store) and D6 (Bedroom 3) stand on open boundaries: no wall line is drawn along the gaps.
- **Lobby:** The lobby in front of the Store and Bedroom doors (x 2122 to 3100, y 7526 to 8856) has no east wall and is part of Living/Dining.
- **Open yard north of Bedroom 2 and the Master Bedroom:** The area x 0 to 5990, y 0 to 2312 is blank apart from the dimension extension lines and one thin line along y about 50; it is not a room, and the casement banks W1 and W2 open onto it.

## Doors and openings

| Opening | Kind | Wall | Joins | Offset (mm) | Width (mm) | Swing into | Hinge | Swing basis | Plausibility | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | wl-3 | Bath/WC 1 <-> Master Bedroom | 118 | 710 | Bath/WC 1 | start | read_from_crop | plausible | 0.50 |
| D2 | single_swing_door | wl-10 | Bath/WC 2 <-> Kitchen | 924 | 720 | Bath/WC 2 | start | read_from_crop | plausible | 0.50 |
| D3 | single_swing_door |  | Master Bedroom <-> Living/Dining | 0 | 785 | Master Bedroom | end | read_from_crop | plausible: door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.45 |
| D4 | single_swing_door |  | Bedroom 2 <-> Living/Dining | 0 | 810 | Bedroom 2 | end | read_from_crop | plausible: door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.45 |
| D5 | single_swing_door |  | Store <-> Living/Dining | 0 | 707 | Living/Dining | end | read_from_crop | plausible: door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.45 |
| D6 | single_swing_door |  | Bedroom 3 <-> Living/Dining | 0 | 810 | Bedroom 3 | end | read_from_crop | plausible: door onto Living/Dining; on an open boundary (door_on_open_boundary) | 0.45 |
| D7 | casement_window | wl-11 | Kitchen <-> Exterior | 57 | 1690 |  |  |  | n/a (window or sliding wall) | 0.40 |
| D8 | entrance_door | wl-68 | Balcony <-> Unlabelled space (U2) | 335 | 850 | Balcony | end | read_from_crop | plausible: main door from the Balcony to the common space U2 (the Balcony is open to Living/Dining across the open boundary O2) | 0.40 |
| O1 | kitchen_boundary |  | Kitchen <-> Living/Dining | 0 | 980 |  |  |  | open boundary: no door drawn (HDB rule 1) | 0.40 |
| O2 | balcony_boundary |  | Balcony <-> Living/Dining | 0 | 3940 |  |  |  | open boundary at a floor drop: no wall and no door drawn (user rule) | 0.40 |
| W1 | casement_window | wl-1 | Bedroom 2 <-> Exterior | 40 | 2260 |  |  |  | n/a (window or sliding wall) | 0.40 |
| W2 | casement_window | wl-2 | Master Bedroom <-> Exterior | 320 | 2300 |  |  |  | n/a (window or sliding wall) | 0.40 |
| W3 | louvre_window | wl-45 | Bath/WC 2 <-> Exterior | 0 | 555 |  |  |  | n/a (window or sliding wall) | 0.45 |
| W4 | window | wl-31 | Living/Dining <-> Exterior | 40 | 2200 |  |  |  | n/a (window or sliding wall) | 0.35 |
| W5 | window | wl-32 | Bedroom 3 <-> Exterior | 40 | 2880 |  |  |  | n/a (window or sliding wall) | 0.35 |
| W6 | window | wl-28 | Balcony <-> Exterior | 50 | 3780 |  |  |  | n/a (window or sliding wall) | 0.35 |
| W7 | window | wl-25 | Unlabelled space (U2) <-> Exterior | 5287 | 913 |  |  |  | n/a (window or sliding wall) | 0.40 |
| W8 | window | wl-27 | Unlabelled space (U2) <-> Exterior | 50 | 2644 |  |  |  | n/a (window or sliding wall) | 0.30 |
| W9 | louvre_window | wl-8 | Bath/WC 1 <-> Exterior | 0 | 1153 |  |  |  | n/a (window or sliding wall) | 0.50 |

- **expected doors present:** Master Bedroom D3 (and D1 to Bath/WC 1); Bedroom 2 D4; Store D5; Bedroom 3 D6; Bath/WC 2 D2; main door D8 with gate; Balcony: no door, open boundary O2 at its drop. Kitchen: no door (open boundary O1); its casement window D7 opens north.
- **NOT identified / uncertain:** Which side of D8 is the flat: the main door is taken to be D8 because it is the only door in the thick outer wall; the Balcony stands between it and the Living/Dining. The window banks W1, W2 and the Kitchen D7 are casement windows by the symbol only; all offsets and widths are estimated from crops (position_basis = estimated).

## Openings whose kind or swing rests on weak evidence

| Opening | Kind | Kind alternative | Kind basis | Swing basis | Confidence | Note |
|---|---|---|---|---|---|---|
| D1 | single_swing_door |  | tests 1-2: bare arc on a bare gap, one leaf of about 710 mm, leaf standing north at the west jamb; 100 DROP leader below it | read_from_crop | 0.50 | Bath/WC 1 door onto the Master Bedroom; the leaf stands north at the west jamb and the arc sweeps over Bath/WC 1; 100 DROP printed. |
| D2 | single_swing_door |  | tests 1-2: bare arc on a bare gap, one leaf of about 720 mm, leaf standing west at the north jamb | read_from_crop | 0.50 | Bath/WC 2 door onto the Kitchen strip; the leaf stands west at the north jamb and the arc sweeps over Bath/WC 2. |
| D3 | single_swing_door |  | tests 1-2: bare arc, leaf of about 790 mm standing north at the east jamb; no wall line along the gap | read_from_crop | 0.45 | Master Bedroom door in its south wall; the wall ends at the west jamb and again east of the leaf, and the gap is an open boundary; the arc sweeps into the Master Bedroom. |
| D4 | single_swing_door |  | tests 1-2: bare arc, leaf of about 830 mm standing north at the east jamb; no wall line along the gap | read_from_crop | 0.45 | Bedroom 2 door at the east end of its south wall; the arc sweeps into Bedroom 2 (door on an open boundary). |
| D5 | single_swing_door |  | tests 1-2: bare arc, leaf of about 700 mm lying east along the line y=8233 at the south jamb; no wall line along the gap | read_from_crop | 0.45 | Store door on its east line: the hinge is at the south jamb and the leaf opens east into the lobby (the arc sweeps into Living/Dining). |
| D6 | single_swing_door |  | tests 1-2: bare arc, leaf of about 810 mm standing south at the east jamb; no wall line along the gap | read_from_crop | 0.45 | Bedroom 3 door at the east end of its north wall: the hinge is at the east jamb and the arc sweeps south into Bedroom 3 (door on an open boundary). |
| D7 | casement_window | bifold_door | tests 1, 2, 4, 5 (regression list: plan 5 D7): three equal arcs of about 560 mm on a framed box with a sill line; the Kitchen has no other window |  | 0.40 | Casement window (the first run read it as a bifold door): three bays on a framed box, swinging out; a fixed panel of about 260 mm stands beside the shaft. |
| D8 | entrance_door |  | HDB rule 3: one large leaf swinging west into the Balcony (hinge on the south jamb) plus a double-leaf gate of two small leaves swinging east into U2; no DROP printed at the door | read_from_crop | 0.40 | Main door with gate on the thick U2 west wall: the large leaf swings in towards the Balcony, the gate pair swings out into U2. |
| O1 | kitchen_boundary |  | HDB rule 1: the Kitchen side towards Living/Dining has no door and no wall between x 9400 and 10380: a thin single line with a 100 DROP leader marks it |  | 0.40 | Open boundary between the Kitchen and Living/Dining: no door, no wall; the Kitchen is entered from Living/Dining; 100 DROP printed. |
| O2 | balcony_boundary |  | user rule: where the Balcony boundary has a drop, the line at the drop is not a wall and the boundary stays open; the Balcony north edge (x 6440-10380, y 11385) carries a 100 DROP leader over a thin double line, no leaf, no arc |  | 0.40 | Open boundary between the Balcony and Living/Dining at a 100 DROP (the earlier runs read it as the wall wl-30 with a glazed sliding door D9; both are removed). No wall and no door are drawn there. |
| W1 | casement_window | window | tests 1, 2, 4, 5: two bays of casement arcs of about 560 mm on a framed box with a double sill line (regression: the same symbol is the confirmed Kitchen casement) |  | 0.40 | Casement bank in the Bedroom 2 north wall: two boxes of two arcs each, swinging out onto the open yard. |
| W2 | casement_window | window | tests 1, 2, 4, 5: two boxes of two casement arcs of about 570 mm on a framed box with a double sill line |  | 0.40 | Casement bank in the Master Bedroom north wall (a small fixed panel of about 300 mm stands at its west end and is not modelled as an opening). |
| W3 | louvre_window |  | HDB rule 2: a white box with a dashed centre line in the Bath/WC 2 top wall (dashes seen, no slat ticks) |  | 0.45 | Louvre window of Bath/WC 2 in its top wall (the first run read it as a window). |
| W4 | window |  | several parallel glazing lines between two piers with dashed catches: a sliding window |  | 0.35 | Sliding window on the Living/Dining south wall. |
| W5 | window |  | several parallel glazing lines between two piers: a sliding window |  | 0.35 | Sliding window on the Bedroom 3 south wall. |
| W6 | window |  | several parallel glazing lines with dashed catches at both ends: a sliding window |  | 0.35 | Sliding window on the Balcony south wall. |
| W7 | window |  | a white slot in the thick east wall with a blue-edged side line: a window |  | 0.40 | Window slot in the U2 east wall. |
| W8 | window |  | several parallel glazing lines with dashed catches: a sliding window |  | 0.30 | Sliding window on the U2 south wall. |
| W9 | louvre_window |  | HDB rule 2: a narrow box with slat ticks on the Bath/WC 1 west wall (slat ticks seen) |  | 0.50 | Louvre window of Bath/WC 1: a narrow slatted box in the upper part of its west wall. |

## Missing dimensions that would resolve each conditional / undetermined row

- **wl-1 (conditional):** printed position of the wall ends
- **wl-2 (conditional):** printed position of the wall ends
- **wl-3 (conditional):** printed position of the wall ends
- **wl-4 (conditional):** printed position of the wall ends
- **wl-5 (conditional):** printed position of the wall ends
- **wl-6 (conditional):** printed position of the wall ends
- **wl-8 (conditional):** printed position of the wall ends
- **wl-9 (conditional):** printed position of the wall ends
- **wl-10 (conditional):** printed position of the wall ends
- **wl-11 (conditional):** printed position of the wall ends
- **wl-12 (conditional):** printed position of the wall ends
- **wl-14 (conditional):** printed position of the wall ends
- **wl-17 (conditional):** printed position of the wall ends
- **wl-18 (conditional):** printed position of the wall ends
- **wl-20 (conditional):** printed position of the wall ends
- **wl-21 (conditional):** printed position of the wall ends
- **wl-22 (conditional):** printed position of the wall ends
- **wl-23 (conditional):** printed position of the wall ends
- **wl-24 (conditional):** printed position of the wall ends
- **wl-25 (conditional):** printed position of the wall ends
- **wl-26 (conditional):** printed position of the wall ends
- **wl-27 (conditional):** printed position of the wall ends
- **wl-28 (conditional):** printed position of the wall ends
- **wl-29 (conditional):** printed position of the wall ends
- **wl-31 (conditional):** printed position of the wall ends
- **wl-32 (conditional):** printed position of the wall ends
- **wl-33 (conditional):** printed position of the wall ends
- **wl-34 (conditional):** printed position of the wall ends
- **wl-35 (conditional):** printed position of the wall ends
- **wl-36 (conditional):** printed position of the wall ends
- **wl-39 (conditional):** printed position of the wall ends
- **wl-41 (conditional):** printed position of the wall ends
- **wl-42 (conditional):** printed position of the wall ends
- **wl-44 (conditional):** printed position of the wall ends
- **wl-45 (conditional):** printed position of the wall ends
- **wl-46 (conditional):** printed position of the wall ends
- **wl-47 (conditional):** printed position of the wall ends
- **wl-48 (conditional):** printed position of the wall ends
- **wl-49 (conditional):** printed position of the wall ends
- **wl-50 (conditional):** printed position of the wall ends
- **wl-51 (conditional):** printed position of the wall ends
- **wl-52 (conditional):** printed position of the wall ends
- **wl-53 (conditional):** printed position of the wall ends
- **wl-54 (conditional):** printed position of the wall ends
- **wl-55 (conditional):** printed position of the wall ends
- **wl-56 (conditional):** printed position of the wall ends
- **wl-57 (conditional):** printed position of the wall ends
- **wl-58 (conditional):** printed position of the wall ends
- **wl-59 (conditional):** printed position of the wall ends
- **wl-60 (conditional):** printed position of the wall ends
- **wl-61 (conditional):** printed position of the wall ends
- **wl-62 (conditional):** printed position of the wall ends
- **wl-63 (conditional):** printed position of the wall ends
- **wl-64 (conditional):** printed position of the wall ends
- **wl-65 (conditional):** printed position of the wall ends
- **wl-66 (conditional):** printed position of the wall ends
- **wl-67 (conditional):** printed position of the wall ends
- **wl-68 (conditional):** printed position of the wall ends

## Area reconciliation

- **printed floor area:** The caption reads 5-ROOM MODEL A (STAIR) and SCALE 1:100; no floor-area figure or convention is printed, so no reconciliation is possible (not verified).
- **computed room areas:** Bath/WC 1 4.7 m2; Bath/WC 2 4.1 m2; Master Bedroom 17.7 m2; Bedroom 2 14.1 m2; Store 2.8 m2; Bedroom 3 14.2 m2; Living/Dining 47.0 m2; Kitchen 17.6 m2; Balcony 8.7 m2; Unlabelled space (U1) 1.3 m2; Unlabelled space (U2) 21.7 m2. Polygons run along the ink centre-lines.

## Model and effort path

- **model path:** The first run of this plan used claude-sonnet-5-5 in small sequential passes (effort applied by prompt; the endpoint rejects reasoning_effort and caps output at 4096 tokens). It was not re-run in this revision, so no new model call was made. The walls, openings and rooms were rebuilt from enlarged crops, the fitted scale, an ink-run table and a measured census; old wall ids were kept where an old wall lay on the same line, new ids start at wl-69.

## Drawing verification

### Render log

| Render | Label overlaps | Walls drawn / table | Openings drawn / table | Swing guessed | Swing mismatch | Visual problems | Action |
|---|---|---|---|---|---|---|---|
| 1 | 0 | 58 / 58 | 19 / 19 | 0 | 0 | Revision 4 render: the Balcony north edge shows the dotted purple open boundary O2 with no wall and no door; the six thin solid black bars stay structural with S markers; the four inset walls (wl-29, wl-41, wl-44, wl-49) keep the I marker. Nothing else moved. | Accepted after 1 render (revision 4, user rule: the line at a drop is not a wall; wl-30 and D9 removed, open boundary O2 added). Counts equal the tables (58 walls, 19 openings, 30 structural markers, 4 inset markers); every drawn door keeps at least 50 mm clearance where it has a host wall. [mismatch ids: none] |

### Overlay registration against the source image

52 walls scored, 6 not scored (undetermined or diagonal), 0 flagged (off register or no ink), 9 unmodelled ink runs listed. Largest median offset among scored walls: 203 mm.

| Wall | Type | Inset | Status | Thick (mm) | Median offset (mm) | Max offset (mm) | Ink coverage | Tolerance (mm) | Flag | Note |
|---|---|---|---|---|---|---|---|---|---|---|
| wl-24 | structural |  | conditional | 254 | -34 | 115 | 1.00 | 196 | ok |  |
| wl-28 | non_structural |  | conditional | 270 |  |  |  | 205 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-68 | structural |  | conditional | 205 | -16 | 109 | 1.00 | 172 | ok |  |
| wl-3 | non_structural |  | conditional | 110 | 22 | 93 | 1.00 | 125 | ok |  |
| wl-6 | structural |  | conditional | 185 | -24 | 104 | 1.00 | 162 | ok |  |
| wl-8 | non_structural |  | conditional | 135 | 42 | 42 | 1.00 | 137 | ok |  |
| wl-9 | non_structural |  | conditional | 135 | 27 | 119 | 0.98 | 137 | ok |  |
| wl-48 | non_structural |  | conditional | 230 | 42 | 181 | 0.90 | 184 | ok |  |
| wl-4 | structural |  | conditional | 232 | -24 | 116 | 1.00 | 186 | ok |  |
| wl-5 | non_structural |  | conditional | 110 | -18 | 18 | 1.00 | 125 | ok |  |
| wl-10 | non_structural |  | conditional | 110 | -36 | 57 | 1.00 | 124 | ok |  |
| wl-45 | non_structural |  | conditional | 185 |  |  |  | 162 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-46 | structural |  | conditional | 185 | -24 | 24 | 1.00 | 162 | ok |  |
| wl-47 | structural |  | conditional | 232 | -22 | 126 | 1.00 | 185 | ok |  |
| wl-1 | non_structural |  | conditional | 608 |  |  |  | 374 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-35 | non_structural |  | conditional | 100 | 46 | 46 | 1.00 | 119 | ok |  |
| wl-36 | non_structural |  | conditional | 116 | -3 | 20 | 1.00 | 128 | ok |  |
| wl-42 | non_structural |  | conditional | 190 | -39 | 62 | 1.00 | 164 | ok |  |
| wl-57 | structural |  | conditional | 240 | -13 | 13 | 1.00 | 189 | ok |  |
| wl-58 | non_structural |  | conditional | 115 | -27 | 77 | 1.00 | 127 | ok |  |
| wl-59 | structural |  | conditional | 240 | -13 | 24 | 1.00 | 189 | ok |  |
| wl-60 | structural |  | conditional | 254 | -24 | 35 | 1.00 | 196 | ok |  |
| wl-32 | non_structural |  | conditional | 235 |  |  |  | 187 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-33 | non_structural |  | conditional | 100 | -45 | 45 | 1.00 | 119 | ok |  |
| wl-41 | non_structural | thin_hollow | conditional | 145 | -34 | 57 | 1.00 | 142 | ok |  |
| wl-61 | structural |  | conditional | 254 | -23 | 23 | 1.00 | 196 | ok |  |
| wl-63 | structural |  | conditional | 232 | -23 | 23 | 1.00 | 185 | ok |  |
| wl-26 | structural |  | conditional | 231 | -23 | 69 | 1.00 | 185 | ok |  |
| wl-51 | structural |  | conditional | 215 | 17 | 110 | 1.00 | 177 | ok |  |
| wl-54 | structural |  | conditional | 213 | -19 | 97 | 1.00 | 176 | ok |  |
| wl-55 | structural |  | conditional | 280 | -26 | 118 | 1.00 | 209 | ok |  |
| wl-56 | structural |  | conditional | 191 | -21 | 125 | 1.00 | 165 | ok |  |
| wl-11 | non_structural |  | conditional | 290 | 45 | 45 | 1.00 | 215 | ok |  |
| wl-17 | structural |  | conditional | 115 | -25 | 60 | 1.00 | 127 | ok |  |
| wl-21 | structural |  | conditional | 215 | -6 | 110 | 1.00 | 177 | ok |  |
| wl-20 | structural |  | conditional | 210 | 7 | 97 | 1.00 | 175 | ok |  |
| wl-23 | structural |  | conditional | 205 | -16 | 99 | 1.00 | 172 | ok |  |
| wl-29 | non_structural | thin_hollow | conditional | 110 | -16 | 16 | 1.00 | 124 | ok |  |
| wl-31 | non_structural |  | conditional | 235 |  |  |  | 187 | not scored | the whole wall span is covered by opening(s): nothing to score |
| wl-64 | structural |  | conditional | 208 | -17 | 98 | 1.00 | 173 | ok |  |
| wl-65 | structural |  | conditional | 115 | 10 | 10 | 1.00 | 127 | ok |  |
| wl-66 | structural |  | conditional | 210 | -16 | 120 | 1.00 | 174 | ok |  |
| wl-67 | non_structural |  | conditional | 110 | -16 | 16 | 1.00 | 124 | ok |  |
| wl-2 | non_structural |  | conditional | 608 | 203 | 203 | 1.00 | 374 | ok |  |
| wl-18 | non_structural |  | conditional | 100 | 45 | 128 | 0.98 | 119 | ok |  |
| wl-44 | non_structural | thin_hollow | conditional | 116 | 35 | 151 | 0.97 | 128 | ok |  |
| wl-49 | non_structural | thin_hollow | conditional | 116 | 35 | 58 | 1.00 | 128 | ok |  |
| wl-50 | structural |  | conditional | 215 | -1 | 103 | 1.00 | 177 | ok |  |
| wl-34 | non_structural |  | conditional | 100 | -55 | 55 | 1.00 | 119 | ok |  |
| wl-39 | non_structural |  | conditional | 116 | 34 | 140 | 0.98 | 128 | ok |  |
| wl-62 | non_structural |  | conditional | 105 | -55 | 72 | 1.00 | 122 | ok |  |
| wl-12 | structural |  | conditional | 200 | 30 | 157 | 0.96 | 169 | ok |  |
| wl-14 | structural |  | conditional | 115 | 42 | 108 | 0.76 | 127 | ok |  |
| wl-52 | structural |  | conditional | 140 | -4 | 20 | 1.00 | 140 | ok |  |
| wl-53 | structural |  | conditional | 280 | -8 | 286 | 0.95 | 210 | ok |  |
| wl-22 | structural |  | conditional | 215 | -6 | 110 | 1.00 | 177 | ok |  |
| wl-25 | structural |  | conditional | 231 | -11 | 116 | 1.00 | 185 | ok |  |
| wl-27 | non_structural |  | conditional | 270 |  |  |  | 205 | not scored | the whole wall span is covered by opening(s): nothing to score |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 13401 to 14373 at y=84 (971 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 12707 to 13355 at y=270 (647 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x 13702 to 14373 at y=293 (670 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x -917 to -315 at y=7476 (601 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | horizontal x -917 to -269 at y=8890 (647 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 6318 to 7708 at x=3824 (1390 mm); weight single; in Living/Dining |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 5229 to 5808 at x=7826 (579 mm); weight single; in Master Bedroom |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 6341 to 6967 at x=9885 (625 mm); weight single; in Living/Dining |
| unmodelled |  |  |  |  |  |  |  |  | unmodelled_line | vertical y 2332 to 3074 at x=11470 (741 mm); weight single; in Kitchen |

### Overlay flags and how each was resolved

- **Balcony north edge: ink of the removed wall wl-30:** The thin double line at y=11385 is intentionally not modelled (user rule: the line at a drop is not a wall). The reverse scan (grey below 110, runs of at least 600 mm) does not list it. A column probe at ten x positions between 6600 and 10200 finds the line at every position: minimum grey 54 to 72 east of x=8600, 17 at x=8200 and 107 to 116 west of x=7800, so the west part prints lighter and breaks the run below the 600 mm limit. It is the line the user rule refers to and stays unmodelled.
- **wl-30 and D9 (removed, user rule):** The thin double line on the Balcony north edge (y about 11385, x 6385 to 10480) carries a 100 DROP leader. By the user rule a line at a drop is a level change and not a wall, so it is not modelled: the wall wl-30 and the sliding door D9 were removed and the edge is the open boundary O2. The source ink is still there and is listed as unmodelled runs, resolved as the drop line.
- **unmodelled: horizontal x 13401-14373 y=84, x 12707-13355 y=270, x 13702-14373 y=293 (single, outside every room):** Extension and dimension lines of the right-hand chain beyond the shaft, outside the flat boundary. Resolved as dimension lines, not walls.
- **unmodelled: horizontal x -917 to -269 at y=7476 and y=8890 (single, outside every room):** Extension lines of the left-hand dimension chain at the ticks y=7500 and y=8900, outside the flat boundary. Resolved as dimension lines, not walls.
- **unmodelled: vertical y 6318-7708 at x=3824 (1390 mm, Living/Dining):** The extension line of the 7300 dimension (the printed Living Room depth), a thin single line standing beside the printed number. Resolved as a dimension line, not a wall. It was hidden before by the coverage zone of the removed door D9.
- **unmodelled: vertical y 6341-6967 at x=9885 (625 mm, Living/Dining):** The vertical 100 DROP leader text beside the Kitchen boundary O1. Resolved as text, not a wall; the drop itself is recorded on O1. It was hidden before by the coverage zone of the removed door D9.
- **unmodelled: vertical y 5229-5808 at x=7826 (579 mm, Master Bedroom):** The straight leaf of the door D3, standing north at its east jamb; it is the door symbol and not a wall.
- **unmodelled: vertical y 2332-3074 at x=11470 (741 mm, Kitchen):** The west edge of the Kitchen counter and sink run along the Kitchen east wall (fixtures F5 and F6). Resolved as a fixture, not a wall.
- **door swing check coverage:** Only D1, D2 and D8 have a host wall, so only they could be tested in code (all three ok, drawn ink share 0.97, 0.97 and 1.00 against at most 0.47 for any mirror). D3 to D6 stand on open boundaries and the windows and casement banks have no leaf to test: their swings were compared with the crops by eye only, not tested in code.


### Door swing check against the source ink

3 doors checked: 3 ok.

| Opening | Kind | Swing into | Hinge | Swing basis | Ink drawn | Ink mirror side | Ink other hinge | Ink both mirrored | Flag |
|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | Bath/WC 1 | start | read_from_crop | 0.97 | 0.22 | 0.31 | 0.39 | ok |
| D2 | single_swing_door | Bath/WC 2 | start | read_from_crop | 0.97 | 0.08 | 0.25 | 0.08 | ok |
| D8 | entrance_door | Balcony | end | read_from_crop | 1.00 | 0.47 | 0.28 | 0.42 | ok |

## Placeholders

- **drawing placeholders:** Orange walls are conditional (no wall end is on two printed routes except where noted). The unlabelled spaces U1 and U2 are hypotheses. Door and window positions are estimated. Window boxes are drawn hollow at their drawn outer width.
