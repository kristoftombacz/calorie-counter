'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'gyuri',
  database: 'calorie',
  timezone: 'utc'
});
connection.connect();

module.exports = {
  connection: connection
}
