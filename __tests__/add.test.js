import add from './../src/add.js';

describe('Add function', () => {

  test('should add two numbers together', () => {
  expect(add(1,2)).toEqual(3);
  });
});