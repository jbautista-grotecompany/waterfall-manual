# Appendix A — Recipe Starting Points

## A.1 Purpose and Usage

The tables below provide recipe starting point values from production data
across multiple customer installations on pizza and similar flat-target
applications.

These are starting points only. Tune final parameters to the specific
topping, target size, production rate, and site conditions. Perform the
compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment))
before setting RAKE height.

!!! note
    Tables are organized by portion weight range [oz]. Locate the table
    matching the target portion weight, then identify rows with a similar
    target diameter and production rate. HIGH LEVEL (Hi) and LO-LO LEVEL
    (LoLo) values shown are outer guard thresholds. TARGET LEVEL (Target
    [lb]) is the primary PID setpoint. Adjust TARGET LEVEL first when tuning
    weight output.

---

**PORTION WEIGHT: 0 – 2 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 0.51 | 8 | 65 | 6.2 | 25 | 0.90 | 55 | 30 | 55 | 20 | 10 | 0.20 | 65 | 1.7 |
| 1.50 | 14.13 | 110 | 5.0 | 30 | 1.00 | 65 | 40 | 45 | 30 | 20 | 0.30 | 92 | 4.0 |
| 1.80 | 14.13 | 110 | 5.0 | 20 | 1.20 | 65 | 42 | 47 | 30 | 20 | 0.30 | 100 | 7.0 |

**PORTION WEIGHT: 2 – 4 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2.00 | 14.13 | 75 | 5.0 | 20 | 1.00 | 65 | 40 | 50 | 30 | 20 | 0.30 | 65 | 6.0 |
| 2.50 | 14.13 | 113 | 8.2 | 18 | 1.20 | 70 | 40 | 45 | 32 | 25 | 0.20 | 95 | 4.0 |
| 3.00 | 12 | 74 | 6.8 | 12 | 1.10 | 80 | 65 | 70 | 55 | 15 | 0.40 | 95 | 4.0 |
| 3.50 | 14.13 | 75 | 9.3 | 20 | 1.00 | 65 | 45 | 50 | 25 | 20 | 0.30 | 70 | 6.0 |

**PORTION WEIGHT: 4 – 6 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 4.00 | 14.13 | 108 | 11.5 | 22 | 1.60 | 65 | 43 | 45 | 30 | 20 | 0.40 | 100 | 7.0 |
| 4.50 | 12 | 74 | 12.4 | 18 | 1.20 | 80 | 65 | 70 | 55 | 15 | 0.40 | 95 | 4.0 |
| 5.50 | 14.13 | 109 | 12.5 | 22 | 1.50 | 65 | 47 | 48 | 35 | 25 | 0.30 | 90 | 9.0 |

**PORTION WEIGHT: 6 – 8 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 6.00 | 14.13 | 75 | 9.0 | 19 | 1.50 | 65 | 40 | 50 | 30 | 20 | 0.30 | 65 | 7.0 |
| 6.50 | 12 | 74 | 16.5 | 27 | 1.50 | 80 | 55 | 70 | 53 | 24 | 0.40 | 95 | 5.0 |
| 7.50 | 15.75 | 88 | 12.0 | 20 | 1.30 | 60 | 40 | 50 | 35 | 20 | 0.30 | 90 | 7.0 |

**PORTION WEIGHT: 8 – 12 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 8.00 | 15.75 | 90 | 10.0 | 15 | 1.50 | 60 | 40 | 50 | 30 | 20 | 0.25 | 95 | 6.0 |
| 10.00 | 16 | 94 | 13.0 | 19 | 1.60 | 65 | 46 | 48 | 37 | 25 | 0.30 | 95 | 9.0 |
| 12.00 | 15.75 | 85 | 13.5 | 20 | 1.60 | 65 | 46 | 50 | 35 | 25 | 0.40 | 95 | 8.0 |

**PORTION WEIGHT: 12 – 16 oz**

| **Wt [oz]** | **Dia [in]** | **Prod [FPM]** | **Portion [FPM]** | **PCM [FPM]** | **Rake Ht [in]** | **Rake Spd [%]** | **Target [lb]** | **Hi [lb]** | **Lo [lb]** | **LoLo [lb]** | **Flkr Ht [in]** | **Flkr Spd [%]** | **Hopper [in]** |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 12.00 | 16 | 70 | 10.5 | 18 | 1.20 | 90 | 55 | 70 | 30 | 15 | 0.30 | 95 | 3.5 |
| 16.00 | 16 | 70 | 23.0 | 18 | 1.40 | 90 | 70 | 75 | 60 | 20 | 0.45 | 95 | 5.0 |

---

## A.2 Parameter Interpretation Guide

| **Parameter** | **How to use these starting values** |
|---|---|
| **RAKE HEIGHT [in]** | Set this first. Perform compaction assessment ([Section 5.3](05-recipe-setup.md#53-rake-height-setup-and-topping-compaction-assessment)). Adjust up if topping packs under the RAKE; adjust down if the bed has voids. |
| **TARGET LEVEL [lb]** | The TARGET LEVEL setpoint in the RECIPE screen. Start at the table value. Reduce if topping supply is limited or RETURN #2 runs at maximum continuously. |
| **HIGH LEVEL [lb] (Hi)** | Set 5–10 lb above TARGET LEVEL. This is the upper PID boundary, not a target. |
| **LOW LEVEL [lb] (Lo)** | Set 5–10 lb below TARGET LEVEL. This is the lower PID boundary. Reached when the product bed no longer touches the side guards after the RAKE. |
| **LO-LO LEVEL [lb] (LoLo)** | Set to approximately 50–60% of TARGET LEVEL. Triggers the PRIME mode prompt. Do not set too close to TARGET LEVEL. |
| **RAKE SPEED [%]** | Start at the table value. Reduce if topping clumps after the RAKE. Increase slightly if the bed has voids. |
| **FLICKER HEIGHT [in]** | Values are consistent across nearly all products (0.20–0.50 in). Start at 0.30 in for most applications. Increase slightly if topping avalanches at the nose roller. |
| **FLICKER SPEED [%]** | Cheese and heavier toppings: 85–100%. Light or small toppings: 55–70%. Observe the waterfall's uniformity and adjust as needed to achieve even coverage. |
| **HOPPER TARGET [in]** | Start at 4 inches. Increase if RETURN #2 flights appear under-filled. Decrease if topping overflows the HOPPER. |
| **PORTION CONVEYOR [FPM]** | Ensure the RAKE PID is balanced before enabling PORTION CONTROL. Use the table value as an initial position only. Run targets and verify weight manually before enabling PORTION CONTROL PID. |
| **PCM FEED [FPM]** | Set the topping supply rate slightly above the Applicator consumption. Do not overfeed. |