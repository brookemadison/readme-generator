// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


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
        type: "checkbox",
        message: "What do you want to include in your table of contents? (check all that apply)",
        choices: ["Description", "Installation", "Usage", "License", "Contributing", "Tests", "Questions"],
        name: "Table of contents"
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
        name: "Questions"
    },
    {
        type:"input",
        message: "Please add your email address.",
        name: "Questions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
