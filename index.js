// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//questions asked by inquirer in the command line

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of this repo:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please input installation instructions for packages:'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'WTFPL License'],
            message: 'Choose a licenses for your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please input a usage guide:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please input contribution message:'
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

//Function that writes the read me base file, with deconstructed answers

const generateREADME = ({ title, description, contribution, usage, test, installation, github, email, license }) =>


    `# ${title}

${renderLicensesBadge(license)}
## Description
${description}
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
This project is under the ${license}.

## Contributing
Contributions are what make the open source community such an amazing place to learn, inspire, and create. 

${contribution}
## Tests 
To run tests, use the following command:
\`\`\`
${test}
\`\`\`

## Questions

If you have any questions regarding this repository, you can contact me directly at ${email} or find more of my work at [${github}](https://github.com/${github})`;

//function that renders the license badge
function renderLicensesBadge(license) {


    if (license === 'MIT License') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    }
    else if (license === 'GNU GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    }
    else if (license === 'GNU AGPLv3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    }
    else if (license === 'GNU LGPLv3') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    }
    else if (license === 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
    else if (license === 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
    else if (license === 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    }
    else if (license === 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    }
    else if (license === 'WTFPL License') {
        return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
    }

    return "";
}

//initiates questions and then writes the file

const init = () => {
    questions()

        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();
