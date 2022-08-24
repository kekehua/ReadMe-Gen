// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
      message: "What is the title of your project?",
      type: "input",
      name:"title"  
    },
    {
        message:"Describer your project",
        type:"input",
        name:"description"
    },
    {
        message:"Why did you build this project?",
        type:"input",
        name:"reason"
    },
    {
        message:"How do you install you project?",
        type:"input",
        name:"install"
    },
    {
        message:"Provide Instructions and examples for use",
        type:"input",
        name:"usage"
    },
    {
        message:"List your collaborators",
        type:"input",
        name:"partners"
    },
    {
        message:"What licenses do you have",
        type:"input",
        name:"license"
    },
    {
        message:"What is your GitHub UserName?",
        type:"input",
        name:"user"
    },
    {
        message:"What is your email address",
        type:"input",
        name:"email"
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data), err =>
    err ? console.log(err) : console.log('Success!')
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data)=>{
            return generateMarkdown(data);
        })
        .then((data) =>{
            fs.writeFile("README.md",data, (err) => err && console.error(err));
        })
}

// Function call to initialize app
init();
