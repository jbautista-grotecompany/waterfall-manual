# 7 — Motor Speed Scaling

## 7.1 Overview

Motor speed scaling sets the relationship between drive output (Hz) and the
OI speed display (FPM). Each drive is scaled independently from
MAINT → MOTOR SETUP → [drive name].

Each drive service screen has two sections. MOTOR SCALING sets the frequency
range and the corresponding belt speed. CUSTOMER ENTRY LIMITS defines the
speed range operators can enter on the RECIPE screen.

!!! note
    Verify motor scaling during initial commissioning and after any drive or
    motor replacement. Use MANUAL FUNCTIONS on each drive service screen to
    run the drive at a set frequency for speed measurement.

---

## 7.2 Scaling Configuration Procedure

1. Stop the Applicator and log in with GROTE credentials.
2. Navigate to MAINT → MOTOR SETUP → [drive name].
3. Set MOTOR SCALING MAX [Hz] to the rated maximum frequency listed on the
   VFD parameter sheet (Parameter P044).
4. Set MOTOR SCALING MIN [Hz] to the rated minimum frequency listed on the
   VFD parameter sheet (Parameter P043).
5. Using MANUAL FUNCTIONS, run the drive at MAX [Hz]. Measure the physical
   belt surface speed with a calibrated tachometer. Enter the measured value
   in MOTOR SCALING MAX [FPM].
6. If Parameter P043 equals 0, enter 0 in MOTOR SCALING MIN [FPM]. If
   Parameter P043 is non-zero, run the drive at MIN [Hz], measure the
   physical belt surface speed with a calibrated tachometer, and enter the
   measured value in MOTOR SCALING MIN [FPM].
7. Set CUSTOMER ENTRY LIMITS MIN and MAX [FPM] within the physical range
   defined by MOTOR SCALING.
8. Repeat for all drives.

---

## 7.3 Drive Scaling Reference

Values in brackets [ ] are placeholders. Replace with values from the
Applicator-specific electrical drawings and motor nameplates for this unit.

| **Drive / Component** | **Scale Min [Hz]** | **Scale Max [Hz]** | **Scale Min [FPM]** | **Scale Max [FPM]** | **Cust. Limits [FPM]** |
|---|---|---|---|---|---|
| **PRODUCT CONVEYOR** | 0.00 | 90.00 | 0.00 | 100.00 | 5.0 – 120.0 |
| **PORTION CONVEYOR** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **RETURN #2** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **RAKE** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **RAKE HEIGHT** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |
| **FLICKER** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **FLICKER HEIGHT** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |
| **RETURN #1** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **RETURN #3** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **TRANSFER CONV (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **PCM CONVEYOR (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **PCM RAKE (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x – xxx.x] |
| **PCM RAKE HEIGHT (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |