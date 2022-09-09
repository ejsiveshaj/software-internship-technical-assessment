"use strict";
import * as readline from "node:readline";
import { stdin, stdout } from "process";

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

function assignment(answer: string): number {
  if (answer.length <= 1) {
    console.log("entering if statement");
    //console.log("This credit card number is not valid.");
    return 42;
  }

  // Converting the string into an array
  let arr: Array<string> = answer.split("");

  // Removing the white spaces which now elements of the above array
  arr = arr.filter((element) => {
    return element !== " ";
  });

  // Doubling every second digit starting from the right
  for (let i = arr.length - 2; i >= 0; i -= 2) {
    let digit = Number(arr[i]);
    if (2 * digit > 9) {
      digit = 2 * digit - 9;
    } else {
      digit = 2 * digit;
    }

    arr[i] = "" + digit;
  }

  // Checking if the credit card number is valid
  let sum = 0;
  for (let item of arr) {
    let digit = Number(item);
    sum += digit;
  }

  if (sum % 10 === 0) {
    // console.log("This credit card number is valid.");
    return 0;
  } else {
    // console.log("This credit card number is not valid.");
    return 42;
  }
}

var result = "";
rl.question("Please input a credit card number: ", function (answer: string) {
  result = answer;

  rl.close();
});

process.exit(assignment(result))