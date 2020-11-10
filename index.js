const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = () => {
    return inquirer.prompt( [
        {
            type: "input",
            message: "What is your project Title to be?",
            name: "title",
        },
        {
            type: "input",
            message: "What is the description title of your readme?",
            name: "description",
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
            message: "Insert contribution guidelines.",
            name: "contributionGuidelines",            
        },
        {
            type: "input",
            message: "Input test instructions?",
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
    ]);

}
// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile( fileName+ '.md', data, (err) => {
        err ? console.log(err) : console.log("Success!")
    })
   
}

// function to initialize program
const init = async() => {
    console.log(writeToFile) 
    try {
        const answers = await questions();
        const md = generateMD(answers);
        await fs.writeFileSync('README.md', md)
        console.log("Successful README.md generated!")
    } catch (err) {
        console.log(err)
    }
}

// function call to initialize program
init();
