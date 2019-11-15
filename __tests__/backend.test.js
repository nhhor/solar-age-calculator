import { SolarAge } from './../src/backend.js'

describe('SolarAge', ()=> {

  test('Should correctly calculate number of Earth years to Mercury years', () => {
    let earthAge = new SolarAge(10);
    expect(earthAge.mercury).toEqual(41.67);
  });
});
