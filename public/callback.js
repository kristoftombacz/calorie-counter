'use strict';

var callBack = function(response) {
  var mealsArray = JSON.parse(response);
  var mealsContainer = document.querySelector('.meals-container');

  mealsContainer.innerHTML = '';
  mealsArray.forEach(function(mealsItem) {
    var itemText = mealsItem.name + " "
                 + mealsItem.calories + " "
                 + mealsItem.date;

    var newMealsItem = document.createElement('p')

    newMealsItem.innerHTML = itemText;
    mealsContainer.appendChild(newMealsItem);
  })
}
