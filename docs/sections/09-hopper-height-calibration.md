# 9  HOPPER Height Calibration

## 9.1 Overview

HOPPER height calibration maps the HOPPER HEIGHT SENSOR output (Volts) to
the height display on the OI (in). Calibrate from
[MAINT](11-oi-reference.md#119-maint-screens) →
[CALIBRATION → HOPPER HEIGHT](11-oi-reference.md#1111-calibration-screens).

The calibration screen shows the raw sensor signal and the scaled output.
Enter reference values in the MIN and MAX fields, then press and hold
TEACH MIN or TEACH MAX for three seconds.

!!! note
    Verify calibration at initial commissioning and after replacing the
    HOPPER HEIGHT SENSOR or its cable. The HOPPER must be empty and the
    sensor lens clean before calibrating. A contaminated lens produces a
    false raw signal that shifts all scaled readings after the teach.

---

## 9.2 Calibration Procedure

<!-- OPEN ITEM: Calibration flag geometry, part description, and storage
location to be defined and documented by Grote Service before publication.
Recommended calibration height values to be confirmed and inserted in
Steps 1 and 4. -->

1. Place the calibration flag at the sensor to fully block the laser beam.
2. Enter 0.0 in the SCALE MIN value input field.
3. Press and hold TEACH MIN for three seconds.
4. Move the calibration flag to the maximum measurable height position and
   record the physical height in inches.
5. Enter the measured height value in the SCALE MAX value input field.
6. Press and hold TEACH MAX for three seconds.
7. Verify the SCALED OUTPUT VALUE matches the physical height reference.
   If not, repeat from Step 1.