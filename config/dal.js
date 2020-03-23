const connection = require("./connection.js");
const menu = require("./menu.js");

const dal = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    const queryString = "SELECT ?? FROM ?? ORDER BY ?? ASC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },

  insertEmp: function(fName, lName, nRole, nMgr) {
    const queryString =
    "INSERT INTO employee (first_name, last_name, role_id, manager_id)" +
    "VALUES (?, ?, ?, ?)"

    connection.query(
      queryString,
      [fName, lName, nRole, nMgr],
      function(err, result) {
        if (err) throw err;
        console.table(result);
        menu.mainMenu();
      }
    );
  },

  insertRole: function(title, salary, deptID) {
    const queryString =
    "INSERT INTO role (title, salary, dept_id)" +
    "VALUES (?, ?, ?)"

    connection.query(
      queryString,
      [title, salary, dept_id],
      function(err, result) {
        if (err) throw err;
        console.table(result);
        menu.mainMenu();
      }
    );
  },

  insertDept: function(fName, lName, nRole, nMgr) {
    const queryString =
    "INSERT INTO employee (first_name, last_name, role_id, manager_id)" +
    "VALUES (?, ?, ?, ?)"

    connection.query(
      queryString,
      [fName, lName, nRole, nMgr],
      function(err, result) {
        if (err) throw err;
        console.table(result);
        menu.mainMenu();
      }
    );
  },



  dispEmpByDept: function(deptID) {
    const queryString =
      "SELECT CONCAT(first_name,' ', last_name) AS 'name', title, dept_name AS 'department', salary " + 
      "FROM department INNER JOIN role " +
      "ON department.dept_id = role.dept_id " +
      "INNER JOIN employee " +
      "ON role.role_id = employee.role_id " +
      "WHERE department.dept_id = ? " +
      "AND employee.active = 1";

    connection.query(
      queryString,
      [deptID],
      function(err, result) {
        if (err) throw err;
        console.table(result);
        //menu.mainMenu();
      }
    );
  },

  dispEmpByRole: function(roleID) {
    const queryString =
      "SELECT CONCAT(first_name,' ', last_name) AS 'name', title, dept_name AS 'department', salary " + 
      "FROM department INNER JOIN role " +
      "ON department.dept_id = role.dept_id " +
      "INNER JOIN employee " +
      "ON role.role_id = employee.role_id " +
      "WHERE role.role_id = ? " +
      "AND employee.active = 1";

    connection.query(
      queryString,
      [roleID],
      function(err, result) {
        if (err) throw err;
        console.table(result);
        //menu.mainMenu();
      }
    );
  },

  findAllByActive: function(isActive) {
    const queryString =
      "SELECT CONCAT(first_name,' ', last_name) AS 'name', title, dept_name AS 'department', salary " + 
      "FROM department INNER JOIN role " +
      "ON department.dept_id = role.dept_id " +
      "INNER JOIN employee " +
      "ON role.role_id = employee.role_id " +
      "WHERE employee.active = ?";

    connection.query(
      queryString,
      [isActive],
      function(err, result) {
        if (err) throw err;
        //console.log(`isActive: ${isActive}`)
        console.table(result);
      }
    );
  },

  //expects deptID int and deptName string
  totalSalary: function(deptID, deptName) {
    var queryString =
      "SELECT salary " + 
      "FROM role INNER JOIN employee " +
      "ON role.role_id = employee.role_id " +
      "WHERE employee.active = 1 AND role.dept_id = ?";

    connection.query(
      queryString,
      [deptID],
      function(err, result) {
        if (err) throw err;
        //console.table(result);
        console.log(`Total of salaries for ${deptName} is $` + result.reduce(( acc, cur ) => acc + cur.salary , 0));
      }
    );
  }
};

module.exports = dal;
