#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence: "
    }]);
let sep = answer.sentence.split(" ");
let newArr = [];
sep.forEach((word) => {
    if (word != "") {
        newArr.push(word);
    }
});
console.log(`there are ${newArr.length} words in the sentence`);
