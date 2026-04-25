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
| Portion weight inconsistent or out of specification | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping compacts under the RAKE | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping avalanche at the drop point | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RETURN #2 running at maximum speed continuously | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| CONSERVE mode activating continuously or unexpectedly | [12.3: Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RAKE or FLICKER will not move to commanded position | [12.4: Motion & Drive Faults](#124-motion-drive-faults) |
| VFD or VSS fault on any drive | [12.4: Motion & Drive Faults](#124-motion-drive-faults) |
| RAKE LOAD CELL reads non-zero with empty, clean belt | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| HOPPER HEIGHT SENSOR reading incorrect or erratic | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Communications fault (Safety PLC, OI, Remote IO) | [12.5: Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Active alarm on the ALARMS screen | [12.6: Alarm Conditions Reference](#126-alarm-conditions-reference) |

---

## 12.2 Safety Circuit & Startup Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **Applicator will not start** | Emergency stop active | Pull each E-STOP actuator to release: one on the OI enclosure, one on the PRODUCT CONVEYOR frame. Open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens) and confirm all safety device indicators are green. Press MACHINE ENABLE. | Operator |
| | Guard open or guard switch not engaging | Close the MAIN GUARD and RETURN #2 guard fully. The switch actuator must seat completely into the switch body. Open [MANUAL → SAFETY PLC](11-oi-reference.md#117-manual-screens). If the guard switch still shows red with the guard fully closed, the actuator is misaligned or the switch body has shifted. Adjust the mounting, then press MACHINE ENABLE. | Operator |
| | Guard switch or wiring damaged | These switches are fail-safe: a broken wire or damaged switch reads the same as an open guard. If the SAFETY PLC screen shows a guard fault with the guard fully closed and actuator properly seated, inspect the cable from the switch to the panel for damage, crushed conduit, or loose terminals. Replace the switch if wiring is intact. | Technician |
| | Tension cylinders not extended | On the [HOME screen](11-oi-reference.md#112-home-screen), enable the PRODUCT CONVEYOR and PORTION CONVEYOR tension cylinders. Watch the cylinders physically extend. Do not rely on the OI indicator alone. Both must be fully extended before the Applicator will start. | Operator |
| | Active alarm not cleared | Open the [ALARMS screen](11-oi-reference.md#118-alarms-screen). Correct all active conditions, then press FAULT RESET once to clear all resettable faults. Faults that remain after pressing FAULT RESET require device-specific corrective action. See [Section 12.6](#126-alarm-conditions-reference) for guidance. When the ALARMS screen shows no active entries, press MACHINE ENABLE. | Operator |
| | Air pressure low or absent | Confirm the compressed air supply valve is fully open. Check the supply pressure at the air inlet on the Applicator. If pressure is present at the inlet but the fault remains, trace the supply line for leaks or a partially closed inline valve. | Operator |
| **Applicator will not start in RUN mode** | Priming criteria not met | The RAKE weight has not reached 75% of TARGET LEVEL for 10 continuous seconds. Select PRIME mode and run the priming sequence to completion. The Applicator transitions to RUN mode automatically when the criteria are met. | Operator |
| **Applicator repeatedly drops into PRIME mode during production** | Topping supply not keeping up with consumption | Open the [RAKE screen](11-oi-reference.md#115-rake-screen) and watch the RAKE WEIGHT trend. If weight is trending down over time, the shredder or PCM is not delivering enough topping to replace what the Applicator is consuming. When RAKE weight drops to LO-LO LEVEL, the Applicator stops and requires PRIME mode. Increase the shredder or PCM output rate. Do not increase TARGET LEVEL to compensate: raising TARGET LEVEL increases demand without increasing supply. | Operator |

---

## 12.3 Weight & Application Quality Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **Portion weight inconsistent** | HOPPER not filling consistently: Checkpoint 1 | Open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). ACTUAL LEVEL must track TARGET LEVEL steadily. If ACTUAL LEVEL is erratic or drifting low, flights are not arriving full. Wipe the HOPPER HEIGHT SENSOR lens clean with a dry lint-free cloth and observe whether the reading stabilizes. If the reading is stable but low, the topping supply rate is too low for the current production demand. Resolve the supply issue before adjusting any recipe parameters. | Operator |
| | RAKE weight unstable: Checkpoint 2 | Open the [RAKE screen](11-oi-reference.md#115-rake-screen) and watch the RAKE WEIGHT AVERAGE trend. An oscillating trend almost always traces back to an inconsistent HOPPER. Fix Checkpoint 1 first. If the HOPPER is stable but RAKE weight still oscillates, check whether RETURN #2 speed is pinned at its minimum. A speed that never rises above minimum means the PID cannot respond. Reduce TARGET LEVEL until RETURN #2 begins making corrections. | Operator |
| | FLICKER not distributing evenly: Checkpoint 3 | Watch the topping falling from the PORTION CONVEYOR onto the target. It should form an even curtain across the full target width with no thin lanes or heavy spots. If distribution is uneven, stop the Applicator and check the FLICKER blade for topping buildup. If the blade is clean, increase FLICKER SPEED in 5% increments and re-evaluate. If one edge is consistently heavier, adjust FLICKER HEIGHT by 0.05 in increments toward the lighter side. | Operator |
| | Voids in the topping bed after the RAKE | Stop the Applicator and inspect the bed on the PORTION CONVEYOR. A correct bed is uniform edge-to-edge with no bare spots. Voids mean RAKE HEIGHT is set too low for the topping's compaction level. Perform the compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment)) and increase RAKE HEIGHT in 0.10 in increments. Allow approximately 100 targets to pass before evaluating: recycled material must stabilize before the bed reflects the new setting. | Operator |
| | PORTION CONTROL enabled before weight was stable | The PID starts correcting from whatever baseline it inherits. If that baseline was unstable, the loop will oscillate and never settle. Disable PORTION CONTROL. Manually run targets and adjust PORTION CONVEYOR speed until weights are consistent. Tare the scale with the belt running and loaded. Only then re-enable PORTION CONTROL. | Operator |
| | PORTION LOAD CELL zero offset | Stop the Applicator. Remove all topping from the PORTION CONVEYOR. The belt surface must be completely clean. Open [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → PORTION LOAD CELL and read the raw input value. It must read zero with no load on the belt. If it does not, do not re-teach zero to mask the offset. Find the mechanical cause: check for debris under the load cell mounting and inspect the frame for deflection or contact with the pan beneath the belt. | Technician |
| **Topping compacts under the RAKE** | RAKE height too low for topping stickiness | When the RAKE is set too low, it traps topping against the belt instead of leveling it. Perform the compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment)). Raise RAKE HEIGHT in 0.10 in increments. After each adjustment, let the bed run for approximately 100 targets before evaluating. Save the recipe when the bed levels cleanly. | Operator |
| | TARGET LEVEL set too high | Too much topping piling in front of the RAKE compresses the bed before it passes under. Reduce TARGET LEVEL in the active recipe by 3–5 lb and observe the bed. The pile should be present but not overflowing the RAKE trough. | Operator |
| **Topping avalanche at the drop point** | PORTION CONVEYOR running too slow | When the belt moves slowly, topping accumulates at the nose roller and falls as a surge instead of a steady curtain. Increase PORTION CONVEYOR speed in 0.5 FPM increments. The belt should run fast enough that topping flows off the nose roller continuously. If PORTION CONTROL is active, disable it, set the speed manually, verify weight, then re-enable. | Operator |
| | FLICKER pressing into the topping bed | The FLICKER should skim the surface of the bed. If it presses down into it, topping backs up until a surge releases. Raise FLICKER HEIGHT in 0.05 in increments until the waterfall flows evenly. | Operator |
| **RETURN #2 at maximum speed continuously** | Topping supply insufficient: flights arriving partially empty | Open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). If ACTUAL LEVEL is falling or well below TARGET LEVEL, flights are leaving the HOPPER partially empty. The PID drives RETURN #2 to maximum trying to compensate, but a partially filled belt at maximum speed cannot meet demand. Increase the shredder or PCM output rate. This is a supply problem, not a PID problem. Do not raise TARGET LEVEL or RETURN #2 maximum speed as a first response. | Operator |
| | TARGET LEVEL set higher than supply can sustain | If the HOPPER level is stable but RETURN #2 is still pinned at maximum, the target weight is set above what the supply source can consistently deliver. Reduce TARGET LEVEL in 3–5 lb increments until RETURN #2 begins modulating above its minimum. | Operator |
| | RETURN #2 minimum speed too high relative to demand | Open [MAINT](11-oi-reference.md#119-maint-screens) → [MOTOR SETUP](11-oi-reference.md#1110-motor-setup-screens) → RETURN #2. If the minimum speed delivers more topping than the line consumes, the PID has no room to slow down and the HOPPER will overfill. Reduce TARGET LEVEL in the recipe until consumption matches what minimum speed delivers, or contact [Grote Service](../sections/About.md#contact) to evaluate whether the minimum speed setting should be reduced for this application. | Technician |
| **CONSERVE mode activating unexpectedly or continuously** | CONSERVE timer shorter than the gap between targets | The timer starts when no target is detected. If the normal gap between targets is longer than the timer, CONSERVE mode fires between every target. Open [MACHINE OPTIONS → CONSERVE MODE TIME [MS]](11-oi-reference.md#1114-machine-options-reference) and increase the value to at least 150% of the longest normal gap between targets at the current line speed. | Technician |
| | TARGET PHOTOEYE contaminated or misaligned | A dirty lens cannot detect targets reliably. Clean the lens on the affected lane. Check the [ALARMS screen](11-oi-reference.md#118-alarms-screen) for a PHOTOEYE STUCK ON warning: this appears when a photoeye is continuously blocked. If cleaning does not resolve it, check that the mounting bracket has not been struck or shifted. These sensors are factory-set with no field adjustment. Note: if a photoeye fails electrically, the signal goes OFF, not ON. A STUCK ON alarm always means something is physically blocking the beam or the lens is contaminated. | Operator |

---

## 12.4 Motion & Drive Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE or FLICKER will not move to commanded position** | Height motor disconnect open | Locate the RAKE HEIGHT or FLICKER HEIGHT MOTOR DISCONNECT on the Applicator frame. It must be in the ON position. If it is ON but the motor still does not move, check the [ALARMS screen](11-oi-reference.md#118-alarms-screen) for a disconnect open fault. A tripped breaker can read as open even with the handle in the ON position. Reset the breaker, then press FAULT RESET on the ALARMS screen. | Operator |
| | Encoder fault active | Open the [ALARMS screen](11-oi-reference.md#118-alarms-screen). If an encoder fault is active, go to [Section 12.5](#125-sensor-calibration-faults) before attempting to move the axis. Commanding motion with an active encoder fault can drive the axis into a mechanical limit. | Technician |
| | Mechanical obstruction in height travel | Stop the Applicator and engage LOTO. Visually trace the full travel path of the height mechanism from the lower stop to the upper stop. Look for topping buildup, a dislodged scraper, or a foreign object in the path. Clear the obstruction. Restore power and perform a slow jog to confirm full range of travel before returning to recipe control. | Technician |
| **RAKE or FLICKER at overtravel limit** | HIGH LIMIT or LOW LIMIT fault active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [RAKE HEIGHT or FLICKER HEIGHT]. If the HIGH LIMIT is active, press JOG DOWN to move the axis off the limit in short pulses. If the LOW LIMIT is active, press JOG UP. Once clear, open the [ALARMS screen](11-oi-reference.md#118-alarms-screen) and press FAULT RESET. If the axis immediately returns to the limit without a command, there is mechanical binding or an encoder issue. Engage LOTO and inspect the mechanism before proceeding. | Operator |
| **VFD fault: any drive** | Fault code active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [drive name] SERVICE. The fault code displays in the VFD LAST FAULT field. Press **?** to view the full fault description and recommended corrective action for that code. Correct the condition, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). If the fault returns immediately after reset, the underlying condition was not resolved. Do not continue resetting without identifying the cause. | Technician |
| **VSS fault: RETURN #1 or RETURN #3** | VSS fault code active | Open [MANUAL](11-oi-reference.md#117-manual-screens) → [drive name] SERVICE. Read the fault code displayed. Press **?** for guidance specific to that code. VSS faults most commonly result from an overcurrent condition (belt jam or mechanical drag) or a communication issue. Correct the condition, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). | Technician |
| **Motor disconnect fault: any drive** | Branch circuit disconnect open or tripped | Locate the motor branch circuit disconnect for the named drive. Disconnect labels match the drive names used in the OI. If the handle tripped to the middle position, a fault condition caused the trip. Identify and correct the cause before resetting. Reset the disconnect, then press FAULT RESET on the [ALARMS screen](11-oi-reference.md#118-alarms-screen). Motor disconnects are optional, customer-specified equipment and are not controlled from the OI. | Technician |

---

## 12.5 Sensor & Calibration Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE LOAD CELL reads non-zero with empty, clean belt** | Topping residue under load cell or mounting frame | Stop the Applicator. Remove all topping from the PORTION CONVEYOR belt surface and from under the RAKE assembly. Check underneath the load cell mounting points: a small piece of compressed topping trapped between the load cell and frame is enough to hold a false reading. Open [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → RAKE LOAD CELL and confirm the raw input reads zero with the belt empty and clean. If it does not, remove more material and check again before re-teaching. | Technician |
| | Load cell mounting frame damaged or deflected | If the belt is clean and the raw input still reads non-zero, the frame may be deflected. Do not re-teach zero to compensate: masking the offset shifts all subsequent weight readings. Inspect the load cell mounting bracket for cracks, bent flanges, or a loose mounting bolt. Contact [Grote Service](../sections/About.md#contact) if frame damage is confirmed. | Technician |
| **HOPPER HEIGHT SENSOR reading incorrect or erratic** | Lens contaminated | Wipe the sensor lens with a clean, dry, lint-free cloth. Do not use solvents: they can damage the lens coating. Restart the Applicator and open the [HOPPER screen](11-oi-reference.md#116-hopper-screen). The reading should stabilize within a few seconds. If it remains erratic after cleaning, the lens surface may be etched. Replace the sensor. | Operator |
| | Sensor mounting shifted | The HOPPER HEIGHT SENSOR is a laser distance sensor: mounting angle and distance to the topping surface are critical. Check that the bracket has not been struck or vibrated loose. If the bracket position has changed, return it to its original position and angle first, confirm the reading is close to expected, then recalibrate at [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → HOPPER HEIGHT. | Technician |
| **Encoder warning: RESONANCE COUPLING WEAK** | Magnetic coupling below warning threshold | The encoder is still reading but is approaching failure. Do not ignore this warning and continue running indefinitely. Open [MANUAL](11-oi-reference.md#117-manual-screens) → [RAKE HEIGHT or FLICKER HEIGHT] SERVICE and inspect the encoder face-to-target gap. The gap must be within the specification on the encoder label. Clean any metal debris or topping residue from the encoder face. If the warning clears, monitor it at the start of each shift. If it returns, replace the encoder before it escalates to a NO COUPLING fault mid-production. | Technician |
| **Encoder fault: NO RESONANCE COUPLING** | Complete loss of magnetic coupling | The encoder can no longer read position. The Applicator will not move the affected height axis. Inspect the encoder mounting gap and check for physical damage to the encoder body or shaft target. Verify no metal debris is bridging the gap. If the gap is correct and the face is clean, the encoder has failed. Replace it, then recalibrate the height axis at [MAINT](11-oi-reference.md#119-maint-screens) → [CALIBRATION](11-oi-reference.md#1111-calibration-screens) → [RAKE HEIGHT or FLICKER HEIGHT]. See [Section 10](10-rake-flicker-calibration.md). | Technician |
| **Encoder fault: MULTITURN FAULT** | Encoder lost its multi-turn position count | This fault typically occurs after a power interruption or an internal encoder fault. Power cycle the Applicator. If the fault clears, verify the RAKE or FLICKER position displayed on the OI matches the physical position before running the axis under recipe control. If the fault returns after power cycle, the encoder requires replacement. Contact [Grote Service](../sections/About.md#contact) if the root cause is not clear. | Technician |
| **SAFETY PLC COMMS LOST FAULT** | Communication between main PLC and Safety PLC lost | Inspect the network cable between the main PLC and Safety PLC inside the control panel. Look for a loose connector or a cable pinched by a panel door. Power cycle the Applicator. If the fault returns with all connections confirmed intact, contact [Grote Service](../sections/About.md#contact). Do not continue operating with this fault active: the Safety PLC monitors all safety devices. | Technician |
| **WATERFALL JB or PCM JB REMOTE IO COMMS LOST FAULT** | EtherNet/IP communication to junction box lost | Trace the EtherNet/IP cable from the named junction box back to the panel. Check both ends for a loose RJ45 connector or cable damage from traffic or equipment. Verify the junction box has power: the status LED on the EtherNet/IP adapter should be solid green. If connections are intact and the adapter is powered, power cycle the Applicator. | Technician |
| **OI COMMS LOST FAULT** | OI network communication lost | Check the Ethernet cable at the back of the OI and at the panel. A partially seated cable will show a fault only when the panel vibrates or the cable flexes. Power cycle the OI using the power switch on the enclosure. If the fault persists with a confirmed connection, contact [Grote Service](../sections/About.md#contact). | Technician |

---

## 12.6 Alarm Conditions Reference

When an alarm is active, the ALARM ACTIVE button flashes red. Go to the
[ALARMS screen](11-oi-reference.md#118-alarms-screen) to see the message and
timestamp. Correct the condition, then press FAULT RESET once to clear all
resettable faults. Faults that remain after pressing FAULT RESET require
device-specific corrective action. See the applicable row below for guidance.

| **Alarm Message (OI)** | **Category** | **Required Action** |
|---|---|---|
| OI ENCLOSURE E-STOP PRESSED | Emergency Stop | Pull the OI enclosure E-STOP actuator to release. Open MANUAL → SAFETY PLC and confirm all safety device indicators are green. Press MACHINE ENABLE. |
| PRODUCT CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PRODUCT CONVEYOR E-STOP actuator to release. Press MACHINE ENABLE. |
| PCM CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PCM conveyor E-STOP actuator to release. Press MACHINE ENABLE. |
| OI SWING ARM E-STOP PRESSED | Emergency Stop | Pull the OI swing arm E-STOP actuator to release. Press MACHINE ENABLE. |
| APPLICATOR NOT ENABLED | Enable Circuit | Pull all E-STOP actuators to release and close all guards. Press MACHINE ENABLE. If the alarm returns, open MANUAL → SAFETY PLC: any device still showing red is the remaining open safety input. |
| MAIN GUARD SAFETY SWITCH OPEN | Safety Switch | Close the MAIN GUARD completely. The actuator on the guard must seat fully into the switch body: a partial engagement will not clear the fault. Press MACHINE ENABLE. |
| RETURN #2 SAFETY SWITCH OPEN | Safety Switch | Close the RETURN #2 guard completely. Confirm the actuator seats fully into the switch body. Press MACHINE ENABLE. |
| PCM GUARD SAFETY SWITCH OPEN | Safety Switch | Close the PCM guard completely. Confirm the actuator seats fully into the switch body. Press MACHINE ENABLE. |
| MAIN AIR PRESSURE FAULT | Warning | Confirm the compressed air supply valve is open and supply pressure is at the required level. Check the supply line for leaks. This alarm can be enabled or disabled at [MACHINE OPTIONS](11-oi-reference.md#1114-machine-options-reference). |
| WARNING: INVALID RECIPE PARAMETER | Warning | A recipe value is outside the configured operator limits. Open the [RECIPE screen](11-oi-reference.md#113-recipe-screen): the out-of-range field will be highlighted. Correct the value to fall within the configured limits. See [Section 11.14: MACHINE OPTIONS Reference](11-oi-reference.md#1114-machine-options-reference) for user limit configuration. |
| WARNING: LN1 / LN2 / LN3 PHOTOEYE STUCK ON | Warning | A lane photoeye is continuously blocked or has shifted out of position. Clean the lens on the affected lane. Check that the mounting bracket has not been struck or loosened: the photoeye beam must cross the target path directly. These photoeyes are factory-set with no field adjustment. Note: if a photoeye fails electrically, the signal goes OFF, not ON. A STUCK ON alarm always means something is physically blocking the beam or the lens is contaminated. |
| [DRIVE NAME] VFD FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults) for the diagnostic procedure. |
| [DRIVE NAME] VSS FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults) for the diagnostic procedure. |
| RAKE FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for the diagnostic procedure. |
| FLICKER FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for the diagnostic procedure. |
| RAKE / FLICKER HIGH or LOW LIMIT FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for the diagnostic procedure. |
| RAKE / FLICKER HEIGHT ENCODER: RESONANCE COUPLING WEAK | Encoder Warning | See [Section 12.5](#125-sensor-calibration-faults). Do not ignore: this warning precedes a coupling loss fault. |
| RAKE / FLICKER HEIGHT ENCODER: NO RESONANCE COUPLING FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults). Height axis is inoperative until resolved. |
| RAKE / FLICKER HEIGHT ENCODER: MULTITURN FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults). |
| SAFETY PLC COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). Do not operate with this fault active. |
| WATERFALL JB REMOTE IO COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). Applies to custom OEM configurations. |
| PCM JB REMOTE IO COMMS LOST FAULT | Communications | See [Section 12.5](#125-sensor-calibration-faults). Applies to custom OEM configurations. |
| OI COMMS LOST FAULT (ARM / PEDESTAL) | Communications | See [Section 12.5](#125-sensor-calibration-faults). |
| CARD READER COMMS LOST FAULT | Communications | Verify the card reader cable connection. Power cycle if connections are intact. Card reader is a custom option, not configurable from the OI. |
| [MOTOR NAME] DISCONNECT OPEN | Disconnect | See [Section 12.4](#124-motion-drive-faults). Motor disconnects are optional, customer-specified equipment. |