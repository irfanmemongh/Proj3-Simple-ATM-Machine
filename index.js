#! /usr/bin/env node
//Simple ATM Machine Project03 made by Irfan Memon
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let mypin = 1212;
console.log("  ***  Welcome to Memon's ATM  ***  ");
let pinAnswer = await inquirer.prompt([{
        name: "pin",
        message: "Please enter your Pin code number",
        type: "number",
    }]);
if (pinAnswer.pin === mypin) {
    console.log("Successfully login!!!");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please select any one option",
            type: "list",
            choices: ["Withdraw", "Check your current Balance"]
        }]);
    console.log(operationAns.operation);
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([{
                name: "amount",
                message: "Kindly enter your withdraw amount",
                type: "number"
            }]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining amount is: " + myBalance);
        }
        ;
    }
    else if (operationAns.operation === "Check your current Balance") {
        console.log("Your current balance is: " + myBalance);
    }
}
else {
    console.log("Oops! Your pin code isnt correct");
}
