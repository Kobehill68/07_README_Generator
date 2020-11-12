const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
        {
            type: "input",
            message: "What is your project Title?",
            name: "title",
        },
        {
            type: "input",
            message: "Please describe your project.",
            name: "descritption",
        },
        {
            type: "input",
            message: "What are you installation instructions?",
            name: "installation",
        },
        {
            type: "input",
            message: "What usage information would you like to include?",
            name: "usageInformation",           
        },
        {
            type: "input",
            message: "Insert contributors.",
            name: "contribution",  
            default: "N/A"          
        },
        {
            type: "input",
            message: "What are your test instructions for the project?",
            name: "testInstructions",
            default : "N/A"
        },
        {
            type: "list",
            message: "What license would you like?",
            name: "license",
            choices: [
                'MIT',
                'Apache',
                'Creative Commons',
            ]

        },
        {
            type: "input",
            message: "What is your Github username?",
            name: "github",

        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",

        },     
];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName , data , err => err ? console.error(err) : console.log("Success!"));
}

// function to initialize program
function init() {
   inquirer
    .prompt(questions)
    .then((answers) => writeToFile("./examples/README.md",generateMarkdown(answers))) 
}

// function call to initialize program
init();
