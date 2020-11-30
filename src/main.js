import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyService from './services/CurrencyService';
import currencyConv from './currencyConv.js';
import randomConv from './randomConv';

function validateInput(userInput, response) {
  let element;
  for (element in response.conversion_rates) {
    if (element == userInput) {
      $("#error").text("Input accepted");
      return true;
    } else {
      $("#error").text("Currency code does not match our records");
      continue;
    }
  }
}

async function showElements (response, inputDollars, selectedConversion, userInput) {
  if (response.conversion_rates) {
    if (userInput != "") {
      validateInput(userInput, response);
      let dollars = randomConv(inputDollars, userInput, response);
      $("#updated-currency").text(dollars);
      $("#currency-code").text(userInput);
    } else {
      $("#currency-code").text(selectedConversion);
    }
    let euroConversion = response.conversion_rates.EUR;
    let icelandConversion = response.conversion_rates.ISK;
    let japanConversion = response.conversion_rates.JPY;
    let mexConversion = response.conversion_rates.MXN;
    let indiaConversion = response.conversion_rates.INR;
    
    if (selectedConversion == "EUR") {
      let dollars = currencyConv(inputDollars, euroConversion);
      $("#updated-currency").text(dollars);
    }
    if (selectedConversion == "ISK") {
      let dollars = currencyConv(inputDollars, icelandConversion);
      $("#updated-currency").text(dollars);
    }
    if (selectedConversion == "JPY") {
      let dollars = currencyConv(inputDollars, japanConversion);
      $("#updated-currency").text(dollars);
    }
    if (selectedConversion == "MXN") {
      let dollars = currencyConv(inputDollars, mexConversion);
      $("#updated-currency").text(dollars);
    }
    if (selectedConversion == "INR") {
      let dollars = currencyConv(inputDollars, indiaConversion);
      $("#updated-currency").text(dollars);
    }
  } else {
    $("#error").text(`An error occurred: ${response.result}`);
  }
}

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let inputDollars = $("#currency").val();
    const selectedConversion = $("input:radio[name=country]:checked").val();
    let userInput;
    if ($("input:radio[id=other]:checked")) {
      userInput = $("#other-text").val();
    }
    (async function() {
      const response = await CurrencyService.getCurrency();
      showElements(response, inputDollars, selectedConversion, userInput);
    })();
  });
});