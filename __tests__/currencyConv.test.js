import currencyConv from './../src/currencyConv.js';

describe('function to convert currency amount', () => {
  let euroRate = .844;

  test('should convert users USD amount to euros', () => {
  expect(currencyConv(50, euroRate)).toEqual(42);
  });
});