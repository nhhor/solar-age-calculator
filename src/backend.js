export class SolarAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.averageLifespan = 72.2;
    this.planetAges;
    this.planetRemaining;
  }


  // PlanetAge Method
  calcPlanetAges() {
    const planetNames = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
    const planetRatio = [1, 0.24, 0.62, 1.88, 11.86];
    let age = this.earthAge;
    let earthAge = this;
    let planetMath = planetNames.forEach(function(planet, index) {
      earthAge["ageOn"+planet] = parseFloat((age / planetRatio[index]).toFixed(2));
    });
    return planetMath;
  }
  // PlanetAge Getter
  get planetAges() {
    return this.calcPlanetAges();
  }


  // PlanetRemaining Method
  calcPlanetRemaining() {
    const planetNames = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
    const planetRatio = [1, 0.24, 0.62, 1.88, 11.86];
    let remaining = this.averageLifespan - this.earthAge;
    let overAverage = this.earthAge - this.averageLifespan;
    let earthAge = this;
    let planetMath = planetNames.forEach(function(planet, index) {
      if (remaining < 0) {
        earthAge["timeRemainingOn"+planet] = parseFloat((overAverage / planetRatio[index]).toFixed(2));
      } else if (remaining >= 0) {
        earthAge["timeRemainingOn"+planet] = parseFloat((remaining / planetRatio[index]).toFixed(2));
      }
      else {
        earthAge["timeRemainingOn"+planet] = "Error on PlanetRemaining";
      }
    });
    return planetMath;
  }
  // PlanetRemaining Getter
  get planetRemaining() {
    return this.calcPlanetRemaining();
  }


}
