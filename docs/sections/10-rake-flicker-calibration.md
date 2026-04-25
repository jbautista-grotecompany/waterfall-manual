# 10  RAKE/FLICKER Height Calibration

## 10.1 Overview

!!! warning
    **Calibration Sequence.**
    Calibrate FLICKER HEIGHT before RAKE HEIGHT. The FLICKER must be in the
    upper position before the RAKE is moved up. Failure to follow this
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
    Verify calibration at initial commissioning and after replacing any
    encoder or height assembly component. The Applicator must be powered on
    with the GROTE login active. Do not attempt to jog height motors with
    any guards removed or personnel near the RAKE or FLICKER assemblies.

---

## 10.2 Calibration Procedure

Calibrate FLICKER HEIGHT first using the steps below. Then repeat the
procedure for RAKE HEIGHT. All controls referenced below are on the
[Calibration screen](11-oi-reference.md#1111-calibration-screens).

1. Press JOG UP until the hard upper limit is reached.
2. Press and hold the encoder RESET POSITION button for three seconds.
3. Press JOG DOWN to move the FLICKER or RAKE to 2.0 inches. This is the
   TEACH MAX reference position.
4. Press and hold TEACH MAX for three seconds.
5. Press JOG DOWN to move the FLICKER or RAKE to 0.25 inches. This is the
   TEACH MIN reference position.
6. Press and hold TEACH MIN for three seconds.
7. Confirm the SCALED OUTPUT VALUE matches the physical position. If not,
   repeat from Step 1.

!!! warning
    **Manual Jogging.**
    The Applicator handles the FLICKER-before-RAKE sequence automatically
    in normal operation. Manual jogging bypasses this protection. Always
    raise FLICKER before RAKE when jogging manually.