#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.94,
    CAD: 1.38,
    AUD: 1.56,
    CNY: 7.24,
    JPY: 154.65,
    RUB: 93.33,
    QAR: 3.64,
    KWD: 0.31,
    SAD: 3.75,
    ZAR: 19.03,
    PKR: 278.12,
    INR: 83.68,
    BDT: 109.70,
    OMR: 0.38,
    HKD: 7.83,
    EGP: 48.50,
    IRR: 42075.00,
    NZD: 1.70,
    YER: 250.33, //Yemeni Rial
};
let userAnswer = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        choices: ["USD", "EURO", "CAD", "AUD", "CNY", "JPY", "RUB", "QAR", "KWD", "SAD", "ZAR", "PKR", "INR", "BDT", "OMR", "HKD", "EGP", "IRR", "NZD ", "YER"],
        message: "Select the Currency From which You want To Convert:"
    },
    {
        name: "To",
        type: "list",
        choices: ["USD", "EURO", "CAD", "AUD", "CNY", "JPY", "RUB", "QAR", "KWD", "SAD", "ZAR", "PKR", "INR", "BDT", "OMR", "HKD", "EGP", "IRR", "NZD ", "YER"],
        message: "Select the Currency In which You want To Convert:"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Amount:"
    }
]);
let fromAmount = currency[userAnswer.From];
let toAmount = currency[userAnswer.To];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
