export class SolarAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.averageLifespan = 72.2;
  }

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

  // BIND ALL CALCULATIONS INTO SolarAge.
  bindCalculations() {
    earthAge.mercuryAge = earthAge.mercury;
    earthAge.venusAge = earthAge.venus;
    earthAge.marsAge = earthAge.mars;
    earthAge.jupiterAge = earthAge.jupiter;
  }

}

let earthAge = new SolarAge(10);
earthAge.bindCalculations();
console.log(earthAge);
