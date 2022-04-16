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
        }
    ])
}

// TODO: Create a function to write README file

const generateREADME = ({ title }) =>

    `# ${title}`;



const init = () => {
    questions()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('READMEEXAMPLE.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

init();
