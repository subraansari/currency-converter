#! /usr/bin/env node
import inquirer from "inquirer";
const currency  : any = {
    USD  : 1, //Base Currency
    EURO : 0.94, //Euro
    CAD  : 1.38, //Canadian Dollar
    AUD  : 1.56, //Australian Dollar
    CNY  : 7.24, //Chinese Yuan
    JPY  : 154.65, //Japanese Yen
    RUB  : 93.33, //Russian Ruble
    QAR  : 3.64, //Qatari Riyal
    KWD  : 0.31, //Kuwaiti Dinar
    SAD  : 3.75, //Saudi Riyal
    ZAR  : 19.03, // South African Rand
    PKR  : 278.12, //Pakistani Rupee
    INR  : 83.68, //Indian Rupee
    BDT  : 109.70, //Bangladeshi Taka
    OMR  : 0.38, // Omani Rial
    HKD  : 7.83, // Hong Kong Dollar
    EGP  : 48.50, //Egyptian Pound
    IRR  : 42075.00, //Iranian Rial
    NZD  : 1.70, //New Zealand Dollar
    YER  : 250.33, //Yemeni Rial
};
let userAnswer = await inquirer.prompt(
    [
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
       let amount = userAnswer.amount
       let baseAmount = amount / fromAmount;
       let convertedAmount = baseAmount * toAmount;
       console.log(convertedAmount);
       