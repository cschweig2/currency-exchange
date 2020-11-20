import currencyConv from './../src/currencyConv.js';

describe('function to convert currency amount', () => {
  test('should convert users input to numbers', () => {
  expect(currencyConv("50")).toEqual(50);
  });

  test('should convert users USD amount to euros', () => {
  expect(currencyConv(50)).toEqual(41);
  });
});