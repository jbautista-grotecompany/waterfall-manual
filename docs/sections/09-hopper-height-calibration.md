# 9 — Hopper Height Calibration

## 9.1 Overview

Hopper height calibration maps the sensor output (Volts) to the height
display on the OI (in). Calibrate from MAINT → CALIBRATION → HOPPER HEIGHT.

The calibration screen shows the raw sensor signal and the scaled output.
Enter reference values in the MIN and MAX fields, then press and hold
TEACH MIN or TEACH MAX for three seconds.

!!! note
    Verify at initial commissioning and after sensor or cable replacement.

---

## 9.2 Calibration Procedure

!!! note
    Calibration flag and calibration weights to be defined and documented.
    Description of the calibration flag geometry and recommended calibration
    weight values to be added here before publication.

1. Place the calibration flag at the sensor to fully block the laser beam.
2. Enter 0.0 in the SCALE MIN value input field.
3. Press and hold TEACH MIN for three seconds.
4. Move the calibration flag to the maximum measurable height position and
   record the physical height in inches.
5. Enter the measured height value in the SCALE MAX value input field.
6. Press and hold TEACH MAX for three seconds.
7. Verify the SCALED OUTPUT VALUE matches the physical height reference.
   Repeat the procedure if the values do not match.