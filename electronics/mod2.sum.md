
### 6.7 Crystal Diode Rectifiers
- AC power (50 Hz sinusoidal) is rectified to DC using crystal diodes for applications needing DC supply, like electronics. Two main circuits: half-wave and full-wave rectifiers.

---

### 6.8 Half-Wave Rectifier
- Conducts only during positive AC half-cycles, suppressing negative half-cycles, producing pulsating DC. Uses a diode in series with a load and often a transformer for voltage adjustment and safety.
- **Disadvantages:** High ripple (alternating component at 50 Hz), low output power (uses only half the AC cycle), requiring extensive filtering.

---

### 6.9 Output Frequency of Half-Wave Rectifier
- Output frequency equals input frequency (e.g., 50 Hz input = 50 Hz output), as one output pulse occurs per AC cycle.

---

### 6.10 Efficiency of Half-Wave Rectifier
- Efficiency (η) = DC power output / AC power input; max efficiency = 40.6% when diode resistance (r_f) is negligible compared to load resistance (R_L).
- **Example 6.12:** 40 W DC from 100 W AC = 40% efficiency; remaining 60 W is in unused negative half-cycles, not lost in the diode.
- **Example 6.13:** 230 V AC via 10:1 transformer yields 10.36 V DC, PIV = 32.53 V.
- **Example 6.14:** 50 sin(ωt) V input, r_f = 20 Ω, R_L = 800 Ω; I_m = 61 mA, I_dc = 19.4 mA, I_rms = 30.5 mA, P_ac = 0.763 W, P_dc = 0.301 W, V_dc = 15.52 V, η = 39.5%.
- **Example 6.15:** For 50 V DC across 800 Ω with r_f = 25 Ω, AC peak voltage required = 162 V.

---

### 6.11 Full-Wave Rectifier
- Conducts during both AC half-cycles, producing DC using two diodes (centre-tap) or four diodes (bridge), doubling efficiency over half-wave.

---

### 6.12 Centre-Tap Full-Wave Rectifier
- Uses two diodes and a centre-tapped transformer; each diode handles one AC half-cycle, delivering current in the same direction through the load.
- PIV = 2V_m (twice the half-secondary peak voltage).
- **Disadvantages:** Centre-tap complexity, low DC output (half transformer voltage per diode), high PIV requirement.

---

### 6.13 Full-Wave Bridge Rectifier
- Uses four diodes in a bridge, no centre-tap needed; conducts via two diodes per half-cycle, delivering consistent load current direction.
- PIV = V_m (secondary peak voltage).
- **Disadvantage:** Higher voltage drop due to two diodes in series.

---

### 6.14 Output Frequency of Full-Wave Rectifier
- Output frequency = 2 × input frequency (e.g., 50 Hz input = 100 Hz output), as two pulses occur per AC cycle.

---

### 6.15 Efficiency of Full-Wave Rectifier
- Max efficiency = 81.2% (double that of half-wave) when r_f << R_L.
- **Example 6.16:** r_f = 20 Ω, R_L = 980 Ω, V_m = 70.7 V; I_dc = 45 mA, I_rms = 50 mA.
- **Example 6.17:** Ideal diodes, 230 V via 5:1 transformer, R_L = 100 Ω; V_dc = 20.7 V, PIV = 65 V, η = 81.2%.
- **Example 6.18:** 230 V via 4:1 transformer, R_L = 200 Ω; V_dc = 52 V, PIV = 81.3 V, f_out = 100 Hz.
- **Example 6.19:** 230 V, 5:1 ratio; centre-tap V_dc = 20.7 V, PIV = 65 V; bridge V_dc = 41.4 V, PIV = 32.5 V (for same V_dc).
- **Example 6.20:** 240 V RMS, r_f = 1 Ω, R_L = 480 Ω; I_dc = 0.45 A, diode power = 0.123 W.
- **Example 6.21:** 12 V RMS, R_L = 12 kΩ, silicon diodes; V_dc = 9.91 V, I_dc = 825.8 μA.

---

### 6.16 Faults in Centre-Tap Full-Wave Rectifier
- **Transformer Faults:** Shorted windings blow fuse; open windings drop output to zero; frame shorts blow fuse.
- **Diode Faults:** Shorted diode blows fuse; open diode mimics half-wave output.
- Bridge faults are similar but involve more diodes.

---

### 6.17 Nature of Rectifier Output
- Rectifier output is pulsating DC with a DC component (steady) and an AC component (ripple); never negative but varies regularly.

---

### 6.18 Ripple Factor
- Ripple factor = I_ac / I_dc; measures AC component’s magnitude relative to DC.
- Half-wave: 1.21 (high pulsations); full-wave: 0.48 (lower pulsations, more effective).
- **Example 6.22:** Supply A: 10 V DC, 0.5 V ripple (5%); Supply B: 25 V DC, 1 mV ripple (0.004%); B is better.

---

### 6.19 Comparison of Rectifiers
- Half-wave: 1 diode, no transformer, 40.6% η, 1.21 ripple, f_out = f_in, PIV = V_m.
- Centre-tap: 2 diodes, transformer, 81.2% η, 0.48 ripple, f_out = 2f_in, PIV = 2V_m.
- Bridge: 4 diodes, no centre-tap, 81.2% η, 0.48 ripple, f_out = 2f_in, PIV = V_m.
- Bridge is often preferred for performance despite cost.

---

### 6.20 Filter Circuits
- Filters remove AC ripple from rectifier output, allowing DC to reach the load, using capacitors (pass AC, block DC) and inductors (block AC, pass DC).

---

### 6.21 Types of Filter Circuits
- **Capacitor Filter:** Capacitor across load smooths output near peak voltage; simple, cost-effective for small currents.
- **Choke Input Filter:** Choke in series, capacitor across load; choke blocks AC, capacitor shunts residual AC.
- **π-Filter:** Capacitor-choke-capacitor setup; highly effective smoothing.
- **Example 6.23:** 115 V RMS, 10:1 transformer, full-wave, C = 50 μF, R_L = 2.2 kΩ; V_dc = 14.3 V.
- **Example 6.24:** Full-wave, V_m = 25.7 V, choke R = 25 Ω, R_L = 750 Ω; V_dc = 15.9 V.

---

### 6.22 Voltage Multipliers
- Use diodes and capacitors to multiply peak AC voltage (e.g., doubler = 2×V_m); output current decreases proportionally, conserving energy.
