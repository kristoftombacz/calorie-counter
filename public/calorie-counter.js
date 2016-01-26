'use strict';

var addMealButton = document.querySelector('.addMeal');

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

var refresh = function refresh() {
  createRequest('GET', 'http://localhost:3000/meals', {}, callBack);
}


addMealButton.addEventListener('click', function() {
  createRequest('POST', 'http://localhost:3000/meals', JSONify(), refresh);
});


