// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt(
    [
        {
            type: 'input',
            message: 'What is your Github username?',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your project title?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please write a short description of your project',
            name: 'description'
        },
        {
            type: 'list',
            message: 'What kind of license should your project have?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: 'dependencies'
        },
        {
            type: 'input',
            message: 'What command should be run to run tests?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repository?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repository?',
            name: 'contributing'
        },
    ])
    
    
    
    
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();