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
    return parseFloat((earthAge.earthLeft / 0.24).toFixed(2));
  }
  // MercuryLeft Getter
  get mercuryLeft() {
    return this.calcMercuryLeft();
  }

  // BIND ALL CALCULATIONS INTO SolarAge.
  bindCalculations() {
    this.mercuryAge = earthAge.mercury;
    this.venusAge = earthAge.venus;
    this.marsAge = earthAge.mars;
    this.jupiterAge = earthAge.jupiter;
    this.earthTimeLeft = earthAge.earthLeft;
    this.mercuryTimeLeft = earthAge.mercuryLeft;

  }
}

let earthAge = new SolarAge(40);
earthAge.bindCalculations();
console.log(earthAge);
