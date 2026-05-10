# 10  RAKE/FLICKER Height Calibration

## 10.1 Overview

!!! warning
    **Calibration Sequence.**
    Calibrate FLICKER HEIGHT before RAKE HEIGHT. The FLICKER must be in the
    upper position before the RAKE is moved. Failure to follow this
    sequence can result in a collision between the two assemblies.

RAKE and FLICKER height calibration maps the encoder position to the height
display on the OI (in). RAKE HEIGHT and FLICKER HEIGHT are each calibrated
from [MAINT](11-oi-reference.md#119-maint-screens) →
[CALIBRATION](11-oi-reference.md#1111-calibration-screens) →
[RAKE HEIGHT] or [FLICKER HEIGHT].

The calibration screen shows the encoder position and the scaled output.
Enter reference values in the MIN and MAX fields, then press and hold
TEACH MIN or TEACH MAX for three seconds.

!!! note
    Verify calibration at commissioning and after replacing any
    encoder or height assembly component. The Applicator must be powered on
    with the GROTE login active. Do not attempt to jog height motors with
    any guards removed or personnel near the RAKE or FLICKER assemblies.

---

## 10.2 Calibration Procedure

Perform the steps below for FLICKER HEIGHT first, then repeat them for
RAKE HEIGHT. References to "the axis" mean whichever axis is being
calibrated. All controls are on the
[Calibration screen](11-oi-reference.md#1111-calibration-screens).

<div class="table-keep-label" markdown="1">

| **Axis** | **TEACH MAX position** | **TEACH MIN position** |
|---|---|---|
| **FLICKER** | 2.5 in | 0.18 in |
| **RAKE** | 2.5 in | 0.25 in |

</div>

1. Press JOG UP until the axis reaches the hard upper limit.
2. Press and hold the encoder RESET POSITION button for three seconds.
3. Press JOG DOWN to move the axis to its TEACH MAX position.
4. Press and hold TEACH MAX for three seconds.
5. Press JOG DOWN to move the axis to its TEACH MIN position.
6. Press and hold TEACH MIN for three seconds.
7. Confirm the SCALED OUTPUT VALUE matches the physical position. If not,
   repeat from Step 1.

!!! warning
    **Manual Jogging Beyond Calibration.**
    The Applicator's automatic FLICKER-before-RAKE sequence does not apply
    to manual jogging outside this procedure. When jogging either axis from
    the MANUAL screens, always raise the FLICKER before moving the RAKE.