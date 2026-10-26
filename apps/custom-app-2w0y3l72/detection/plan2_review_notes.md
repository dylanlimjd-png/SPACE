# Review notes — floorplan HDB (2).png

> **LOW-CONFIDENCE WARNING (overall_confidence = 0.25).** 0.25: the minimum room confidence, set by Living/Dining, Unlabelled space (U1).


> Revision 2 (user corrections applied): wl-2 (Changed); wl-5 (Changed); wl-50 (New); wl-51 (New); wl-1 (Changed); wl-3 (Changed); wl-4 (Changed); wl-46 (New); wl-47 (New); wl-48 (New); wl-49 (New); wl-42 (Changed); wl-43 (Changed); wl-19 (Changed); wl-45 (New); wl-16 (Changed); wl-44 (New); wl-6, wl-7 (removed); D1 (Changed); D2 (Changed); D3 (Changed); D4 (Changed); D5 (Changed); D7 (Changed); D8 (Changed); D9 (New); D10 (New); D11 (New); W1 (Changed); W3 (Changed); W4 (Changed); W7 (New); W8 (New); W9 (New); W10 (New)

## Wall table (49 walls: 31 conditional, 11 derived, 7 undetermined; one row per wall, sorted by first room)

| Floor plan | Room(s) | Wall | Length (mm) | Status | Measurement / arithmetic | Rationale / notes | x1,y1 → x2,y2 | Thick | Openings | Rev |
|---|---|---|---|---|---|---|---|---|---|---|
| floorplan HDB (2).png | Balcony, Exterior | wl-8 | 3800 | derived | 3800 (printed, top chain segment 1) | Top edge of the Balcony (railing with a window strip). | 0,4200 → 3800,4200 | 100 |  |  |
| floorplan HDB (2).png | Balcony, Exterior | wl-9 | 1700 | derived | 5900 - 4200 = 1700 (printed 1700) | Thick left wall of the Balcony. | 0,4200 → 0,5900 | 250 |  |  |
| floorplan HDB (2).png | Balcony, Study | wl-10 | 1700 | derived | 5900 - 4200 = 1700 (printed 1700) | Thick wall between the Balcony and the Study. | 3800,4200 → 3800,5900 | 250 |  |  |
| floorplan HDB (2).png | Balcony, Living/Dining | wl-11 | 3800 | derived | 3800 (printed, top chain segment 1) | Thin balcony edge (50 mm drop) between the Balcony and Living/Dining. | 0,5900 → 3800,5900 | 50 | D11 |  |
| floorplan HDB (2).png | Bath/WC 1, Living/Dining | wl-24 | 1700 | conditional | 9300 - 7600 = 1700 (printed 1700) | Left wall of Bath/WC 1. **Assumption:** x=8700 rests on the interior chain. | 8700,7600 → 8700,9300 | 100 |  |  |
| floorplan HDB (2).png | Bath/WC 1, Bath/WC 2 | wl-26 | 2500 | conditional | 11200 - 8700 = 2500 (printed 2500) | Wall between Bath/WC 1 and Bath/WC 2. **Assumption:** x=8700 and x=11200 rest on the interior chain. | 8700,9300 → 11200,9300 | 100 |  |  |
| floorplan HDB (2).png | Bath/WC 1, Unlabelled space (U1) | wl-27 | 1700 | conditional | 9300 - 7600 = 1700 (printed 1700) | Right wall of Bath/WC 1 (the part below y=8700 faces an open area). **Assumption:** x=11200 rests on the interior chain. | 11200,7600 → 11200,9300 | 100 | W7 |  |
| floorplan HDB (2).png | Bath/WC 2, Living/Dining | wl-25 | 1600 | conditional | 10900 - 9300 = 1600 (printed 1600) | Left wall of Bath/WC 2. **Assumption:** x=8700 as ba1_left. | 8700,9300 → 8700,10900 | 100 |  |  |
| floorplan HDB (2).png | Bath/WC 2, Exterior | wl-28 | 1600 | conditional | 10900 - 9300 = 1600 (printed 1600) | Right wall of Bath/WC 2. **Assumption:** x=11200 as ba1_right. | 11200,9300 → 11200,10900 | 100 | W8 |  |
| floorplan HDB (2).png | Bath/WC 2, Kitchen | wl-29 | 2500 | conditional | 11200 - 8700 = 2500 (printed 2500) | Bottom wall of Bath/WC 2 above the Kitchen. **Assumption:** x=8700 and x=11200 rest on the interior chain. | 8700,10900 → 11200,10900 | 100 | D10 |  |
| floorplan HDB (2).png | Bedroom 2, Exterior | wl-2 | 3300 | derived | 3300 (printed, top chain segment 4) | Top wall of Bedroom 2 with its window bay. **Drawn extent:** printed 3300 mm face to face; drawn from x=8900 to the centre-line of wl-5 (x=12020), because wl-5 is a 345 mm wall whose outer face lies on the grid line x=12200 | 8900,400 → 12020,400 | 150 | W2 | Changed |
| floorplan HDB (2).png | Bedroom 2, Exterior | wl-5 | 1625 | conditional | 1675 - 50 = 1625 (y values 50, 1675 and 3375 are read from the source ink at the fitted scale (about +-50 mm), not printed; y=4600 is the derived grid line; the cross-axis position is the ink centre) | Bedroom 2 east wall, top piece: solid fill (structural), from the ledge outline at the top to the weight change. **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 12020,50 → 12020,1675 | 345 |  | Changed |
| floorplan HDB (2).png | Bedroom 2, Exterior | wl-50 | 1700 | conditional | 3375 - 1675 = 1700 (y values 50, 1675 and 3375 are read from the source ink at the fitted scale (about +-50 mm), not printed; y=4600 is the derived grid line; the cross-axis position is the ink centre) | Bedroom 2 east wall, middle piece: hollow double line (non-structural) with a narrow window (W10) between two sill lines. Split from wl-5 where the weight changes. **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 12020,1675 → 12020,3375 | 345 | W10 | New |
| floorplan HDB (2).png | Bedroom 2, Exterior | wl-51 | 1225 | conditional | 4600 - 3375 = 1225 (y=4600 derived grid line; y=3375 read from the ink at the fitted scale, about +-50 mm) | Bedroom 2 east wall, bottom piece: solid fill (structural). It runs on to y=4600 and ends in the body of the Main Bedroom top wall wl-19 (T-junction confirmed by the user). **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 12020,3375 → 12020,4600 | 345 |  | New |
| floorplan HDB (2).png | Bedroom 3, Exterior | wl-1 | 3600 | derived | 3600 (printed, top chain segment 3) | Top wall of Bedroom 3 with its window bay. **Drawn extent:** printed 3600 mm face to face; drawn from the centre-line of wl-3 (x=5490) to x=8900, because wl-3 is a 345 mm wall whose outer face lies on the grid line x=5300 | 5490,400 → 8900,400 | 150 | W1 | Changed |
| floorplan HDB (2).png | Bedroom 3, Exterior | wl-3 | 1625 | conditional | 1675 - 50 = 1625 (y values 50, 1675 and 3375 are read from the source ink at the fitted scale (about +-50 mm), not printed; y=4600 is the derived grid line; the cross-axis position is the ink centre) | Bedroom 3 west wall, top piece: solid black fill (structural), from the ledge outline at the top to the weight change. **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 5490,50 → 5490,1675 | 345 |  | Changed |
| floorplan HDB (2).png | Bedroom 3, Bedroom 2 | wl-4 | undetermined (≤ 3800) | undetermined | not derivable: the end at y=1500 is where the heavy fill stops (read from the image, not printed) | Partition between Bedroom 3 and Bedroom 2, heavy-fill piece from the north wall (y=400) down to about y=1500 (placeholder end). The first run drew one 300 mm wall to y=4200; the ink shows heavy fill only to about y=1500, then a thin line (wl-46). The wall is split at the change of weight. **Assumption:** end position read from the image only **Drawn extent:** was one wall to y=4200; split at the weight change (placeholder y=1500) | 8900,400 → 8900,1500 | 300 |  | Changed |
| floorplan HDB (2).png | Bedroom 3, Bedroom 2 | wl-46 | undetermined (≤ 3800) | undetermined | not derivable: both ends are read from the image (weight change near y=1500; foot near y=3600) | Partition between Bedroom 3 and Bedroom 2, thin double-line piece from the end of the heavy fill (about y=1500) down to about y=3600 (placeholder ends). The ink scan finds no ink on x=8900 below y=3574, so the first run wall to y=4200 had no line over its last 600 mm. **Assumption:** ends read from the image only **Drawn extent:** placeholder: y=1500 and y=3600 are read from the image | 8900,1500 → 8900,3600 | 100 |  | New |
| floorplan HDB (2).png | Bedroom 3, Living/Dining | wl-47 | undetermined (≤ 1500) | undetermined | not derivable: y=3600 and the west end x=7400 are read from the image; the east end is on wl-46 (x=8900) | Thin hollow double line (about 100 mm) running west from the foot of the Bedroom 3 / Bedroom 2 partition at about y=3600 to about x=7400, ending in a short downward stub. Found by the unmodelled-line scan (about 1500 mm of ink under no wall) and resolved from the crop as a wall line. The first run modelled none of it. **Assumption:** position read from the image only **Drawn extent:** placeholder: y=3600 is read from the image, not derived | 8900,3600 → 7400,3600 | 100 |  | New |
| floorplan HDB (2).png | Bedroom 3, Exterior | wl-48 | 1700 | conditional | 3375 - 1675 = 1700 (y values 50, 1675 and 3375 are read from the source ink at the fitted scale (about +-50 mm), not printed; y=4600 is the derived grid line; the cross-axis position is the ink centre) | Bedroom 3 west wall, middle piece: hollow double line (non-structural). Split from wl-3 where the weight changes (user: only the filled parts are structural). **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 5490,1675 → 5490,3375 | 345 |  | New |
| floorplan HDB (2).png | Bedroom 3, Exterior | wl-49 | 1225 | conditional | 4600 - 3375 = 1225 (y=4600 derived grid line; y=3375 read from the ink at the fitted scale, about +-50 mm) | Bedroom 3 west wall, bottom piece: solid fill (structural). It runs on to y=4600 and ends in the body of the Study top wall wl-44 (T-junction confirmed by the user). **Assumption:** split points and the top end are read from the ink (about +-50 mm); the wall thickness is the ink width between the two outer lines **Drawn extent:** the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre | 5490,3375 → 5490,4600 | 345 |  | New |
| floorplan HDB (2).png | Kitchen, Exterior | wl-30 | 900 | conditional | 12100 - 11200 = 900 | Thick top wall of the Kitchen between Bath/WC 2 and the Service Balcony; carries the Kitchen door. **Assumption:** x=11200 rests on the interior chain. | 11200,10900 → 12100,10900 | 250 |  |  |
| floorplan HDB (2).png | Kitchen, Exterior | wl-37 | 4500 | derived | 12100 - 7600 = 4500 (printed 4500) | Thin bottom wall of the Kitchen. | 7600,13250 → 12100,13250 | 100 |  |  |
| floorplan HDB (2).png | Kitchen, Service Balcony | wl-38 | 2350 | derived | 13250 - 10900 = 2350 (printed 2350) | Thin wall between the Kitchen and the Service Balcony; carries a door. | 12100,10900 → 12100,13250 | 100 | D5, W9 |  |
| floorplan HDB (2).png | Living/Dining, Exterior | wl-12 |  | undetermined | not derivable: lower end y=10400 has no printed route; upper bound 13250 - 5900 = 7350 (printed 7350 covers this wall plus the diagonal bay) | Left wall of Living/Dining down to where it turns into the diagonal wall. | 0,5900 → 0,10400 | 250 |  |  |
| floorplan HDB (2).png | Living/Dining, Exterior | wl-13 |  | undetermined | not derivable: both ends are read from the drawing (x=-1850 lies outside the x=0 datum) | Diagonal wall of the entrance bay; its two ends are placeholders. **Drawn extent:** PLACEHOLDER: end (-1850, 12100) is read from the drawing, not from a printed dimension. | 0,10400 → -1850,12100 | 250 |  |  |
| floorplan HDB (2).png | Living/Dining, Exterior | wl-14 | 3800 | derived | 3800 (printed, bottom chain segment 1) | Bottom wall of Living/Dining: thick black segment at the left, thin line to the shelter. | 0,13250 → 3800,13250 | 250 |  |  |
| floorplan HDB (2).png | Living/Dining, Kitchen | wl-42 | 825 | conditional | 11725 - 10900 = 825 (y=10900 derived; y=11725 conditional) | Hollow double-line wall (about 150 mm) from the north-east corner of the Store/Pantry (apt. shelter) north to y=10900, Living/Dining on the west and Kitchen on the east. Missed by the first run, which stopped the shelter wall where its heavy fill ends (found by the user, confirmed on a crop). KITCHEN BOUNDARY (HDB rule 1): with wl-43 this line is the only thing between the Living/Dining and the Kitchen; no gap and no door is drawn in it, so it is read as the marked, open boundary of the kitchen, which is entered from the living area. **Assumption:** x=7600 is the Store/Pantry east grid line (bottom chain 3800+3800); y=11725 rests on the printed 1525 **Drawn extent:** the drawn ink of this double line lies about 240 mm west of the grid line x=7600 (ink scan: x 7300-7400) | 7600,11725 → 7600,10900 | 150 |  | Changed |
| floorplan HDB (2).png | Living/Dining, Kitchen | wl-43 | 1100 | conditional | 8700 - 7600 = 1100 (both are grid lines; x=8700 is conditional) | Single thin line along y=10900 from the end of wl-42 east to the south-west corner of Bath/WC 2 at x=8700; it closes the Kitchen north side. Missed by the first run. KITCHEN BOUNDARY (HDB rule 1): with wl-42 this single line marks the Kitchen edge on the Living/Dining side; no gap and no door is drawn in it, so the kitchen is read as entered from the living area across this marked boundary. **Assumption:** x=8700 rests on a single route; thickness of a single line is a drawn estimate **Drawn extent:** the drawn ink lies about 100 mm north of the grid line y=10900 (ink scan: y 10800) | 7600,10900 → 8700,10900 | 100 |  | Changed |
| floorplan HDB (2).png | Main Bedroom, Living/Dining | wl-19 | 3500 | conditional | 12200 - 8700 = 3500 (x=12200 derived; x=8700 conditional) | Top wall of the Main Bedroom, west piece, from x=8700 to the junction with wl-5 at x=12200; split at the T-junction. **Assumption:** x=8700 rests on a single route (interior chain 1200+2500+2600) **Drawn extent:** was one wall x 8700 to 13900; split at x=12200 (east piece is wl-45) | 8700,4600 → 12200,4600 | 100 | D2 | Changed |
| floorplan HDB (2).png | Main Bedroom, Living/Dining | wl-20 | 3000 | conditional | 7600 - 4600 = 3000 (printed 3000) | Thin left wall of the Main Bedroom; its door is near the top. **Assumption:** x=8700 rests on the interior chain. | 8700,4600 → 8700,7600 | 100 | D3 |  |
| floorplan HDB (2).png | Main Bedroom, Exterior | wl-21 | 3000 | conditional | 7600 - 4600 = 3000 (printed 3000) | Right exterior wall of the Main Bedroom with a sliding window. **Assumption:** x=13900 is the midpoint of the outer face 14000 and the assumed inner face 13800. | 13900,4600 → 13900,7600 | 200 | W5 |  |
| floorplan HDB (2).png | Main Bedroom, Bath/WC 1 | wl-22 | 2500 | conditional | 11200 - 8700 = 2500 (printed 2500) | Bottom wall of the Main Bedroom above Bath/WC 1. **Assumption:** x=8700 and x=11200 rest on the interior chain. | 8700,7600 → 11200,7600 | 100 | D9 |  |
| floorplan HDB (2).png | Main Bedroom, Unlabelled space (U1) | wl-23 | 2700 | conditional | 13900 - 11200 = 2700 (2600 printed to the inner face 13800) | Bottom wall of the Main Bedroom above the small unlabelled space: thick at the left, a door at the right. **Assumption:** Drawn extent runs 100 mm past the printed 2600 to the wall centre. **Drawn extent:** Drawn to the wall centre-line x=13900; the printed 2600 ends at the inner face x=13800. | 11200,7600 → 13900,7600 | 200 | D4 |  |
| floorplan HDB (2).png | Main Bedroom, Exterior | wl-45 | 1700 | conditional | 13900 - 12200 = 1700 (x=12200 derived; x=13900 conditional) | Top wall of the Main Bedroom, east piece (window bay recess), from the junction with wl-5 (x=12200) to the right wall; created by splitting wl-19. **Assumption:** x=13900 (right wall centre-line) is the midpoint of the outer face 14000 and the conditional inner face 13800 | 12200,4600 → 13900,4600 | 100 | W4 | New |
| floorplan HDB (2).png | Service Balcony, Exterior | wl-39 | 1800 | conditional | 13900 - 12100 = 1800 (1900 printed to the outer face 14000) | Top wall of the Service Balcony with a window. **Assumption:** Drawn to the wall centre-line x=13900. **Drawn extent:** Drawn extent ends at the wall centre x=13900; the printed 1900 ends at the outer face x=14000. | 12100,10900 → 13900,10900 | 250 | W6 |  |
| floorplan HDB (2).png | Service Balcony, Exterior | wl-40 | 2350 | conditional | 13250 - 10900 = 2350 (printed 2350) | Right wall of the Service Balcony. **Assumption:** x=13900 as mb_right. | 13900,10900 → 13900,13250 | 100 |  |  |
| floorplan HDB (2).png | Service Balcony, Exterior | wl-41 | 1800 | conditional | 13900 - 12100 = 1800 (1900 printed to the outer face 14000) | Thick bottom wall of the Service Balcony. **Assumption:** Drawn to x=13900. **Drawn extent:** Drawn extent ends at x=13900; the printed 1900 ends at x=14000. | 12100,13250 → 13900,13250 | 250 |  |  |
| floorplan HDB (2).png | Store/Pantry (apt. shelter), Living/Dining | wl-33 | 3800 | conditional | 7600 - 3800 = 3800 (printed 3800); y=11725 = 13250 - 1525 | Thick top wall of the Store/Pantry (apt. shelter); carries its door. **Assumption:** y=11725 rests on the printed 1525 only. | 3800,11725 → 7600,11725 | 300 | D7 |  |
| floorplan HDB (2).png | Store/Pantry (apt. shelter), Living/Dining | wl-34 | 1525 | conditional | 13250 - 11725 = 1525 (printed 1525) | Thick left wall of the Store/Pantry. **Assumption:** y=11725 as sh_top. | 3800,11725 → 3800,13250 | 300 |  |  |
| floorplan HDB (2).png | Store/Pantry (apt. shelter), Kitchen | wl-35 | 1525 | conditional | 13250 - 11725 = 1525 (printed 1525) | Thick right wall of the Store/Pantry. **Assumption:** y=11725 as sh_top. | 7600,11725 → 7600,13250 | 300 |  |  |
| floorplan HDB (2).png | Store/Pantry (apt. shelter), Exterior | wl-36 | 3800 | derived | 7600 - 3800 = 3800 (printed 3800) | Thick bottom wall of the Store/Pantry. | 3800,13250 → 7600,13250 | 300 |  |  |
| floorplan HDB (2).png | Study, Living/Dining | wl-15 | 2000 | conditional | 7900 - 5900 = 2000 | Thin left wall of the Study below the Balcony. **Assumption:** y=7900 rests on the single study-depth route 4600 + 3300. | 3800,5900 → 3800,7900 | 100 |  |  |
| floorplan HDB (2).png | Study, Exterior | wl-16 | 1500 | derived | 5300 - 3800 = 1500 (printed top chain segment 1500) | Study top wall, west piece, from x=3800 to the junction with wl-3 at x=5300; split at the T-junction. **Drawn extent:** was one wall x 3800 to 7500; split at x=5300 (east piece is wl-44) | 3800,4600 → 5300,4600 | 100 | W3 | Changed |
| floorplan HDB (2).png | Study, Living/Dining | wl-17 | 3300 | conditional | 7900 - 4600 = 3300 (printed 3300) | Right side of the Study: thin stubs at the top and the bottom with an open gap between them. **Assumption:** x=7500 as st_top. | 7500,4600 → 7500,7900 | 100 | O1 |  |
| floorplan HDB (2).png | Study, Living/Dining | wl-18 | 3700 | conditional | 7500 - 3800 = 3700 | Thin bottom wall of the Study. **Assumption:** x=7500 and y=7900 are single-route lines. | 3800,7900 → 7500,7900 | 100 |  |  |
| floorplan HDB (2).png | Study, Bedroom 3 | wl-44 | 2200 | conditional | 7500 - 5300 = 2200 (x=5300 derived; x=7500 conditional) | Study top wall, east piece, from the junction with wl-3 (x=5300) to the Study corner at x=7500; created by splitting wl-16. Bedroom 3 also rests on this line (its bottom edge). **Assumption:** x=7500 rests on a single route (interior chain 1200+2500+2600) | 5300,4600 → 7500,4600 | 100 | D1 | New |
| floorplan HDB (2).png | Unlabelled space (U1), Exterior | wl-31 |  | undetermined | not derivable: y=8700 has no printed route; upper bound 10900 - 7600 = 3300 | Bottom edge of the small unlabelled space: thin lines whose lower end is not dimensioned. **Drawn extent:** PLACEHOLDER: y=8700 is read from the drawing. | 11200,8700 → 13900,8700 | 100 |  |  |
| floorplan HDB (2).png | Unlabelled space (U1), Exterior | wl-32 |  | undetermined | not derivable: lower end y=8700 is a placeholder | Right edge of the small unlabelled space. **Drawn extent:** PLACEHOLDER: lower end read from the drawing. | 13900,7600 → 13900,8700 | 100 |  |  |

## Length convention

- **length convention:** Coordinates are the printed grid lines (dimension ticks sit on wall faces or extension lines), in mm from the datum: x=0 is the left extension line (level with the left outer wall face), y=0 is the outermost top dimension line (the 400 mm window-bay projection line); y down. Walls are drawn centred on their grid line with the drawn thickness. Length = grid line to grid line. The caption states no area convention.

## Dimension chains and which close

- **top (x):** 3800+1500+3600+3300+1800 = 14000; overall 14000; CLOSES (residual 0). Closes to the printed overall width 14000. Datum x=0 is the left extension line of the dimension frame, level with the left outer wall face of the Balcony / Living wall.
- **bottom (x):** 3800+3800+4500+1900 = 14000; overall 14000; CLOSES (residual 0). Second independent x chain; closes to 14000 and starts at the same datum.
- **left (y):** 400+3800+1700+7350 = 13250; overall 13250; CLOSES (residual 0). Closes to the printed overall height 13250. Datum y=0 is the outermost dimension line at the top (the 400 mm window-bay projection line).
- **right (y):** 400+3800+400+3000+1700+1600+2350 = 13250; overall 13250; CLOSES (residual 0). Second independent y chain; closes to 13250 and starts at the same datum.
- **main bedroom row (x):** 1200+2500+2600 = 6300; overall 14000; does not close (residual 7700). PARTIAL: interior chain whose start is not printed. If it ends at the inner face of the right wall (assumed 200 mm thick, x=13800) it starts at x=7500.
- **study depth (y):** 400+3300 = 3700; overall 13250; does not close (residual 9550). PARTIAL: starts at the Balcony top (y=4200): 4200+400 = 4600 = study top; +3300 = 7900 = study bottom.
- **store/pantry height (y):** 1525 = 1525; overall 13250; does not close (residual 11725). PARTIAL: from the shelter top to the bottom face line (y=13250): shelter top y = 13250-1525 = 11725.
- **overall width:** 14000 = 14000; overall 14000; CLOSES (residual 0). Printed.
- **overall height:** 13250 = 13250; overall 13250; CLOSES (residual 0). Printed; includes the 400 mm window-bay projection at the top.

## Derived grid lines

| Axis | Position (mm) | Status | Arithmetic | Confirmed by | Note |
|---|---|---|---|---|---|
| x | -1850 | undetermined | not derivable; lies left of the x=0 datum | no printed route | Left end of the diagonal wall at the entrance bay: read from the drawing only (placeholder). |
| x | 0 | derived | 0 (datum) | datum |  |
| x | 3800 | derived | 3800; 14000-1500-3600-3300-1800 = 3800 | top chain closes to 14000; bottom chain 3800 also closes to 14000 |  |
| x | 5300 | derived | 3800+1500 = 5300; 14000-3600-3300-1800 = 5300 | top chain closes to printed overall 14000; overall minus remaining segments |  |
| x | 7500 | conditional | 14000-200-2600-2500-1200 = 7500 | single route: interior chain 1200+2500+2600 with its end assumed at the inner right face (x=13800) | Chain start not printed; assumes the right wall is 200 mm thick. |
| x | 7600 | derived | 3800+3800 = 7600; 14000-4500-1900 = 7600 | bottom chain closes to 14000; overall minus remaining segments |  |
| x | 8700 | conditional | 7500+1200 = 8700 | single route: same interior chain | As x=7500. |
| x | 8900 | derived | 5300+3600 = 8900; 14000-3300-1800 = 8900 | top chain closes to printed overall 14000; overall minus remaining segments |  |
| x | 11200 | conditional | 8700+2500 = 11200 | single route: same interior chain | As x=7500. |
| x | 12100 | derived | 3800+3800+4500 = 12100; 14000-1900 = 12100 | bottom chain closes to 14000; overall minus remaining segments |  |
| x | 12200 | derived | 8900+3300 = 12200; 14000-1800 = 12200 | top chain closes to printed overall 14000; overall minus remaining segments |  |
| x | 13800 | conditional | 11200+2600 = 13800 | single route: end of the interior chain | Assumed inner face of the right wall (wall thickness not printed). |
| x | 13900 | conditional | (13800+14000)/2 = 13900 | single route: midpoint of outer face 14000 (derived) and inner face 13800 (conditional) | Wall thickness is not printed; the 200 mm thickness is read from the drawing. |
| x | 14000 | derived | 12200+1800 = 14000 = printed overall; 12100+1900 = 14000 | top and bottom chains both close to the printed overall width | Outer face of the right wall. |
| y | 0 | derived | 0 (datum: outer dimension line / top of the window-bay projection) | datum |  |
| y | 400 | derived | 0+400 = 400; both left and right chains | left chain and right chain both start 400 from the datum and each closes to 13250 | Top outer face of Bedroom 3 / Bedroom 2. |
| y | 4200 | derived | 400+3800 = 4200; 13250-7350-1700 = 4200 | left chain closes to 13250; right chain 400+3800 agrees | Bedroom bottoms and the Balcony top. |
| y | 4600 | derived | 4200+400 = 4600; 13250-2350-1600-1700-3000 = 4600 | right chain closes to 13250; overall minus remaining segments | Study top and Main Bedroom top. |
| y | 5900 | derived | 400+3800+1700 = 5900; 13250-7350 = 5900 | left chain closes to 13250; overall minus the last segment | Balcony bottom. |
| y | 7600 | derived | 4600+3000 = 7600; 13250-2350-1600-1700 = 7600 | right chain closes to 13250; overall minus remaining segments | Main Bedroom bottom / Bath/WC 1 top. |
| y | 7900 | conditional | 4600+3300 = 7900 | single route: study depth 3300 from the study top (y=4600) | Study bottom. |
| y | 8700 | undetermined | not derivable; between 7600 and 10900 | no printed route | Bottom edge of the small space right of Bath/WC 1: read from the drawing only (placeholder). |
| y | 9300 | derived | 7600+1700 = 9300; 13250-2350-1600 = 9300 | right chain closes to 13250; overall minus remaining segments | Bath/WC 1 bottom / Bath/WC 2 top. |
| y | 10400 | undetermined | not derivable; between 5900 and 13250 | no printed route | Where the left wall turns into the diagonal: read from the drawing only (placeholder). |
| y | 10900 | derived | 9300+1600 = 10900; 13250-2350 = 10900 | right chain closes to 13250; overall minus remaining segment | Bath/WC 2 bottom / Kitchen and Service Balcony top. |
| y | 11725 | conditional | 13250-1525 = 11725 | single route: printed 1525 measured from the bottom face line | Store/Pantry (apt. shelter) top. |
| y | 12100 | undetermined | not derivable; between 5900 and 13250 | no printed route | Lower end of the diagonal wall: read from the drawing only (placeholder). |
| y | 13250 | derived | 10900+2350 = 13250 = printed overall; 400+3800+1700+7350 | left and right chains both close to the printed overall height | Bottom outer face. |

## Scale fit

- **scale_mm_per_px:** 22.94 mm per pixel (x 22.98, y 23.01), spread 1.15% over 13 closing-chain segments, confidence 0.77, from the tick fit in calibrate_scale. Largest fit residual 58 mm (about 2.5 px at this scale). One chain was not used: tick count 6 != segments+1 = 8 (detected px [85, 102, 266, 414, 557, 660]); not used
- **Fit summary:** scale_mm_per_px_x = 23; scale_mm_per_px_y = 23; scale_mm_per_px = 22.9; spread_pct = 1.15; n_segments = 13; x0_px = 136; y0_px = 84.7; confidence = 0.77; axis_scale_difference_pct = 0.133; validation_max_abs_residual_mm = 57.9

## Automated checks

| Check | Result |
|---|---|
| (a) wall endpoints on derived or conditional grid lines, or on another wall - REBUILT | PASS for every derived and conditional wall; 4 of 98 wall endpoints are off the grid (undetermined placeholder walls, and the thick walls moved to their ink centre by check (m)): wl-5(12020,50) [conditional], wl-3(5490,50) [conditional], wl-47(7400,3600) [undetermined], wl-13(-1850,12100) [undetermined] |
| (c) dangling endpoints (an end on no other wall) - REBUILT | 5 endpoints are on no other wall (outer corners, placeholder ends and ends against open boundaries are included): wl-5(12020,50), wl-3(5490,50), wl-47(7400,3600), wl-13(-1850,12100), wl-14(0,13250) |
| (d) openings fit their walls - REBUILT | PASS: 20 openings lie within their wall; 1 on an open boundary with a recorded gap line (door_on_open_boundary): D8 |
| (f) bath_no_door: every bath/WC with a WC or basin has a door-like opening | PASS: Bath/WC 1, Bath/WC 2 each have a door-like opening (D9 and D10 are folding doors added by the bath/WC pass; proposed, not confirmed) |
| (f) door plausibility (no door between bedrooms, none from a bedroom into the Study) - REBUILT | FAIL: D1 join the Study and a bedroom (D1 on wl-44, the shared Study top / Bedroom 3 bottom line): host and rooms joined are unresolved |
| (f) swing_missing / swing_guessed | swing_missing (no swing_into or hinge_side): D2. swing_guessed (swing_basis = guessed): D1, D2. Read from a crop: D3, D4, D5, D7, D8, D9, D10. |
| (f) kind_alternative recorded | W9 |
| (f) atypical_width | none |
| (f) no_window (habitable room or kitchen with no window opening recorded) | none |
| (o) kitchen_access (HDB rule 1: entered through the living area) | marked_open_boundary: walls wl-42, wl-43 carry no door or gap (total 1925 mm): the Kitchen boundary is marked, not closed. Bedroom or bath doors into the Kitchen: D10. |
| (p) bath_no_louvre (HDB rule 2: each bath has a louvre) | PASS: Bath/WC 1 has W7; Bath/WC 2 has W8. louvre_not_seen (placeholder, symbol not seen): none. |
| (q) main_door (HDB rule 3) | PASS: D8 joins Living/Dining <-> Exterior, large leaf 781 mm and small leaf 375 mm (unequal), large leaf hinge start, small leaf hinge end, swing Exterior / Living/Dining, threshold drop 100.0 mm; both swing sides are drawn because the symbol has an arc on each side of each leaf (in or out cannot be decided from the symbol) |
| (i1) edge_without_wall: room polygon edges with no wall within half a thickness + 60 mm | 4 runs of 300 mm or more, each a declared open boundary (see Open boundaries) or an edge bounded by a placeholder: Bedroom 3: (8900,3800) to (8900,4400), 600 mm; Bedroom 3: (8500,4600) to (7700,4600), 800 mm; Bedroom 2: (8900,4400) to (8900,3800), 600 mm; Living/Dining: (7700,4600) to (8500,4600), 800 mm |
| (j) wall_without_ink: walls with ink coverage below 25% (overlay sampler) | 3 walls flagged: wl-2 (coverage 0.13, median offset -301 mm), wl-42 (coverage 0.00, median offset -199 mm), wl-43 (coverage 0.05, median offset -100 mm). Resolved in the overlay stage (one correction round): wl-6 and wl-7 are gone from the table. wl-42 and wl-43 are real double and single lines (crops C and the ink scan) that lie 100 to 250 mm off their grid lines, so they stay as conditional walls with the offset recorded. wl-2 is a window wall whose nearest ink is the 400 mm bay outline, 300 mm north of the grid line; the wall line is visible on crop A_top, so it stays. |
| (j) phantom_closure: a wall whose both ends lie on other walls with no ink between them | none left after the correction; the first-run table held wl-6 and wl-7 (both removed). |
| (k) short_end on the corrected table | PASS: no wall ends within 600 mm in front of another wall; wl-3 and wl-5 now end in the body of wl-16 / wl-44 and wl-19 / wl-45 (T-junctions confirmed by the user). |
| (k) the same test run on the first-run wall table | found nothing, and that is the lesson: the end of wl-3 (5300,4200) and of wl-5 (12200,4200) lay on the phantom walls wl-6 and wl-7, so the endpoint test counted them as connected. A gap test run before the phantom walls are deleted (check (j)) cannot see it; (j) must run first, then (k). |
| door swing test: bifold doors D9 and D10 | The mirror test cannot separate a triangle from its mirror image when the wall line itself carries the ink: D9 scores 0.75 for the drawn triangle and for every mirrored candidate, so its flag ok is not evidence of the apex side. D10 scores 0.75 against 0.17 and is discriminating. The apex side of D9 rests on the crop (apex inside Bath/WC 1) only. |
| (k) user-stated connections applied | wl-3 connects to wl-16 and wl-5 connects to wl-19 (user-confirmed): both walls run on to y=4600 and the walls they land on are split at x=5300 (wl-16 / wl-44) and x=12200 (wl-19 / wl-45). Analogous endpoints in the plan were tested with check (k): none other found. |
| (m) grid_on_face: thick walls measured across their width (ink scan every 50 mm) | 6 walls are drawn at the ink centre, not on the printed grid line: wl-5 x=12020 (-180 mm from its grid line, 345 mm thick, structural); wl-50 x=12020 (-180 mm from its grid line, 345 mm thick, non_structural); wl-51 x=12020 (-180 mm from its grid line, 345 mm thick, structural); wl-3 x=5490 (+190 mm from its grid line, 345 mm thick, structural); wl-48 x=5490 (+190 mm from its grid line, 345 mm thick, non_structural); wl-49 x=5490 (+190 mm from its grid line, 345 mm thick, structural). The grid line sits on the outer face of the wall; the printed grid line stays in the arithmetic, the polygon edges of the bedrooms are unchanged. |
| (m) wall_class: structural (solid fill) versus non-structural (hollow or single line) | non_structural: wl-50, wl-46, wl-47, wl-48; structural: wl-5, wl-51, wl-3, wl-4, wl-49; unclassified: wl-8, wl-9, wl-10, wl-11, wl-24, wl-26, wl-27, wl-25, wl-28, wl-29, wl-2, wl-1, wl-30, wl-37, wl-38, wl-12, wl-13, wl-14, wl-42, wl-43, wl-19, wl-20, wl-21, wl-22, wl-23, wl-45, wl-39, wl-40, wl-41, wl-33, wl-34, wl-35, wl-36, wl-15, wl-16, wl-17, wl-18, wl-44, wl-31, wl-32. Only the walls measured from the ink are classified; the rest are unclassified, not assumed. |
| (l) opening hosts after splitting | W3 stays on wl-16; D1 moved to wl-44; W4 moved to wl-45; D2 moved to wl-19 (draft hosts wl-6 and wl-7 no longer exist); revision 3: D5 moved from wl-30 (solid fill, no gap) to wl-38; D8 has no host wall (open boundary). All 21 openings pass check (d). |
| schema validation of the final JSON | PASS (checked when the JSON table was built: unique wall ids, all opening wall_ids exist, polygons have 3+ vertices) |

## Topology: touching rooms and shared walls

| Room pair | Shared wall pieces |
|---|---|
| Balcony, Exterior | 2 wall piece(s): wl-8(3800), wl-9(1700); sum of known lengths 5500 mm. |
| Balcony, Living/Dining | 1 wall piece(s): wl-11(3800); sum of known lengths 3800 mm. |
| Balcony, Study | 1 wall piece(s): wl-10(1700); sum of known lengths 1700 mm. |
| Bath/WC 1, Bath/WC 2 | 1 wall piece(s): wl-26(2500); sum of known lengths 2500 mm. |
| Bath/WC 1, Living/Dining | 1 wall piece(s): wl-24(1700); sum of known lengths 1700 mm. |
| Bath/WC 1, Unlabelled space (U1) | 1 wall piece(s): wl-27(1700); sum of known lengths 1700 mm. |
| Bath/WC 2, Exterior | 1 wall piece(s): wl-28(1600); sum of known lengths 1600 mm. |
| Bath/WC 2, Kitchen | 1 wall piece(s): wl-29(2500); sum of known lengths 2500 mm. |
| Bath/WC 2, Living/Dining | 1 wall piece(s): wl-25(1600); sum of known lengths 1600 mm. |
| Bedroom 2, Exterior | 4 wall piece(s): wl-2(3300), wl-5(1625), wl-50(1700), wl-51(1225); sum of known lengths 7850 mm. |
| Bedroom 3, Bedroom 2 | 2 wall piece(s): wl-4(?), wl-46(?); sum of known lengths 0 mm; undetermined: wl-4, wl-46. |
| Bedroom 3, Exterior | 4 wall piece(s): wl-1(3600), wl-3(1625), wl-48(1700), wl-49(1225); sum of known lengths 8150 mm. |
| Bedroom 3, Living/Dining | 1 wall piece(s): wl-47(?); sum of known lengths 0 mm; undetermined: wl-47. |
| Kitchen, Exterior | 2 wall piece(s): wl-30(900), wl-37(4500); sum of known lengths 5400 mm. |
| Kitchen, Service Balcony | 1 wall piece(s): wl-38(2350); sum of known lengths 2350 mm. |
| Living/Dining, Exterior | 3 wall piece(s): wl-12(?), wl-13(?), wl-14(3800); sum of known lengths 3800 mm; undetermined: wl-12, wl-13. |
| Living/Dining, Kitchen | 2 wall piece(s): wl-42(825), wl-43(1100); sum of known lengths 1925 mm. |
| Main Bedroom, Bath/WC 1 | 1 wall piece(s): wl-22(2500); sum of known lengths 2500 mm. |
| Main Bedroom, Exterior | 2 wall piece(s): wl-21(3000), wl-45(1700); sum of known lengths 4700 mm. |
| Main Bedroom, Living/Dining | 2 wall piece(s): wl-19(3500), wl-20(3000); sum of known lengths 6500 mm. |
| Main Bedroom, Unlabelled space (U1) | 1 wall piece(s): wl-23(2700); sum of known lengths 2700 mm. |
| Service Balcony, Exterior | 3 wall piece(s): wl-39(1800), wl-40(2350), wl-41(1800); sum of known lengths 5950 mm. |
| Store/Pantry (apt. shelter), Exterior | 1 wall piece(s): wl-36(3800); sum of known lengths 3800 mm. |
| Store/Pantry (apt. shelter), Kitchen | 1 wall piece(s): wl-35(1525); sum of known lengths 1525 mm. |
| Store/Pantry (apt. shelter), Living/Dining | 2 wall piece(s): wl-33(3800), wl-34(1525); sum of known lengths 5325 mm. |
| Study, Bedroom 3 | 1 wall piece(s): wl-44(2200); sum of known lengths 2200 mm. |
| Study, Exterior | 1 wall piece(s): wl-16(1500); sum of known lengths 1500 mm. |
| Study, Living/Dining | 3 wall piece(s): wl-15(2000), wl-17(3300), wl-18(3700); sum of known lengths 9000 mm. |
| Unlabelled space (U1), Exterior | 2 wall piece(s): wl-31(?), wl-32(?); sum of known lengths 0 mm; undetermined: wl-31, wl-32. |
| Bedroom 3 / Living/Dining (hall), Bedroom 2 / Living/Dining (hall) | No wall piece: the bedroom bottoms are open boundaries (the first-run walls wl-6 and wl-7 do not exist). |

## Changes against the first run (user corrections)

- **wl-5 (grid_on_face):** ink centre moved by -180 mm from the grid line; the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-50 (grid_on_face):** ink centre moved by -180 mm from the grid line; the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-51 (grid_on_face):** ink centre moved by -180 mm from the grid line; the ink spans x 11847-12192, centre 12020, 180 mm from the grid line x=12200, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-3 (grid_on_face):** ink centre moved by +190 mm from the grid line; the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-48 (grid_on_face):** ink centre moved by +190 mm from the grid line; the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-49 (grid_on_face):** ink centre moved by +190 mm from the grid line; the ink spans x 5317-5662, centre 5490, 190 mm from the grid line x=5300, which sits on a face of the wall (check (m) grid_on_face); the printed grid line is kept in the arithmetic, the wall is drawn at the ink centre
- **wl-2 (Changed):** Bedroom 2, Exterior, (8900,400) to (12020,400), derived. Top wall of Bedroom 2 with its window bay.
- **wl-5 (Changed):** Bedroom 2, Exterior, (12020,50) to (12020,1675), conditional. Bedroom 2 east wall, top piece: solid fill (structural), from the ledge outline at the top to the weight change.
- **wl-50 (New):** Bedroom 2, Exterior, (12020,1675) to (12020,3375), conditional. Bedroom 2 east wall, middle piece: hollow double line (non-structural) with a narrow window (W10) between two sill lines. Split from wl-5 where the weight changes.
- **wl-51 (New):** Bedroom 2, Exterior, (12020,3375) to (12020,4600), conditional. Bedroom 2 east wall, bottom piece: solid fill (structural). It runs on to y=4600 and ends in the body of the Main Bedroom top wall wl-19 (T-junction confirmed by the user).
- **wl-1 (Changed):** Bedroom 3, Exterior, (5490,400) to (8900,400), derived. Top wall of Bedroom 3 with its window bay.
- **wl-3 (Changed):** Bedroom 3, Exterior, (5490,50) to (5490,1675), conditional. Bedroom 3 west wall, top piece: solid black fill (structural), from the ledge outline at the top to the weight change.
- **wl-4 (Changed):** Bedroom 3, Bedroom 2, (8900,400) to (8900,1500), undetermined. Partition between Bedroom 3 and Bedroom 2, heavy-fill piece from the north wall (y=400) down to about y=1500 (placeholder end). The first run drew one 300 mm wall to y=4200; the ink shows heavy fill only to about y=1500, then a thin line (wl-46). The wall is split at the change of weight.
- **wl-46 (New):** Bedroom 3, Bedroom 2, (8900,1500) to (8900,3600), undetermined. Partition between Bedroom 3 and Bedroom 2, thin double-line piece from the end of the heavy fill (about y=1500) down to about y=3600 (placeholder ends). The ink scan finds no ink on x=8900 below y=3574, so the first run wall to y=4200 had no line over its last 600 mm.
- **wl-47 (New):** Bedroom 3, Living/Dining, (8900,3600) to (7400,3600), undetermined. Thin hollow double line (about 100 mm) running west from the foot of the Bedroom 3 / Bedroom 2 partition at about y=3600 to about x=7400, ending in a short downward stub. Found by the unmodelled-line scan (about 1500 mm of ink under no wall) and resolved from the crop as a wall line. The first run modelled none of it.
- **wl-48 (New):** Bedroom 3, Exterior, (5490,1675) to (5490,3375), conditional. Bedroom 3 west wall, middle piece: hollow double line (non-structural). Split from wl-3 where the weight changes (user: only the filled parts are structural).
- **wl-49 (New):** Bedroom 3, Exterior, (5490,3375) to (5490,4600), conditional. Bedroom 3 west wall, bottom piece: solid fill (structural). It runs on to y=4600 and ends in the body of the Study top wall wl-44 (T-junction confirmed by the user).
- **wl-42 (Changed):** Living/Dining, Kitchen, (7600,11725) to (7600,10900), conditional. Hollow double-line wall (about 150 mm) from the north-east corner of the Store/Pantry (apt. shelter) north to y=10900, Living/Dining on the west and Kitchen on the east. Missed by the first run, which stopped the shelter wall where its heavy fill ends (found by the user, confirmed on a crop). KITCHEN BOUNDARY (HDB rule 1): with wl-43 this line is the only thing between the Living/Dining and the Kitchen; no gap and no door is drawn in it, so it is read as the marked, open boundary of the kitchen, which is entered from the living area.
- **wl-43 (Changed):** Living/Dining, Kitchen, (7600,10900) to (8700,10900), conditional. Single thin line along y=10900 from the end of wl-42 east to the south-west corner of Bath/WC 2 at x=8700; it closes the Kitchen north side. Missed by the first run. KITCHEN BOUNDARY (HDB rule 1): with wl-42 this single line marks the Kitchen edge on the Living/Dining side; no gap and no door is drawn in it, so the kitchen is read as entered from the living area across this marked boundary.
- **wl-19 (Changed):** Main Bedroom, Living/Dining, (8700,4600) to (12200,4600), conditional. Top wall of the Main Bedroom, west piece, from x=8700 to the junction with wl-5 at x=12200; split at the T-junction.
- **wl-45 (New):** Main Bedroom, Exterior, (12200,4600) to (13900,4600), conditional. Top wall of the Main Bedroom, east piece (window bay recess), from the junction with wl-5 (x=12200) to the right wall; created by splitting wl-19.
- **wl-16 (Changed):** Study, Exterior, (3800,4600) to (5300,4600), derived. Study top wall, west piece, from x=3800 to the junction with wl-3 at x=5300; split at the T-junction.
- **wl-44 (New):** Study, Bedroom 3, (5300,4600) to (7500,4600), conditional. Study top wall, east piece, from the junction with wl-3 (x=5300) to the Study corner at x=7500; created by splitting wl-16. Bedroom 3 also rests on this line (its bottom edge).
- **wl-6, wl-7 (removed):** The bottom edges of Bedroom 3 and Bedroom 2 are not walls (user-confirmed). Their ids are not reused.
- **D1 (Changed):** single_swing_door on wl-44, Study <-> Bedroom 3; Bedroom 3 door. Its draft host wl-6 does not exist (user-confirmed). In the crop (ruler crop G1) the arc rises north from the Study top line, from about x=6500 to a top near (7400, 3600), which fits a radius of about 950 mm hinged near x=7450 (the Study corner) and sweeping into Bedroom 3. The straight leaf is not drawn (only a grey patch lies along the line), and the arc runs on into a second arc east of x=8900, so the hinge is inferred from the arc geometry, not seen: swing_basis stays guessed, shown as a grey dashed leaf. Host, span and rooms are proposed, not confirmed.
- **D2 (Changed):** single_swing_door on wl-19, Bedroom 2 <-> Living/Dining; AMBIGUOUS arc near the Bedroom 2 / hall corner. Its draft host wl-7 does not exist (user-confirmed); re-hosted on wl-19 (y=4600, x 8900-9600). The arc runs on into the Main Bedroom door arc (D3), so it may belong to either. Re-host proposed, not confirmed.
- **D3 (Changed):** single_swing_door on wl-20, Main Bedroom <-> Living/Dining; Main Bedroom door in its west wall (gap y 4600-5420). From the crop the leaf is hinged at the north jamb (the wall start, y=4600), lying open along the wl-19 line, and the arc sweeps into the Main Bedroom to the south jamb.
- **D4 (Changed):** single_swing_door on wl-23, Main Bedroom <-> Unlabelled space (U1); Door between the Main Bedroom and the small unlabelled space. From the crop the leaf stands at the east jamb pointing south and the arc runs back to the west jamb, sweeping into U1.
- **D5 (Changed):** single_swing_door on wl-38, Kitchen <-> Service Balcony; Moved from wl-30 (Kitchen <-> Exterior). wl-30 is an unbroken solid-fill wall with no gap; the closed thin leaf and its quarter arc lie on wl-38 at y about 10930-11735. Hinge at the north jamb (the wall start, y about 10930), arc sweeps west into the Kitchen. Proposed from the crop, not confirmed by the user.
- **D7 (Changed):** shelter_door on wl-33, Store/Pantry (apt. shelter) <-> Living/Dining; Store/Pantry (apt. shelter) door. From the crop the leaf stands at the east jamb pointing north and the arc sweeps over the hall (Living/Dining); a small sill box lies on the Store side. The first drawing swung it into the Store.
- **D8 (Changed):** entrance_door on , Living/Dining <-> Exterior; MAIN DOOR (HDB rule). Read from a 9x crop with a mm grid. The gap lies on the lower diagonal edge of the entrance bay, from about (-1235, 11985) to (-399, 12783), about 1156 mm. Large leaf (about 781 mm) hinged at the north-west end; small leaf (about 375 mm) hinged at the south-east end; they meet at about (-678, 12533). Each leaf is drawn with an arc on the outside (south-west) and an arc on the inside (north-east), so each can swing in or out (double-acting symbol): both arcs are drawn. The text on the leaf reads DROP with a value (read as 100): a floor drop at the threshold to keep water out. The first run put D8 on wl-13, the heavy diagonal wall, which carries no gap; the host is an open boundary (door_on_open_boundary). Positions are estimated from calibrated pixels.
- **D9 (New):** bifold_door on wl-22, Main Bedroom <-> Bath/WC 1; Triangle with its base on the Bath/WC 1 north wall and the apex pointing into the bath: folding door. Added by the bath/WC pass; proposed from the symbol and the HDB legend, not confirmed by the user.
- **D10 (New):** bifold_door on wl-29, Bath/WC 2 <-> Kitchen; Triangle with its base on the Bath/WC 2 south wall, against the west wall, and the apex pointing into the bath: folding door. Added by the bath/WC pass; proposed from the symbol and the HDB legend, not confirmed by the user.
- **D11 (New):** sliding_door on wl-11, Balcony <-> Living/Dining; Wall-to-wall glazed sliding doors across the Balcony edge (clear gap about 3.55 m between the inner faces of the heavy side walls wl-9 and wl-10). Existence confirmed by the user; the span is measured from the crop. The first run listed D6 (a Kitchen door) as the Balcony door.
- **W1 (Changed):** casement_window on wl-1, Bedroom 3 <-> Exterior; Window bay projecting 400 mm above the wall. Offset recomputed from the moved start of wl-1 (x=5490); absolute position unchanged.
- **W3 (Changed):** casement_window on wl-16, Study <-> Exterior; Casement window at the west end of the Study top wall; the strip above it is outside the flat.
- **W4 (Changed):** casement_window on wl-45, Main Bedroom <-> Exterior; Window bay at the right end of the Main Bedroom top wall; re-hosted on wl-45 when wl-19 was split (span x 12220-13690 from the crop).
- **W7 (New):** louvre_window on wl-27, Bath/WC 1 <-> Unlabelled space (U1); Louvre window of Bath/WC 1, east wall x=11200, y about 8260-8810. The space on the other side is the small unlabelled space (U1), probably a shaft or ledge. Seen on the bath crop; first run recorded no opening here.
- **W8 (New):** louvre_window on wl-28, Bath/WC 2 <-> Exterior; Louvre window of Bath/WC 2, east wall x=11200, y about 9670-10200 (on the exterior wall). Seen on the bath crop; first run recorded no opening here.
- **W9 (New):** window on wl-38, Kitchen <-> Service Balcony; Replaces D6 (retired). Panel on wl-38 at y about 11766-12572 (about 806 mm): a sliding window onto the Service Balcony; a sliding door is the alternative. Proposed from the crop, not confirmed.
- **W10 (New):** window on wl-50, Bedroom 2 <-> Exterior; Narrow window with a dotted centre line in the hollow piece wl-50 (top-hung). Seen in the ink scan (cross lines at y about 2550 and 3150 and a dotted line at x about 12020 between them) and on the first crop; the first run recorded no opening here. Position estimated from calibrated pixels.

## Open boundaries

- **Kitchen / Living-Dining boundary (kitchen_boundary):** Marked by wl-42 (Hollow double-line wall (about 150 mm) from the north-east corner of the Store/Pantry (apt), wl-43 (Single thin line along y=10900 from the end of wl-42 east to the south-west corner of Bath/WC 2 at x=8700; it closes the Kitchen north side); no door is drawn and none was added (HDB rule 1).
- **Bedroom 3 edge (8900,3800) to (8900,4400):** No wall on this room edge (600 mm); recorded as an open boundary, not drawn as a wall.
- **Bedroom 3 edge (8500,4600) to (7700,4600):** No wall on this room edge (800 mm); recorded as an open boundary, not drawn as a wall.
- **Bedroom 2 edge (8900,4400) to (8900,3800):** No wall on this room edge (600 mm); recorded as an open boundary, not drawn as a wall.
- **Living/Dining edge (7700,4600) to (8500,4600):** No wall on this room edge (800 mm); recorded as an open boundary, not drawn as a wall.

## Doors and openings

| Opening | Kind | Wall | Joins | Offset (mm) | Width (mm) | Swing into | Hinge | Swing basis | Plausibility | Confidence |
|---|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | wl-44 | Study <-> Bedroom 3 | 1200 | 950 | Bedroom 3 | end | guessed | FAILED check (f): joins the Study and a bedroom; the host line is the shared Study top / Bedroom 3 bottom line, so the host and the rooms joined are unresolved | 0.30 |
| D2 | single_swing_door | wl-19 | Bedroom 2 <-> Living/Dining | 200 | 700 |  |  | guessed | uncertain: ambiguous arc | 0.25 |
| D3 | single_swing_door | wl-20 | Main Bedroom <-> Living/Dining | 0 | 820 | Main Bedroom | start | read_from_crop | plausible | 0.50 |
| D4 | single_swing_door | wl-23 | Main Bedroom <-> Unlabelled space (U1) | 1690 | 750 | Unlabelled space (U1) | end | read_from_crop | plausible | 0.50 |
| D5 | single_swing_door | wl-38 | Kitchen <-> Service Balcony | 35 | 800 | Kitchen | start | read_from_crop | plausible: joins the Kitchen and the Service Balcony; wl-30 is solid fill and cannot host a door | 0.50 |
| D7 | shelter_door | wl-33 | Store/Pantry (apt. shelter) <-> Living/Dining | 2230 | 800 | Living/Dining | end | read_from_crop | plausible | 0.50 |
| D8 | entrance_door |  | Living/Dining <-> Exterior | 0 | 1156 | Exterior / Living/Dining | start | read_from_crop | plausible: the one door that opens off the Living/Dining to the outside (HDB main-door rule); it sits on an open boundary because no wall is drawn along the bay edge | 0.50 |
| D9 | bifold_door | wl-22 | Main Bedroom <-> Bath/WC 1 | 1000 | 550 | Bath/WC 1 | both | read_from_crop | plausible | 0.45 |
| D10 | bifold_door | wl-29 | Bath/WC 2 <-> Kitchen | 10 | 550 | Bath/WC 2 | both | read_from_crop | plausible | 0.45 |
| D11 | sliding_door | wl-11 | Balcony <-> Living/Dining | 125 | 3550 |  |  |  | plausible: balcony access from the house (user-confirmed) | 0.50 |
| O1 | opening_no_door | wl-17 | Study <-> Living/Dining | 400 | 2160 |  |  |  | n/a (window or open gap) | 0.40 |
| W1 | casement_window | wl-1 | Bedroom 3 <-> Exterior | 910 | 1500 |  |  |  | n/a (window or open gap) | 0.50 |
| W2 | casement_window | wl-2 | Bedroom 2 <-> Exterior | 700 | 1500 |  |  |  | n/a (window or open gap) | 0.50 |
| W3 | casement_window | wl-16 | Study <-> Exterior | 300 | 1100 |  |  |  | n/a (window or open gap) | 0.40 |
| W4 | casement_window | wl-45 | Main Bedroom <-> Exterior | 20 | 1470 |  |  |  | n/a (window or open gap) | 0.40 |
| W5 | window | wl-21 | Main Bedroom <-> Exterior | 640 | 1380 |  |  |  | n/a (window or open gap) | 0.50 |
| W6 | window | wl-39 | Service Balcony <-> Exterior | 200 | 1100 |  |  |  | n/a (window or open gap) | 0.40 |
| W7 | louvre_window | wl-27 | Bath/WC 1 <-> Unlabelled space (U1) | 650 | 550 |  |  |  | plausible: each bath has a louvre (HDB rule) | 0.50 |
| W8 | louvre_window | wl-28 | Bath/WC 2 <-> Exterior | 370 | 530 |  |  |  | plausible: each bath has a louvre (HDB rule) | 0.50 |
| W9 | window | wl-38 | Kitchen <-> Service Balcony | 866 | 806 |  |  |  | plausible: the Kitchen has no other window (check no_window) | 0.40 |
| W10 | window | wl-50 | Bedroom 2 <-> Exterior | 875 | 600 |  |  |  | plausible: Bedroom 2 east wall; a bedroom has this one small window on its outer wall | 0.45 |

- **door_on_open_boundary D8:** no wall is drawn along its gap; position from the gap line recorded from the crop
- **MAIN DOOR D8:** Living/Dining <-> Exterior; confidence 0.50; MAIN DOOR (HDB rule). Read from a 9x crop with a mm grid. The gap lies on the lower diagonal edge of the entrance bay, from about (-1235, 11985) to (-399, 12783), about 1156 mm. Large leaf (about 781 mm) hinged at the north-west end; small leaf (about 375 mm) hinged at the south-east end; they meet at about (-678, 12533). Each leaf is drawn with an arc on the outside (south-west) and an arc on the inside (north-east), so each can swing in or out (double-acting symbol): both arcs are drawn. The text on the leaf reads DROP with a value (read as 100): a floor drop at the threshold to keep water out. The first run put D8 on wl-13, the heavy diagonal wall, which carries no gap; the host is an open boundary (door_on_open_boundary). Positions are estimated from calibrated pixels.
- **door of Bedroom 3:** D1
- **door of Bedroom 2:** D2
- **door of Main Bedroom:** D3, D4, D9
- **door of Bath/WC 1:** D9
- **door of Bath/WC 2:** D10
- **door of Store/Pantry (apt. shelter):** D7
- **door of Kitchen:** D5, D10
- **door of Service Balcony:** D5
- **not identified or uncertain:** D1 (FAILED check (f): joins the Study and a bedroom; the host line is the shared Study top / Bedroom 3 bottom line, so the host and the rooms joined are unresolved, confidence 0.30); D2 (uncertain: ambiguous arc, confidence 0.25)
- **positions:** All door and window offsets and widths are estimated from enlarged crops (position_basis = estimated), not printed.

## Openings whose kind or swing rests on weak evidence

| Opening | Kind | Kind alternative | Kind basis | Swing basis | Confidence | Note |
|---|---|---|---|---|---|---|
| D1 | single_swing_door |  |  | guessed | 0.30 | Bedroom 3 door. Its draft host wl-6 does not exist (user-confirmed). In the crop (ruler crop G1) the arc rises north from the Study top line, from about x=6500 to a top near (7400, 3600), which fits a radius of about 950 mm hinged near x=7450 (the Study corner) and sweeping into Bedroom 3. The straight leaf is not drawn (only a grey patch lies along the line), and the arc runs on into a second arc east of x=8900, so the hinge is inferred from the arc geometry, not seen: swing_basis stays guessed, shown as a grey dashed leaf. Host, span and rooms are proposed, not confirmed. |
| D2 | single_swing_door |  |  | guessed | 0.25 | AMBIGUOUS arc near the Bedroom 2 / hall corner. Its draft host wl-7 does not exist (user-confirmed); re-hosted on wl-19 (y=4600, x 8900-9600). The arc runs on into the Main Bedroom door arc (D3), so it may belong to either. Re-host proposed, not confirmed. |
| D3 | single_swing_door |  |  | read_from_crop | 0.50 | Main Bedroom door in its west wall (gap y 4600-5420). From the crop the leaf is hinged at the north jamb (the wall start, y=4600), lying open along the wl-19 line, and the arc sweeps into the Main Bedroom to the south jamb. |
| D4 | single_swing_door |  |  | read_from_crop | 0.50 | Door between the Main Bedroom and the small unlabelled space. From the crop the leaf stands at the east jamb pointing south and the arc runs back to the west jamb, sweeping into U1. |
| D5 | single_swing_door |  | tests 1, 3, 4: a bare leaf and quarter arc on a gap in the hollow double-line wall wl-38, no frame; it joins two usable spaces | read_from_crop | 0.50 | Moved from wl-30 (Kitchen <-> Exterior). wl-30 is an unbroken solid-fill wall with no gap; the closed thin leaf and its quarter arc lie on wl-38 at y about 10930-11735. Hinge at the north jamb (the wall start, y about 10930), arc sweeps west into the Kitchen. Proposed from the crop, not confirmed by the user. |
| D7 | shelter_door |  |  | read_from_crop | 0.50 | Store/Pantry (apt. shelter) door. From the crop the leaf stands at the east jamb pointing north and the arc sweeps over the hall (Living/Dining); a small sill box lies on the Store side. The first drawing swung it into the Store. |
| D8 | entrance_door |  | HDB main-door rule: opens off the living area; two unequal leaves (781 mm and 375 mm) drawn with a leaf line and two arcs of different radii; test 6 door pair; marked 100 DROP | read_from_crop | 0.50 | MAIN DOOR (HDB rule). Read from a 9x crop with a mm grid. The gap lies on the lower diagonal edge of the entrance bay, from about (-1235, 11985) to (-399, 12783), about 1156 mm. Large leaf (about 781 mm) hinged at the north-west end; small leaf (about 375 mm) hinged at the south-east end; they meet at about (-678, 12533). Each leaf is drawn with an arc on the outside (south-west) and an arc on the inside (north-east), so each can swing in or out (double-acting symbol): both arcs are drawn. The text on the leaf reads DROP with a value (read as 100): a floor drop at the threshold to keep water out. The first run put D8 on wl-13, the heavy diagonal wall, which carries no gap; the host is an open boundary (door_on_open_boundary). Positions are estimated from calibrated pixels. |
| D9 | bifold_door |  | test 3: triangle on a bare wall gap, no arc | read_from_crop | 0.45 | Triangle with its base on the Bath/WC 1 north wall and the apex pointing into the bath: folding door. Added by the bath/WC pass; proposed from the symbol and the HDB legend, not confirmed by the user. |
| D10 | bifold_door |  | test 3: triangle on a bare wall gap, no arc | read_from_crop | 0.45 | Triangle with its base on the Bath/WC 2 south wall, against the west wall, and the apex pointing into the bath: folding door. Added by the bath/WC pass; proposed from the symbol and the HDB legend, not confirmed by the user. |
| D11 | sliding_door |  | balcony access: unbroken thin double line between heavy walls, no other way in; 50 DROP leader |  | 0.50 | Wall-to-wall glazed sliding doors across the Balcony edge (clear gap about 3.55 m between the inner faces of the heavy side walls wl-9 and wl-10). Existence confirmed by the user; the span is measured from the crop. The first run listed D6 (a Kitchen door) as the Balcony door. |
| O1 | opening_no_door |  |  |  | 0.40 | Open gap between the two thin stubs of the Study right side. |
| W1 | casement_window |  | tests 1, 2: arcs on a framed box with a double sill line; two sashes, span about 1100-1500 mm |  | 0.50 | Window bay projecting 400 mm above the wall. Offset recomputed from the moved start of wl-1 (x=5490); absolute position unchanged. |
| W2 | casement_window |  | tests 1, 2: arcs on a framed box with a double sill line; two sashes, span about 1100-1500 mm |  | 0.50 | Window bay projecting 400 mm above the wall. |
| W3 | casement_window |  | tests 1, 2: arcs on a framed box with a double sill line; two sashes, span about 1100-1500 mm |  | 0.40 | Casement window at the west end of the Study top wall; the strip above it is outside the flat. |
| W4 | casement_window |  | tests 1, 2: arcs on a framed box with a double sill line; two sashes, span about 1100-1500 mm |  | 0.40 | Window bay at the right end of the Main Bedroom top wall; re-hosted on wl-45 when wl-19 was split (span x 12220-13690 from the crop). |
| W5 | window |  |  |  | 0.50 | Sliding window in the right wall. |
| W6 | window |  |  |  | 0.40 | Window in the Service Balcony top wall. |
| W7 | louvre_window |  | HDB rule: each bath has a louvre; narrow rectangle with a dotted slat line in the east wall of the bath (symbol seen) |  | 0.50 | Louvre window of Bath/WC 1, east wall x=11200, y about 8260-8810. The space on the other side is the small unlabelled space (U1), probably a shaft or ledge. Seen on the bath crop; first run recorded no opening here. |
| W8 | louvre_window |  | HDB rule: each bath has a louvre; narrow rectangle with a dotted slat line in the east wall of the bath (symbol seen) |  | 0.50 | Louvre window of Bath/WC 2, east wall x=11200, y about 9670-10200 (on the exterior wall). Seen on the bath crop; first run recorded no opening here. |
| W9 | window | sliding_door | tests 1, 3, 5: a framed panel with a filled band between two jambs, no leaf and no arc; the Kitchen has no other window |  | 0.40 | Replaces D6 (retired). Panel on wl-38 at y about 11766-12572 (about 806 mm): a sliding window onto the Service Balcony; a sliding door is the alternative. Proposed from the crop, not confirmed. |
| W10 | window |  | tests 1, 2: two sill lines across the hollow wall at y about 2550 and 3150 (600 mm) with a dotted centre line between them: a narrow top-hung window, no leaf and no arc |  | 0.45 | Narrow window with a dotted centre line in the hollow piece wl-50 (top-hung). Seen in the ink scan (cross lines at y about 2550 and 3150 and a dotted line at x about 12020 between them) and on the first crop; the first run recorded no opening here. Position estimated from calibrated pixels. |

## Missing dimensions that would resolve each conditional / undetermined row

- **wl-3 (conditional):** printed depth of the filled and hollow pieces of this wall
- **wl-4 (undetermined):** a printed depth for the heavy part of the Bedroom 3 / Bedroom 2 partition
- **wl-5 (conditional):** printed depth of the filled and hollow pieces of this wall
- **wl-12 (undetermined):** Printed position where the left wall turns into the diagonal.
- **wl-13 (undetermined):** Printed length or angle and the horizontal extent of the diagonal bay.
- **wl-15 (conditional):** A second printed route to the Study bottom.
- **wl-17 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-18 (conditional):** A second printed route to the Study bottom and right edge.
- **wl-19 (conditional):** a second route to x=8700
- **wl-20 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-21 (conditional):** Right wall thickness.
- **wl-22 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-23 (conditional):** Right wall thickness.
- **wl-24 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-25 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-26 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-27 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-28 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-29 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-30 (conditional):** Printed start of the 1200+2500+2600 chain.
- **wl-31 (undetermined):** Printed depth of the space right of Bath/WC 1.
- **wl-32 (undetermined):** Printed depth of the space right of Bath/WC 1.
- **wl-33 (conditional):** A second printed route to the shelter top.
- **wl-34 (conditional):** A second printed route to the shelter top.
- **wl-35 (conditional):** A second printed route to the shelter top.
- **wl-39 (conditional):** Right wall thickness.
- **wl-40 (conditional):** Right wall thickness.
- **wl-41 (conditional):** Right wall thickness.
- **wl-42 (conditional):** the printed face position of the double line
- **wl-43 (conditional):** a second route to x=8700
- **wl-44 (conditional):** a second route to x=7500
- **wl-45 (conditional):** printed thickness of the right wall
- **wl-46 (undetermined):** printed depth of the partition
- **wl-47 (undetermined):** a printed depth for the Bedroom 3 / hall line
- **wl-48 (conditional):** printed depth of the filled and hollow pieces of this wall
- **wl-49 (conditional):** printed depth of the filled and hollow pieces of this wall
- **wl-50 (conditional):** printed depth of the filled and hollow pieces of this wall
- **wl-51 (conditional):** printed depth of the filled and hollow pieces of this wall

## Area reconciliation

- **all rooms vs printed 142 m2:** computed 147.4 m2 (every room polygon, balconies and the unlabelled space included; Living/Dining includes placeholder geometry at the entrance bay); difference +5.4 m2 (+3.8%); FLAG: above 3%
- **excluding both balconies:** computed 136.7 m2; the caption gives only the single total and does not say whether balconies are included.
- **what moved since the first run:** the Bedroom 3 and Bedroom 2 polygons grew by 0.4 m x width (y=4200 to 4600, +1.44 m2 and +1.32 m2) and the Living/Dining polygon lost the notch of 5300-12200 x 4200-4600 and the rest of that strip (about -3.2 m2): hypotheses, not tested.
- **hypotheses (not verified):** The caption states no area convention. Polygons run grid-line to grid-line. Several areas rest on conditional or undetermined lines (Study, Main Bedroom, the unlabelled space, the diagonal entrance bay).

## Model and effort path

- **model path:** claude-sonnet-5-5 was run in small sequential passes (the endpoint rejects reasoning_effort and caps output at 4096 tokens; medium effort applied by prompt). Passes failed or retried: none recorded. The draft was then verified and rebuilt against enlarged crops and the derived grid; see the diff section.

## Drawing verification

### Render log

| Render | Label overlaps | Walls drawn / table | Openings drawn / table | Swing guessed | Swing mismatch | Visual problems | Action |
|---|---|---|---|---|---|---|---|
| 2 | 0 | 49 / 49 | 21 / 21 | 2 | 0 | Opened render 1 at original size and render 2 at overview size. Render 1 drew every piece of wl-3 and wl-5 in the same orange fill, so the structural and hollow pieces could not be told apart; render 2 draws the structural pieces as solid black with a status-colour edge and the hollow pieces as an outline with a light fill. wl-3 and wl-5 now run from the ledge outline (y about 50) in three pieces, filled at the top, hollow in the middle, filled again to y=4600, where they end in the Study top and Main Bedroom top walls, and window W10 sits in the hollow piece of wl-5. Earlier renders (revision 3): the main-door caption was moved under the door. Render 3: the main door D8 is drawn in magenta with both leaves (781 and 375 mm), an arc and a dashed leaf on each side, IN and OUT arrows and a hatched drop strip; the louvre windows W7 and W8 are cyan slat boxes on the east walls of both baths; the kitchen boundary wl-42 / wl-43 carries a dotted purple line; D5 sits on wl-38 and W9 is the Kitchen sliding window; D11 shows on the Balcony edge. The entrance bay stays an open placeholder. The D5 and W6 symbols sit close together. | Accepted after 2 renders of revision 4. Counts equal the tables (49 walls, 21 openings). The main door D8 has no host wall (open boundary) and is drawn by its own recorded gap line, so its in/out arrows follow the gap, not a wall side; both swing sides are drawn because the symbol shows an arc on each side of each leaf. [mismatch ids: none] |

### Overlay registration against the source image

42 walls scored, 7 not scored (undetermined or diagonal), 5 flagged (off register or no ink), 5 unmodelled ink runs listed. Largest median offset among scored walls: 301 mm.

| Wall | Status | Thick (mm) | Median offset (mm) | Max offset (mm) | Ink coverage | Tolerance (mm) | Flag | Note |
|---|---|---|---|---|---|---|---|---|
| wl-8 | derived | 100 | -5 | 168 | 0.96 | 119 | ok |  |
| wl-9 | derived | 250 | 46 | 126 | 1.00 | 194 | ok |  |
| wl-10 | derived | 250 | 164 | 164 | 1.00 | 194 | ok |  |
| wl-11 | derived | 50 | -25 | 71 | 0.67 | 94 | ok |  |
| wl-24 | conditional | 100 | -1 | 105 | 0.94 | 119 | ok |  |
| wl-26 | conditional | 100 | -134 | 142 | 0.33 | 119 | off_register | /median offset/ 134 mm vs tolerance 119 mm; ink coverage 0.33 |
| wl-27 | conditional | 100 | -31 | 84 | 1.00 | 119 | ok |  |
| wl-25 | conditional | 100 | -1 | 22 | 1.00 | 119 | ok |  |
| wl-28 | conditional | 100 | -19 | 84 | 1.00 | 119 | ok |  |
| wl-29 | conditional | 100 | -31 | 181 | 0.95 | 119 | ok |  |
| wl-2 | derived | 150 | -301 | 301 | 0.13 | 144 | no_ink | /median offset/ 301 mm vs tolerance 144 mm; ink coverage 0.13 |
| wl-5 | conditional | 345 | -69 | 69 | 1.00 | 241 | ok |  |
| wl-50 | conditional | 345 | 149 | 149 | 1.00 | 241 | ok |  |
| wl-51 | conditional | 345 | -58 | 92 | 1.00 | 241 | ok |  |
| wl-1 | derived | 150 | -301 | 301 | 0.30 | 144 | off_register | /median offset/ 301 mm vs tolerance 144 mm; ink coverage 0.30 |
| wl-3 | conditional | 345 | 49 | 49 | 1.00 | 241 | ok |  |
| wl-4 | undetermined | 300 |  |  |  | 219 | not scored | undetermined placeholder geometry: not scored |
| wl-46 | undetermined | 100 |  |  |  | 119 | not scored | undetermined placeholder geometry: not scored |
| wl-47 | undetermined | 100 |  |  |  | 119 | not scored | undetermined placeholder geometry: not scored |
| wl-48 | conditional | 345 | 140 | 140 | 1.00 | 241 | ok |  |
| wl-49 | conditional | 345 | 37 | 71 | 1.00 | 241 | ok |  |
| wl-30 | conditional | 250 | 15 | 107 | 1.00 | 194 | ok |  |
| wl-37 | derived | 100 | 1 | 137 | 0.99 | 119 | ok |  |
| wl-38 | derived | 100 | -23 | 104 | 0.92 | 119 | ok |  |
| wl-12 | undetermined | 250 |  |  |  | 194 | not scored | undetermined placeholder geometry: not scored |
| wl-13 | undetermined | 250 |  |  |  | 194 | not scored | undetermined placeholder geometry: not scored |
| wl-14 | derived | 250 | 1 | 70 | 1.00 | 194 | ok |  |
| wl-42 | conditional | 150 | -200 | 200 | 0.00 | 144 | no_ink | /median offset/ 200 mm vs tolerance 144 mm; ink coverage 0.00 |
| wl-43 | conditional | 100 | -100 | 112 | 0.05 | 119 | no_ink | /median offset/ 100 mm vs tolerance 119 mm; ink coverage 0.05 |
| wl-19 | conditional | 100 | -37 | 186 | 0.89 | 119 | ok |  |
| wl-20 | conditional | 100 | -24 | 70 | 1.00 | 119 | ok |  |
| wl-21 | conditional | 200 | 85 | 85 | 1.00 | 169 | ok |  |
| wl-22 | conditional | 100 | -34 | 139 | 0.94 | 119 | ok |  |
| wl-23 | conditional | 200 | 93 | 116 | 1.00 | 169 | ok |  |
| wl-45 | conditional | 100 | -2 | 2 | 1.00 | 119 | ok |  |
| wl-39 | conditional | 250 | -31 | 169 | 1.00 | 194 | ok |  |
| wl-40 | conditional | 100 | -30 | 30 | 1.00 | 119 | ok |  |
| wl-41 | conditional | 250 | -11 | 22 | 1.00 | 194 | ok |  |
| wl-33 | conditional | 300 | 53 | 134 | 1.00 | 219 | ok |  |
| wl-34 | conditional | 300 | 118 | 153 | 1.00 | 219 | ok |  |
| wl-35 | conditional | 300 | -96 | 142 | 1.00 | 219 | ok |  |
| wl-36 | derived | 300 | -11 | 91 | 1.00 | 219 | ok |  |
| wl-15 | conditional | 100 | 15 | 164 | 0.92 | 119 | ok |  |
| wl-16 | derived | 100 | -2 | 2 | 1.00 | 119 | ok |  |
| wl-17 | conditional | 100 | -54 | 65 | 1.00 | 119 | ok |  |
| wl-18 | conditional | 100 | -23 | 218 | 0.84 | 119 | ok |  |
| wl-44 | conditional | 100 | -37 | 186 | 0.70 | 119 | ok |  |
| wl-31 | undetermined | 100 |  |  |  | 119 | not scored | undetermined placeholder geometry: not scored |
| wl-32 | undetermined | 100 |  |  |  | 119 | not scored | undetermined placeholder geometry: not scored |
| unmodelled |  |  |  |  |  |  | unmodelled_line | horizontal x 12398 to 14076 at y=397 (1677 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  | unmodelled_line | horizontal x -1919 to -172 at y=13262 (1746 mm); weight single; in (outside every room polygon) |
| unmodelled |  |  |  |  |  |  | unmodelled_line | vertical y 11628 to 12986 at x=8170 (1357 mm); weight single; in Kitchen |
| unmodelled |  |  |  |  |  |  | unmodelled_line | vertical y 6611 to 7301 at x=11065 (690 mm); weight single; in Main Bedroom |
| unmodelled |  |  |  |  |  |  | unmodelled_line | vertical y 282 to 2722 at x=13996 (2439 mm); weight single; in (outside every room polygon) |

### Door swing check against the source ink

9 doors checked: 2 guessed, 6 ok, 1 ok_both_sides.

| Opening | Kind | Swing into | Hinge | Swing basis | Ink drawn | Ink mirror side | Ink other hinge | Ink both mirrored | Flag |
|---|---|---|---|---|---|---|---|---|---|
| D1 | single_swing_door | Bedroom 3 | end | guessed | 0.75 | 0.19 | 0.19 | 0.22 | guessed |
| D2 | single_swing_door |  |  | guessed |  |  |  |  | guessed |
| D3 | single_swing_door | Main Bedroom | start | read_from_crop | 0.94 | 0.11 | 0.39 | 0.11 | ok |
| D4 | single_swing_door | Unlabelled space (U1) | end | read_from_crop | 1.00 | 0.33 | 0.39 | 0.08 | ok |
| D5 | single_swing_door | Kitchen | start | read_from_crop | 0.92 | 0.00 | 0.33 | 0.00 | ok |
| D7 | shelter_door | Living/Dining | end | read_from_crop | 1.00 | 0.56 | 0.42 | 0.69 | ok |
| D8 | entrance_door | Exterior / Living/Dining (large leaf ink side+/side-: 1.00/0.86; small leaf: 0.92/1.00) | start / end | read_from_crop | 1.00 | 0.89 |  |  | ok_both_sides |
| D9 | bifold_door | Bath/WC 1 | both | read_from_crop | 0.75 | 0.75 | 0.75 | 0.75 | ok |
| D10 | bifold_door | Bath/WC 2 | both | read_from_crop | 0.75 | 0.17 | 0.17 | 0.17 | ok |

## Placeholders

- **drawing placeholders:** Red dashed walls wl-4, wl-46, wl-47, wl-12, wl-13, wl-31, wl-32 are placeholder geometry; their lengths are undetermined (wl-4, wl-46 and wl-47 are placed from the image). Grey dashed doors (D1, D2) have an unreadable swing. Orange walls are conditional. Door and window positions are estimated, not printed. Wall thicknesses are drawn estimates.
