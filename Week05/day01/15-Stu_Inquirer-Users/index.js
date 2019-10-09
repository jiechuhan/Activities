var inquirer = require("inquirer");
var fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "checkbox",
            message: "What languages do you know?",
            name: "language",
            choices: ["HTML", "CSS", "JavaScript", "MySQL"]
        },
        {
            type: "list",
            message: "What is your preferred method of communciation?",
            name: "method",
            choices: ["text", "phone", "email"]
        }
    ])
    .then(function (response) {
        response = JSON.stringify(response)
        fs.appendFile("log.text", response + "\n", function (err) {
            if (err) {
                return console.log(err);
            }
            console.log("success!");
        })
    })