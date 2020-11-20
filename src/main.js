import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/CurrencyService';
import currencyConv from './currencyConv.js';

let showElements = (response, inputDollars, selectedConversion) => {
  if (response.conversion_rates) {
    let euroConversion = response.conversion_rates.EUR;
    // let icelandConversion = response.conversion_rates.ISK;
    // let japanConversion = response.conversion_rates.JPY;
    // let mexConversion = response.conversion_rates.MXN;
    // let indiaConversion = response.conversion_rates.INR;
    if (selectedConversion == "EUR") {
      let dollars = currencyConv(inputDollars, euroConversion);
      $("#currency-code").text(selectedConversion);
      $("#updated-currency").text(dollars);
    }
  } else {
    $("#error").text(`An error occurred: ${response}`);
  }
};

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let inputDollars = $("#currency").val();
    const selectedConversion = $("input:radio[name=country]:checked").val();
    (async function() {
      const response = await CurrencyService.getCurrency();
      showElements(response, inputDollars, selectedConversion);
    })();
  });
});