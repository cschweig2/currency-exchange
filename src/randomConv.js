export default function randomConv(inputDollars, userInput, response) {
  let element;
  let convRate;
  for (element in response.conversion_rates) {
    if (element == userInput) {
      convRate = response.conversion_rates[`${userInput}`];
    }
  }
  let dollars = parseInt(inputDollars);
  dollars *= convRate;
  return Math.round(dollars);
}