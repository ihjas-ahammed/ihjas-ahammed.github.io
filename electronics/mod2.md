# Semiconductor Diode

## 87 - Peak Inverse Voltage and Reverse Current

### (ii) Peak Inverse Voltage
It is the maximum reverse voltage that a diode can withstand without destroying the junction.

If the reverse voltage across a diode exceeds this value, the reverse current increases sharply and breaks down the junction due to excessive heat. Peak inverse voltage (PIV) is extremely important when a diode is used as a rectifier. In rectifier service, it must be ensured that the reverse voltage across the diode does not exceed its PIV during the negative half-cycle of input a.c. voltage. PIV consideration is generally the deciding factor in diode rectifier circuits. The peak inverse voltage may be between $10 \mathrm{~V}$ and $10 \mathrm{kV}$ depending on the type of diode.

### (iii) Reverse Current or Leakage Current
It is the current that flows through a reverse-biased diode. This current is due to minority carriers. Under normal operating voltages, the reverse current is quite small. Its value is extremely small ($<1 \mu \mathrm{A}$) for silicon diodes but appreciable ($\approx 100 \mu \mathrm{A}$) for germanium diodes.

It may be noted that the reverse current is usually very small compared with forward current. For example, the forward current for a typical diode might range up to $100 \mathrm{~mA}$ while the reverse current might be only a few $\mu \mathrm{A}$—a ratio of many thousands between forward and reverse currents.

## 6.7 Crystal Diode Rectifiers

For reasons associated with economics of generation and transmission, the electric power available is usually an a.c. supply. The supply voltage varies sinusoidally and has a frequency of $50 \mathrm{~Hz}$. It is used for lighting, heating, and electric motors. However, there are many applications (e.g., electronic circuits) where a d.c. supply is needed. When such a d.c. supply is required, the mains a.c. supply is rectified using crystal diodes. The following two rectifier circuits can be used:

(i) Half-wave rectifier  
(ii) Full-wave rectifier

## 6.8 Half-Wave Rectifier

In half-wave rectification, the rectifier conducts current only during the positive half-cycles of the input a.c. supply. The negative half-cycles of the a.c. supply are suppressed, i.e., during negative half-cycles, no current is conducted, and hence no voltage appears across the load. Therefore, current always flows in one direction (i.e., d.c.) through the load, though after every half-cycle.

### Circuit Details
The circuit shows a single crystal diode acting as a half-wave rectifier. The a.c. supply to be rectified is applied in series with the diode and load resistance $ R_L $. Generally, the a.c. supply is given through a transformer. The use of a transformer permits two advantages:

- Firstly, it allows us to step up or step down the a.c. input voltage as the situation demands.
- Secondly, the transformer isolates the rectifier circuit from the power line and thus reduces the risk of electric shock.

### Diagram Description
- A circuit diagram showing an A.C. supply connected to a transformer with two terminals labeled A and B. The transformer's output is connected in series with a crystal diode and a load resistance $ R_L $. The voltage across the transformer ($ V_{in} $) is depicted as a sinusoidal wave varying over time $ t $, with both positive and negative cycles.
- A graph showing the output voltage ($ V_{out} $) across the load resistance $ R_L $ over time $ t $. The graph displays a series of positive half-cycles (peaks) with the negative half-cycles suppressed, resulting in a pulsating direct current (d.c.) waveform.

## 88 - Principles of Electronics

### Operation
The a.c. voltage across the secondary winding AB changes polarities after every half-cycle. During the positive half-cycle of the input a.c. voltage, end A becomes positive with respect to end B. This makes the diode forward-biased, and hence it conducts current. During the negative half-cycle, end A is negative with respect to end B. Under this condition, the diode is reverse-biased and conducts no current. Therefore, current flows through the diode during the positive half-cycles of the input a.c. voltage only; it is blocked during the negative half-cycles. In this way, current flows through the load $ R_L $ always in the same direction. Hence, a d.c. output is obtained across $ R_L $. It may be noted that the output across the load is pulsating d.c. These pulsations in the output are further smoothed with the help of filter circuits discussed later.

### Disadvantages
The main disadvantages of a half-wave rectifier are:

(i) The pulsating current in the load contains an alternating component whose basic frequency is equal to the supply frequency. Therefore, elaborate filtering is required to produce steady direct current.  
(ii) The a.c. supply delivers power only half the time. Therefore, the output is low.

## 6.9 Output Frequency of Half-Wave Rectifier

The output frequency of a half-wave rectifier is equal to the input frequency ($50 \mathrm{~Hz}$). Recall how a complete cycle is defined. A waveform has a complete cycle when it repeats the same wave pattern over a given time. Thus, the a.c. input voltage repeats the same wave pattern over $0^\circ-360^\circ$, $360^\circ-720^\circ$, and so on. The output waveform also repeats the same wave pattern over $0^\circ-360^\circ$, $360^\circ-720^\circ$, and so on. This means that when the input a.c. completes one cycle, the output half-wave rectified wave also completes one cycle. In other words, the output frequency is equal to the input frequency, i.e.,

$$
f_{\text{out}} = f_{\text{in}}
$$

For example, if the input frequency of a sine wave applied to a half-wave rectifier is $100 \mathrm{~Hz}$, then the frequency of the output wave will also be $100 \mathrm{~Hz}$.

## 6.10 Efficiency of Half-Wave Rectifier

The ratio of d.c. power output to the applied input a.c. power is known as rectifier efficiency, i.e.,

$$
\text{Rectifier efficiency, } \eta = \frac{\text{d.c. power output}}{\text{Input a.c. power}}
$$

Consider a half-wave rectifier. Let $ v = V_m \sin \theta $ be the alternating voltage that appears across the secondary winding. Let $ r_f $ and $ R_L $ be the diode resistance and load resistance, respectively. The diode conducts during the positive half-cycles of the a.c. supply while no current conduction takes place during negative half-cycles.

### d.c. Power
The output current is pulsating direct current. Therefore, to find d.c. power, the average current must be found out.

$$
I_{av} = I_{dc} = \frac{1}{2\pi} \int_0^\pi i \, d\theta = \frac{1}{2\pi} \int_0^\pi \frac{V_m \sin \theta}{r_f + R_L} \, d\theta = \frac{V_m}{2\pi (r_f + R_L)} \int_0^\pi \sin \theta \, d\theta = \frac{V_m}{2\pi (r_f + R_L)} [-\cos \theta]_0^\pi = \frac{V_m}{2\pi (r_f + R_L)} \times 2 = \frac{V_m}{\pi (r_f + R_L)} = \frac{I_m}{\pi}
$$

\[
\left[ \because I_m = \frac{V_m}{r_f + R_L} \right]
\]

$$
\therefore \quad \text{d.c. power, } P_{dc} = I_{dc}^2 \times R_L = \left( \frac{I_m}{\pi} \right)^2 \times R_L
$$

### a.c. Power Input
The a.c. power input is given by:

$$
P_{ac} = I_{rms}^2 (r_f + R_L)
$$

For a half-wave rectified wave, $ I_{rms} = I_m / 2 $

$$
\therefore \quad P_{ac} = \left( \frac{I_m}{2} \right)^2 \times (r_f + R_L)
$$

$$
\therefore \quad \text{Rectifier efficiency} = \frac{\text{d.c. output power}}{\text{a.c. input power}} = \frac{(I_m / \pi)^2 \times R_L}{(I_m / 2)^2 (r_f + R_L)} = \frac{0.406 R_L}{r_f + R_L} = \frac{0.406}{1 + \frac{r_f}{R_L}}
$$

The efficiency will be maximum if $ r_f $ is negligible compared to $ R_L $.

$$
\therefore \quad \text{Max. rectifier efficiency} = 40.6\%
$$

This shows that in half-wave rectification, a maximum of $40.6\%$ of a.c. power is converted into d.c. power.

### Example 6.12
The applied input a.c. power to a half-wave rectifier is 100 watts. The d.c. output power obtained is 40 watts.

(i) What is the rectification efficiency?  
(ii) What happens to the remaining 60 watts?

#### Solution
(i) Rectification efficiency = $\frac{\text{d.c. output power}}{\text{a.c. input power}} = \frac{40}{100} = 0.4 = 40\%$  

(ii) $40\%$ efficiency of rectification does not mean that $60\%$ of power is lost in the rectifier circuit. In fact, a crystal diode consumes little power due to its small internal resistance. The 100 W a.c. power is contained as 50 watts in positive half-cycles and 50 watts in negative half-cycles. The 50 watts in the negative half-cycles are not supplied at all. Only 50 watts in the positive half-cycles are converted into 40 watts d.c. power.

$$
\therefore \quad \text{Power efficiency} = \frac{40}{50} \times 100 = 80\%
$$

Although 100 watts of a.c. power was supplied, the half-wave rectifier accepted only 50 watts and converted it into 40 watts d.c. power. Therefore, it is appropriate to say that the efficiency of rectification is $40\%$ and not $80\%$, which is power efficiency.

### Example 6.13
An a.c. supply of 230 V is applied to a half-wave rectifier circuit through a transformer of turn ratio 10:1. Find (i) the output d.c. voltage and (ii) the peak inverse voltage. Assume the diode to be ideal.

#### Solution
Primary to secondary turns is $ \frac{N_1}{N_2} = 10 $

R.M.S. primary voltage = 230 V

$$
\therefore \quad \text{Max. primary voltage, } V_{prm} = (\sqrt{2}) \times \text{r.m.s. primary voltage} = (\sqrt{2}) \times 230 = 325.3 \mathrm{~V}
$$

Max. secondary voltage is

$$
V_{sm} = V_{prm} \times \frac{N_2}{N_1} = 325.3 \times \frac{1}{10} = 32.53 \mathrm{~V}
$$

$$
I_{dc} = \frac{I_m}{\pi}
$$

$$
\therefore \quad I_{dc} = \frac{V_{sm}}{\pi} = \frac{32.53}{\pi} = 10.36 \mathrm{~V}
$$

(ii) During the negative half-cycle of the a.c. supply, the diode is reverse-biased and hence conducts no current. Therefore, the maximum secondary voltage appears across the diode.

$$
\therefore \text{Peak inverse voltage} = 32.53 \mathrm{~V}
$$

### Example 6.14
A crystal diode having internal resistance $ r_f = 20 \Omega $ is used for half-wave rectification. If the applied voltage $ v = 50 \sin \omega t $ and load resistance $ R_L = 800 \Omega $, find:

(i) $ I_m $, $ I_{dc} $, $ I_{rms} $  
(ii) a.c. power input and d.c. power output  
(iii) d.c. output voltage  
(iv) efficiency of rectification.

#### Solution

$$
v = 50 \sin \omega t
$$

$$
\therefore \quad \text{Maximum voltage, } V_m = 50 \mathrm{~V}
$$

$$
I_m = \frac{V_m}{r_f + R_L} = \frac{50}{20 + 800} = 0.061 \mathrm{~A} = 61 \mathrm{~mA}
$$

$$
I_{dc} = I_m / \pi = 61 / \pi = 19.4 \mathrm{~mA}
$$

$$
I_{rms} = I_m / 2 = 61 / 2 = 30.5 \mathrm{~mA}
$$

(i) a.c. power input = $ (I_{rms})^2 \times (r_f + R_L) = (30.5 / 1000)^2 \times (20 + 800) = 0.763 \mathrm{~W} $

d.c. power output = $ I_{dc}^2 \times R_L = (19.4 / 1000)^2 \times 800 = 0.301 \mathrm{~W} $

(iii) d.c. output voltage = $ I_{dc} R_L = 19.4 \mathrm{~mA} \times 800 \Omega = 15.52 \mathrm{~V} $

(iv) Efficiency of rectification = $ \frac{0.301}{0.763} \times 100 = 39.5\% $

### Example 6.15
A half-wave rectifier is used to supply 50 V d.c. to a resistive load of 800 Ω. The diode has a resistance of 25 Ω. Calculate the a.c. voltage required.

#### Solution
Output d.c. voltage, $ V_{dc} = 50 \mathrm{~V} $

Diode resistance, $ r_f = 25 \Omega $

Load resistance, $ R_L = 800 \Omega $

Let $ V_m $ be the maximum value of the a.c. voltage required.

$$
\therefore \quad V_{dc} = I_{dc} \times R_L
$$

$$
= \frac{I_m}{\pi} \times R_L = \frac{V_m}{\pi (r_f + R_L)} \times R_L \quad \left[ \because I_m = \frac{V_m}{r_f + R_L} \right]
$$

$$
\text{or } 50 = \frac{V_m}{\pi (25 + 800)} \times 800
$$

$$
\therefore \quad V_m = \frac{\pi \times 825 \times 50}{800} = 162 \mathrm{~V}
$$

Hence, an a.c. voltage of maximum value 162 V is required.

## 6.11 Full-Wave Rectifier

In full-wave rectification, current flows through the load in the same direction for both half-cycles of the input a.c. voltage. This can be achieved with two diodes working alternately. For the positive half-cycle of the input voltage, one diode supplies current to the load, and for the negative half-cycle, the other diode does so; current being always in the same direction through the load. Therefore, a full-wave rectifier utilizes both half-cycles of the input a.c. voltage to produce the d.c. output. The following two circuits are commonly used for full-wave rectification:

(i) Centre-tap full-wave rectifier  
(ii) Full-wave bridge rectifier

## 6.12 Centre-Tap Full-Wave Rectifier

The circuit employs two diodes $ D_1 $ and $ D_2 $ as shown. A centre-tapped secondary winding AB is used with two diodes connected so that each uses one half-cycle of the input a.c. voltage. In other words, diode $ D_1 $ utilizes the a.c. voltage appearing across the upper half (OA) of the secondary winding for rectification, while diode $ D_2 $ uses the lower half winding OB.

### Operation
During the positive half-cycle of the secondary voltage, the end A of the secondary winding becomes positive, and end B negative. This makes diode $ D_1 $ forward-biased and diode $ D_2 $ reverse-biased. Therefore, diode $ D_1 $ conducts while diode $ D_2 $ does not. The conventional current flow is through diode $ D_1 $, load resistor $ R_L $, and the upper half of the secondary winding, as shown by dotted arrows. During the negative half-cycle, end A of the secondary winding becomes negative, and end B positive. Therefore, diode $ D_2 $ conducts while diode $ D_1 $ does not. The conventional current flow is through diode $ D_2 $, load $ R_L $, and the lower half winding, as shown by solid arrows. It may be seen that the current in the load $ R_L $ is in the same direction for both half-cycles of the input a.c. voltage. Therefore, d.c. is obtained across the load $ R_L $. Also, the polarities of the d.c. output across the load should be noted.

### Diagram Description
- A circuit diagram showing a centre-tapped transformer with secondary winding AB and a centre tap at point O. Two diodes, $ D_1 $ and $ D_2 $, are connected such that $ D_1 $ is between point A and the load $ R_L $, and $ D_2 $ is between point B and $ R_L $, with the other end of $ R_L $ connected back to the centre tap O. Dotted arrows indicate current flow during the positive half-cycle (through $ D_1 $), and solid arrows indicate current flow during the negative half-cycle (through $ D_2 $).
- Another circuit diagram at the instant the secondary voltage reaches its maximum value in the positive direction, showing diode $ D_1 $ conducting and diode $ D_2 $ non-conducting, with the entire secondary voltage appearing across the non-conducting diode.

### Peak Inverse Voltage
Suppose $ V_m $ is the maximum voltage across the half-secondary winding. The circuit at the instant the secondary voltage reaches its maximum value in the positive direction shows diode $ D_1 $ conducting while diode $ D_2 $ is non-conducting. Therefore, the entire secondary voltage appears across the non-conducting diode. Consequently, the peak inverse voltage is twice the maximum voltage across the half-secondary winding, i.e.,

$$
\text{PIV} = 2 V_m
$$

### Disadvantages
(i) It is difficult to locate the centre tap on the secondary winding.  
(ii) The d.c. output is small as each diode utilizes only one-half of the transformer secondary voltage.  
(iii) The diodes used must have a high peak inverse voltage.

## 6.13 Full-Wave Bridge Rectifier

The need for a centre-tapped power transformer is eliminated in the bridge rectifier. It contains four diodes $ D_1 $, $ D_2 $, $ D_3 $, and $ D_4 $ connected to form a bridge, as shown. The a.c. supply to be rectified is applied to the diagonally opposite ends of the bridge through the transformer. Between the other two ends of the bridge, the load resistance $ R_L $ is connected.

### Operation
During the positive half-cycle of the secondary voltage, end P of the secondary winding becomes positive, and end Q negative. This makes diodes $ D_1 $ and $ D_3 $ forward-biased, while diodes $ D_2 $ and $ D_4 $ are reverse-biased. Therefore, only diodes $ D_1 $ and $ D_3 $ conduct. These two diodes are in series through the load $ R_L $, as shown. The conventional current flow is shown by dotted arrows. It may be seen that current flows from A to B through the load $ R_L $.

During the negative half-cycle of the secondary voltage, end P becomes negative, and end Q positive. This makes diodes $ D_2 $ and $ D_4 $ forward-biased, whereas diodes $ D_1 $ and $ D_3 $ are reverse-biased. Therefore, only diodes $ D_2 $ and $ D_4 $ conduct. These two diodes are in series through the load $ R_L $, as shown. The current flow is shown by solid arrows. It may be seen that again current flows from A to B through the load, i.e., in the same direction as for the positive half-cycle. Therefore, a d.c. output is obtained across load $ R_L $.

### Diagram Description
- A circuit diagram showing four diodes $ D_1 $, $ D_2 $, $ D_3 $, and $ D_4 $ arranged in a bridge configuration, with the a.c. supply connected to points P and Q (diagonally opposite ends), and the load resistance $ R_L $ connected between points A and B (the other diagonally opposite ends). Dotted arrows indicate current flow during the positive half-cycle (through $ D_1 $ and $ D_3 $), and solid arrows indicate current flow during the negative half-cycle (through $ D_2 $ and $ D_4 $).
- Another circuit diagram where, during the positive half-cycle, diodes $ D_1 $ and $ D_3 $ are forward-biased and can be replaced by wires, showing the a.c. supply voltage across the load and the reverse-biased diodes $ D_2 $ and $ D_4 $.

### Peak Inverse Voltage
The peak inverse voltage (PIV) of each diode is equal to the maximum secondary voltage of the transformer. Suppose during the positive half-cycle of the input a.c., end P of the secondary is positive, and end Q is negative. Under such conditions, diodes $ D_1 $ and $ D_3 $ are forward-biased, while diodes $ D_2 $ and $ D_4 $ are reverse-biased. Since the diodes are considered ideal, diodes $ D_1 $ and $ D_3 $ can be replaced by wires. This circuit shows that the PIV of each reverse-biased diode is equal to the maximum secondary voltage.

$$
\text{PIV} = V_m
$$

### Disadvantages
(i) As during each half-cycle of a.c. input, two diodes that conduct are in series; therefore, the voltage drop in the internal resistance of the rectifying unit will be twice as great as in the centre-tap circuit. This is objectionable when the secondary voltage is small.

## 6.14 Output Frequency of Full-Wave Rectifier

The output frequency of a full-wave rectifier is double the input frequency. Remember that a wave has a complete cycle when it repeats the same pattern. The input a.c. completes one cycle from $0^\circ-360^\circ$. However, the full-wave rectified wave completes 2 cycles in this period. Therefore, the output frequency is twice the input frequency, i.e.,

$$
f_{\text{out}} = 2 f_{\text{in}}
$$

For example, if the input frequency to a full-wave rectifier is $100 \mathrm{~Hz}$, then the output frequency will be $200 \mathrm{~Hz}$.

### Diagram Description
- A graph showing the input a.c. voltage as a sinusoidal wave completing one cycle from $0^\circ-360^\circ$.
- A graph showing the full-wave rectified output waveform, which completes two cycles in the same period ($0^\circ-360^\circ$), with positive peaks occurring at both the positive and negative half-cycles of the input.

## 6.15 Efficiency of Full-Wave Rectifier

The process of full-wave rectification is shown. Let $ v = V_m \sin \theta $ be the a.c. voltage to be rectified. Let $ r_f $ and $ R_L $ be the diode resistance and load resistance, respectively. Obviously, the rectifier will conduct current through the load in the same direction for both half-cycles of the input a.c. voltage. The instantaneous current $ i $ is given by:

$$
i = \frac{v}{r_f + R_L} = \frac{V_m \sin \theta}{r_f + R_L}
$$

### d.c. Output Power
The output current is pulsating direct current. Therefore, to find the d.c. power, the average current must be found out. From elementary knowledge of electrical engineering,

$$
I_{dc} = \frac{2 I_m}{\pi}
$$

$$
\therefore \quad \text{d.c. power output, } P_{dc} = I_{dc}^2 \times R_L = \left( \frac{2 I_m}{\pi} \right)^2 \times R_L
$$

### a.c. Input Power
The a.c. input power is given by:

$$
P_{ac} = I_{rms}^2 (r_f + R_L)
$$

For a full-wave rectified wave, we have,

$$
I_{rms} = \frac{I_m}{\sqrt{2}}
$$

$$
P_{ac} = \left( \frac{I_m}{\sqrt{2}} \right)^2 (r_f + R_L)
$$

$$
\therefore \quad \text{Full-wave rectification efficiency is}
$$

$$
\eta = \frac{P_{dc}}{P_{ac}} = \frac{(2 I_m / \pi)^2 R_L}{(\frac{I_m}{\sqrt{2}})^2 (r_f + R_L)} = \frac{8}{\pi^2} \times \frac{R_L}{r_f + R_L} = \frac{0.812 R_L}{r_f + R_L} = \frac{0.812}{1 + \frac{r_f}{R_L}}
$$

The efficiency will be maximum if $ r_f $ is negligible compared to $ R_L $.

$$
\therefore \quad \text{Maximum efficiency} = 81.2\%
$$

This is double the efficiency due to a half-wave rectifier. Therefore, a full-wave rectifier is twice as effective as a half-wave rectifier.

### Example 6.16
A full-wave rectifier uses two diodes; the internal resistance of each diode may be assumed constant at 20 Ω. The transformer r.m.s. secondary voltage from centre tap to each end of the secondary is 50 V, and the load resistance is 980 Ω. Find:

(i) the mean load current  
(ii) the r.m.s. value of load current

#### Solution

$$
r_f = 20 \Omega, \quad R_L = 980 \Omega
$$

Max. a.c. voltage, $ V_m = 50 \times \sqrt{2} = 70.7 \mathrm{~V} $

Max. load current, $ I_m = \frac{V_m}{r_f + R_L} = \frac{70.7}{(20 + 980)} = 70.7 \mathrm{~mA} $

(i) Mean load current, $ I_{dc} = \frac{2 I_m}{\pi} = \frac{2 \times 70.7}{\pi} = 45 \mathrm{~mA} $

(ii) R.M.S. value of load current is

$$
I_{rms} = \frac{I_m}{\sqrt{2}} = \frac{70.7}{\sqrt{2}} = 50 \mathrm{~mA}
$$

### Example 6.17
In the centre-tap circuit, the diodes are assumed to be ideal, i.e., having zero internal resistance. Find:

(i) d.c. output voltage  
(ii) peak inverse voltage (iii) rectification efficiency.

#### Solution
Primary to secondary turns, $ N_1 / N_2 = 5 $

R.M.S. primary voltage = 230 V

$$
\therefore \text{R.M.S. secondary voltage} = 230 \times (1 / 5) = 46 \mathrm{~V}
$$

Maximum voltage across secondary = $ 46 \times \sqrt{2} = 65 \mathrm{~V} $

Maximum voltage across half-secondary winding is

$$
V_m = 65 / 2 = 32.5 \mathrm{~V}
$$

$$
I_{dc} = \frac{2 V_m}{\pi R_L}
$$

Assuming $ R_L = 100 \Omega $ (as implied in the context),

$$
I_{dc} = \frac{2 \times 32.5}{\pi \times 100} = 0.207 \mathrm{~A}
$$

$$
\therefore \quad \text{d.c. output voltage, } V_{dc} = I_{dc} \times R_L = 0.207 \times 100 = 20.7 \mathrm{~V}
$$

(ii) The peak inverse voltage is equal to the maximum secondary voltage, i.e.,

$$
\text{PIV} = 65 \mathrm{~V}
$$

(iii) Rectification efficiency = $ \frac{0.812}{1 + \frac{r_f}{R_L}} $

Since $ r_f = 0 $

$$
\therefore \quad \text{Rectification efficiency} = 81.2\%
$$

### Example 6.18
In the bridge-type circuit, the diodes are assumed to be ideal. Find:

(i) d.c. output voltage  
(ii) peak inverse voltage  
(iii) output frequency.

Assume primary to secondary turns to be 4.

#### Solution
Primary/secondary turns, $ N_1 / N_2 = 4 $

R.M.S. primary voltage = 230 V

$$
\therefore \text{R.M.S. secondary voltage} = 230 \times (1 / 4) = 57.5 \mathrm{~V}
$$

Maximum voltage across secondary is

$$
V_m = 57.5 \times \sqrt{2} = 81.3 \mathrm{~V}
$$

(i) Average current, $ I_{dc} = \frac{2 V_m}{\pi R_L} $

Assuming $ R_L = 200 \Omega $ (as implied in the context),

$$
I_{dc} = \frac{2 \times 81.3}{\pi \times 200} = 0.26 \mathrm{~A}
$$

$$
\therefore \quad \text{d.c. output voltage, } V_{dc} = I_{dc} \times R_L = 0.26 \times 200 = 52 \mathrm{~V}
$$

(ii) The peak inverse voltage is equal to the maximum secondary voltage, i.e.,

$$
\text{PIV} = 81.3 \mathrm{~V}
$$

(iii) In full-wave rectification, there are two output pulses for each complete cycle of the input a.c. voltage. Therefore, the output frequency is twice that of the a.c. supply frequency, i.e.,

$$
f_{\text{out}} = 2 \times f_{\text{in}} = 2 \times 50 = 100 \mathrm{~Hz}
$$

### Example 6.19
Fig. 6.33 (i) and (ii) show the centre-tap and bridge-type circuits having the same load resistance and transformer turn ratio. The primary of each is connected to a 230 V, 50 Hz supply.

(i) Find the d.c. voltage in each case.  
(ii) PIV for each case for the same d.c. output. Assume the diodes to be ideal.

#### Solution
(i) **D.C. Output Voltage**

**Centre-tap circuit**  
R.M.S. secondary voltage = $ 230 \times 1 / 5 = 46 \mathrm{~V} $

Max. voltage across secondary = $ 46 \times \sqrt{2} = 65 \mathrm{~V} $

Max. voltage appearing across half-secondary winding is

$$
V_m = 65 / 2 = 32.5 \mathrm{~V}
$$

Average current, $ I_{dc} = \frac{2 V_m}{\pi R_L} $

D.C. output voltage, $ V_{dc} = I_{dc} \times R_L = \frac{2 V_m}{\pi R_L} \times R_L = \frac{2 V_m}{\pi} = \frac{2 \times 32.5}{\pi} = 20.7 \mathrm{~V} $

**Bridge Circuit**  
Max. voltage across secondary, $ V_m = 65 \mathrm{~V} $

D.C. output voltage, $ V_{dc} = I_{dc} R_L = \frac{2 V_m}{\pi R_L} \times R_L = \frac{2 V_m}{\pi} = \frac{2 \times 65}{\pi} = 41.4 \mathrm{~V} $

This shows that for the same secondary voltage, the d.c. output voltage of the bridge circuit is twice that of the centre-tap circuit.

(ii) **PIV for Same D.C. Output Voltage**  
The d.c. output voltage of the two circuits will be the same if $ V_m $ (i.e., max. voltage utilized by each circuit for conversion into d.c.) is the same. For this to happen, the turn ratio of the transformers should be adjusted.

**Centre-tap circuit**  
R.M.S. secondary voltage = $ 230 \times 1 / 5 = 46 \mathrm{~V} $

Max. voltage across secondary = $ 46 \times \sqrt{2} = 65 \mathrm{~V} $

Max. voltage across half-secondary winding is

$$
V_m = 65 / 2 = 32.5 \mathrm{~V}
$$

$$
\text{PIV} = 2 V_m = 2 \times 32.5 = 65 \mathrm{~V}
$$

**Bridge-type circuit**  
R.M.S. secondary voltage = $ 230 \times 1 / 10 = 23 \mathrm{~V} $

Max. voltage across secondary, $ V_m = 23 \times \sqrt{2} = 32.5 \mathrm{~V} $

$$
\therefore \quad \text{PIV} = V_m = 32.5 \mathrm{~V}
$$

This shows that for the same d.c. output voltage, the PIV of the bridge circuit is half that of the centre-tap circuit. This is a distinct advantage of the bridge circuit.

### Example 6.20
The four diodes used in a bridge rectifier circuit have forward resistances, which may be considered constant at 1 Ω, and infinite reverse resistance. The alternating supply voltage is 240 V r.m.s., and the load resistance is 480 Ω. Calculate:

(i) mean load current  
(ii) power dissipated in each diode.

#### Solution
Max. a.c. voltage, $ V_m = 240 \times \sqrt{2} \mathrm{~V} $

(i) At any instant in the bridge rectifier, two diodes in series are conducting. Therefore, the total circuit resistance = $ 2 r_f + R_L $.

Max. load current, $ I_m = \frac{V_m}{2 r_f + R_L} = \frac{240 \times \sqrt{2}}{2 \times 1 + 480} = 0.7 \mathrm{~A} $

$$
\therefore \quad \text{Mean load current, } I_{dc} = \frac{2 I_m}{\pi} = \frac{2 \times 0.7}{\pi} = 0.45 \mathrm{~A}
$$

(ii) Since each diode conducts only half a cycle, the diode r.m.s. current is:

$$
I_{d,rms} = I_m / 2 = 0.7 / 2 = 0.35 \mathrm{~A}
$$

Power dissipated in each diode = $ I_{d,rms}^2 \times r_f = (0.35)^2 \times 1 = 0.123 \mathrm{~W} $

### Example 6.21
The bridge rectifier shown uses silicon diodes. Find:

(i) d.c. output voltage  
(ii) d.c. output current. Use a simplified model for the diodes.

#### Solution
The conditions of the problem suggest that the a.c. voltage across the transformer secondary is 12 V r.m.s.

$$
\therefore \text{Peak secondary voltage, } V_{s(pk)} = 12 \times \sqrt{2} = 16.97 \mathrm{~V}
$$

(i) At any instant in the bridge rectifier, two diodes in series are conducting.

$$
\therefore \text{Peak output voltage, } V_{out(pk)} = 16.97 - 2(0.7) = 15.57 \mathrm{~V}
$$

$$
\therefore \text{Average (or d.c.) output voltage, } V_{av} = V_{dc} = \frac{2 V_{out(pk)}}{\pi} = \frac{2 \times 15.57}{\pi} = 9.91 \mathrm{~V}
$$

(ii) Average (or d.c.) output current is

$$
I_{av} = \frac{V_{av}}{R_L} = \frac{9.91 \mathrm{~V}}{12 \mathrm{k}\Omega} = 825.8 \mu \mathrm{A}
$$

## 6.16 Faults in Centre-Tap Full-Wave Rectifier

The faults in a centre-tap full-wave rectifier may occur in the transformer or rectifier diodes. A circuit diagram shows the circuit of a centre-tap full-wave rectifier with a fuse connected in the primary of the transformer for protection purposes.

We can divide the rectifier faults into two classes:

1. Faults in the transformer  
2. Faults in the rectifier diodes

### 1. Faults in Transformer
The transformer in a rectifier circuit can develop the following faults:

(i) A shorted primary or secondary winding.  
(ii) An open primary or secondary winding.  
(iii) A short between the primary or secondary winding and the transformer frame.

(i) In most cases, a shorted primary or shorted secondary will cause the fuse in the primary to blow. If the fuse does not blow, the d.c. output from the rectifier will be extremely low, and the transformer itself will be very hot.  
(ii) When the primary or secondary winding of the transformer opens, the output from the rectifier will drop to zero. In this case, the primary fuse will not blow. If you believe either transformer winding is open, a simple resistance check will verify your doubt. If either winding reads a very high resistance, the winding is open.  
(iii) If either winding shorts to the transformer casing, the primary fuse will blow. This fault can be checked by measuring the resistances from the winding leads to the transformer casing. A low resistance measurement indicates that a winding-to-case short exists.

### 2. Faults in Rectifier Diodes
If a fault occurs in a rectifier diode, the circuit conditions will indicate the type of fault.

(i) If one diode in the centre-tap full-wave rectifier is shorted, the primary fuse will blow. Suppose diode $ D_2 $ is shorted. Then diode $ D_2 $ will behave as a wire. When diode $ D_1 $ is forward-biased, the transformer secondary will be shorted through $ D_1 $. This will cause excessive current to flow in the secondary (and hence in the primary), causing the primary fuse to blow.  
(ii) If one diode in the centre-tap full-wave rectifier opens, the output from the rectifier will resemble the output from a half-wave rectifier. The remedy is to replace the diode.

### Bridge Rectifier Faults
The transformer faults and their remedies for bridge rectifier circuits are the same as for the centre-tap full-wave rectifier. The symptoms for shorted and open diodes in the bridge rectifier are the same as those for the centre-tap circuit. In the case of the bridge circuit, you simply have more diodes that need to be tested.

## 6.17 Nature of Rectifier Output

It has already been discussed that the output of a rectifier is pulsating d.c., as shown. In fact, if such a waveform is carefully analyzed, it will be found that it contains a d.c. component and an a.c. component. The a.c. component is responsible for the pulsations in the wave. The reader may wonder how a pulsating d.c. voltage can have an a.c. component when the voltage never becomes negative. The answer is that any wave that varies in a regular manner has an a.c. component.

### Diagram Description
- A graph showing the output of a rectifier as a pulsating d.c. waveform, with positive peaks occurring at regular intervals, but never becoming negative, indicating pulsations due to the a.c. component.
- Another set of graphs showing: (i) a pure d.c. component as a flat, constant line, (ii) an a.c. component as a sinusoidal wave, and (iii) the sum of these two waves, resulting in a pulsating d.c. waveform that never becomes negative but contains both a.c. and d.c. components.

It follows, therefore, that a pulsating output of a rectifier contains a d.c. component and an a.c. component.

## 6.18 Ripple Factor

The output of a rectifier consists of a d.c. component and an a.c. component (also known as ripple). The a.c. component is undesirable and accounts for the pulsations in the rectifier output. The effectiveness of a rectifier depends on the magnitude of the a.c. component in the output; the smaller this component, the more effective the rectifier.

The ratio of the r.m.s. value of the a.c. component to the d.c. component in the rectifier output is known as the ripple factor, i.e.,

$$
\text{Ripple factor} = \frac{\text{r.m.s. value of a.c. component}}{\text{value of d.c. component}} = \frac{I_{ac}}{I_{dc}}
$$

Therefore, the ripple factor is very important in deciding the effectiveness of a rectifier. The smaller the ripple factor, the lesser the effective a.c. component, and hence the more effective the rectifier.

### Mathematical Analysis
The output current of a rectifier contains d.c. as well as an a.c. component. The undesired a.c. component has a frequency of 100 Hz (i.e., double the supply frequency 50 Hz) and is called the ripple. It is a fluctuation superimposed on the d.c. component.

### Diagram Description
- A graph showing the rectifier output as a pulsating d.c. waveform with a d.c. component and an a.c. (ripple) component superimposed, indicating fluctuations at a frequency of 100 Hz.

By definition, the effective (i.e., r.m.s.) value of the total load current is given by:

$$
I_{rms} = \sqrt{I_{dc}^2 + I_{ac}^2}
$$

$$
I_{ac} = \sqrt{I_{rms}^2 - I_{dc}^2}
$$

Dividing throughout by $ I_{dc} $, we get,

$$
\frac{I_{ac}}{I_{dc}} = \frac{1}{I_{dc}} \sqrt{I_{rms}^2 - I_{dc}^2}
$$

But $ I_{ac} / I_{dc} $ is the ripple factor.

$$
\therefore \quad \text{Ripple factor} = \frac{1}{I_{dc}} \sqrt{I_{rms}^2 - I_{dc}^2} = \sqrt{\left( \frac{I_{rms}}{I_{dc}} \right)^2 - 1}
$$

(i) **For Half-Wave Rectification**  
In half-wave rectification,

$$
I_{rms} = I_m / 2 \quad ; \quad I_{dc} = I_m / \pi
$$

$$
\therefore \quad \text{Ripple factor} = \sqrt{\left( \frac{I_m / 2}{I_m / \pi} \right)^2 - 1} = 1.21
$$

It is clear that the a.c. component exceeds the d.c. component in the output of a half-wave rectifier. This results in greater pulsations in the output. Therefore, a half-wave rectifier is ineffective for converting a.c. into d.c.

(ii) **For Full-Wave Rectification**  
In full-wave rectification,

$$
I_{rms} = \frac{I_m}{\sqrt{2}} \quad ; \quad I_{dc} = \frac{2 I_m}{\pi}
$$

$$
\therefore \quad \text{Ripple factor} = \sqrt{\left( \frac{I_m / \sqrt{2}}{2 I_m / \pi} \right)^2 - 1} = 0.48
$$

i.e., $ \frac{\text{effective a.c. component}}{\text{d.c. component}} = 0.48 $

This shows that in the output of a full-wave rectifier, the d.c. component is more than the a.c. component. Consequently, the pulsations in the output will be less than in a half-wave rectifier. For this reason, full-wave rectification is invariably used for converting a.c. into d.c.

### Example 6.22
A power supply A delivers 10 V d.c. with a ripple of 0.5 V r.m.s., while power supply B delivers 25 V d.c. with a ripple of 1 mV r.m.s. Which is the better power supply?

#### Solution
The lower the ripple factor of a power supply, the better it is.

For power supply A,

$$
\text{Ripple factor} = \frac{V_{ac(r.m.s.)}}{V_{dc}} = \frac{0.5}{10} \times 100 = 5\%
$$

For power supply B,

$$
\text{Ripple factor} = \frac{V_{ac(r.m.s.)}}{V_{dc}} = \frac{0.001}{25} \times 100 = 0.004\%
$$

Clearly, power supply B is better.

## 6.19 Comparison of Rectifiers

| S. No. | Particulars                | Half-wave       | Centre-tap       | Bridge type       |
|--------|----------------------------|-----------------|------------------|-------------------|
| 1      | No. of diodes              | 1              | 2               | 4                |
| 2      | Transformer necessary      | No             | Yes             | No               |
| 3      | Max. efficiency            | 40.6%          | 81.2%           | 81.2%            |
| 4      | Ripple factor              | 1.21           | 0.48            | 0.48             |
| 5      | Output frequency           | $ f_{in} $      | $ 2 f_{in} $     | $ 2 f_{in} $      |
| 6      | Peak inverse voltage       | $ V_m $         | $ 2 V_m $        | $ V_m $           |

### Typical Output Waveform
- **Half-wave**: A graph showing a series of positive half-cycles with negative half-cycles suppressed, resulting in a pulsating d.c. waveform at the input frequency.
- **Full-wave Centre-tap and Bridge**: A graph showing a continuous series of positive peaks for both half-cycles of the input, resulting in a pulsating d.c. waveform at twice the input frequency.

A comparison among the three rectifier circuits must be made very judiciously. Although the bridge circuit has some disadvantages, it is the best circuit from the viewpoint of overall performance. When the cost of the transformer is the main consideration in a rectifier assembly, we invariably use the bridge circuit. This is particularly true for large rectifiers, which have a low-voltage and high-current rating.

## 6.20 Filter Circuits

Generally, a rectifier is required to produce a pure d.c. supply for use at various places in electronic circuits. However, the output of a rectifier has a pulsating character, i.e., it contains a.c. and d.c. components. The a.c. component is undesirable and must be kept away from the load. To do so, a filter circuit is used, which removes (or filters out) the a.c. component and allows only the d.c. component to reach the load.

A filter circuit is a device that removes the a.c. component of the rectifier output but allows the d.c. component to reach the load.

Obviously, a filter circuit should be installed between the rectifier and the load, as shown. A filter circuit is generally a combination of inductors ($ L $) and capacitors ($ C $). The filtering action of $ L $ and $ C $ depends on basic electrical principles. A capacitor passes a.c. readily but does not pass d.c. at all. On the other hand, an inductor opposes a.c. but allows d.c. to pass through it. It then becomes clear that a suitable network of $ L $ and $ C $ can effectively remove the a.c. component, allowing the d.c. component to reach the load.

### Diagram Description
- A block diagram showing a rectifier output connected to a filter circuit, which is then connected to a load, with the filter circuit labeled as a combination of inductors and capacitors.

## 6.21 Types of Filter Circuits

The most commonly used filter circuits are the capacitor filter, choke input filter, and capacitor input filter or π-filter. We shall discuss these filters in turn.

### (i) Capacitor Filter
A typical capacitor filter circuit consists of a capacitor $ C $ placed across the rectifier output in parallel with the load $ R_L $. The pulsating direct voltage of the rectifier is applied across the capacitor. As the rectifier voltage increases, it charges the capacitor and also supplies current to the load. At the end of the quarter cycle, the capacitor is charged to the peak value $ V_m $ of the rectifier voltage. Now, the rectifier voltage starts to decrease. As this occurs, the capacitor discharges through the load, and the voltage across it (i.e., across the parallel combination of $ R-C $) decreases. The voltage across the load will decrease only slightly because immediately the next voltage peak comes and recharges the capacitor. This process is repeated again and again, and the output voltage waveform becomes a smoothed version with very little ripple left in the output. Moreover, the output voltage is higher as it remains substantially near the peak value of the rectifier output voltage.

### Diagram Description
- A circuit diagram showing a rectifier output connected to a capacitor $ C $ in parallel with a load resistance $ R_L $.
- A graph showing the rectifier output as a pulsating d.c. waveform, and after the capacitor filter, the output becomes a smoother d.c. waveform with reduced ripple, staying close to the peak value $ V_m $.

The capacitor filter circuit is extremely popular because of its low cost, small size, little weight, and good characteristics. For small load currents (say up to 50 mA), this type of filter is preferred. It is commonly used in transistor radio battery eliminators.

### (ii) Choke Input Filter
A typical choke input filter circuit consists of a choke $ L $ connected in series with the rectifier output and a filter capacitor $ C $ across the load. Only a single filter section is shown, but several identical sections are often used to reduce pulsations as effectively as possible.

The pulsating output of the rectifier is applied across the input terminals of the filter circuit. As discussed before, the pulsating output of the rectifier contains a.c. and d.c. components. The choke offers high opposition to the passage of the a.c. component but negligible opposition to the d.c. component. The result is that most of the a.c. component appears across the choke while the entire d.c. component passes through the choke on its way to the load. This results in reduced pulsations at the output of the choke. At this point, the rectifier output contains the d.c. component and the remaining part of the a.c. component, which has managed to pass through the choke. Now, the low reactance of the filter capacitor bypasses the a.c. component but prevents the d.c. component from flowing through it. Therefore, only the d.c. component reaches the load. In this way, the filter circuit has filtered out the a.c. component from the rectifier output, allowing the d.c. component to reach the load.

### Diagram Description
- A circuit diagram showing a rectifier output connected in series with a choke $ L $, followed by a capacitor $ C $ in parallel with the load $ R_L $.
- A graph showing the rectifier output as a pulsating d.c. waveform, and after the choke and capacitor, the output becomes a smoother d.c. waveform with significantly reduced ripple.

### (iii) Capacitor Input Filter or π-Filter
A typical capacitor input filter or π-filter consists of a filter capacitor $ C_1 $ connected across the rectifier output, a choke $ L $ in series, and another filter capacitor $ C_2 $ connected across the load. Only one filter section is shown, but several identical sections are often used to improve the smoothing action.

The pulsating output from the rectifier is applied across the input terminals of the filter. The filtering action of the three components, viz. $ C_1 $, $ L $, and $ C_2 $, of this filter is described below:

(a) The filter capacitor $ C_1 $ offers low reactance to the a.c. component of the rectifier output while it offers infinite reactance to the d.c. component. Therefore, capacitor $ C_1 $ bypasses an appreciable amount of the a.c. component while the d.c. component continues its journey to the choke $ L $.  
(b) The choke $ L $ offers high reactance to the a.c. component but almost zero reactance to the d.c. component. Therefore, it allows the d.c. component to flow through it, while the unbypassed a.c. component is blocked.  
(c) The filter capacitor $ C_2 $ bypasses the a.c. component that the choke has failed to block. Therefore, only the d.c. component appears across the load, which is what we desire.

### Diagram Description
- A circuit diagram showing a rectifier output connected to a capacitor $ C_1 $ in parallel, followed by a choke $ L $ in series, and then another capacitor $ C_2 $ in parallel with the load $ R_L $, resembling the shape of the Greek letter π.
- A graph showing the rectifier output as a pulsating d.c. waveform, and after the π-filter, the output becomes a very smooth d.c. waveform with minimal ripple.

### Example 6.23
For the circuit shown, find the output d.c. voltage.

#### Solution
It can be proved that the output d.c. voltage is given by:

$$
V_{dc} = V_{p(m)} \left( 1 - \frac{1}{2 f R_L C} \right)
$$

Here, $ V_{p(m)} $ = Peak rectified full-wave voltage applied to the filter, $ f $ = Output frequency

Peak primary voltage, $ V_{p(pri)} = \sqrt{2} \times 115 = 163 \mathrm{~V} $

Peak secondary voltage, $ V_{p(sec)} = (1 / 10) \times 163 = 16.3 \mathrm{~V} $

Peak full-wave rectified voltage at the filter input is

$$
V_{p(m)} = V_{p(sec)} - 2 \times 0.7 = 16.3 - 1.4 = 14.9 \mathrm{~V}
$$

For full-wave rectification, $ f = 2 f_{in} = 2 \times 60 = 120 \mathrm{~Hz} $

Now,

$$
\frac{1}{2 f R_L C} = \frac{1}{2 \times 120 \times (2.2 \times 10^3) \times (50 \times 10^{-6})} = 0.038
$$

$$
\therefore \quad V_{dc} = V_{p(m)} \left( 1 - \frac{1}{2 f R_L C} \right) = 14.9 (1 - 0.038) = 14.3 \mathrm{~V}
$$

### Example 6.24
The choke of the circuit has a d.c. resistance of 25 Ω. What is the d.c. voltage if the full-wave signal into the choke has a peak value of 25.7 V?

#### Solution
The output of a full-wave rectifier has a d.c. component and an a.c. component. Due to the presence of the a.c. component, the rectifier output has a pulsating character. The maximum value of the pulsating output is $ V_m $, and the d.c. component is $ V_{dc}^* = 2 V_m / \pi $.

For the d.c. component $ V_{dc}^* $, the choke resistance is in series with the load.

$$
\therefore \quad \text{Voltage across load, } V_{dc} = \frac{V_{dc}^*}{R + R_L} \times R_L
$$

In our example, $ V_{dc}^* = \frac{2 V_m}{\pi} = \frac{2 \times 25.7}{\pi} = 16.4 \mathrm{~V} $

$$
\therefore \quad \text{Voltage across load, } V_{dc} = \frac{16.4}{25 + 750} \times 750 = 15.9 \mathrm{~V}
$$

The voltage across the load is 15.9 V d.c. plus a small ripple.

### Diagram Description
- A circuit diagram showing a full-wave rectifier output connected to a choke $ L $ with a resistance of 25 Ω in series, followed by a load resistance $ R_L $ of 750 Ω.
- A graph showing the full-wave rectifier output as a pulsating d.c. waveform with a peak value of 25.7 V, and after the choke, the output becomes a smoother d.c. waveform with a small ripple.

## 6.22 Voltage Multipliers

With a diode, we can build a rectifier to produce a d.c. voltage nearly equal to the peak value of the input a.c. voltage. We can also use diodes and capacitors to build a circuit that will provide a d.c. output that is a multiple of the peak input a.c. voltage. Such a circuit is called a voltage multiplier. For example, a voltage doubler will provide a d.c. output that is twice the peak input a.c. voltage, a voltage tripler will provide a d.c. output that is three times the peak input a.c. voltage, and so on.

While voltage multipliers provide a d.c. output much greater than the peak input a.c. voltage, there is no power amplification, and the law of conservation of energy holds good. When a voltage multiplier increases the peak input voltage by a factor $ n $, the peak input current is decreased by approximately the same factor. Thus, the actual power output from a voltage multiplier will never be greater than the power input.