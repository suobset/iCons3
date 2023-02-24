MATLAB Code: Anvitha Ramachandran 

This weird bodge: Kush Srivastava

The way this works is basically:

1. We created these figures on MATLAB
2. Exported them to html, one for each floor
3. Pushed the html to a separate repository, otherwise it would disturb Docusaurus
   1. [Other Repository](https://github.com/suobset/iCons)
   2. This other repository has GitHub Pages already activated
4. Linked iFrames from this other repository to our documentation

Side note: I am very close to figuring out how to make MATLAB work natively with the website. Just ran out of time today, but we may not need to do this weird bodge in the future. 
-kush