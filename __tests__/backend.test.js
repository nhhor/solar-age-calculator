import { MyDate } from './../src/backend.js'

describe('MyDate', ()=> {

  test('should return true for a real date', () => {
    let myDate = new MyDate('2015-12-25');
    expect(myDate.dateCheck()).toEqual(true);
  });
});
