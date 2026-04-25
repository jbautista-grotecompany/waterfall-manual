# 4  Operating Modes

Sections 4.3 through 4.6 describe the four operator-selected modes. PRIME
and CONSERVE are automatic states. The Applicator enters PRIME and CONSERVE
modes based on operating conditions.

## 4.1 Applicator Control: LOCAL and REMOTE

<figure markdown>
  ![LOCAL and REMOTE control flowchart showing start/stop source selection](../assets/images/fig_4_1_local_remote.svg)
  <figcaption>Figure 4.1  LOCAL and REMOTE control flowchart</figcaption>
</figure>

1. **LOCAL control:** Start and stop the Applicator from the HOME screen
   using PRESS TO START and STOP. The Applicator runs independently of any
   upstream or downstream equipment.
2. **REMOTE control:** An external line signal starts and stops the
   Applicator. A dry-contact output (Upstream Interlock) sends the
   Applicator's run status to upstream equipment.

---

## 4.2 Mode Selection

<figure markdown>
  ![Operating mode selection flowchart showing RUN, EMPTY, BYPASS, and WASH paths](../assets/images/fig_4_2_mode_selection.svg)
  <figcaption>Figure 4.2  Operating mode selection flowchart</figcaption>
</figure>

1. **Run Production.** Select RUN mode for normal topping application. The
   Applicator verifies priming criteria before starting. If not met, the OI
   prompts the operator to complete PRIME mode first.
2. **Empty Applicator.** Select EMPTY mode to clear topping from the
   Applicator.
3. **Bypass Applicator (Pass-Thru).** Select BYPASS mode to run the PRODUCT
   CONVEYOR without applying topping. This mode allows operation with the
   MAIN GUARD and/or RETURN #2 guard open.
4. **Wash / Clean Applicator.** Select WASH mode for cleaning. The RAKE and
   FLICKER move to preset heights. All motors run at preset speeds.

---

## 4.3 PRIME / RUN Mode

<figure markdown>
  ![PRIME and RUN mode flowchart showing priming sequence and transition to RUN](../assets/images/fig_4_3_prime_run.svg)
  <figcaption>Figure 4.3  PRIME and RUN mode flowchart</figcaption>
</figure>

### PRIME Mode

1. Select PRIME mode. Press and hold PRESS TO START for three seconds.
2. The RAKE and FLICKER move to recipe positions. Allow travel to complete
   before loading topping.
3. If the SHREDDER option is enabled, topping feed starts automatically.
   Otherwise, load topping manually at the HOPPER.
4. Priming continues until RAKE weight exceeds 75% of TARGET LEVEL for
   10 continuous seconds.
5. When complete, the Applicator transitions automatically to RUN mode.

!!! note
    PRIME mode is available only in LOCAL control. Selecting RUN mode before
    priming is complete prompts the OI to require PRIME mode to finish first.

### RUN Mode

When priming is complete, the Applicator transitions to RUN mode
automatically. The RAKE PID loop activates and holds RAKE weight at TARGET
LEVEL by adjusting RETURN #2 speed. If PORTION CONTROL is enabled, the
PORTION CONVEYOR PID loop activates and adjusts belt speed to maintain the
target applied weight.

The STATUS BANNER displays **MACHINE RUNNING**.

Monitor the [RAKE screen](11-oi-reference.md#115-rake-screen) trend to
confirm RETURN #2 is modulating, not pinned at minimum or maximum speed.
A steady RETURN #2 speed with stable RAKE weight indicates the system is
balanced. See [Section 6: Process Control & Tuning](06-process-control.md)
for monitoring and tuning guidance.

---

## 4.4 EMPTY Mode

<figure markdown>
  ![EMPTY mode flowchart showing conveyor run directions and stop condition](../assets/images/fig_4_4_empty.svg)
  <figcaption>Figure 4.4  EMPTY mode flowchart</figcaption>
</figure>

1. Select EMPTY mode. Press and hold PRESS TO START for three seconds.
2. All conveyor drives run to clear topping from the system. Depending on
   MOTOR SETUP configuration, RETURN #1 and/or RETURN #3 may run in reverse
   to move topping toward the discharge point.
3. Watch the HOPPER and RAKE area. When topping no longer recirculates and
   the belt surfaces are clear, press STOP.

!!! note
    EMPTY mode does not stop automatically. Press STOP when emptying is
    complete. EMPTY mode is available in LOCAL control only.

---

## 4.5 BYPASS Mode

<figure markdown>
  ![BYPASS mode flowchart showing PRODUCT CONVEYOR running without topping application](../assets/images/fig_4_5_bypass.svg)
  <figcaption>Figure 4.5  BYPASS mode flowchart</figcaption>
</figure>

1. Select BYPASS mode. Start the Applicator. The PRODUCT CONVEYOR operates
   without topping application.

!!! note
    RETURN #1 has a manual run function in BYPASS mode to clear accumulated
    topping. Access it from
    [MANUAL → RETURN #1 SERVICE](11-oi-reference.md#117-manual-screens).
    When enabled, the INFEED and OUTFEED CONVEYORS run with the PRODUCT
    CONVEYOR in BYPASS mode. BYPASS mode is available in LOCAL and REMOTE
    control.

---

## 4.6 WASH Mode

<figure markdown>
  ![WASH mode flowchart showing RAKE and FLICKER travel to upper position](../assets/images/fig_4_6_wash.svg)
  <figcaption>Figure 4.6  WASH mode flowchart</figcaption>
</figure>

1. Select WASH mode. Press and hold PRESS TO START for three seconds.
2. The RAKE and FLICKER travel to the upper position (~2.0–2.5 in). Confirm
   travel is complete before opening guards or removing belts.

!!! note
    In WASH mode, all motors operate at preset speeds and preset heights.
    WASH mode is available only in LOCAL control.

---

## 4.7 CONSERVE Mode

<figure markdown>
  ![CONSERVE mode flowchart showing timer trigger, motor stop, and auto-recovery](../assets/images/fig_4_7_conserve.svg)
  <figcaption>Figure 4.7  CONSERVE mode flowchart</figcaption>
</figure>

1. During RUN mode, the Applicator monitors the TARGET PHOTOEYES.
2. If no target is detected, the CONSERVE timer starts. A target arriving
   before the timer expires resets the timer, and operation continues
   normally.
3. If the timer expires, the Applicator enters CONSERVE mode.
4. All motors except the PRODUCT CONVEYOR, INFEED CONVEYOR, and OUTFEED
   CONVEYOR (if enabled) stop. PID loops pause. The SHREDDER interlock
   (if enabled) turns OFF.
5. The STATUS BANNER displays **MACHINE RUNNING CONSERVE MODE ACTIVE**.
6. When a target is detected, CONSERVE mode clears automatically.
7. All stopped motors restart, PID loops resume, and the SHREDDER interlock
   (if enabled) turns back ON.

!!! warning
    **Topping Loading.**
    Topping must not be added directly to the RAKE area when the Applicator
    is stopped. Load topping at the HOPPER only.

!!! note
    Set the CONSERVE timer at MACHINE OPTIONS → CONSERVE MODE TIME [MS], in
    milliseconds. The value should be based on travel time from the TARGET
    PHOTOEYE to the drop point while running at the expected line speed. Do
    not obstruct or flag the TARGET PHOTOEYES to reset CONSERVE mode. See
    [Section 11.14: MACHINE OPTIONS](11-oi-reference.md#1114-machine-options-reference).