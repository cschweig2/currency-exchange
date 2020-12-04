# Currency Exchange

#### Code Review, Last Updated 11.29.2020

#### **By Chelsea Becker**

## Description

_This application will convert USD to another form of currency._

## Setup/Installation Requirements

### View locally (on computer)
1. _Open web browser and go to https://github.com/cschweig2/currency-exchange_
2. _After clicking the green "code" button, you can copy the URL for the repository._
3. _Open a terminal window, such as Command Prompt or Git Bash._<br>
  3a. _Type in this command: "git clone", followed by the URL you just copied. The full command should look like this: "git clone https://github.com/cschweig2/currency-exchange.git"._<br>
4. _Visit https://nodesjs.org to install node.js._
5. _Run npm install to install all dependencies._
6. _Visit https://www.exchangerate-api.com to view documentation and obtain an API key._ <br>
6a. _Paste the API key into a .env file as such:_<br>
    API_KEY={PASTE API KEY HERE}<br>
7. _You may view the website displaying the application by clicking the index.html file or view the code on your favorite text editor, such as Visual Studio Code._

## Known Bugs

_No known bugs at this time._

## Test Specs

Describe: currencyConv();

Test: "Should convert USD to euros."<br>
Expect(currencyConv(50)).toEqual(42);<br>

## Support and contact details

_If you run into any issues, you can contact the creator at chelraebecker@gmail.com, or make contributions to the code on GitHub via forking and creating a new branch._

## Technologies Used

_VS Code_ <br />
_HTML_ <br />
_CSS_ <br />
_Bootstrap_ <br />
_JavaScript_ <br />
_JQuery_

## Legal

*This software is licensed under the MIT license.*

Copyright (c) 2020 **Chelsea Becker**