// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title fo your repository?",
        name: "title"
    },
    {
        
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();