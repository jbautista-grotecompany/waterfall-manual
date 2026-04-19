# 11 — OI Reference

## 11.1 OI Screen Map

| **Screen** | **Navigation Path** | **Function** |
|---|---|---|
| **HOME** | Navigation bar → HOME | Applicator start/stop, mode selection (PRIME, RUN, EMPTY, BYPASS, WASH), MACHINE MODE (LOCAL/REMOTE), tension cylinder control, SHREDDER manual output, active recipe display, and Applicator Status Banner. |
| **RECIPE** | Navigation bar → RECIPE | Create, save, and load production recipes. Configure RAKE, FLICKER, HOPPER, conveyor speeds, target type, and dimensions. Yellow/green fields are editable. |
| **PORTION** | Navigation bar → PORTION | Monitor applied portion weight (SP, PV, CV). TOGGLE PORTION CONTROL. TARE SCALE. Manual PORTION CONVEYOR speed adjustment. Real-time weight trend. |
| **RAKE** | Navigation bar → RAKE | Real-time trend: RAKE WEIGHT AVERAGE (red), TARGET LEVEL (blue), RETURN #2 SPEED (yellow). SP, PV, CV for RETURN #2 PID. RAKE SCALE raw reading. |
| **HOPPER** | Navigation bar → HOPPER | ACTUAL LEVEL [in] vs. TARGET LEVEL [in] via bar graph and real-time trend. |
| **MANUAL** | Navigation bar → MANUAL | Access to all individual drive service screens and diagnostic screens. |
| **MANUAL → [Drive] SERVICE** | MANUAL → select drive button | Per-drive: MOTOR SCALING (MIN/MAX Hz, MIN/MAX FPM), CUSTOMER ENTRY LIMITS, VFD/VSS status, current [A], frequency [Hz], live speed [FPM], last fault code, RUN FORWARD, JOG FORWARD, MANUAL FUNCTIONS. |
| **MANUAL → SAFETY PLC** | MANUAL → SAFETY PLC | Real-time status of all safety circuit devices: OI E-STOP, REM OI E-STOP, MAIN CONV E-STOP, PCM CONV E-STOP, MAIN GS, RETURN #2 GS. Use this screen to identify which device is preventing MACHINE ENABLE. |
| **MANUAL → INPUTS/OUTPUTS** | MANUAL → INPUTS/OUTPUTS | Real-time diagnostic display of all digital inputs (MACHINE ENABLE, DOWNSTREAM, LN1/LN2/LN3, guard switches, E-stops, limit switches) and outputs (UPSTREAM, solenoids, SHREDDER INTERLOCK, stack lights). |
| **ALARMS** | Navigation bar → ALARM ACTIVE | Timestamped list of all active and historical alarm conditions. FAULT RESET clears latched faults. ALARM ACTIVE tab flashes red when any alarm is present. |
| **MAINT** | Navigation bar → MAINT (GROTE login required) | Access to MOTOR SETUP, CALIBRATION, POTENTIOMETER OVERRIDE, RUN OPTIONS, MACHINE OPTIONS, LOGIN/LOGOUT, SHUTDOWN. |
| **MAINT → MOTOR SETUP → [Drive]** | MAINT → MOTOR SETUP → drive button | Per-drive scaling: MOTOR SCALING MIN/MAX [Hz] and MIN/MAX [FPM], CUSTOMER ENTRY LIMITS MIN/MAX [FPM], and MANUAL FUNCTIONS for drive testing without running a production mode. |
| **MAINT → CALIBRATION** | MAINT → CALIBRATION | Load cell and sensor calibration. Tabs: RAKE LOAD CELL, PORTION LOAD CELL, HOPPER HEIGHT, FLICKER HEIGHT, RAKE HEIGHT. TEACH MIN and TEACH MAX buttons. Hold 3 seconds to teach. |
| **MAINT → HOPPER** | MAINT → HOPPER | HOPPER OVERSHOOT HEIGHT and HOPPER customer limits. |
| **MAINT → MACHINE OPTIONS** | MAINT → MACHINE OPTIONS | Toggle panel for all optional equipment and configuration settings. See [Section 11.5](#115-machine-options-reference). |
| **MAINT → POTENTIOMETER OVERRIDE** | MAINT → POTENTIOMETER OVERRIDE | Screenshots and description to be added. |
| **MAINT → RUN OPTIONS** | MAINT → RUN OPTIONS | Screenshots and description to be added. |

---

## 11.2 Applicator Status Banner

| **Banner Message** | **Color** | **Condition** |
|---|---|---|
| MACHINE FAULTED<br>GO TO ALARMS SCREEN | RED | Active fault. Navigate to ALARMS screen and press FAULT RESET after correcting each condition. |
| MAJOR FAULT EXISTS<br>MACHINE STOPPED CHECK ALARMS | RED | Critical fault. Applicator stopped. Navigate to ALARMS screen. |
| LOCAL MODE ONLY FUNCTION<br>PUT MACHINE IN LOCAL MODE | RED | A LOCAL-only function was attempted in REMOTE mode. Switch to LOCAL at the HOME screen. |
| OI ENCLOSURE E-STOP PRESSED | RED | Emergency stop active at OI enclosure. To reset, pull the actuator until it releases. Press MACHINE ENABLE. |
| PRODUCT CONVEYOR E-STOP PRESSED | RED | Emergency stop active at PRODUCT CONVEYOR. To reset, pull the actuator until it releases. Press MACHINE ENABLE. |
| INFEED CONVEYOR E-STOP PRESSED (WHEN EQUIPPED) | RED | Emergency stop active at INFEED CONVEYOR. To reset, pull the actuator until it releases. Press MACHINE ENABLE. |
| OUTFEED CONVEYOR E-STOP PRESSED | RED | Emergency stop active at OUTFEED CONVEYOR. To reset, pull the actuator until it releases. Press MACHINE ENABLE. |
| REMOTE OI ENCLOSURE E-STOP PRESSED (WHEN EQUIPPED) | RED | Emergency stop active at remote OI. To reset, pull the actuator until it releases. Press MACHINE ENABLE. |
| MAIN GUARD OPEN | RED | MAIN GUARD is open. Close guard fully and press MACHINE ENABLE. |
| RETURN #2 GUARD OPEN | RED | RETURN #2 guard is open. Close guard fully and press MACHINE ENABLE. |
| CONTROL POWER REQUIRES RESET<br>HOLD AND RELEASE MACHINE ENABLE BUTTON | YELLOW | Control power requires reset. Hold and release the MACHINE ENABLE button. |
| CONTROL POWER RESET IN PROGRESS<br>— PLEASE WAIT — | YELLOW | Control power reset sequence in progress. Wait for completion. |
| MOVING RAKE AND FLICKER INTO POSITION<br>— PLEASE WAIT — | YELLOW | RAKE and FLICKER are moving to recipe positions. Wait for travel to complete. |
| ENABLE PRODUCT BELT TENSION | YELLOW | PRODUCT CONVEYOR tension cylinder is not extended. Enable from the HOME screen. |
| ENABLE PORTION CONVEYOR TENSION | YELLOW | PORTION CONVEYOR tension cylinder is not extended. Enable from the HOME screen. |
| MACHINE REQUIRES PRIME<br>BEFORE RUN MODE ALLOWED | YELLOW | Priming criteria not met. Select PRIME mode and complete the priming sequence before selecting RUN. |
| MACHINE STARTED IN REMOTE MODE<br>WAITING FOR DOWNSTREAM INTERLOCK | YELLOW | Applicator started in REMOTE mode. Waiting for downstream interlock signal. |
| REMOTE RUN MODE STOPPED FROM OI<br>- HOLD START TO RESTART - | YELLOW | Applicator stopped from the OI while in REMOTE mode. Hold PRESS TO START to restart. |
| REMOTE RUN MODE STOPPED FROM LINE CONTROLLER OI<br>- HOLD START TO RESTART - | YELLOW | Applicator stopped by the line controller while in REMOTE mode. Hold PRESS TO START to restart. |
| ---- PRIME COMPLETED ----<br>REMOTE RUN MODE READY<br>HOLD START | YELLOW | Priming complete. Applicator in REMOTE mode and ready to start. Hold PRESS TO START. |
| MACHINE RUNNING<br>CONSERVE MODE ACTIVE | YELLOW | No target detected within the Conserve timer period. All motors except PRODUCT CONVEYOR stopped. Clears automatically when a target is detected. |
| MACHINE RUNNING | GREEN | Applicator running in RUN mode. Topping application active. |
| MACHINE RUNNING IN PRIME MODE | GREEN | PRIME mode sequence executing. |
| MACHINE RUNNING IN EMPTY MODE | GREEN | Applicator in EMPTY mode. |
| MACHINE RUNNING IN LOCAL BYPASS MODE | GREEN | PRODUCT CONVEYOR running without topping application. LOCAL control. |
| MACHINE RUNNING IN REMOTE BYPASS MODE | GREEN | PRODUCT CONVEYOR running without topping application. REMOTE control. |
| MACHINE RUNNING IN WASH MODE | GREEN | Applicator in WASH mode at preset speeds and heights. |
| ---- PRIME COMPLETED ----<br>LOCAL RUN MODE READY HOLD START | GREEN | Priming complete. Applicator in LOCAL mode and ready to start. Hold PRESS TO START. |
| PRIME MODE READY HOLD START | GREEN | PRIME mode selected and ready. Hold PRESS TO START for three seconds. |
| EMPTY MODE READY HOLD START | GREEN | EMPTY mode selected and ready. Hold PRESS TO START for three seconds. |
| BYPASS MODE READY HOLD START | GREEN | BYPASS mode selected and ready. Start the Applicator. |
| WASH MODE READY HOLD START | GREEN | WASH mode selected and ready. Hold PRESS TO START for three seconds. |

!!! note
    Two banner messages currently display "HMI" as they appear on the OI
    screen. These will be updated to read "OI" in a future PLC revision.

---

## 11.4 Stacklight Reference

| **Indicator** | **State** | **Meaning** |
|---|---|---|
| HORN | Pulsing | Applicator starting |
| RED | Blinking | Not enabled |
| RED | Solid | Faulted |
| YELLOW | Blinking | Low level |
| YELLOW | Solid | Level empty |
| GREEN | Blinking | Ready |
| GREEN | Solid | Running |

---

## 11.5 MACHINE OPTIONS Reference

| **Option** | **Function** | **Default** |
|---|---|---|
| **IMPERIAL / METRIC** | Sets unit system for all weight and dimension displays throughout the OI. | IMPERIAL |
| **RAKE HEIGHT ADJ / NO RAKE HEIGHT ADJ** | Enables or disables the RAKE HEIGHT MOTOR and associated controls. | RAKE HEIGHT ADJ |
| **FLICKER HEIGHT ADJ / NO FLICKER HEIGHT ADJ** | Enables or disables the FLICKER HEIGHT MOTOR and associated controls. | FLICKER HEIGHT ADJ |
| **HOPPER SENSOR / NO HOPPER SENSOR** | Enables or disables the HOPPER HEIGHT SENSOR input. | HOPPER SENSOR |
| **PORTION SCALES / NO PORTION SCALES** | Enables or disables the PORTION LOAD CELL inputs and PORTION PID loop. | PORTION SCALES |
| **RAKE SCALES / NO RAKE SCALES** | Enables or disables the RAKE LOAD CELL inputs and RETURN #2 PID loop. | RAKE SCALES |
| **SHREDDER CONTROL / NO SHREDDER** | Enables or disables the SHREDDER interlock output and automated fill sequence. | NO SHREDDER |
| **PCM CONV / NO PCM CONV** | Enables or disables the PCM conveyor option and automated fill sequence. | NO PCM CONV |
| **AUX 1 CONV / NO AUX 1 CONV** | Enables or disables the AUX 1 auxiliary conveyor. | NO AUX 1 CONV |
| **AUX 2 CONV / NO AUX 2 CONV** | Enables or disables the AUX 2 auxiliary conveyor. | NO AUX 2 CONV |
| **SPEED FOLLOW / NO SPEED FOLLOW** | Enables or disables external speed follow (line synchronization) input. | NO SPEED FOLLOW |
| **CONSERVE MODE TIME [MS]** | Conserve timer duration in milliseconds. Set based on target travel time from photoeye to drop point at operating line speed. | 30000 |
| **ALLOWED # OF RECIPES** | Maximum number of stored recipes. Up to 128. | 40 |