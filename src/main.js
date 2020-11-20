import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/CurrencyService';
import currencyConv from './currencyConv.js';

let showElements = (response, inputDollars) => {
  if (response.conversion_rates) {
    let conversionRate = response.conversion_rates.EUR;
    let dollars = currencyConv(inputDollars, conversionRate);
    $("#updated-currency").text(dollars);
  } else {
    $("#error").text(`An error occurred: ${response}`);
  }
};

$(document).ready(function() {
  $("#europe").click(function(event) {
    event.preventDefault();
    let inputDollars = $("#currency").val();
    $("#currency").val("");
    (async function() {
      const response = await CurrencyService.getCurrency();
      showElements(response, inputDollars);
    })();
  });
});