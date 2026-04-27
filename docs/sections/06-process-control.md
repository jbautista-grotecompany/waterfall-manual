# 6  Process Control & Tuning

## 6.1 Three Critical System Checkpoints

When a weight or consistency problem occurs, work through these checkpoints
in order before adjusting any parameters. Most problems originate at
Checkpoint 1 or 2.

| **Checkpoint** | **Criteria for Correct Operation** |
|---|---|
| **1: HOPPER fill** | RETURN #2 flights must be uniformly filled at all times. Each flight holds approximately 1.8 to 2.2 lb of topping. Overfilled flights pack and meter irregularly. Underfilled flights cause the PID to over-accelerate before material reaches the RAKE LOAD CELLS. |
| **2: RAKE weight** | RAKE LOAD CELL weight must stay stable at TARGET LEVEL. Weight instability at the RAKE is the most common cause of variation in portions. |
| **3: FLICKER dispersion** | The FLICKER must distribute topping evenly across the full target width. Uneven dispersion produces left-to-right weight variation that RAKE weight and PORTION CONVEYOR speed cannot correct. |

---

## 6.2 Automated Fill Control (PCM / SHREDDER Option)

<figure markdown>
  ![Automated fill control flowchart showing fill start and stop criteria for PCM and SHREDDER options](../assets/images/fig_6_2_automated_fill.svg)
  <figcaption>Figure 6.2  Automated fill control flowchart</figcaption>
</figure>

### Fill Start Criteria

Both conditions must be met simultaneously:

- HOPPER level is below the HOPPER TARGET value from the active recipe.
- RAKE LOAD CELL weight is below the HIGH-LEVEL threshold.

### Fill Stop Criteria

Any one of the following stops the fill cycle:

- RAKE LOAD CELL weight reaches or exceeds the HIGH-LEVEL limit.
- HOPPER level exceeds the overshoot-adjusted value (HOPPER TARGET +
  HOPPER OVERSHOOT HEIGHT) for 2.5 continuous seconds.
- HOPPER level reaches the Stop-Fill threshold for 2 continuous seconds.

!!! warning
    **Transport Delay.**
    The RETURN #2 conveyor has an inherent transport delay between the
    HOPPER and the RAKE LOAD CELLS. The SHREDDER or PCM feed rate must
    match the Applicator's topping consumption rate. HOPPER OVERSHOOT
    HEIGHT and HOPPER CUSTOMER LIMITS are set at
    [MAINT](11-oi-reference.md#119-maint-screens) → HOPPER.

---

## 6.3 Supply and Demand Balance

RETURN #2 meters material by volume. At any given speed, each flight carries
approximately 1.8 to 2.2 lb of topping and deposits it into the recirculation
system once per revolution. Supply rate is the product of flight capacity and
belt speed. It cannot change faster than the PID responds.

The production line consumes topping at a fixed rate. RETURN #2 must match
that rate continuously. Too little and the Applicator starves. Too much and
the RAKE overfills.

The example below uses a three-lane line running 33 targets per lane per
minute at 16 oz per target: 99 lb/min total demand. RETURN #2 supply depends
on two factors: flight capacity and belt speed.

<div style="padding:1rem 0;max-width:680px;font-family:Arial,sans-serif">

<div style="background:#24211C;border-radius:6px;padding:12px 16px;margin-bottom:14px">
  <div style="color:#F36C23;font-size:16px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-bottom:2px">RETURN #2: Supply and Demand Balance</div>
  <div style="color:#ffffff;font-size:14px">Adjust line parameters and belt speed to see the supply/demand balance in real time.</div>
</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px">

  <div style="background:#ffffff;border:0.5px solid rgba(0,0,0,0.12);border-radius:8px;padding:12px">
    <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#24211C;margin-bottom:10px;padding-bottom:6px;border-bottom:0.5px solid rgba(0,0,0,0.12)">Line Demand</div>
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#24211C;margin-bottom:6px">Lanes <span id="lv" style="font-size:16px;font-weight:700;color:#24211C">3</span></div>
      <div style="display:flex;align-items:center;gap:6px">
        <button onclick="nudge('lanes',-1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9664;</button>
        <input type="range" id="lanes" min="1" max="4" step="1" value="3" style="-webkit-appearance:none;appearance:none;flex:1;height:5px;border-radius:3px;outline:none;cursor:pointer;border:none">
        <button onclick="nudge('lanes',1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9654;</button>
      </div>
    </div>
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#24211C;margin-bottom:6px">Targets / lane / min <span id="tv" style="font-size:16px;font-weight:700;color:#24211C">33</span></div>
      <div style="display:flex;align-items:center;gap:6px">
        <button onclick="nudge('tpm',-1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9664;</button>
        <input type="range" id="tpm" min="10" max="90" step="1" value="33" style="-webkit-appearance:none;appearance:none;flex:1;height:5px;border-radius:3px;outline:none;cursor:pointer;border:none">
        <button onclick="nudge('tpm',1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9654;</button>
      </div>
    </div>
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#24211C;margin-bottom:6px">Weight per target (oz) <span id="wv" style="font-size:16px;font-weight:700;color:#24211C">16.0</span></div>
      <div style="display:flex;align-items:center;gap:6px">
        <button onclick="nudge('woz',-0.1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9664;</button>
        <input type="range" id="woz" min="1" max="20" step="0.1" value="16" style="-webkit-appearance:none;appearance:none;flex:1;height:5px;border-radius:3px;outline:none;cursor:pointer;border:none">
        <button onclick="nudge('woz',0.1)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9654;</button>
      </div>
    </div>
  </div>

  <div style="background:#ffffff;border:0.5px solid rgba(0,0,0,0.12);border-radius:8px;padding:12px">
    <div style="font-size:13px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#24211C;margin-bottom:10px;padding-bottom:6px;border-bottom:0.5px solid rgba(0,0,0,0.12)">RETURN #2 Supply</div>
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#24211C;margin-bottom:6px">Belt speed (FPM) <span id="sv" style="font-size:16px;font-weight:700;color:#24211C">19.4</span></div>
      <div style="display:flex;align-items:center;gap:6px">
        <button onclick="nudge('speed',-0.2)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9664;</button>
        <input type="range" id="speed" min="8" max="60" step="0.2" value="19.4" style="-webkit-appearance:none;appearance:none;flex:1;height:5px;border-radius:3px;outline:none;cursor:pointer;border:none">
        <button onclick="nudge('speed',0.2)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9654;</button>
      </div>
    </div>
    <div style="margin-bottom:10px">
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:15px;color:#24211C;margin-bottom:6px">Flight fill level <span id="fv" style="font-size:16px;font-weight:700;color:#24211C">100%</span></div>
      <div style="display:flex;align-items:center;gap:6px">
        <button onclick="nudge('fill',-5)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9664;</button>
        <input type="range" id="fill" min="20" max="100" step="5" value="100" style="-webkit-appearance:none;appearance:none;flex:1;height:5px;border-radius:3px;outline:none;cursor:pointer;border:none">
        <button onclick="nudge('fill',5)" style="background:#F36C23;border:none;border-radius:4px;width:26px;height:26px;font-size:12px;cursor:pointer;color:#fff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;line-height:1">&#9654;</button>
      </div>
    </div>
    <div style="margin-top:8px">
      <div style="font-size:13px;color:#24211C;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px">Flight load visualizer</div>
      <div id="flights" style="display:flex;gap:4px"></div>
      <div id="flight-lb" style="font-size:14px;color:#24211C;margin-top:4px"></div>
    </div>
  </div>

</div>

<div id="status-bar" style="border-radius:8px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:16px;border:2px solid transparent">
  <div id="badge" style="font-size:12px;font-weight:700;letter-spacing:.08em;padding:4px 10px;border-radius:4px;white-space:nowrap"></div>
  <div style="flex:1;display:flex;gap:20px;flex-wrap:wrap">
    <div><div style="font-size:13px;font-weight:700;color:#24211C;text-transform:uppercase;letter-spacing:.05em">Demand</div><div id="demand-val" style="font-size:21px;font-weight:700;color:#24211C;line-height:1.2"></div></div>
    <div><div style="font-size:13px;font-weight:700;color:#24211C;text-transform:uppercase;letter-spacing:.05em">Supply</div><div id="supply-val" style="font-size:21px;font-weight:700;line-height:1.2"></div></div>
    <div><div style="font-size:13px;font-weight:700;color:#24211C;text-transform:uppercase;letter-spacing:.05em">Balance</div><div id="delta-val" style="font-size:21px;font-weight:700;line-height:1.2"></div></div>
  </div>
</div>

<div style="background:#ffffff;border:0.5px solid rgba(0,0,0,0.12);border-radius:8px;padding:12px">
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
    <div style="font-size:14px;font-weight:700;color:#24211C;width:68px;text-align:right;flex-shrink:0">Demand</div>
    <div style="flex:1;background:#f5f5f5;border-radius:3px;height:22px;position:relative" id="wrap-demand">
      <div id="bar-demand" style="height:100%;border-radius:3px;position:absolute;top:0;left:0;background:#24211C;transition:width .3s"></div>
      <div id="lbl-demand" style="position:absolute;top:50%;font-size:12px;font-weight:700;white-space:nowrap;transition:left .3s,color .3s"></div>
    </div>
  </div>
  <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
    <div style="font-size:14px;font-weight:700;color:#24211C;width:68px;text-align:right;flex-shrink:0">Supply</div>
    <div style="flex:1;background:#f5f5f5;border-radius:3px;height:22px;position:relative" id="wrap-supply">
      <div id="bar-supply" style="height:100%;border-radius:3px;position:absolute;top:0;left:0;transition:width .3s,background .3s"></div>
      <div id="lbl-supply" style="position:absolute;top:50%;font-size:12px;font-weight:700;white-space:nowrap;transition:left .3s,color .3s"></div>
      <div id="tick-d" style="position:absolute;top:0;height:100%;width:2px;background:#F36C23;opacity:.7;pointer-events:none"></div>
    </div>
  </div>
  <div id="note-text" style="margin-top:10px;font-size:14px;color:#24211C;line-height:1.5;padding-top:8px;border-top:0.5px solid rgba(0,0,0,0.12)"></div>
</div>

</div>

<script>
(function(){
  var FLIGHTS=46,MIN_SPEED=18,MAX_LB_PER_FLIGHT=2.2;
  var TRACK_DARK='#3a3733',TRACK_ORANGE='#F36C23';
  var THRESHOLD=22;
  function updateSliderFill(el){
    var min=parseFloat(el.min),max=parseFloat(el.max),val=parseFloat(el.value);
    var pct=((val-min)/(max-min))*100;
    el.style.background='linear-gradient(to right,'+TRACK_ORANGE+' 0%,'+TRACK_ORANGE+' '+pct+'%,'+TRACK_DARK+' '+pct+'%,'+TRACK_DARK+' 100%)';
  }
  function setBarLabel(fillEl,lblEl,wrapEl,pct,text){
    var wrapW=wrapEl.offsetWidth||300;
    var fillPx=pct/100*wrapW;
    fillEl.style.width=pct+'%';
    if(fillPx>THRESHOLD+80){
      lblEl.style.left=(fillPx-6)+'px';
      lblEl.style.transform='translateY(-50%) translateX(-100%)';
      lblEl.style.color='#fff';
    } else {
      lblEl.style.left=(fillPx+6)+'px';
      lblEl.style.transform='translateY(-50%)';
      lblEl.style.color='#24211C';
    }
    lblEl.textContent=text;
  }
  function nudge(id,step){
    var el=document.getElementById(id);
    var val=parseFloat(el.value)+step;
    val=Math.min(parseFloat(el.max),Math.max(parseFloat(el.min),parseFloat(val.toFixed(10))));
    el.value=val;
    updateSliderFill(el);
    calc();
  }
  window.nudge=nudge;
  function calc(){
    var lanes=+document.getElementById('lanes').value;
    var tpm=+document.getElementById('tpm').value;
    var woz=+document.getElementById('woz').value;
    var speed=+document.getElementById('speed').value;
    var fillPct=+document.getElementById('fill').value;
    var demand=lanes*tpm*(woz/16);
    var lbPerFlight=MAX_LB_PER_FLIGHT*(fillPct/100);
    var flightsPerMin=(speed/MIN_SPEED)*FLIGHTS;
    var supply=flightsPerMin*lbPerFlight;
    var delta=supply-demand;
    var maxBar=Math.max(demand,supply,120)*1.15;
    document.getElementById('lv').textContent=lanes;
    document.getElementById('tv').textContent=tpm;
    document.getElementById('wv').textContent=woz.toFixed(1);
    document.getElementById('sv').textContent=speed.toFixed(1);
    document.getElementById('fv').textContent=fillPct+'%';
    document.getElementById('flight-lb').textContent=lbPerFlight.toFixed(2)+' lb/flight \u00D7 '+flightsPerMin.toFixed(1)+' flights/min';
    var fl=document.getElementById('flights');
    fl.innerHTML='';
    for(var i=0;i<7;i++){
      var box=document.createElement('div');
      box.style.cssText='flex:1;height:14px;border-radius:2px;background:#f5f5f5;overflow:hidden;border:0.5px solid rgba(0,0,0,0.12)';
      var inner=document.createElement('div');
      inner.style.cssText='height:100%;border-radius:2px;background:#F36C23;transition:width .3s;width:'+fillPct+'%';
      box.appendChild(inner);fl.appendChild(box);
    }
    document.getElementById('demand-val').textContent=demand.toFixed(1)+' lb/min';
    document.getElementById('supply-val').textContent=supply.toFixed(1)+' lb/min';
    var sb=document.getElementById('status-bar');
    var badge=document.getElementById('badge');
    var deltaEl=document.getElementById('delta-val');
    var supplyVal=document.getElementById('supply-val');
    var noteEl=document.getElementById('note-text');
    var barSupply=document.getElementById('bar-supply');
    var supplyColor;
    if(Math.abs(delta)<=demand*0.03){
      sb.style.cssText='border-radius:8px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:16px;border:2px solid #2E7D32;background:#EAFAF1';
      badge.style.cssText='font-size:12px;font-weight:700;letter-spacing:.08em;padding:4px 10px;border-radius:4px;white-space:nowrap;background:#2E7D32;color:#fff';
      badge.textContent='BALANCED';
      deltaEl.style.color='#2E7D32';supplyVal.style.color='#2E7D32';
      deltaEl.textContent='\u00B1'+Math.abs(delta).toFixed(1)+' lb/min';
      supplyColor='#2E7D32';
      noteEl.textContent='Supply matches demand. The RAKE weight will hold steady at TARGET LEVEL. Small PID corrections only.';
    } else if(delta<0){
      sb.style.cssText='border-radius:8px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:16px;border:2px solid #D94F3D;background:#FFEEEE';
      badge.style.cssText='font-size:12px;font-weight:700;letter-spacing:.08em;padding:4px 10px;border-radius:4px;white-space:nowrap;background:#D94F3D;color:#fff';
      badge.textContent='UNDERFILL';
      deltaEl.style.color='#D94F3D';supplyVal.style.color='#D94F3D';
      deltaEl.textContent=delta.toFixed(1)+' lb/min';
      supplyColor='#D94F3D';
      noteEl.textContent=fillPct<100?'Flights are partially loaded. Check the HOPPER. The PID will drive belt speed higher, but partially empty flights mean effective supply continues to fall regardless of speed.':'Fully loaded flights cannot meet demand at this belt speed. Increase belt speed or reduce line demand.';
    } else {
      sb.style.cssText='border-radius:8px;padding:14px 16px;margin-bottom:12px;display:flex;align-items:center;gap:16px;border:2px solid #EF7132;background:#FFF3E0';
      badge.style.cssText='font-size:12px;font-weight:700;letter-spacing:.08em;padding:4px 10px;border-radius:4px;white-space:nowrap;background:#EF7132;color:#fff';
      badge.textContent='OVERFILL';
      deltaEl.style.color='#EF7132';supplyVal.style.color='#EF7132';
      deltaEl.textContent='+'+delta.toFixed(1)+' lb/min';
      supplyColor='#F36C23';
      noteEl.textContent='Supply exceeds demand by '+delta.toFixed(1)+' lb/min. Topping accumulates on the PORTION BELT (RAKE). The PID will lower the belt speed.';
    }
    barSupply.style.background=supplyColor;
    var demandPct=Math.min((demand/maxBar)*100,100);
    var supplyPct=Math.min((supply/maxBar)*100,100);
    setBarLabel(document.getElementById('bar-demand'),document.getElementById('lbl-demand'),document.getElementById('wrap-demand'),demandPct,demand.toFixed(1)+' lb/min');
    setBarLabel(document.getElementById('bar-supply'),document.getElementById('lbl-supply'),document.getElementById('wrap-supply'),supplyPct,supply.toFixed(1)+' lb/min');
    document.getElementById('tick-d').style.left=Math.min((demand/maxBar)*100,100)+'%';
  }
  ['lanes','tpm','woz','speed','fill'].forEach(function(id){
    var el=document.getElementById(id);
    el.addEventListener('input',function(){updateSliderFill(this);calc();});
    updateSliderFill(el);
  });
  calc();
})();
</script>

### Underfill

Underfill occurs when RETURN #2 cannot deliver enough material to meet
demand. Two conditions cause it, and either one stops the system from
keeping up.

The first is partially loaded flights. If the HOPPER runs low due to a
SHREDDER fault, a PCM gap, or a manual feed interruption, flights arrive
partially filled. The PID drives belt speed higher to compensate, but
partially empty flights mean effective supply continues to fall regardless
of speed. More belt speed cannot fix a starved HOPPER.

The second is the minimum belt speed floor. Even with every flight carrying
a full load, RETURN #2 at minimum speed may not deliver enough material if
line demand is high. The minimum speed is not a ceiling to avoid. It is a
floor that must be exceeded whenever production demand requires it.

In both cases, the RAKE weight drops progressively. When it falls below the
LO-LO LEVEL, the Applicator prompts PRIME mode and production stops.

### Optimal

RETURN #2 runs at the speed that delivers fully loaded flights at exactly
the rate the line consumes. The PID holds this speed, making small
corrections as RAKE weight drifts. The HOPPER stays at its target level,
flights fill consistently, and the topping bed is uniform across the full
conveyor width.

### Overfill

Occurs when the PID commands RETURN #2 faster than the line can consume.
The surplus accumulates in the HOPPER. Topping packs under its own weight
and flights begin metering inconsistently. Weight variation follows
immediately.

For most toppings, keep HOPPER TARGET at or below 6 inches. Above that
level, the accumulated weight of topping in the HOPPER compresses the
material. What appears to be a full HOPPER is actually a packed mass that
does not meter correctly, regardless of what the PID commands. Heavy or
dense toppings may require up to 9 inches to keep flights consistently
filled, but compaction risk increases above 6 inches. Monitor the bed
closely when operating above 6 inches and reduce HOPPER TARGET if weight
variation increases.

!!! note
    When setting up a new recipe or a new topping type, confirm that
    RETURN #2 can run fast enough to meet the line's consumption rate with
    fully loaded flights. If the belt is running at or near maximum speed
    and RAKE weight is still falling, the topping supply source (SHREDDER
    or PCM) is the constraint, not the PID. Contact
    [Grote Service](About.md#contact) to evaluate the drive
    speed range for that application.

---

## 6.4 RETURN #2 PID Control (RAKE Weight)

<figure markdown>
  ![RETURN #2 PID control block diagram showing process variable, setpoint, and speed output](../assets/images/fig_6_4_pid_block.svg)
  <figcaption>Figure 6.4  RETURN #2 PID control block diagram</figcaption>
</figure>

| **Parameter** | **Value and Function** |
|---|---|
| **Process Variable (PV)** | Two-second rolling average of RAKE LOAD CELL weight. |
| **Setpoint (SP)** | TARGET LEVEL from the active recipe. |
| **Proportional Gain (P)** | 0.75: Immediate correction proportional to weight error. |
| **Integral Gain (I)** | 1.75 / min: Eliminates long-term steady-state deviation. |
| **Derivative Gain (D)** | 0.003 min: Dampens sudden weight fluctuations. |
| **Output** | RETURN #2 conveyor speed command, constrained by recipe HIGH LEVEL and LOW LEVEL limits. |

See [Section 11.5: RAKE Screen](11-oi-reference.md#115-rake-screen) to
monitor PID variables in real time.

<figure markdown>
  ![RAKE screen trend chart showing TARGET LEVEL in blue, RAKE WEIGHT AVERAGE in red, and RETURN #2 SPEED in yellow](../assets/images/fig_6_4a_rake_trend.png){ width="500" }
  <figcaption>Figure 6.4A  RAKE screen trend: TARGET LEVEL (blue), RAKE WEIGHT AVERAGE (red), RETURN #2 SPEED (yellow)</figcaption>
</figure>

- The green rectangle shows stable production: RAKE weight holds close to
  TARGET LEVEL, and RETURN #2 speed runs at a steady, low value. The PID
  is making only minor corrections.
- The arrow marks the first sign of trouble: RETURN #2 speed begins to
  climb. At this moment, the RAKE weight may still appear stable, but the
  PID has already detected a deficit and is commanding the belt to run
  faster to compensate. A rising RETURN #2 speed trend is an early warning
  that supply is falling behind demand. If the HOPPER is not replenished,
  RAKE weight will follow the speed upward and then drop sharply as the
  HOPPER empties.
- The red rectangle shows what follows: RAKE weight becomes erratic as the
  PID overcorrects against a starved HOPPER and RETURN #2 speed swings in
  response. This is the visual signature of a supply problem, not a PID
  tuning problem.

---

## 6.5 PORTION CONVEYOR PID Control (PORTION Weight)

<figure markdown>
  ![Combined portion and rake control overview diagram showing both PID loops and their outputs](../assets/images/fig_6_5_portion_control.svg){ width="900" }
  <figcaption>Figure 6.5  Combined portion and rake control overview</figcaption>
</figure>

### Manual Setup and Weight Verification

1. The Applicator must be in RUN mode with priming complete.
2. Run targets through the Applicator. Weigh each after topping application.
3. Run approximately 100 targets and verify that weights are stable and
   consistent before proceeding.
4. Use the speed increment/decrement controls on the
   [PORTION screen](11-oi-reference.md#114-portion-screen) to adjust
   PORTION CONVEYOR speed until the applied weight matches the recipe
   target weight.
5. Press and hold TARE SCALE for three seconds. Perform the tare with the
   PORTION CONVEYOR running and carrying a representative topping load. The
   current weight and speed are saved as the baseline, and the load cell
   zeroes out, removing conveyor tare from the measurement.

### Enabling PID Portion Control

1. After the tare is complete and the target weight is verified, press
   TOGGLE PORTION CONTROL on the
   [PORTION screen](11-oi-reference.md#114-portion-screen).
2. The PID loop activates and adjusts PORTION CONVEYOR speed automatically.

!!! note
    If the Applicator enters PRIME mode while PORTION CONTROL is active,
    PORTION CONTROL is disabled automatically. Re-enable it after priming
    is complete and the RAKE weight has stabilized at TARGET LEVEL. Do not
    enable PORTION CONTROL until target weights are stable and consistent.
    Starting the PID on an unstable baseline causes oscillation. When
    PORTION CONTROL is turned OFF, or the Applicator exits RUN mode,
    automatic adjustment stops and PORTION CONVEYOR returns to the recipe
    baseline speed.

### PID Parameters

| **Parameter** | **Value and Function** |
|---|---|
| **Proportional Gain (P)** | 0.5: Immediate correction proportional to weight error. |
| **Integral Gain (I)** | 25 / min: Corrects persistent weight offset over time. |
| **Derivative Gain (D)** | 0.0: Not used for this process. |
| **Output** | PORTION CONVEYOR speed command, constrained by recipe min/max limits. |