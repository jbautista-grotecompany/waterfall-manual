# 7  Motor Speed Scaling

## 7.1 Overview

Motor speed scaling sets the relationship between drive output (Hz) and the
OI speed display (FPM). Each drive is scaled independently from
[MAINT](11-oi-reference.md#119-maint-screens) →
[MOTOR SETUP](11-oi-reference.md#1110-motor-setup-screens) → [drive name].

Each drive service screen has two sections. MOTOR SCALING sets the frequency
range and the corresponding belt speed. CUSTOMER ENTRY LIMITS defines the
speed range operators can enter on the
[RECIPE screen](11-oi-reference.md#113-recipe-screen).

!!! note
    Verify motor scaling during initial commissioning and after any drive or
    motor replacement. Use
    [MANUAL FUNCTIONS](11-oi-reference.md#1110-motor-setup-screens) on each
    drive service screen to run the drive at a set frequency for speed
    measurement.

---

## 7.2 Scaling Configuration Procedure

1. Stop the Applicator and log in with GROTE credentials. See
   [Section 11.9: MAINT Screens](11-oi-reference.md#119-maint-screens) for
   login and logout controls.
2. Navigate to [MAINT](11-oi-reference.md#119-maint-screens) →
   [MOTOR SETUP](11-oi-reference.md#1110-motor-setup-screens) → [drive name].
3. Set MOTOR SCALING MAX [Hz] to the rated maximum frequency listed on the
   VFD parameter sheet (Parameter P044).
4. Set MOTOR SCALING MIN [Hz] to the rated minimum frequency listed on the
   VFD parameter sheet (Parameter P043).
5. Using MANUAL FUNCTIONS, run the drive at MAX [Hz]. Measure the physical
   belt surface speed with a calibrated tachometer. Enter the measured value
   in MOTOR SCALING MAX [FPM].
6. If Parameter P043 equals 0, enter 0 in MOTOR SCALING MIN [FPM]. If
   Parameter P043 is non-zero, run the drive at MIN [Hz], measure the belt
   surface speed, and enter the measured value in MOTOR SCALING MIN [FPM].
7. Set CUSTOMER ENTRY LIMITS MIN and MAX [FPM] within the physical range
   defined by MOTOR SCALING.
8. Repeat for all drives.

!!! note
    Steps 3 and 4 reference VFD parameter sheets. RETURN #1 and RETURN #3
    use VSS drives. For VSS drives, obtain the MIN and MAX frequency values
    from the VSS drive documentation supplied with the Applicator. The
    measurement procedure in Steps 5 and 6 applies to both VFD and VSS
    drives.

---

## 7.3 Drive Scaling Reference

Values in brackets [ ] are placeholders. Replace with values from the
Applicator-specific electrical drawings and motor nameplates for this unit.

| **Drive / Component** | **Scale Min [Hz]** | **Scale Max [Hz]** | **Scale Min [FPM]** | **Scale Max [FPM]** | **Cust. Limits [FPM]** |
|---|---|---|---|---|---|
| **PRODUCT CONVEYOR** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **PORTION CONVEYOR** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **RETURN #2** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **RAKE** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **RAKE HEIGHT** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |
| **FLICKER** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **FLICKER HEIGHT** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |
| **RETURN #1** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **RETURN #3** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **AUX 1 CONVEYOR (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **AUX 2 CONVEYOR (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **TRANSFER CONV (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **PCM CONVEYOR (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **PCM RAKE (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | [x.x–xxx.x] |
| **PCM RAKE HEIGHT (if equipped)** | [xx.xx] | [xx.xx] | [xx.xx] | [xx.xx] | N/A |