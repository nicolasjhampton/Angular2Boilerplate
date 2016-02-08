## Angular2 Boilerplate

## To setup the project...

Clone the repo, run ```npm install```, then ```gulp```, and finally  
```npm start```. The basic app will popup on port 3000.


### Angular2 typings

Currently the angular2 typings have been retracted. From what I 
can tell, this is due in a change of architechure that allows
different platforms to be accomodated. Where in a previous stage
of beta, ```angular2/angular2``` was the module for the entire
project, now ```angular2/platform``` splits into several codebases,
and the typings for each platform have not been finished. Thus, for
the moment, I've left out typings.

Also be aware that the ```tsd``` type manager has been depreceated.
```typings``` will be replacing it as the typings manager for
projects.


### Project structure 

Currently, I am unable to change the app structure away from the 
"everything in the app folder" format. I also have reservations
about the ```node_modules``` folder having to be at the root of 
the directory structure in order for scripts to find their 
depenancies, but this all seems fixable after I take a good hard
look at a striped down version. 



