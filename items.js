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

function addMeal(attr, cb) {
  connection.query('INSERT INTO calorie SET ?;', attr, function(err, result) {
    cb(result);
  });
}

function listAllMeals(cb) {
  connection.query('SELECT * FROM calorie;', function(err, result) {
    cb(result);
  });
}

function deleteMeals(id, cb) {
  connection.query('DELETE FROM calorie WHERE meal_id = ?;', id, function(err, result) {
    cb(result);
  });
}

function filterByDay(date, cb) {
  connection.query('SELECT * FROM calorie WHERE date = ?;', date, function(err, result) {
    cb(result);
  })
}

module.exports = {
  add: addMeal,
  all: listAllMeals,
  del: deleteMeals,
  filter: filterByDay
};
