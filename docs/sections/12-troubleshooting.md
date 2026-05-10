# 12  Troubleshooting

## 12.1 Quick Reference Index

Use this table to find your symptom and jump to the correct subsection. Work
through the three critical checkpoints in
[Section 6.1](06-process-control.md#61-three-critical-system-checkpoints)
before adjusting any parameters. Most weight problems start at Checkpoint 1
or 2.

**Operator:** No tools or electrical work required. Can be done during normal
production without accessing the MAINT screen.

**Technician:** Requires MAINT screen access, drive diagnostics, or mechanical
work. Engage LOTO before any mechanical inspection unless the task specifically
requires power.

| **Symptom** | **Go to** |
|---|---|
| Applicator will not start or enable | [12.2: Safety Circuit & Startup Faults](#122-safety-circuit-startup-faults) |
| Applicator will not start in RUN mode / repeatedly enters PRIME mode | [12.2: Safety Circuit & Startup Faults](#122-safety-circuit-startup-faults) |
| PORTION WEIGHT inconsistent or out of specification | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping compacts under the RAKE | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping avalanche at the drop point | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping compressed in front of the FLICKER | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping appears thin or light on the target | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| FLICKER not flicking material | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RETURN #2 running at maximum speed continuously | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| CONSERVE mode activating continuously or unexpectedly | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RAKE or FLICKER will not move to commanded position | [12.4: Motion & Drive Faults](#124-motion-drive-faults) |
| VFD or VSS fault on any drive | [12.4: Motion & Drive Faults](#124-motion-drive-faults) |
| RAKE LOAD CELL reads non-zero with empty, clean belt | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| HOPPER HEIGHT SENSOR reading incorrect or erratic | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Communications fault (SAFETY PLC, OI, Remote IO) | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Active alarm on the ALARMS screen | [12.6: Alarm Conditions Reference](#126-alarm-conditions-reference) |

---

## 12.2 Safety Circuit & Startup Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **Applicator will not start** | Emergency stop active | Pull each E-STOP actuator to release: one on the OI enclosure, one on the PRODUCT CONVEYOR frame. Open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens) and confirm all safety device indicators are green. Press MACHINE ENABLE. | Operator |
| | Guard open or guard switch not engaging | Close the MAIN GUARD and RETURN #2 guard fully. The switch actuator must seat completely into the switch body. Open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens). If the guard switch still shows red with the guard fully closed, the actuator is misaligned. Adjust the mounting, then press MACHINE ENABLE. | Operator |
| | Guard switch or wiring damaged | If the SAFETY PLC screen shows a guard fault with the guard fully closed and actuator properly seated, inspect the cable from the switch to the panel for damage. Replace the switch if wiring is intact. | Technician |
| | Tension cylinders not extended | On the [HOME screen](11-oi-reference.md#112-home-screen), enable the PRODUCT CONVEYOR and PORTION CONVEYOR tension cylinders. Confirm the cylinders physically extend; do not rely on the OI indicator alone. Both must be fully extended before the Applicator will start. | Operator |
| | Active alarm not cleared | Open the [ALARMS screen](11-oi-reference.md#118-alarms-screen). Correct all active conditions, then press FAULT RESET. Faults that remain after FAULT RESET require device-specific corrective action. See [Section 12.6](#126-alarm-conditions-reference). When the ALARMS screen shows no active entries, press MACHINE ENABLE. | Operator |
| | Air pressure low or absent | Confirm the compressed air supply valve is fully open. Check the supply pressure at the air inlet on the Applicator. If pressure is present at the inlet but the fault remains, trace the supply line for leaks or a partially closed inline valve. | Operator |
| **Applicator will not start in RUN mode** | Priming criteria not met | RAKE weight has not reached 75% of TARGET LEVEL for 10 continuous seconds. Select PRIME mode and run the priming sequence to completion. The Applicator transitions to RUN mode automatically when the criteria are met. | Operator |
| **Applicator repeatedly drops into PRIME mode during production** | Topping supply not keeping up with consumption | Open the [RAKE screen](11-oi-reference.md#115-rake-screen). If RAKE WEIGHT is trending down over time, the SHREDDER or PCM is not delivering enough topping. Increase the SHREDDER or PCM output rate. Do not raise TARGET LEVEL: this increases demand without increasing supply. | Operator |

---

## 12.3 Weight & Application Quality Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **PORTION WEIGHT inconsistent** | HOPPER not filling consistently | Open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). If ACTUAL LEVEL is not tracking TARGET LEVEL, see [Section 6.1: Checkpoint 1](06-process-control.md#61-three-critical-system-checkpoints). | Operator |
| | RAKE weight unstable | Open the [RAKE screen](11-oi-reference.md#115-rake-screen). If RAKE WEIGHT AVERAGE is oscillating, see [Section 6.1: Checkpoint 2](06-process-control.md#61-three-critical-system-checkpoints). | Operator |
| | Voids in the topping bed | Inspect the bed on the PORTION CONVEYOR. If voids are present, RAKE HEIGHT is too low. Increase RAKE HEIGHT in 0.10 in increments. See [Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment) for the compaction assessment procedure. | Operator |
| | PORTION CONTROL enabled before weight stabilized | Disable PORTION CONTROL. Repeat the manual setup at [Section 6.5](06-process-control.md#65-portion-conveyor-pid-control-portion-weight). | Operator |
| | PORTION LOAD CELL zero offset | Stop the Applicator. Clean the PORTION CONVEYOR belt. Open [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → PORTION LOAD CELL. If the raw input is non-zero with the belt clean and empty, do not re-teach. Inspect for debris under the load cell mounting and frame deflection. | Technician |
| **Topping compacts under the RAKE** | RAKE HEIGHT too low | Increase RAKE HEIGHT in 0.10 in increments. See [Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment) for the compaction assessment procedure. | Operator |
| | TARGET LEVEL too high | Reduce TARGET LEVEL in the active recipe by 3 to 5 lb. Observe the bed: the pile should be present but not overflowing the RAKE trough. | Operator |
| **Topping avalanche at the drop point** | PORTION CONVEYOR running too slow | Increase PORTION CONVEYOR speed in 0.5 FPM increments until topping flows off the nose roller continuously. If PORTION CONTROL is active, disable it, set the speed manually, verify weight, then re-enable. | Operator |
| | FLICKER HEIGHT too high | The FLICKER spikes must engage the bed surface. If set too high, sections of bed pass under the FLICKER without being flicked and fall off the nose roller as chunks. Lower FLICKER HEIGHT in 0.05 in increments until the flicking action resumes. | Operator |
| **Topping compressed in front of the FLICKER** | FLICKER HEIGHT too low | The FLICKER acts as a gate against the bed instead of flicking material from the surface. Raise FLICKER HEIGHT in 0.05 in increments until the bed flows under the FLICKER without compression. | Operator |
| **Topping appears thin or light on the target** | FLICKER SPEED too fast | The spikes throw material with too much velocity, dispersing it over a larger area than the target. Decrease FLICKER SPEED. | Operator |
| **FLICKER not flicking material** | FLICKER SPEED too slow | The spikes do not impart enough motion to lift and throw material from the bed. Increase FLICKER SPEED. | Operator |
| **RETURN #2 at maximum speed continuously** | Topping supply insufficient | Open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). If ACTUAL LEVEL is below TARGET LEVEL, increase the SHREDDER or PCM output rate. Do not raise TARGET LEVEL or RETURN #2 maximum speed. | Operator |
| | TARGET LEVEL set higher than supply can sustain | If the HOPPER is stable and RETURN #2 is still pinned at maximum, reduce TARGET LEVEL in 3 to 5 lb increments until RETURN #2 begins modulating above its minimum. | Operator |
| | RETURN #2 minimum speed too high relative to demand | Open [MAINT](11-oi-reference.md#119-maint-screens) → [MOTOR SETUP](11-oi-reference.md#1110-motor-setup-screens) → RETURN #2. If the minimum speed delivers more topping than the line consumes, reduce TARGET LEVEL until consumption matches the minimum-speed delivery rate, or contact [Grote Service](About.md#contact). | Technician |
| **CONSERVE mode activating unexpectedly or continuously** | CONSERVE timer shorter than the gap between targets | Open [MACHINE OPTIONS → CONSERVE MODE TIME [MS]](11-oi-reference.md#1114-machine-options-reference). Increase the value to at least 150% of the longest normal gap between targets at the current line speed. | Technician |
| | TARGET PHOTOEYE contaminated or misaligned | Clean the lens on the affected lane. Check the [ALARMS screen](11-oi-reference.md#118-alarms-screen) for a PHOTOEYE STUCK ON warning. If cleaning does not resolve the symptom, check that the mounting bracket has not shifted. These photoeyes are factory-set with no field adjustment. | Operator |

---

## 12.4 Motion & Drive Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE or FLICKER will not move to commanded position** | Height motor disconnect open | Locate the RAKE HEIGHT or FLICKER HEIGHT MOTOR DISCONNECT on the Applicator frame. It must be in the ON position. If it is ON but the motor still does not move, check the [ALARMS screen](11-oi-reference.md#118-alarms-screen) for a disconnect open fault. A tripped breaker can read as open even with the handle in the ON position. Reset the breaker, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). | Operator |
| | Encoder fault active | Open the [ALARMS screen](11-oi-reference.md#118-alarms-screen). If an encoder fault is active, see [Section 12.5](#125-sensor-calibration-faults) before attempting to move the axis. Commanding motion with an active encoder fault can drive the axis into a mechanical limit. | Technician |
| | Mechanical obstruction in height travel | Stop the Applicator and engage LOTO. Trace the full travel path of the height mechanism from the lower stop to the upper stop. Look for topping buildup, a dislodged scraper, or a foreign object. Clear the obstruction. Restore power and perform a slow jog to confirm full range of travel before returning to recipe control. | Technician |
| **RAKE or FLICKER at overtravel limit** | HIGH LIMIT or LOW LIMIT fault active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [RAKE HEIGHT or FLICKER HEIGHT]. If the HIGH LIMIT is active, press JOG DOWN in short pulses to move the axis off the limit. If the LOW LIMIT is active, press JOG UP. Press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). If the axis returns to the limit without a command, there is mechanical binding or an encoder issue. Engage LOTO and inspect the mechanism. | Operator |
| **VFD fault: any drive** | Fault code active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [drive name] SERVICE. The fault code displays in the VFD LAST FAULT field. Press **?** to view the fault description and corrective action for that code. Correct the condition, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). If the fault returns immediately after reset, the underlying condition was not resolved. Do not continue resetting without identifying the cause. | Technician |
| **VSS fault: RETURN #1 or RETURN #3** | VSS fault code active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [drive name] SERVICE. Read the fault code displayed. Press **?** for guidance specific to that code. Correct the condition, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). | Technician |
| **Motor disconnect fault: any drive** | Branch circuit disconnect open or tripped | Locate the motor branch circuit disconnect for the named drive. Disconnect labels match the drive names used in the OI. If the handle tripped to the middle position, identify and correct the cause before resetting. Reset the disconnect, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). Motor disconnects are optional, customer-specified equipment and are not controlled from the OI. | Technician |

---

## 12.5 Sensor & Calibration Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE LOAD CELL reads non-zero with empty, clean belt** | Topping residue under load cell or mounting frame | Stop the Applicator. Remove all topping from the PORTION CONVEYOR belt and from under the RAKE assembly. Check underneath the load cell mounting points: a small piece of compressed topping is enough to hold a false reading. Open [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → RAKE LOAD CELL. The raw input must read zero with the belt empty and clean. If it does not, remove more material and check again before re-teaching. | Technician |
| | Load cell mounting frame damaged or deflected | If the belt is clean and the raw input still reads non-zero, the frame may be deflected. Do not re-teach zero. Inspect the load cell mounting bracket for cracks, bent flanges, or a loose mounting bolt. Contact [Grote Service](About.md#contact) if frame damage is confirmed. | Technician |
| **HOPPER HEIGHT SENSOR reading incorrect or erratic** | Lens contaminated | Wipe the sensor lens with a clean, dry, lint-free cloth. Do not use solvents. Restart the Applicator and open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). The reading should stabilize within a few seconds. If it remains erratic, the lens surface may be etched. Replace the sensor. | Operator |
| | Sensor mounting shifted | Check that the bracket has not been struck or vibrated loose. If the bracket position has changed, return it to its original position and angle, confirm the reading is close to expected, then recalibrate at [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION → HOPPER HEIGHT](11-oi-reference.md#1111-calibration-screens). | Technician |
| **Encoder warning: RESONANCE COUPLING WEAK** | Magnetic coupling below warning threshold | Do not ignore this warning. Open [MANUAL](11-oi-reference.md#117-manual-screens) → [RAKE HEIGHT or FLICKER HEIGHT] SERVICE. Inspect the encoder face-to-target gap; the gap must be within the specification on the encoder label. Clean any metal debris or topping residue from the encoder face. If the warning clears, monitor it at the start of each shift. If it returns, replace the encoder before it escalates to a NO COUPLING fault. | Technician |
| **Encoder fault: NO RESONANCE COUPLING** | Complete loss of magnetic coupling | The Applicator will not move the affected height axis. Inspect the encoder mounting gap and check for physical damage to the encoder body or shaft target. Verify no metal debris is bridging the gap. If the gap is correct and the face is clean, replace the encoder, then recalibrate the height axis at [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION → RAKE HEIGHT or FLICKER HEIGHT](11-oi-reference.md#1111-calibration-screens). See [Section 10](10-rake-flicker-calibration.md). | Technician |
| **Encoder fault: MULTITURN FAULT** | Encoder lost its multi-turn position count | Power cycle the Applicator. If the fault clears, verify the RAKE or FLICKER position displayed on the OI matches the physical position before running the axis under recipe control. If the fault returns after power cycle, replace the encoder. Contact [Grote Service](About.md#contact) if the root cause is not clear. | Technician |
| **SAFETY PLC COMMS LOST FAULT** | Communication between main PLC and SAFETY PLC lost | Inspect the network cable between the main PLC and SAFETY PLC inside the control panel. Look for a loose connector or a cable pinched by a panel door. Power cycle the Applicator. If the fault returns with all connections confirmed intact, contact [Grote Service](About.md#contact). Do not continue operating with this fault active. | Technician |
| **WATERFALL JB or PCM JB REMOTE IO COMMS LOST FAULT** | EtherNet/IP communication to junction box lost | Trace the EtherNet/IP cable from the named junction box back to the panel. Check both ends for a loose RJ45 connector or cable damage. Verify the junction box has power: the status LED on the EtherNet/IP adapter should be solid green. If connections are intact and the adapter is powered, power cycle the Applicator. | Technician |
| **OI COMMS LOST FAULT** | OI network communication lost | Check the Ethernet cable at the back of the OI and at the panel. A partially seated cable will show a fault only when the panel vibrates or the cable flexes. Power cycle the OI. If the fault persists with a confirmed connection, contact [Grote Service](About.md#contact). | Technician |

---

## 12.6 Alarm Conditions Reference

When an alarm is active, the ALARM ACTIVE button flashes red. Open the
[ALARMS screen](11-oi-reference.md#118-alarms-screen) to see the message
and timestamp. Correct the condition, then press FAULT RESET. Faults
that remain after FAULT RESET require device-specific corrective action.
See the row below for guidance.

| **Alarm Message (OI)** | **Category** | **Required Action** |
|---|---|---|
| OI ENCLOSURE E-STOP PRESSED | Emergency Stop | Pull the OI enclosure E-STOP actuator to release. Open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens) and confirm all safety device indicators are green. Press MACHINE ENABLE. |
| PRODUCT CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PRODUCT CONVEYOR E-STOP actuator to release. Press MACHINE ENABLE. |
| PCM CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PCM CONVEYOR E-STOP actuator to release. Press MACHINE ENABLE. |
| OI SWING ARM E-STOP PRESSED | Emergency Stop | Pull the OI swing arm E-STOP actuator to release. Press MACHINE ENABLE. |
| APPLICATOR NOT ENABLED | Enable Circuit | Pull all E-STOP actuators to release and close all guards. Press MACHINE ENABLE. If the alarm returns, open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens). Any device still showing red is the open safety input. |
| MAIN GUARD SAFETY SWITCH OPEN | Safety Switch | Close the MAIN GUARD completely. The actuator must seat fully into the switch body. Press MACHINE ENABLE. |
| RETURN #2 SAFETY SWITCH OPEN | Safety Switch | Close the RETURN #2 guard completely. The actuator must seat fully into the switch body. Press MACHINE ENABLE. |
| PCM GUARD SAFETY SWITCH OPEN | Safety Switch | Close the PCM guard completely. The actuator must seat fully into the switch body. Press MACHINE ENABLE. |
| MAIN AIR PRESSURE FAULT | Warning | Confirm the compressed air supply valve is open and supply pressure is at the required level. Check the supply line for leaks. This alarm can be enabled or disabled at [MACHINE OPTIONS](11-oi-reference.md#1114-machine-options-reference). |
| WARNING: INVALID RECIPE PARAMETER | Warning | A recipe value is outside the configured operator limits. Open the [RECIPE screen](11-oi-reference.md#113-recipe-screen). The out-of-range field is highlighted. Correct the value. See [Section 11.14](11-oi-reference.md#1114-machine-options-reference) for user limit configuration. |
| WARNING: LN1 / LN2 / LN3 PHOTOEYE STUCK ON | Warning | Clean the lens on the affected lane. Check that the mounting bracket has not shifted. These photoeyes are factory-set with no field adjustment. A STUCK ON alarm always means something is physically blocking the beam or the lens is contaminated; a photoeye that fails electrically signals OFF, not ON. |
| [DRIVE NAME] VFD FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults). |
| [DRIVE NAME] VSS FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults). |
| RAKE FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults). |
| FLICKER FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults). |
| RAKE / FLICKER HIGH or LOW LIMIT FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults). |
| RAKE / FLICKER HEIGHT ENCODER: RESONANCE COUPLING WEAK | Encoder Warning | See [Section 12.5](#125-sensor-calibration-faults). |
| RAKE / FLICKER HEIGHT ENCODER: NO RESONANCE COUPLING FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults). Height axis is inoperative until resolved. |
| RAKE / FLICKER HEIGHT ENCODER: MULTITURN FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults). |
| SAFETY PLC COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). Do not operate with this fault active. |
| WATERFALL JB REMOTE IO COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). |
| PCM JB REMOTE IO COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). |
| OI COMMS LOST FAULT (ARM / PEDESTAL) | Communications | See [Section 12.5](#125-sensor-calibration-faults). |
| CARD READER COMMS LOST FAULT | Communications | Verify the card reader cable connection. Power cycle if connections are intact. Card reader is a custom option, not configurable from the OI. |
| [MOTOR NAME] DISCONNECT OPEN | Disconnect | See [Section 12.4](#124-motion-drive-faults). Motor disconnects are optional, customer-specified equipment. |