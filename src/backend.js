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

}

let earthAge = new SolarAge(10);
console.log("Mercury: ",earthAge.mercury); // 41.67
console.log("Venus: ",earthAge.venus); // 16.13
