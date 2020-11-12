const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
        {
            type: "input",
            message: "What is your project Title?",
            name: "title",
        },
        {
            type: "input",
            message: "What is your user story",
            name: "userStory",
        },
        {
            type: "input",
            message: "What are you installation instructions?",
            name: "installationInstructions",
        },
        {
            type: "input",
            message: "What usage information would you like to include?",
            name: "usageInformation",           
        },
        {
            type: "input",
            message: "Insert contributors.",
            name: "contributionGuidelines",            
        },
        {
            type: "input",
            message: "What are your test instructions for the project?",
            name: "testInstructions",
        },
        {
            type: "list",
            message: "What license would you like?",
            name: "license",
            choices: [
                "MIT",
                "IBM",
                "ISC",
                "Mozilla",
                "No License"
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
    fs.writeToFile( fileName, data, (err) => {
        if(err){
            console.log(err)
        }
    })
   
}

// function to initialize program
function init() {
    try {
        inquirer.prompt(questions).then((answers) =>{
            console.log("README file creation has started");
            writeToFile('GeneratedREADME.md', generateMD(answers));
            console.log("README file succesfully created");
        })
    }catch(err) {
        console.log(err)
    }
}

// function call to initialize program
init();
