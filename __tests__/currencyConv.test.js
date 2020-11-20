import currencyConv from './../src/currencyConv.js';

describe('function to convert currency amount', () => {

  test('should conver users input to numbers', () => {
  expect(currencyConv("50")).toEqual(50);
  });
});