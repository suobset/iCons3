# iCons3

New iCons 3 Repo coz monorepo is falling apart

Will have ALL the official work for the iCons 3 work. Monorepo will just redirect to here. 

To team members: Still don't mind giving access to monorepo if needed :)

Cur draft website will be hosted at: https://suobset.github.io/iCons3

Setup for the Heat Maps to work as of Feb 23 (TEMP):

1. This is the main repository for our primary website, as well as all source code files (including MATLAB)
2. We use a supplementary repository: https://github.com/suobset/iCons
  1. The ```iCons3-CS1``` folder is the folder containing everything pertaining to this project
  2. That folder will contain ```MATLAB``` plots in ```html``` format, and be hosted on GitHub pages.
  3. Those files will then be embedded into correct places on our main website here.
  4. The supplementary repository is only for the purposes of keeping and organizing html outputs for each and every floor across different heatmaps. This is the main repository which showcases everything, including ```MATLAB``` source code for those who are interested. 
  5. Why do this? Too many files to have in one repo, which are not as useful (since we provide MATLAB source code), as well as REACT gets confused. 


Heatmap for the qualitative perceived temperature data for 21 of the floors of the W.E.B. DuBois Library.
![heatmap](https://user-images.githubusercontent.com/44482134/220529155-8457590a-5513-4262-8b7e-ab1863d5a1f4.gif)
