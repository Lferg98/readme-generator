//packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
  } else if(license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
  } else if(license === 'GPL') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
  } else {
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if(license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  } else if(license === 'Apache') {
    link = 'https://opensource.org/licenses/Apache-2.0';
  } else if(license === 'GPL') {
    link = 'https://www.gnu.org/licenses/gpl-3.0';
  } else {
    link = '';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if(license === 'None') {
    licenseSection = '';
  } else {
    licenseSection = 'license: ${license}';
    
  }
    
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)} ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ### * [Description](#description)
  ### * [License](#license)
  ### * [Installation](#dependencies)
  ### * [Usage](#usage)
  ### * [Contributors](#contributing)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

## Installation:
### You must install the following dependencies to run this application: ${answer.dependencies}

## Usage:
### ${answer.usage}

## Contributors:
### ${answer.contributing}

## Tests:
### To run tests, you need to run the following command: ${answer.tests}

## Questions:
### If you have any questions about the repo, open an issue or contact me directly at ${answer.email}. You can find more of my work at [${answer.username}](
   
`;
}

module.exports = generateMarkdown;