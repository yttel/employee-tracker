var connection = require("./connection.js");

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
    var queryString = "SELECT ?? FROM ?? ORDER BY ?? ASC";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },
  findAllByActive: function(isActive) {
    var queryString =
      "SELECT first_name, last_name, manager_id, title, salary, dept_name " + 
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
        console.log(`isActive: ${isActive}`)
        console.table(result);
      }
    );
  },
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
