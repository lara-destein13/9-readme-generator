// Including packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of objects containing questions that will be presented to the user
// upon running the application in the command line.
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

// The following functions create a template for our README.md file
function writeTitle(title) {
    var output = `<h1>${title}</h1>\n\n `;
    fs.appendFileSync("README.md", output);
}

function writeDescription(description) {
    var output = `## Description\n 🔍 ${description}\n\n `
    fs.appendFileSync("README.md", output);
}

function writeTableOfContents(tableOfContents) {
    var output = `## Table of Contents\n - [Description](#description)\n - [Installation](#installation)\n - [Usage](#usage)\n - [License](#license)\n - [Contribution](#contribution)\n - [Tests](#tests)\n - [Questions](#questions)\n\n`
    fs.appendFileSync("README.md", output);
}

function writeInstallation(installation) {
    var output = `## Installation\n 💾 ${installation}\n\n`
    fs.appendFileSync("README.md", output);
}

function writeUsage(usage) {
    var output = `## Usage\n 💻 ${usage}\n\n`
    fs.appendFileSync("README.md", output);
}

function writeLicense(license) {
    var output = `## License\n ![badge](https://img.shields.io/badge/license-${license}-brightgreen)\n This application is covered by the ${license}\n license\n\n`
    fs.appendFileSync("README.md", output);
}

function writeContributing(contributing) {
    var output = `## Contributing\n 👪 ${contributing}\n\n`
    fs.appendFileSync("README.md", output);
}

function writeTests(tests) {
    var output = `## Tests\n ${tests}\n\n`
    fs.appendFileSync("README.md", output);
}

// A function that generates the Markdown for our README.md file by calling each of the above functions
// and passing in the answers to each question. 
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

// Inquirer is used to prompt a user with a quesiton and take in user input (answers).
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








