'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'test',
  password: 'gyuri',
  database: 'calorie'
});

connection.connect();

function addMeal(attr, cb) {
  connection.query('INSERT INTO calorie SET ?', attr, function(err, result) {
    cb(result);
  });
}

function allMeals(cb) {
  connection.query('SELECT * FROM calorie;', function(err, result) {
  if (err) throw (err);
  cb(result);
  });
}

module.exports = {
  add: addMeal,
  all: allMeals
};
