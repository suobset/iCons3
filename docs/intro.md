---
sidebar_position: 2
---

# Introduction

* In total, 3.9% of global greenhouse gas emissions and 10%
of global electricity usage overall originate from air conditioning systems
*  According to a report by the International
Energy Agency (IEA), targeting specific inefficiencies of air
conditioning systems is paramount to reducing the total energy
consumption of buildings, since air conditioning contributes
to 20% of office building electricity use. 
* Woods et al. discusses the impact of humidity on the energy wasted and emissions produced by air conditioning systems
  * Managing humidity in the building environment is as
important as controlling temperature
  * Appropriate control of both is necessary to minimize excess use of energy and refrigerant materials for air conditioning and reduce costs of HVAC systems to improve accessibility

The demand<sup>1</sup> on these HVAC systems is decided by electrical controllers<sup>2</sup> for commercial buildings.

We aim to implement methods to optimize HVAC Controllers to work in a way which maximizes energy savings and maintains occupant comfort.

## Research Question

What are the energy and cost savings associated with alternative methods of preprocessing demand handling<sup>3</sup> in the controller for HVAC systems?

## Objective

Our goal is to create a comparative tool to analyze the costs associated with demand preprocessing in the controllers for HVAC systems. We plan on using EWMA-based<sup>4</sup> filtering of the setpoint curve and frequency-based filtering to account for the response time and reduce energy wastes regarding unrealistic setpoint expectations.

## Hypothesis

We hypothesize that using a lower frequency of demand curve signal {i.e. one with a dead time<sup>5</sup> of 2*typical} and a midway value for EWMA filtration (0.9 weighting of the previous value) will lead to the scenario that optimizes for occupancy comfort while also consuming less energy than the standard values {EWMA=1, demand curve has been filtered to have the period be equivalent to that of our dead time}.

<img src="https://raw.githubusercontent.com/suobset/iCons3/main/assets/diag4.png" />

### Footnotes

1. Demand: The values that the building manager sets the setpoints at for certain times
2. Controllers: The specific equipment in a HVAC system that activates different functions of a HVAC system based on inputs.
3. Preprocessing Demand Handling: Filtering that occurs on the demand signal in order to minimize energy consumption for the controller to meet the setpoints.
4. EWMA: Exponential Weighted Moving Average.
5. Dead Time: The amount of time between setting a specific function, and the response given by the HVAC system.