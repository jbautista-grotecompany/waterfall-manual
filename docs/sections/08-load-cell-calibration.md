# 8 — Load Cell Calibration

## 8.1 Overview

Load cell calibration maps the load cell signal (Volts) to the weight
display on the OI (lb). The RAKE LOAD CELLS (two, wired in parallel) and
PORTION LOAD CELLS are each calibrated as a single input from
MAINT → CALIBRATION → [load cell name].

The calibration screen shows the raw input and scaled output values. Enter
reference values in the MIN and MAX fields, then press and hold TEACH MIN
or TEACH MAX for three seconds.

!!! note
    Verify calibration at initial commissioning and after replacing any load
    cell component. Calibrate only with the conveyor empty and the load cell
    area clean.

---

## 8.2 Calibration Procedure

1. At the load cell amplifier, located inside the DC enclosure, use the
   coarse and fine adjustment screws to zero the raw signal. The conveyor
   must be empty and clean. Empty means the conveyor surface is free of all
   topping material, not just the visible pile.

2. Enter 0.0 in the SCALE MIN value input field.

3. Press and hold TEACH MIN for three seconds.

4. Place calibration weights on the scale following the load cell
   manufacturer's instructions.

    !!! note
        Recommended calibration weight values to be confirmed. Use weights
        appropriate for the expected operating range of each load cell
        (RAKE or PORTION).

5. Enter the calibration weight value in the SCALE MAX value input field.

6. Press and hold TEACH MAX for three seconds.

7. Confirm the SCALED OUTPUT VALUE matches the calibration weight. If not,
   repeat Step 1.