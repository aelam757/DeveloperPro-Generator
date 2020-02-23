const inquirer = require("inquirer");
// const fs = require("fs");
const pdf = require("html-pdf");
const axios = require("axios");
const generateHTML = require("./generateHTML.js");
const questions = [{
        type:"input",
        name:"username",
        message: "Enter your Github username:"
    },
    {
        type: "list",
        name: "color",
        message: "Choose your color!",
        choices: ["blue", "green", "pink", "red"]
    }];
    


// fs.writeFile("index.html",generateHTML(response,color),function(error,response){
//     if (error) throw(error);

// });


 async function init() {
    let data;
    await inquirer
    .prompt(questions)
    .then(async function({username,color}){
        const queryURL = `https://api.github.com/users/${username}`;
        const queryStarURL = `https://api.github.com/users/${username}/starred`
       const userData = await axios.get(queryURL);
       const repoData = await axios.get(queryStarURL);
        console.log(username,color);
        console.log(userData,repoData);
        data = {username,color,userData,repoData}
    });
       console.log(generateHTML(data));
        pdf.create(generateHTML(data)).toFile('./devprfile.pdf',function(error,response){ 
            if(error) throw (error)
        });
};

init();
