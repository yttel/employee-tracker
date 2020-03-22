// Assignment 12, written by Letty Bedard

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employeeDB"
});

connection.connect(function(err) {
  if (err) throw err;
  mainMenu();
});

function mainMenu() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "ADD (employee, department, role)",
        "VIEW (employee, department, role, by manager, total salary by department)",
        "UPDATE (employee role or manager)",
        "TERMINATE (employee, department, role)"
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "A":
        add();
        break;
      case "V":
        view();
        break;
      case "U":
        update();
        break;
      case "T":
        terminate();
        break;
      }
    });
}

function add() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to add?",
      choices: [
        "Employee",
        "Department",
        "Role",
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "E":
        addEmp();
        break;
      case "D":
        addDept();
        break;
      case "R":
        addRole();
        break;
      }
    });
}

function addEmp(){}
function addDept(){}
function addRole(){}

function view(){
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to view?",
      choices: [
        "Departments",
        "Roles",
        "Single Employee",
        "Current Employees",
        "Former Employees",
        "Employment History",
        "Total department budget"
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "D":
        dispDept();
        break;
      case "R":
        dispRole();
        break;
      case "S":
        dispEmp();
        break;
      case "C":
        dispAllCurrent();
        break;
      case "F":
        dispAllFormer();
        break;
      case "E":
        dispEmpHistory();
        break;
      case "T":
        dispDeptBudget();
        break;
      }
    });
}

function dispDept(){}
function dispRole(){}
function dispEmp(){}
function dispAllCurrent(){}
function dispAllFormer(){}
function dispEmpHistory(){}
function dispDeptBudget(){}

function update(){
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to update?",
      choices: [
        "Department (of role)",
        "Manager (of employee)",
        "Role (of employee)"
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "D":
        updateDept();
        break;
      case "R":
        updateRole();
        break;
      case "M":
        updateManager();
        break;
      }
    });
}

function updateDept(){}
function updateRole(){}
function updateManager(){}

function terminate(){
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "Who would you like to terminate?",
      choices: [
        "Departments",
        "Roles",
        "Single Employee",
        "Current Employees",
        "Former Employees",
        "Employment History"
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "D":
        dispDept();
        break;
      case "R":
        dispRole();
        break;
      case "S":
        dispEmp();
        break;
      case "C":
        dispAllCurrent();
        break;
      case "F":
        dispAllFormer();
        break;
      case "E":
        dispEmpHistory();
        break;
      }
    });
}
