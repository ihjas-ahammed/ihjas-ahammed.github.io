

# Semiconductors

## 1. Introduction to Semiconductors
- **Definition**: A semiconductor is a material with electrical conductivity between that of conductors (e.g., copper, silver) and insulators (e.g., glass, rubber), determined by its ability to conduct electricity under specific conditions.
- **Examples**:
  - **Conductors**: Copper, silver (highly conductive, resistivity ~10⁻⁸ Ω·m).
  - **Insulators**: Glass, rubber (poor conductors, resistivity ~10¹⁰–10¹⁶ Ω·m).
  - **Semiconductors**: Germanium (Ge), silicon (Si) (moderate conductivity, resistivity ~10⁻³–10³ Ω·m depending on purity and temperature).  
    *Correction*: Nichrome, originally listed, is not a semiconductor; it is a metallic alloy (resistivity ~10⁻⁶ Ω·m) used in resistors. A better example is gallium arsenide (GaAs).
- **Key Property**: Semiconductors bridge the gap between conductors and insulators, enabling controlled electrical conductivity, which is vital for electronic devices.

### Resistivity of Semiconductors
- **Comparison**:
  - Germanium: Resistivity ~0.6 Ω·m (intrinsic, at room temperature).
  - Silicon: Resistivity ~2.3 × 10³ Ω·m (intrinsic, at room temperature; note the original 2.3 Ω·m is a common approximation but less precise for pure Si).
  - *Correction*: Nichrome’s resistivity (~10⁻⁶ Ω·m) classifies it as a conductor, not a semiconductor. Replace with gallium arsenide (~10⁻³ Ω·m, intrinsic).
- **Importance**: The intermediate resistivity of semiconductors allows precise control of electrical current, making them ideal for applications like transistors and diodes.

### Temperature Coefficient of Semiconductors
- **Behavior**:
  - Semiconductors exhibit a **negative temperature coefficient of resistance**, meaning their resistance decreases as temperature rises.
  - At low temperatures (e.g., near absolute zero), they act like insulators; at higher temperatures, they conduct more like conductors due to increased charge carriers.
- **Implication**: This temperature dependence is leveraged in devices like thermistors for temperature sensing.

### Effect of Impurities
- **Doping**:
  - Adding impurities (e.g., arsenic, gallium) alters a semiconductor’s electrical properties by increasing the number of charge carriers.
  - This process, called doping, enhances conductivity and enables the creation of p-n junctions for electronic devices.
- **Importance**: Doping allows customization of semiconductors for specific functions, such as amplifying or switching signals.

---

## Important Points on Semiconductors (Ge and Si)

### Definition and Role
- **Semiconductors**: Materials with electrical conductivity between conductors and insulators.
- **Examples**: Germanium (Ge) and Silicon (Si), the most commonly used semiconductors in electronics.
- **Significance**: They replaced bulky vacuum tubes, enabling compact, efficient devices like transistors and integrated circuits.

### Atomic Structure
- **Germanium (Ge)**:
  - Atomic number: 32
  - Electron configuration: 1s² 2s² 2p⁶ 3s² 3p⁶ 3d¹⁰ 4s² 4p² (simplified: 2, 8, 18, 4)
  - 4 valence electrons in the outermost shell.
- **Silicon (Si)**:
  - Atomic number: 14
  - Electron configuration: 1s² 2s² 2p⁶ 3s² 3p² (simplified: 2, 8, 4)
  - 4 valence electrons in the outermost shell.

### Bonding
- **Covalent Bonds**: Each Ge or Si atom shares its 4 valence electrons with four neighboring atoms, forming covalent bonds.
- **Stability**: This results in 8 electrons in the outer shell (octet rule), creating a stable crystal lattice.
- **Mechanism**: Electrons are shared, not free, locking atoms into a rigid structure at low temperatures.

### Crystal Structure
- **Type**: Diamond cubic lattice, a variation of the face-centered cubic (FCC) structure.
- **Arrangement**: Tetrahedral—each atom bonds to four others in a three-dimensional lattice.
- **Importance**: The crystalline order facilitates the unique electrical properties of semiconductors.

### Energy Bands
- **Valence Band**: Filled with electrons involved in covalent bonding at absolute zero.
- **Conduction Band**: Empty at absolute zero; electrons move here when excited, enabling conduction.
- **Band Gap**: Energy difference between valence and conduction bands:
  - Ge: 0.67 eV (more precise than 0.7 eV, though commonly rounded).
  - Si: 1.12 eV (more precise than 1.1 eV, though commonly rounded).
- **Behavior**: At room temperature, thermal energy excites some electrons across the band gap, creating electron-hole pairs as charge carriers.

### Conductivity
- **Temperature Effect**: Conductivity increases with temperature as more electrons gain energy to reach the conduction band.
- **Control**: Enhanced by doping or external energy (e.g., light or voltage).
- **At Absolute Zero**: Acts as an insulator, with all electrons bound in covalent bonds.

### p-n Junction
- **Definition**: Interface between p-type (hole-rich) and n-type (electron-rich) semiconductor regions.
- **Depletion Region**: A charge-free zone forms at the junction, creating a barrier potential.
- **Biasing**:
  - **Forward Bias**: Applied voltage reduces the barrier, allowing current flow.
  - **Reverse Bias**: Applied voltage increases the barrier, blocking current until breakdown occurs.
- **Applications**: Core component in diodes, transistors, and other devices.
- **Characteristics**: Forward bias shows exponential current increase; reverse bias shows minimal current until breakdown.

### Key Properties and Differences
- **Germanium**: Smaller band gap (0.67 eV) leads to higher intrinsic conductivity but greater temperature sensitivity.
- **Silicon**: Larger band gap (1.12 eV) provides better thermal stability and a useful oxide layer (SiO₂) for insulation in fabrication.
- **Semiconductor Behavior**: Stems from four valence electrons and covalent bonding, enabling controlled charge movement.

### Applications
- **Devices**: Diodes, transistors, integrated circuits.
- **Historical Impact**: Transition from vacuum tubes to semiconductors shrank device sizes and boosted reliability.

---

# 2. Energy Bands, Effect of Temperature, and Holes

### 1. Energy Band Description of Semiconductors
- **Definition**: Semiconductors have resistivity between conductors and insulators, typically ranging from 10⁻⁴ to 0.5 Ω·m for doped materials (intrinsic values are higher).
- **Energy Band Diagrams**:
  - **Germanium**: Band gap ≈ 0.67 eV; conduction band nearly empty, valence band nearly filled at absolute zero.
  - **Silicon**: Band gap ≈ 1.12 eV; similar band structure to Ge.
- **Behavior**: The small band gap allows thermal energy at room temperature to excite electrons to the conduction band, enabling conduction.

### 2. Effect of Temperature on Semiconductors
- **At Absolute Zero**: All electrons are bound in covalent bonds; semiconductors act as insulators.
- **Above Absolute Zero**: Thermal energy breaks bonds, freeing electrons and creating holes; resistance decreases (negative temperature coefficient).
- **Current**: Small current flows at room temperature due to limited charge carriers (e.g., 1 free electron per 10¹⁸ atoms in intrinsic material).

### 3. Current Flow in Semiconductors
- **Two Types of Current**:
  - **Electron Current**: Free electrons move toward the positive terminal under an electric field.
  - **Hole Current**: Holes (positive charge vacancies) move toward the negative terminal as electrons fill them.
- **Hole Creation**: An electron jumping to the conduction band leaves a hole in the valence band.

### 4. Hole Current in Semiconductors
- **Definition of a Hole**: A vacancy in a covalent bond, acting as a positive charge carrier.
- **Mechanism**: Holes “move” as nearby valence electrons fill vacancies, shifting the hole in the opposite direction.
- **Energy Band Perspective**: Holes in the valence band facilitate current as electrons shift positions.

---

# 3. Types of Semiconductors

### Intrinsic Semiconductor
- **Definition**: A pure semiconductor without impurities.
- **Charge Carriers**: Electron-hole pairs generated thermally; equal numbers of electrons and holes.
- **Current Conduction**: Both electrons and holes contribute, but conductivity is low due to limited carrier density.

### Extrinsic Semiconductor
- **Definition**: A semiconductor with added impurities to boost conductivity.
- **Doping**: Introduces impurities (e.g., 1 per 10⁸ atoms) to increase charge carriers.

### N-type Semiconductor
- **Impurity Type**: Pentavalent (e.g., arsenic, antimony), with 5 valence electrons.
- **Mechanism**: Donates extra electrons, making electrons the majority carriers.
- **Charge Carriers**: Majority: electrons; Minority: holes.

### P-type Semiconductor
- **Impurity Type**: Trivalent (e.g., gallium, indium), with 3 valence electrons.
- **Mechanism**: Creates holes by accepting electrons, making holes the majority carriers.
- **Charge Carriers**: Majority: holes; Minority: electrons.

---

# 4. PN Junction and Breakdown Voltage

### 1. Formation of p-n Junction
- **Definition**: Junction formed between p-type (hole-rich) and n-type (electron-rich) regions.
- **Formation**: Created by diffusing impurities into a semiconductor (e.g., indium into n-type Ge).

### 2. Properties of p-n Junction
- **Depletion Layer**: A carrier-free region near the junction with positive ions on the n-side and negative ions on the p-side.
- **Barrier Potential**: Natural voltage across the junction:
  - Silicon: ~0.7 V
  - Germanium: ~0.3 V

### 3. Forward and Reverse Biasing
- **Forward Biasing**: Positive to p-side, negative to n-side; reduces barrier, allows current.
- **Reverse Biasing**: Negative to p-side, positive to n-side; increases barrier, blocks current until breakdown.

### 4. Forward Biased p-n Junction – Current Flow
- **Mechanism**: Electrons flow from n-side to p-side, holes from p-side to n-side, crossing a reduced depletion layer.

### 5. Volt-Ampere Characteristics of p-n Junction
- **V-I Characteristics**: Forward bias shows sharp current rise after barrier voltage; reverse bias shows near-zero current until breakdown.

---

# 5. Understanding Special-Purpose Diodes: Zener Diodes, LEDs, and Multicolour LEDs

### 1. Zener Diode
- **Definition**: A diode designed to operate in reverse breakdown, maintaining constant voltage.
- **Operation**: Conducts in reverse bias beyond Zener voltage (V_Z), stabilizing voltage.
- **Use**: Voltage regulation in circuits.

### 2. Light-Emitting Diode (LED)
- **Definition**: A diode that emits light when forward-biased.
- **Operation**: Electron-hole recombination at the junction releases energy as light (e.g., red from gallium arsenide).
- **Use**: Indicators, displays, lighting.

### 3. Multicolour LEDs
- **Definition**: An LED with two p-n junctions emitting different colors based on bias direction.
- **Operation**: Forward bias yields one color, reverse bias another; rapid switching blends colors.
- **Use**: Multi-color indicators or displays.

---

# 6. Exploring Electronic Components: Seven-Segment Displays and Photo-Diodes

### Section 1: Seven-Segment LED Displays
- **Definition**: A display with seven LEDs arranged to show numbers (0-9) and some letters.
- **Types**:
  - **Common Anode (CA)**: Anodes connected to power; cathodes to ground to light segments.
  - **Common Cathode (CC)**: Cathodes grounded; anodes to power to light segments.
- **Operation**: Selective segment activation forms characters; resistors limit current.
- **Use**: Clocks, calculators, numeric displays.

### Section 2: Photo-Diodes
- **Definition**: A diode that generates current when exposed to light.
- **Operation**: Light creates electron-hole pairs, increasing reverse-bias current.
- **Use**: Light detection, optical communication, sensors.
