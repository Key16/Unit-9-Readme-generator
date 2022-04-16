// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input


const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What your github username?'
        },
    ])
}

// TODO: Create a function to write README file

const generateREADME = ({ title }) =>

    `# ${title}

    ## Description

    ## Table of Contents

    ## Installation

    ## Usage

    ## Licenses

    ## Contributing

    ## Tests

    ## Questions

    For any additional questions regarding the project, please reach out to me at my [Github](https://github.com/${github}), or email me at ${email}`;



const init = () => {
    questions()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('READMEEXAMPLE.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();
