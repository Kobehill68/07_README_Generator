const inquirer = require('inquirer');
const fs = require('fs');
//const generate = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
        {
        type: 'input',
        message: 'What is your user name?',
        name: 'name',
        },
        {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
        },
        {
        type: 'input',
        message: 'Please enter your bio.',
        name: 'bio',
         },  
        {
        type: 'input',
        message: 'What is your GitHub link?',
        name: 'github',
        },
        {
        type: 'input',
        message: 'What is your LinkedIn link?',
        name: 'linkedin',
        },
];
// inquirer
//     .prompt([
//             {
//             type: 'input',
//             message: 'What is your user name?',
//             name: 'name',
//             },
//             {
//             type: 'input',
//             message: 'What is your location?',
//             name: 'location',
//             },
//             {
//             type: 'input',
//             message: 'Please enter your bio.',
//             name: 'bio',
//              },  
//             {
//             type: 'input',
//             message: 'What is your GitHub link?',
//             name: 'github',
//             },
//             {
//             type: 'input',
//             message: 'What is your LinkedIn link?',
//             name: 'linkedin',
//             },
//     ]);
// +

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile()
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
