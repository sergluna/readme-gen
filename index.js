const fs = require('fs');
const inq = require('inquirer');

let readME = () =>
`
# README Generator

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
    I want to be able to quickly create priofessional README's for my repositories.

- Why did you build this project?
    I built this project so that as my web development skills grow I will be able to easilly showcase those skills more professionally and ea

- What problem does it solve?
    It solves the problem of time spent having to create README for every repositry. With this project I can save time using a template and quickly add in the repository specific information.

- What did you learn?
    I learned how to create a project that can make inquiries for information that is then used to create a document of youre choosing. 
    I alse learned the importance of creating a professional README and the impact that it can have on my career.

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    md
    ![alt text](assets/images/screenshot.png)
    

## Credits

Shout out to my instructors and TA's who are make themselves available. 

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

Inquirer Package

## Contributing

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.

## Questions

If you have any questions please feel free to reach out to me by visiting my github page. 



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
        choices: ['default','MIT','Apache','GPL'],
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
        name: 'questions',
    }
    ]).then((response) => {
        console.log(response)
    });
    