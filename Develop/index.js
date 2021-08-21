// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        message: "What is the title fo your repository?",
        name: "Title"
    },
    {
        type: "input",
        message: "Please add the screenshot of your project here.",
        name: "Screenshot"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "Description"
    },
    {
        type: "input",
        message: "Please include a link to the deployed application here.",
        name: "Deployed link"
    },
    {
        type: "input",
        message: "Provide directions for installation.",
        name: "Installation"
    },
    {
        type: "input",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
        name: "Usage"
    },
    {
        type: "checkbox",
        message: "Pease select a license for this project.",
        choices: ["Apache License 2.0", "MIT", "GNU GPLv3", "No license for me"],
        name: "License"
    },
    {
        type: "input",
        message: "please list github usernames of anyone who contributed to this project.",
        name: "Contributing"

    }
    {
        type: "input",
        message: "Provide examples on how to run tests for this application.",
        name: "Tests"
    },
    {
        type: "input",
        message: "Please add your github username",
        name: "username"
    },
    {
        type:"input",
        message: "Please add your email address.",
        name: "email"
    }
];

// TODO: Create a function to write README file
const promptProject = () => inquirer.prompt(questions);

const writeToFile = (pathName, fileName, data) => {
    if (!fs.existsSync(pathName))
    {
        fs.mkdirSync(pathName);
    }
    return new Promise((resolve, reject) => {
        fs.writeFile(pathName + "/" + fileName, data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() { promptProject()
    .then(projectData => {
        return generateMarkdown(projectData);
    })
    .then(readmeMD => {
        return writeToFile("./dist", "README.md", readmeMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
        console.log(err);
    });}

// Function call to initialize app
init();
