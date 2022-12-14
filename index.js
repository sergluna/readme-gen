const fs = require('fs');
const inq = require('inquirer');
let badge = "";
let readME = ({ title, license, description, installation, usage, username}) =>
    `
# ${title}

## Description

${description}

- What was your motivation?\ \ 
    I want to be able to quickly create priofessional README's for my repositories.

- Why did you build this project?\ \ 
    I built this project so that as my web development skills grow I will be able to easilly showcase those skills more professionally and ea

- What problem does it solve?\ \ 
    It solves the problem of time spent having to create README for every repositry. With this project I can save time using a template and quickly add in the repository specific information.

- What did you learn?\ \ 
    I learned how to create a project that can make inquiries for information that is then used to create a document of youre choosing.\ \ 
    I alse learned the importance of creating a professional README and the impact that it can have on my career.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

![image](assets/README_1.png)
![image](assets/README_2.png)

![badmath](https://img.shields.io/badge/Language-JavaScript-blue)
![badmath](https://img.shields.io/badge/Registry-npm-ff69b4)
![badmath](https://img.shields.io/badge/package-Inquirer-9cf)

## Credits

Shout out to my instructors and TA's who are make themselves available. 

## License
![badmath](https://img.shields.io/badge/License-${license}-red)

---

## Questions

If you have any questions please feel free to reach out to me by visiting my github page.
https://github.com/${username}

`;

inq.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'list',
        message: 'What type of license will you use for this project?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL'],
    },
    {
        type: 'input',
        message: 'Give us a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Are there any installation instructions that need to be followed? If there are none please responde with an N/A.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Describe how to use this project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    }
]).then((response) => {
    console.log(response)

    const readMeStuff = readME(response);
    fs.writeFile('README.md', readMeStuff, (error) =>
        error ? console.log(error) : console.log('It worked!'))
});