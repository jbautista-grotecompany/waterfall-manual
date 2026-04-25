# 3  Startup

## 3.1 Startup Sequence

<figure markdown>
  ![Startup sequence flowchart showing steps from power-on through MACHINE ENABLE to Operating Modes](../assets/images/fig_3_1_startup_sequence_flowchart.svg){ width="350" }
  <figcaption>Figure 3.1  Startup sequence flowchart</figcaption>
</figure>

1. Confirm the Applicator is fully reassembled. Belts, guards, and scrapers
   are all in place.

2. Verify the compressed air supply is ON.

3. Turn the ELECTRICAL DISCONNECT to the ON position. Wait for the PLC and
   OI to finish initializing. The HOME screen appears when ready. If active
   alarms are present, the OI displays the ALARMS screen first. Navigate to
   the [ALARMS screen](11-oi-reference.md#118-alarms-screen), correct all
   conditions, then press FAULT RESET once to clear all resettable faults.

    !!! note
        If the MACHINE ENABLE indicator flashes: pull all E-STOP actuators
        to release, close all guards, then press MACHINE ENABLE again. If it
        continues to flash, navigate to
        [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens) to
        identify which device remains open. Faults that do not clear after
        pressing FAULT RESET require device-specific corrective action.
        Navigate to the [ALARMS screen](11-oi-reference.md#118-alarms-screen)
        and refer to [Section 12: Troubleshooting](12-troubleshooting.md)
        for guidance.

4. Press the MACHINE ENABLE PUSH BUTTON. Verify the MACHINE ENABLE indicator
   is illuminated solid.

5. Enable the PORTION CONVEYOR and PRODUCT CONVEYOR tension cylinders from
   the [HOME screen](11-oi-reference.md#112-home-screen). Confirm that both
   are fully extended before proceeding.

6. When all criteria are satisfied, proceed to
   [Section 4: Operating Modes](04-operating-modes.md).