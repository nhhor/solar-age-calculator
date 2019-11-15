export class SolarAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
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

}

let earthAge = new SolarAge(10);
console.log("Mercury: ",earthAge.mercury); // 41.67
console.log("Venus: ",earthAge.venus); // 16.13
console.log("Mars: ",earthAge.mars); // 5.32
console.log("Jupiter: ",earthAge.jupiter); // 2.53
