import { SolarAge } from './../src/backend.js'

describe('SolarAge', ()=> {

  // Earth
  test('Should correctly add user age into object (earthAge).', () => {
    let earthAge = new SolarAge(10);
    // console.log("Earth: ",earthAge.earthAge);
    expect(earthAge.earthAge).toEqual(10);
  });

  // Mercury
  test('Should correctly calculate number of Earth years to Mercury years.', () => {
    let earthAge = new SolarAge(10);
    // console.log("Mercury: ",earthAge.mercury); // 41.67
    expect(earthAge.mercury).toEqual(41.67);
  });

  // Venus
  test('Should correctly calculate number of Earth years to Venus years.', () => {
    let earthAge = new SolarAge(10);
    // console.log("Venus: ",earthAge.venus); // 16.13
    expect(earthAge.venus).toEqual(16.13);
  });

  // Mars
  test('Should correctly calculate number of Earth years to Mars years.', () => {
    let earthAge = new SolarAge(10);
    // console.log("Mars: ",earthAge.mars); // 5.32
    expect(earthAge.mars).toEqual(5.32);
  });

  // Jupiter
  test('Should correctly calculate number of Earth years to Jupiter years.', () => {
    let earthAge = new SolarAge(30);
    // console.log("Jupiter: ",earthAge.jupiter); // 2.53
    expect(earthAge.jupiter).toEqual(2.53);
  });

  // Earth Span Left
  test('Should correctly calculate how many years a user has left to live on each planet.', () => {
    let earthAge = new SolarAge(40);
    expect(earthAge.earthLeft).toEqual(32.2);
    expect(earthAge.mercuryLeft).toEqual(134.17);
    expect(earthAge.venusLeft).toEqual(51.94);
    expect(earthAge.marsLeft).toEqual(17.13);
    expect(earthAge.jupiterLeft).toEqual(2.72);
  });


});
