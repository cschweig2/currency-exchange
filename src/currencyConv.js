export default function currencyConv(input, response) {
  let dollars = parseInt(input);
  dollars *= .844;
  return Math.round(dollars);
}

