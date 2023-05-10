---
sidebar_position: 3
---

# Methods

## Data Collection and Simulation Construction

Our plan is to simulate a standard office building's controller, using the Johnson Control PRAC+<sup>1</sup> model as a reference. 

* We spoke with the controls engineer at the Central Heating Plant, Peter Volpe, and the UMass Campus Energy Engineer, Fidele Mazimpaka to get an idea of what controllers were widely used for HVAC control across UMass.
  * Almost all newer buildings use the FX20/FX60 Controllers, hence we are taking that as our reference.

### Assumptions

1. No heat loss through ducts
2. Constant air velocity through ducts
3. Building can be modeled with no windows or doors

<img src="https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag1.png"></img>

## Equations

<img src="https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag3.png" />

## Simulation Block Diagram

The block diagram demonstrates the processing pipeline to go from a demand curve to the resultant temperature as a result of the PRAC+ controller.

<img src="https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag2.png" />