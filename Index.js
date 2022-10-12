const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const teamMembers = []
function createManager() {
    console.log('Please build your team 👥');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
          
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
          
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
         
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
          
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
       console.log (teamMembers)
        createTeam();
      });
    }
      createManager()