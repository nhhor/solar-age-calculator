export class SolarAge {
  constructor(earthAge) {
    this.earthAge = earthAge;
  }

  // Getter
  get mercury() {
    return this.calcMercury();
  }

  // Method
  calcMercury() {
    return parseFloat((this.earthAge / 0.24).toFixed(2));
  }
}

let earthAge = new SolarAge(10);

console.log(earthAge.mercury); // 41.67
