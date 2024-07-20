#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Number guessing game");
async function guessNumber() {
    let RandomNumber = Math.floor(Math.random() * 10);
    // console.log(RandomNumber);
    while (true) {
        let ans = await inquirer.prompt([
            { message: "Guess Number", type: "number", name: "UserNum" }
        ]);
        if (ans.UserNum === RandomNumber) {
            console.log("You guess correct");
            return false;
        }
        else {
            console.log("Wrong Guess");
        }
    }
}
guessNumber();
