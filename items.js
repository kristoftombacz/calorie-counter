'use strict';

var mysql = require('./connection.js'); 

function addMeal(attr, cb) {
  mysql.connection.query('INSERT INTO calorie SET ?;', attr, function(err, result) {
    cb(result);
  });
}

function listAllMeals(cb) {
  mysql.connection.query('SELECT * FROM calorie;', function(err, result) {
    cb(result);
  });
}

function deleteMeals(id, cb) {
  mysql.connection.query('DELETE FROM calorie WHERE meal_id = ?;', id, function(err, result) {
    cb(result);
  });
}

function filterByDay(date, cb) {
  mysql.connection.query('SELECT * FROM calorie WHERE date = ?;', date, function(err, result) {
    cb(result);
  })
}

module.exports = {
  add: addMeal,
  all: listAllMeals,
  del: deleteMeals,
  filter: filterByDay
};
