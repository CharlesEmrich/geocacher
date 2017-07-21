# Geocacher
#### Hiding things from each other with Angular CLI

#### By Charles Emrich
#### CharlesEmrich @ gitHub for any questions.

## Description
An app to manage the locations of geocaches.

## Planning

### Dependencies
## Can be found in bower.json and package.json files.

## Specs
| Behavior | Input | Output |
| - | - | - |
| User would like to be able to enter lat, long of a known geocache and receive the corresponding physical address | *enters coordinates into a form* | Receives the closest matched physical address |
| User would like to enter the physical address of a cache and receive lat, long | *Enter physical address into a form* | Receive lat, long |
| The user might want to be able to enter a cache and add it to the list of current caches? | *Enters name, lat, long into a form* | Receives confirmation that the cache has been entered. |


## Installation

* Clone the repository (https://github.com/CharlesEmrich/geocacher.git)
* Run 'npm install' in terminal to install development dependencies.
* Run 'bower install' in terminal to install runtime dependencies.
* Since the app implements Google's Geocode API, you will need to acquire an API key.
  * Go to [Getting Started](https://developers.google.com/maps/documentation/geocoding/start) and click Get a Key.
  * Click 'Yes' in the dialog box that appears.
  * Your API key should appear in the dialog box.
  * Place your API key in a file at src/app/api-keys.ts and export it as 'geoKey' to make it available to the program.
* Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.
* Run 'ng serve' to start the local server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Known Bugs

## Technologies Used

* HTML
* JavaScript
* CSS
* NPM
* Bower
* Angular 2
* Angular CLI

### License

MIT

Copyright (c) 2017 Charles Emrich
