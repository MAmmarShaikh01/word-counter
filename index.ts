#! /usr/bin/env node
import inquirer from "inquirer"

const answer: {
    sentence: string
} = await inquirer.prompt([{
    name: "sentence",
    type: "input",
    message: "Enter your sentence: "
}])


let sep = answer.sentence.split(" ")
let newArr: string[] = []


sep.forEach((word) => {
    if (word != "") {
        newArr.push(word)
    }
})



console.log(`there are ${newArr.length} words in the sentence`)
