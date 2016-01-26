'use strict';

var addMealButton = document.querySelector('.addMeal');
var addFilterButton = document.querySelector('.filterMeal');
var addAllButton = document.querySelector('.allMeal');

var mealUrl = 'http://localhost:3000/meals';
var refresh = function refresh() {
  createRequest('GET', mealUrl, {}, callBack);
}

function getInputValue(query) {
  return document.querySelector(query).value;
}

function getMealItem() {
  return {
          name: getInputValue('.nameInput'),
          calories: getInputValue('.calorieInput'),
          date: getInputValue('.dateInput')
  };
}

function JSONify() {
  return JSON.stringify(getMealItem());
}

addMealButton.addEventListener('click', function() {
  createRequest('POST', mealUrl, JSONify(), refresh);
});

refresh();
