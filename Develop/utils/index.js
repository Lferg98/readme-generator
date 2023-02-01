// Packages required for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// An array of questions for user input using inquirer with a validate function to determine if the user has entered a value
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Please enter your Github username!');
                return false;
            }
        },

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your project title!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'Please write a short description of your project',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }

    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please enter a license for your project!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'dependencies',
        validate: dependenciesInput => {
            if (dependenciesInput) {
                return true;
            } else {
                console.log('Please enter a command to install dependencies!');
                return false;
            }
        },

    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter a command to run tests!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repository?',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter information about using the repository!');
                return false;
            }
        },
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repository?',
        name: 'contributing',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter information about contributing to the repository!');
                return false;
            }
        },
    },
]






// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();