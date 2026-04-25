# 5  Recipe Setup

## 5.1 RECIPE Screen: Field Reference

<figure markdown>
  ![RECIPE screen showing all editable production parameter fields](../assets/images/fig_5_1_recipe_screen.svg)
  <figcaption>Figure 5.1  RECIPE screen</figcaption>
</figure>

All production parameters are stored in the RECIPE screen. Editable fields
have a yellow background with green text. See
[Section 11.3: RECIPE Screen](11-oi-reference.md#113-recipe-screen) for
screen layout and [Appendix A: Recipe Starting Points](appendix-a.md) for
starting point values for all fields.

| **Field** | **Description** |
|---|---|
| **RAKE SPEED [20–100%]** | RAKE motor speed. |
| **RAKE HEIGHT [0.25–2.00 in]** | Vertical position of the RAKE above the PORTION CONVEYOR surface. See [Section 5.3](#53-rake-height-setup-and-topping-compaction-assessment). |
| **HIGH LEVEL [30.0–50.0 lb]** | RAKE weight upper limit. RETURN #2 slows above this value. |
| **TARGET LEVEL [0.0–45.0 lb]** | RAKE weight setpoint. |
| **LOW LEVEL [15.0–45.0 lb]** | RAKE weight lower limit. RETURN #2 accelerates below this value. |
| **LO-LO LEVEL [5.0–20.0 lb]** | RAKE weight low-low threshold. Triggers PRIME mode prompt. |
| **FLICKER SPEED [0–100%]** | Speed of the FLICKER motor. |
| **FLICKER HEIGHT [0.20–2.00 in]** | Vertical position of the FLICKER above the PORTION CONVEYOR. |
| **HOPPER TARGET [0.0–9.0 in]** | Target topping height in the HOPPER area. See [Section 6.3](06-process-control.md#63-supply-and-demand-balance). |
| **PRODUCT [5–120 FPM]** | PRODUCT CONVEYOR speed. |
| **PORTION [0.50–24.1 FPM]** | PORTION CONVEYOR speed. See [Section 6.5](06-process-control.md#65-portion-conveyor-pid-control-portion-weight). |
| **PCM FEED [0–62 FPM]** | PCM FEED CONVEYOR speed (if equipped). |
| **INFEED CONV [5–120 FPM]** | INFEED CONVEYOR speed (if equipped). |
| **OUTFEED CONV [5–120 FPM]** | OUTFEED CONVEYOR speed (if equipped). |
| **WEIGHT [0.01–16.0 oz]** | Target portion weight. |
| **DIAMETER / LENGTH [1.0–18.0 in]** | Target dimension used for portion weight calculations.<br>Enter the diameter for round targets. Enter the longest dimension for rectangular targets.<br>The active field is determined by the TARGET TYPE setting. |

!!! note
    RAKE HEIGHT and PORTION CONVEYOR speed values cannot be changed while
    PORTION CONTROL is active.

---

## 5.2 Loading and Saving Recipes

1. Navigate to the RECIPE screen.
2. To load: enter the recipe number in RECIPE # [SAVE/LOAD]. Press and hold
   LOAD RECIPE for three seconds.
3. To create a new recipe: enter a recipe number and name. Enter all
   parameters. Press and hold SAVE RECIPE for three seconds.

!!! note
    The Applicator stores up to 128 recipes. Verify all parameters against
    the production specification before starting. Saving to an existing
    recipe number overwrites it without confirmation. Verify the recipe
    number before saving.

---

## 5.3 RAKE Height Setup and Topping Compaction Assessment

RAKE height controls topping bed depth on the PORTION CONVEYOR. The bed
must be uniform with no voids across the full width. Any gap causes portion
weight variation.

### Topping Compaction Assessment Procedure

Before setting RAKE height, assess the topping's compaction:

1. Collect a representative sample sufficient to fill one hand.
2. Apply light pressure and open your hand. Poke the sample. If it separates
   freely, the topping is loose.
3. Squeeze moderately and open your hand. Poke the pile. Does it fall apart
   or hold its shape?
4. Squeeze firmly and open your hand. Does the pile retain its shape after
   poking?
5. Repeat steps 1 through 4 on two additional fresh samples to confirm the
   result is consistent across the lot.
6. Adjust RAKE HEIGHT on the [RECIPE screen](#51-recipe-screen-field-reference)
   in 0.10 in increments. Set the recipe and let PRIME complete fully. Allow
   approximately 100 targets to pass through before evaluating the bed.
   Recycled material must stabilize before the bed reflects the true recipe
   settings.
7. When the bed is uniform with no voids, save the recipe. See
   [Section 5.2: Loading and Saving Recipes](#52-loading-and-saving-recipes).

!!! note
    **High compaction** (topping holds shape after light or moderate
    pressure): indicates high moisture or stickiness. Reduce TARGET LEVEL
    first. A lighter pile reduces compaction pressure on the conveyor. Then
    set RAKE HEIGHT to the point where the bed rakes out cleanly with no
    voids.

    **Low compaction** (topping crumbles under firm pressure): start with
    the baseline TARGET LEVEL and RAKE HEIGHT from the recipe. Typical RAKE
    TARGET LEVEL ranges:

    - Shredded cheese (standard): 32–45 lb.
    - IQF / frozen product: 25–35 lb.
    - Mixed or vegetable toppings with varied piece sizes: similar to cheese
      range with RAKE SPEED reduced.

Long or sticky shred may need a slightly higher TARGET LEVEL to allow the
RAKE to push through and form a consistent bed. Adjust RAKE HEIGHT until
the bed is clean, then reduce TARGET LEVEL until compaction improves. Fine
or short shreds behave more freely and typically tolerate a lighter pile.

!!! note
    **Judging compaction by feeling develops with experience. A training video
    demonstrating this procedure is planned. A reference will be added here
    when available.**

!!! note
    Repeat the assessment when the topping lot changes, after extended idle
    periods, or when ambient conditions differ significantly from normal.