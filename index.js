// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please input installation instructions for packages:'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            message: 'Choose a licenses for your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please input a usage guide:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please input how to test:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username (no @ required):'
        },
    ])
}

// TODO: Create a function to write README file

const generateREADME = ({ title, usage, test, installation, github, email, license }) =>


    `# ${title}
${license}
## Description

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 
Please run the following command line to install the neccesary packages
\`\`\`
${installation}
\`\`\`


## Usage
How to use this code

${usage}
## Licenses
This project is under the ${license} license

## Contributing
If you would like to contribute it, you can follow these guidelines for how to do so.
## Tests 
To run tests, use the following command:
\`\`\`
${test}
\`\`\`

## Questions

If you have any questions regarding this repository, you can contact me directly at ${email} or find more of my work at [${github}](https://github.com/${github})`;

function renderLicensesBadge(license) {
    let newlicense = ""
    if (license === "MIT License") {
        newlicense = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    else {
        newlicense = ""
    }
    return newlicense;
}


const init = () => {
    questions()
        .then((answers) => renderLicensesBadge(answers.license))
        .then((license) => console.log(license))
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();
