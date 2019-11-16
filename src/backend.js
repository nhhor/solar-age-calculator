export class SolarAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.averageLifespan = 72.2;
    this.mercuryAge = this.mercury;
    this.venusAge = this.venus;
    this.marsAge = this.mars;
    this.jupiterAge = this.jupiter;
    this.earthTimeLeft = this.earthLeft;
    this.mercuryTimeLeft = this.mercuryLeft;
    this.venusTimeLeft = this.venusLeft;
    this.marsTimeLeft = this.marsLeft;
    this.jupiterTimeLeft = this.jupiterLeft;
  }

  // NOTES: I was sttempting to refactor the (very) verbose number of methods for each calculation into one or two loops, and the first loop worked well but I could not ()after several hours) get them to reference correctly in the test environment. So, this is currenly scrapped but I'd appreciate some feedback. ~Noah
  // // Planets Method
  // calcPlanets(earthAge) {
  //   const planetNames = ["Earth", "Mercury", "Venus", "Mars", "Jupiter"];
  //   const planetRatio = [1, 0.24, 0.62, 1.88, 11.86];
  //   let eachPlanet = planetNames.forEach(function(planet, index) {
  //     earthAge["ageOn"+planet] = parseFloat((planetRatio[index] * (earthAge)).toFixed(2));
  //     return eachPlanet;
  //   });
  // }
  // // Planet Getter
  // get planets() {
  //   return this.calcPlanets();
  // }

  // Mercury Method
  calcMercury() {
    return parseFloat((this.earthAge / 0.24).toFixed(2));
  }
  // Mercury Getter
  get mercury() {
    return this.calcMercury();
  }

  // Venus Method
  calcVenus() {
    return parseFloat((this.earthAge / 0.62).toFixed(2));
  }
  // Venus Getter
  get venus() {
    return this.calcVenus();
  }

  // Mars Method
  calcMars() {
    return parseFloat((this.earthAge / 1.88).toFixed(2));
  }
  // Mars Getter
  get mars() {
    return this.calcMars();
  }

  // Jupiter Method
  calcJupiter() {
    return parseFloat((this.earthAge / 11.86).toFixed(2));
  }
  // Jupiter Getter
  get jupiter() {
    return this.calcJupiter();
  }

  // EarthLeft Method
  calcEarthLeft() {
    return parseFloat((this.averageLifespan - this.earthAge).toFixed(2));
  }
  // EarthLeft Getter
  get earthLeft() {
    return this.calcEarthLeft();
  }

  // MercuryLeft Method
  calcMercuryLeft() {
    return parseFloat((this.earthLeft / 0.24).toFixed(2));
  }
  // MercuryLeft Getter
  get mercuryLeft() {
    return this.calcMercuryLeft();
  }

  // VenusLeft Method
  calcVenusLeft() {
    return parseFloat((this.earthLeft / 0.62).toFixed(2));
  }
  // VenusLeft Getter
  get venusLeft() {
    return this.calcVenusLeft();
  }

  // MarsLeft Method
  calcMarsLeft() {
    return parseFloat((this.earthLeft / 1.88).toFixed(2));
  }
  // MarsLeft Getter
  get marsLeft() {
    return this.calcMarsLeft();
  }

  // JupiterLeft Method
  calcJupiterLeft() {
    return parseFloat((this.earthLeft / 11.86).toFixed(2));
  }
  // JupiterLeft Getter
  get jupiterLeft() {
    return this.calcJupiterLeft();
  }
}
// let earthAge = new SolarAge(82.2);
// earthAge.planets;
