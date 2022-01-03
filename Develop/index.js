// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is the project title?", 
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief description of your project: ",
    },
    {
        type: "input",
        name: "table of contents",
        message: "Create a table of contents",
    },
    {
        type: "input",
        name: "installation",
        message: "Describe the installation process if any: ",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use: ",
    },
    {
        type: "list",
        name: "license",
        message: "Provide the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open" 
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Who are the contributors of this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "Write tests for your application",
    },
    {
        type: "input",
        name: "questions",
        message: "What do I do if I have an issue?",
    },    
];


// TODO: Create a function to write README file

// TODO: Create a function to initialize app

// for (var i=0; i< questions.length; i++);
// const question = questions[i]

function writeTitle(title) {
    var output = `<h1 align="center">${title} 👋</h1>\n\n `;
    fs.appendFileSync("README.md", output);
}


function writeDescription(description) {
    var output = `## Description\n 🔍 ${description}\n\n `
    fs.appendFileSync("README.md", output);
}

function writeTableOfContents(tableOfContents) {
    var output = `## Table of Contents\n - [Description](#description)\n - [Installation](#installation)\n - [Usage](#usage)\n - [License](#license)\n - [Contribution](#contribution)\n - [Tests](#tests)\n - [Questions](#questions)\n\n `
    fs.appendFileSync("README.md", output);
}

function writeInstallation(installation) {
    var output = `${installation}\n `
    fs.appendFileSync("README.md", output);
}

function writeUsage(usage) {
    var output = `${usage}\n `
    fs.appendFileSync("README.md", output);
}

function writeLicense(license) {
    var output = `${license}\n `
    fs.appendFileSync("README.md", output);
}

function writeContributing(contributing) {
    var output = `${contributing}\n `
    fs.appendFileSync("README.md", output);
}

function writeTests(tests) {
    var output = `${tests}\n `
    fs.appendFileSync("README.md", output);
}

function genMarkdown(answers) {
    console.dir(answers);
    fs.writeFileSync('README.md', '');
    writeTitle(answers.projectTitle);
    writeDescription(answers.description);
    writeTableOfContents(answers['table of contents']);
    writeInstallation(answers.installation);
    writeUsage(answers.usage);
    writeLicense(answers.license);
    writeContributing(answers.contributing);
    writeTests(answers.tests);
}

inquirer
  .prompt(questions)
  .then((answers) => {
    genMarkdown(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("foo");
    } else {
      console.log("bar");
    }
  });







