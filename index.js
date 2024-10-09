// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the name of the app:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide app description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter process to install this app:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide steps for usage:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide collaborators:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please choose a license:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide testing instructions:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide an email address for any questions about the app:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log(error);
        }
        console.log('Markdown file created successfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
