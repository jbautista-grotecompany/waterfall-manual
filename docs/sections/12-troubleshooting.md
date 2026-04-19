# 12 — Troubleshooting

## 12.1 Quick Reference Index

Locate the symptom below and go directly to the indicated subsection.

!!! note
    Before consulting individual entries, evaluate the three critical
    checkpoints in order ([Section 6.1](06-process-control.md#61-three-critical-system-checkpoints)):
    HOPPER fill → RAKE weight → FLICKER dispersion. Most weight and
    consistency problems originate at Checkpoint 1 or 2.

    **Operator:** No tools, electrical work, or restricted screen access
    required. Can be performed during normal production.

    **Technician:** Requires MAINT screen access, drive diagnostics, or
    mechanical work under LOTO.

| **Symptom** | **Go to** |
|---|---|
| Applicator will not start or enable | [12.2 — Safety Circuit & Startup Faults](#122-safety-circuit-startup-faults) |
| Applicator will not start in RUN mode / repeatedly enters PRIME mode | [12.2 — Safety Circuit & Startup Faults](#122-safety-circuit-startup-faults) |
| Portion weight inconsistent or out of specification | [12.3 — Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping compacts under the RAKE | [12.3 — Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| Topping avalanche at the drop point | [12.3 — Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RETURN #2 running at maximum speed continuously | [12.3 — Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| CONSERVE mode activating continuously or unexpectedly | [12.3 — Weight & Application Quality Faults](#123-weight-application-quality-faults) |
| RAKE or FLICKER will not move to commanded position | [12.4 — Motion & Drive Faults](#124-motion-drive-faults) |
| VFD or VSS fault on any drive | [12.4 — Motion & Drive Faults](#124-motion-drive-faults) |
| RAKE LOAD CELL reads non-zero with empty, clean belt | [12.5 — Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| HOPPER HEIGHT SENSOR reading incorrect or erratic | [12.5 — Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Communications fault (Safety PLC, OI, Remote IO) | [12.5 — Sensor & Calibration Faults](#125-sensor-calibration-faults) |
| Active alarm on the ALARMS screen | [12.6 — Alarm Conditions Reference](#126-alarm-conditions-reference) |

---

## 12.2 Safety Circuit & Startup Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **Applicator will not start** | Emergency stop active | Reset all emergency stops. Verify SAFETY PLC screen shows all devices OK. Press MACHINE ENABLE. | Operator |
| | Guard switch open | Close MAIN GUARD and RETURN #2 guard. Verify green status on SAFETY PLC screen. Press MACHINE ENABLE. | Operator |
| | Damaged guard switch or wiring fault | The switch is fail-safe — a damaged switch or broken wire produces the same result as an open guard. Inspect switch mounting, wiring connections, and cable integrity. Replace the switch if no mechanical cause is found. | Technician |
| | Tension cylinders not extended | Enable PRODUCT CONVEYOR and PORTION CONVEYOR tension cylinders from the HOME screen. Confirm both are fully extended before starting. | Operator |
| | Active alarm not cleared | Navigate to the ALARMS screen. Correct all active conditions. Press FAULT RESET. Then press MACHINE ENABLE. | Operator |
| | Air pressure fault active | Verify compressed air supply is on and at the required pressure. Inspect the supply line for leaks. | Operator |
| **Applicator will not start in RUN mode** | Priming criteria not satisfied | Select PRIME mode and complete the priming sequence. | Operator |
| **Applicator repeatedly enters PRIME mode** | Topping supply interruption (shredder fault, PCM fault, or manual feed gap) | Verify that the shredder or PCM is operating at a rate that matches Applicator consumption. Monitor the RAKE screen trend. If RAKE weight drops to LO-LO LEVEL, the Applicator will prompt for PRIME mode. | Operator |

---

## 12.3 Weight & Application Quality Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **Portion weight inconsistent** | HOPPER flights not consistently filled — Checkpoint 1 | Navigate to the HOPPER screen. Verify ACTUAL LEVEL matches TARGET LEVEL. If the level fluctuates, inspect the HOPPER HEIGHT SENSOR lens for contamination. Verify that the topping supply rate matches the Applicator's consumption. | Operator |
| | RAKE weight not stable — Checkpoint 2 | Navigate to the RAKE screen. Observe the real-time trend. If RAKE weight oscillates, address HOPPER fill first. Check whether the RETURN #2 minimum speed is flooring the PID output. | Operator |
| | FLICKER not dispersing uniformly — Checkpoint 3 | Observe the topping waterfall visually. Verify FLICKER HEIGHT and FLICKER SPEED settings. Inspect the FLICKER blade for topping buildup. | Operator |
| | Topping bed has voids after the RAKE | Perform compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment)). Adjust RAKE height and/or TARGET LEVEL in the recipe. Verify the bed is uniform with no gaps across the full belt width. | Operator |
| | PORTION PID enabled before stable baseline | Disable PORTION CONTROL. Manually stabilize target weights. Re-tare the PORTION CONVEYOR scale. Re-enable PORTION CONTROL. | Operator |
| | Load cell zero offset | Stop the Applicator. Remove all topping from the PORTION CONVEYOR. Navigate to MAINT → CALIBRATION → PORTION LOAD CELL. Verify raw input value at zero load. Investigate the mechanical cause before re-teaching. | Technician |
| **Topping compacts under the RAKE** | RAKE height too low for topping stickiness level | Perform compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment)). Increase RAKE height in 0.10 in increments until the bed shows no compaction. Save the recipe. | Operator |
| | RAKE TARGET LEVEL set too high | Reduce TARGET LEVEL in the active recipe. A lower pile in front of the RAKE reduces compaction pressure on the bed. | Operator |
| **Topping avalanche at the drop point** | PORTION CONVEYOR speed too slow | Increase PORTION CONVEYOR speed. PORTION CONVEYOR should run as fast as possible while maintaining the target bed weight to prevent topping from avalanching at the nose roller. | Operator |
| | FLICKER height too low | Increase FLICKER height slightly. The FLICKER must not press into the topping bed. | Operator |
| **RETURN #2 at maximum speed continuously** | HOPPER flights not full — topping supply insufficient | Verify the topping supply rate matches or exceeds Applicator consumption. Inspect the HOPPER HEIGHT SENSOR lens for contamination. | Operator |
| | TARGET LEVEL set above achievable supply rate | Reduce TARGET LEVEL to a value achievable with the available supply rate. | Operator |
| | RETURN #2 minimum speed floor prevents PID from balancing | Navigate to MAINT → MOTOR SETUP → RETURN #2. Reduce RAKE TARGET LEVEL or reduce the topping supply rate to match the Applicator's minimum operating speed. | Technician |
| **CONSERVE mode activates continuously** | Conserve timer shorter than normal target gap at current line speed | Increase CONSERVE MODE TIME [MS] in MACHINE OPTIONS. The timer must exceed the normal gap between consecutive targets at the TARGET PHOTOEYE. | Technician |
| | TARGET PHOTOEYE dirty or misaligned | Clean the photoeye lens on the affected lane(s). Verify alignment. Check the ALARMS screen for a PHOTOEYE STUCK ON warning. | Operator |

---

## 12.4 Motion & Drive Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE or FLICKER will not move to commanded position** | Height motor disconnect open | Verify the RAKE HEIGHT or FLICKER HEIGHT MOTOR DISCONNECT is in the ON position. Check the ALARMS screen for a disconnect open fault. | Operator |
| | Encoder fault active | Navigate to the ALARMS screen. Check for encoder faults. Inspect encoder mounting gap and alignment. See [Section 12.5](#125-sensor-calibration-faults) for encoder fault procedures. | Technician |
| | Mechanical obstruction in height travel | Stop the Applicator. Engage LOTO. Inspect the RAKE or FLICKER height mechanism for physical obstruction. Clear the obstruction before restoring power. | Technician |
| **RAKE or FLICKER overtravel limit** | RAKE HIGH/LOW LIMIT or FLICKER HIGH/LOW LIMIT fault active | Navigate to MANUAL → [RAKE HEIGHT or FLICKER HEIGHT]. Command motion away from the limit. Verify limit switch indicators on the INPUTS/OUTPUTS screen. | Operator |
| **VFD fault — any drive** | Fault code active | Navigate to MANUAL → [drive] SERVICE. Press ? to view the fault code description and recommended corrective actions. | Technician |
| **VSS fault — RETURN #1, RETURN #3** | VSS fault code active | Navigate to MANUAL → [drive] SERVICE. Read the VSS fault code. Press the ? button for guidance. Correct the condition, then press FAULT RESET. | Technician |
| **Motor disconnect fault — any drive** | Motor branch circuit disconnect open or tripped | Locate the motor branch circuit disconnect for the named drive. Verify the condition that caused the trip. Reset or close the disconnect. Press FAULT RESET on the ALARMS screen. Motor disconnects are optional, customer-specified equipment. They are not configurable from the OI. | Technician |

---

## 12.5 Sensor & Calibration Faults

| **Symptom** | **Possible Cause** | **Corrective Action** | **Level** |
|---|---|---|---|
| **RAKE LOAD CELL reads non-zero with empty, clean belt** | Topping residue under load cell or mounting frame | Stop the Applicator. Clean all topping material from under the RAKE assembly and load cell mounting areas. Navigate to MAINT → CALIBRATION → RAKE LOAD CELL. Verify raw input value at zero load. | Technician |
| | Damaged load cell mounting frame | Inspect the PORTION CONVEYOR frame for damage. Load cells are mounted on the PORTION CONVEYOR frame. Do not re-teach zero to mask physical damage. | Technician |
| **HOPPER HEIGHT SENSOR reading incorrect or erratic** | Lens contamination | Stop the Applicator. Clean the sensor lens with a clean, lint-free cloth. Restart and observe the HOPPER screen until a stable reading is displayed. | Operator |
| | Sensor mounting shifted or angle changed | Verify sensor mounting angle and position have not shifted. Recalibrate via MAINT → CALIBRATION → HOPPER HEIGHT if mounting is confirmed correct. | Technician |
| **RAKE/FLICKER HEIGHT Encoder warning — RESONANCE COUPLING WEAK** | Encoder magnetic coupling below warning threshold | Inspect the encoder mounting gap. Clean the encoder face. Do not operate indefinitely with this warning active — loss of coupling will result in a FAULT. | Technician |
| **RAKE/FLICKER HEIGHT Encoder fault — NO RESONANCE COUPLING** | Complete loss of encoder magnetic coupling | Inspect encoder mounting and verify gap specification. Check for physical damage. Replace the encoder if coupling cannot be restored. | Technician |
| **RAKE/FLICKER HEIGHT Encoder fault — MULTITURN FAULT** | Encoder multiturn count error | Power cycle the Applicator. If the fault persists, the encoder requires replacement or re-calibrating. | Technician |
| **SAFETY PLC COMMS LOST FAULT** | Communication between main PLC and Safety PLC lost | Inspect network connections between controllers. Power cycle the Applicator. If fault persists with connections intact, contact Grote Service Department. | Technician |
| **WATERFALL JB or PCM JB REMOTE IO COMMS LOST FAULT** | EtherNet/IP communication to junction box lost | Inspect the EtherNet/IP cable connection to the junction box. Verify power to the junction box. Power cycle if connections are intact. | Technician |
| **OI COMMS LOST FAULT** | OI network communication lost | Verify OI network cable connection. Power cycle the OI. If fault persists, contact Grote Service Department. | Technician |

---

## 12.6 Alarm Conditions Reference

When an alarm is active, the ALARM ACTIVE tab flashes red. Go to the ALARMS
screen to see the message and timestamp. Press FAULT RESET after correcting
each condition.

| **Alarm Message (OI)** | **Category** | **Required Action** |
|---|---|---|
| OI ENCLOSURE E-STOP PRESSED | Emergency Stop | Pull the OI enclosure actuator to release. Press MACHINE ENABLE. Verify all safety devices show OK on the SAFETY PLC screen. |
| MAIN CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PRODUCT CONVEYOR actuator to release. Press MACHINE ENABLE. |
| PCM CONVEYOR E-STOP PRESSED | Emergency Stop | Pull the PCM conveyor actuator to release. Press MACHINE ENABLE. |
| OI SWING ARM E-STOP PRESSED | Emergency Stop | Pull the OI swing arm actuator to release. Press MACHINE ENABLE. |
| APPLICATOR NOT ENABLED | Enable Circuit | Reset all emergency stops. Close all guards. Press MACHINE ENABLE. Navigate to MANUAL → SAFETY PLC to identify any remaining open safety devices. |
| MAIN GUARD SAFETY SWITCH OPEN | Safety Switch | Close the MAIN GUARD completely. Verify the actuator is aligned with the switch. Press MACHINE ENABLE. |
| RETURN #2 SAFETY SWITCH OPEN | Safety Switch | Close the RETURN #2 guard completely. Verify alignment. Press MACHINE ENABLE. |
| PCM GUARD SAFETY SWITCH OPEN | Safety Switch | Close the PCM guard completely. Verify the actuator is aligned with the switch. Press MACHINE ENABLE. |
| MAIN AIR PRESSURE FAULT | Warning | Verify the compressed air supply is on and at the required pressure. Inspect the supply line for leaks. This alarm is configurable from MACHINE OPTIONS in the OI. |
| WARNING – INVALID RECIPE PARAMETER | Warning | A recipe value exceeds configured user limits. Navigate to the RECIPE screen and verify all fields are within configured limits. See [Section 11.5](11-oi-reference.md#115-machine-options-reference) for user limit configuration. |
| WARNING – LN1 / LN2 / LN3 PHOTOEYE STUCK ON | Warning | Check the photoeye lens for obstructions and clean if needed. Inspect the mounting bracket — if it was struck or has loosened, the photoeye may have shifted out of position. These photoeyes are not adjustable and have no calibration procedure. If the photoeye fails, the signal goes OFF, not ON. |
| [DRIVE NAME] VFD FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. |
| [DRIVE NAME] VSS FAULT | Drive Fault | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. |
| RAKE FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. |
| FLICKER FAILED TO RAISE / LOWER FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. |
| RAKE / FLICKER HIGH or LOW LIMIT FAULT | Motion Fault | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. |
| RAKE / FLICKER HEIGHT ENCODER – RESONANCE COUPLING WEAK | Encoder Warning | See [Section 12.5](#125-sensor-calibration-faults) for diagnostic procedure. |
| RAKE / FLICKER HEIGHT ENCODER – NO RESONANCE COUPLING FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults) for diagnostic procedure. |
| RAKE / FLICKER HEIGHT ENCODER – MULTITURN FAULT | Encoder Fault | See [Section 12.5](#125-sensor-calibration-faults) for diagnostic procedure. |
| SAFETY PLC COMMS LOST FAULT | Communications | Power cycle the Applicator. If the fault persists with connections intact, contact Grote Service Department. |
| WATERFALL JB REMOTE IO COMMS LOST FAULT | Communications | Inspect the EtherNet/IP connection to the Waterfall junction box. Verify power to the junction box. This alarm applies to custom OEM configurations. It is not configurable from the OI. |
| PCM JB REMOTE IO COMMS LOST FAULT | Communications | Inspect the EtherNet/IP connection to the PCM junction box. This alarm applies to custom OEM configurations. It is not configurable from the OI. |
| OI COMMS LOST FAULT (ARM / PEDESTAL) | Communications | Inspect the OI Ethernet network cable. Verify the OI is powered on. Power cycle the OI. If the fault persists, contact Grote Service Department. |
| CARD READER COMMS LOST FAULT | Communications | Verify the card reader connection. Power cycle if connections are intact. The card reader is a custom option, not configurable from the OI. |
| [MOTOR NAME] DISCONNECT OPEN | Disconnect | See [Section 12.4](#124-motion-drive-faults) for diagnostic procedure. Motor disconnects are optional, customer-specified equipment. |