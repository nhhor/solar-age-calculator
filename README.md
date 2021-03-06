# Application: **Solar Age Calculator**

##### By Noah Horwitz

###### _First published 2019-11-15_

## Description:
This project was made as part of a code review for Noah Horwitz, a student at _[Epicodus](http://www.epicodus.com)_, a vocational school for technology careers, based in Portland, OR. The project is designed to create an application that determines a user’s age based on several planets' (Mercury, Venus, Mars, Jupiter) solar years. Then determine how many years a user has left to live on each planet based on an average lifespan. If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.

The fully deployed project is hosted on GH-Pages [HERE](https://nhhor.github.io/solar-age-calculator).

## Setup/Installation instructions:
* Click the `Clone or download` button and copy the link.
* Open your terminal application (assuming GIT Scripts AND node.js (with NPM) have been installed on your system) and type `git clone (link)`.
* In the terminal using the `cd`... command, navigate to the newly created repository and run `npm install`.
* Then in the terminal, run `npm run start`.
<!-- * In the newly created ./dist folder, double click on "index.html" to open the file in the web browser of your choosing. -->

## Technologies Used
> `HTML`
> `CSS`
> `Bootstrap`
> `JavaScript`
> `jQuery`
> `Node Package Manager`
> `WebPack`

## Known Bugs
* None

## Test Driven Development Specifications

|Spec|Input|Output|
|-|-|-|
|Application should take an age in earth years from a user and calculate the corresponding (1 : 0.24) number of Mercury years.|`10`|`41.66`|
|Application should take an age in earth years from a user and calculate the corresponding (1 : 0.62) number of Venus years.|`10`|`16.13`|
|Application should take an age in earth years from a user and calculate the corresponding (1 : 1.88) number of Mars years.|`10`|`5.32`|
|Application should take an age in earth years from a user and calculate the corresponding (1 : 11.86) number of Jupiter years.|`30`|`2.53`|
|Application should take an age in earth years from a user and calculate how many years a user has left to live on each planet (given average earth life expectancy).|earthAge: `40` averageLifespan: `72.2`|timeRemainingOnEarth: `32.2`, timeRemainingOnMercury: `134.17`, timeRemainingOnVenus: `51.94`, timeRemainingOnMars: `17.13`, timeRemainingOnJupiter: `2.72`|
|If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy.|earthAge: `82.2` averageLifespan: `72.2`|timeBeyondAverageOnEarth: `10`, timeBeyondAverageOnMercury: `41.67`, timeBeyondAverageOnVenus: `16.13`, timeBeyondAverageOnMars: `5.32`, timeBeyondAverageOnJupiter: `0.84`|

## References
* None

## Support and contact details
Contact [example@sample.com](mailto:example@sample.com)

## License
_This This repository is copyright (C) 2019 by Noah Horwitz and licensed under the GNU General Public License v3.0 [gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)_.
