import { SolarAge } from './../src/backend.js'

describe('SolarAge', ()=> {

  // Mercury
  test('Should correctly calculate number of Earth years to Mercury years', () => {
    let earthAge = new SolarAge(10);
    expect(earthAge.mercury).toEqual(41.67);
  });

  // Venus
  test('Should correctly calculate number of Earth years to Venus years', () => {
    let earthAge = new SolarAge(10);
    expect(earthAge.venus).toEqual(16.13);
  });

});
