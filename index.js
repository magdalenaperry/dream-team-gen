const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

    
const dreamTeam = [];

// initial questions to add one team  manager
const initQ = [{
    // type: "input",
    message: "What is the team manager's name?",
    name: "name"
}, {
    // type: "input",
    message: "What is the team manager's employee ID?",
    name: "ID"
}, {
    // type: "list",
    message: "What is the managers's email address?",
    name: "email"
}, {
    // type: "input",
    message: "What is the manager's office number?",
    name: "office"
}, {
    type: "list",
    message: "Would you like to add another member?",
    name: "add",
    choices: [{
            name: "Engineer",
            value: "engineer"
        },
        {
            name: "Intern",
            value: "intern"
        },
        {
            name: "I'm finished",
            value: "none"
        }
    ],

}]

// question to add another employee
const employeeTypeQs = {
    type: "list",
    message: "What type of employee would you like to add?",
    name: "add",
    choices: [{
            name: "Engineer",
            value: "engineer"
        },
        {
            name: "Intern",
            value: "intern"
        },
        {
            name: "I'm finished",
            value: "none"
        }
    ]
}

// questions for interns
const internQs = [{
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "internEmail"
    }, {
        type: "input",
        message: "What is the intern's id?",
        name: "internId"
    }, {
        type: "input",
        message: "What is the intern's office number?",
        name: "internOfficeNumber"
    }, {
        type: "input",
        message: "What is the intern's Github username?",
        name: "internGithub"
    }
]
// questions for engineers
const engineerQs = [{
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "engineerEmail"
    }, {
        type: "input",
        message: "What is the engineer's id?",
        name: "engineerId"
    }, {
        type: "input",
        message: "What is the engineer's office number?",
        name: "engineerOfficeNumber"
    }, {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "engineerGithub"
    }
]
// init function to start with managers and then check if finished
const init = function () {
    inquirer.prompt(initQ).then((answer) => {
        if (answer.add === "intern") {
            internQuestions();
        } else if (answer.add === "engineer") {
            engineerQuestions();
        } else {
            renderTeam();
        }
    })
}

const internQuestions = function () {
    inquirer.prompt(internQs).then((answer) => {
        employeeType();
    })
}

const engineerQuestions = function () {
    inquirer.prompt(engineerQs).then((answer) => {
        employeeType();
    })
}

const employeeType = function () {
    inquirer.prompt(employeeTypeQs).then((answer) => {
        if (answer.add === "intern") {
            internQuestions();
        } else if (answer.add === "engineer") {
            engineerQuestions();
        } else {
            renderTeam();
        }
    })
}


const renderTeam = function () {

    fs.writeFile("./dist/team-profiles", HTML, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("check the ./dist folder for your team-profile.html file")
        }
    })


    console.log('Congratulations you are finished creating your team!')
}





init();