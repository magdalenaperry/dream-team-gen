const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const fileGenerate = require("./html-generate");
    
const dreamTeam = [];

// initial questions to add one team  manager
const initQ = [{
    // type: "input",
    message: "What is the team manager's name?",
    name: "name"
}, {
    // type: "input",
    message: "What is the team manager's employee ID?",
    name: "id"
}, {
    // type: "list",
    message: "What is the managers's email address?",
    name: "email"
}, {
    // type: "input",
    message: "What is the manager's office number?",
    name: "officeNumber"
}, {
    type: "list",
    message: "Would you like to add another member?",
    name: "add",
    choices: [{
            name: "Engineer",
            // value: "engineer"
        },
        {
            name: "Intern",
            // value: "intern"
        },
        {
            name: "I'm finished",
            // value: "none"
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
            // value: "engineer"
        },
        {
            name: "Intern",
            // value: "intern"
        },
        {
            name: "I'm finished",
            // value: "none"
        }
    ]
}

// questions for interns
const internQs = [{
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the intern's id?",
        name: "id"
    }, {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    }
]

// questions for engineers
const engineerQs = [{
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    }, {
        type: "input",
        message: "What is the engineer's id?",
        name: "id"
    }, {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "github"
    }
]

// init function to start with manager question and then push the manager questions into dream Team empty array
const init = function () {
    inquirer.prompt(initQ).then((answer) => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        dreamTeam.push(initQ);

        
        if (answer.add === "intern") {
            internQuestions();
        } else if (answer.add === "engineer") {
            engineerQuestions();
        } else {
            renderTeam();
        }
    })
}
// prompt the questions for intern and push into dream team array
const internQuestions = function () {
    inquirer.prompt(internQs).then((answer) => {
        const internArr = new Intern(answer.name, answer.id, answer.email, answer.school);
        dreamTeam.push(internArr);
        employeeType();
    })
}

// prompt the questions for intern and push into dream team array
const engineerQuestions = function () {
    inquirer.prompt(engineerQs).then((answer) => {
        const engineerArr = new Engineer(answer.name, answer.id, answer.email, answer.github)
        dreamTeam.push(engineerArr);
        employeeType();
    })
}

// prompt to render new team members
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

// create file in dist
const renderTeam = function () {
    fs.writeFileSync("./dist/team-profiles.html", fileGenerate(dreamTeam), 'utf-8');
}  


init();