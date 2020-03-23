const inquirer = require("inquirer");
const dal = require("./dal.js");

const menu = {
  mainMenu: function() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "ADD (emp, dept, role)",
          "VIEW (emp, dept, role, by mgr, total salary by dept)",
          "UPDATE (employee role or manager)",
          "TERMINATE (employee)"
        ],
      })
      .then(function(answer) {
        switch (answer.action[0]) {
        case "A":
          menu.add();
          break;
        case "V":
          menu.view();
          break;
        case "U":
          menu.update();
          break;
        case "T":
          menu.terminate();
          break;
        }
      });
  },

  add: function() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
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
          menu.addEmp();
          break;
        case "D":
          menu.addDept();
          break;
        case "R":
          menu.addRole();
          break;
        }
      });
  },

  addEmp: function(){
    //const roles = getRoles();
    const roles = [        
      "team mgr",
      "adjuster",
      "branch mgr",
      "sales rep",
      "regional mgr",
      "compliance analyst",
      "director",
      "analyst",
      "CEO"
    ];

    const mgrs = [
      "Letty Bedard",
      "Kimbra Bragg",
      "Pearl Bowens",
      "Lloyd Segers",
      "Marianna Breckenridge",
      "Tiera Labombard",
      "Sheridan Frigo",
      "May Kuehl",
      "Kenia Wheat",
      "Eldora Caudillo"
    ];

    inquirer
    .prompt({
      name: "firstName",
      type: "input",
      message: "First name?"
    },{
      name: "lastName",
      type: "input",
      message: "Last name?"
    },{
      name: "role",
      type: "list",
      message: "Role?",
      choices: roles
    },{
      name: "manager",
      type: "list",
      message: "Manager?",
      choices: mgrs
    })
    .then(function(answer) {
      let roleCode;
      let mgrCode;

      switch (answer.role) {
        case "team mgr":
          roleCode = 1;
          break;
        case "adjuster":
          roleCode = 2;
          break;
        case "branch mgr":
          roleCode = 3;
          break;
        case "sales rep":
          roleCode = 4;
          break;
        case "regional mgr":
          roleCode = 5;
          break;
        case "compliance analyst":
          roleCode = 6;
          break;
        case "director":
          roleCode = 7;
          break;
        case "analyst":
          roleCode = 8;
          break;
        case "CEO":
          roleCode = 9;
          break;
      }

      switch (answer.manager) {
        case "Letty Bedard":
          mgrCode = 1;
          break;
        case "Kimbra Bragg":
          mgrCode = 2;
          break;
        case "Pearl Bowens":
          mgrCode = 3;
          break;
        case "Lloyd Segers":
          mgrCode = 4;
          break;
        case "Marianna Breckenridge":
          mgrCode = 5;
          break;
        case "Tiera Labombard":
          mgrCode = 6;
          break;
        case "Sheridan Frigo":
          mgrCode = 7;
          break;
        case "May Kuehl":
          mgrCode = 8;
          break;
        case "Kenia Wheat":
          mgrCode = 9;
          break;
        case "Eldora Caudillo":
          mgrCode = 10;
          break;
        }

      dal.insertEmp(answer.firstName, answer.lastName, roleCode, mgrCode);
    });

  },

  addDept: function(){},
  addRole: function(){},

  view: function(){
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "What would you like to view?",
        choices: [
          "Current Employees",
          "Former Employees",
          "Roles",
          "Departments",
          "Total department budget"
        ]
      })
      .then(function(answer) {
        switch (answer.action[0]) {
        case "D":
          menu.dispEmpByDept();
          break;
        case "R":
          menu.dispEmpByRole();
          break;
        case "C":
          menu.dispAllCurrent();
          break;
        case "F":
          menu.dispAllFormer();
          break;
        case "T":
          menu.dispDeptBudget();
          break;
        }
      });
  },

  dispEmpByDept:function (){
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which department?",
      choices: [
        "claims",
        "sales",
        "product management",
        "research",
        "executive",
      ]})
      .then(function(answer) {
        switch (answer.action[0]) {
        case "c":
          dal.dispEmpByDept(1);
          break;
        case "s":
          dal.dispEmpByDept(2);
          break;
        case "p":
          dal.dispEmpByDept(3);
          break;
        case "r":
          dal.dispEmpByDept(4);
          break;
        case "e":
          dal.dispEmpByDept(5);
          break;
        }
      });
  },

  dispEmpByRole:function (){
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which role?",
      choices: [
        "team mgr",
        "adjuster",
        "branch mgr",
        "sales rep",
        "regional mgr",
        "compliance analyst",
        "director",
        "analyst",
        "CEO"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
      case "team mgr":
        dal.dispEmpByRole(1);
        break;
      case "adjuster":
        dal.dispEmpByRole(2);
        break;
      case "branch mgr":
        dal.dispEmpByRole(3);
        break;
      case "sales rep":
        dal.dispEmpByRole(4);
        break;
      case "regional mgr":
        dal.dispEmpByRole(5);
        break;
      case "compliance analyst":
        dal.dispEmpByRole(6);
        break;
      case "director":
        dal.dispEmpByRole(7);
        break;
      case "analyst":
        dal.dispEmpByRole(8);
        break;
      case "CEO":
        dal.dispEmpByRole(9);
        break;
      }
    });
  },

  dispAllCurrent: function(){
    dal.findAllByActive(1);
  },

  dispAllFormer: function(){
    dal.findAllByActive(0);
  },

  dispDeptBudget:function (){
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Which department?",
      choices: [
        "claims",
        "sales",
        "product management",
        "research",
        "executive"
      ]
    })
    .then(function(answer) {
      switch (answer.action[0]) {
      case "c":
        dal.totalSalary(1, answer.action);
        break;
      case "s":
        dal.totalSalary(2, answer.action);
        break;
      case "p":
        dal.totalSalary(3, answer.action);
        break;
      case "r":
        dal.totalSalary(4, answer.action);
        break;
      case "e":
        dal.totalSalary(5, answer.action);
        break;
      }
    });
  },

  update: function(){
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
  },

  // updateDept: function(){},
  // updateRole: function(){},
  // updateManager: function(){},

  terminate: function(){
    inquirer
      .prompt({
        name: "action",
        type: "list",
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
}

module.exports = menu;
