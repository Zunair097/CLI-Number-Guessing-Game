#! usr/bin/env node
import inquirer from "inquirer";
console.log("welcome To The Governor House - CLI Number Guessing Game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Enter Your Guessed Number(Number Limit From 1 to 5):",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulations ! You Guess The Correct Number.");
}
else {
    console.log("Sorry, You Guess The Wrong Number");
    console.log(`The Correct Number Is ${randomNumber}`);
}
