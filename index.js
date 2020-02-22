const inquirer = require("inquirer");
const fs = require("fs");
const pdf = require("html-pdf");
const axios = require("axios");
const generateHTML = require("./generateHTML");

inquirer.prompt([
    {
        type:"input",
        name:"username",
        message: "Enter your Github username:"
    },
    {
        type: "list",
        names: "color",
        message: "Choose your color!",
        choices: ["Blue", "Green", "Pink", "Red"]
    }
]);

// function writeToFile(fileName, data) {
 
// }

function init() {
    inquirer
    .prompt(questions)
    .then(function({username,color,}){
        const queryURL = `https://api.github.com/users/${username}`;
        const queryStarURL = `https://api.github.com/users/${username}/starred`
        axios.get(queryURL);
        })
        .then(function)
        
    });

init();