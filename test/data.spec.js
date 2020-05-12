import {houseG} from '../src/data.js';


describe('houseG', () => {
  test('is a function', () => {
    expect(typeof houseG).toBe('function');
  });

  test('returns `Harry Potter`', () => {
    expect(houseG('Gryffindor')[0].house).toBe('Gryffindor');
  });
});
