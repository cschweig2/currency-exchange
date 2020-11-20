export default function currencyConv(input, conversionRate) {
  let dollars = parseInt(input);
  dollars *= conversionRate;
  return Math.round(dollars);
}

