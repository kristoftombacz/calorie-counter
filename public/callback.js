'use strict';

var callBack = function(response) {
  var mealsArray = JSON.parse(response);
  var mealsContainer = document.querySelector('.meals-container');

  mealsContainer.innerHTML = '';
  mealsArray.forEach(function(mealsItem) {
    var mealText = mealsItem.name;
    var calorieText = mealsItem.calories + " kcal";

    var newDivItem = document.createElement('div');
    newDivItem.classList.add('newDivitem');

    var newImgItem = document.createElement('div');
    newImgItem.classList.add('newImgitem');

    var newMealsItem = document.createElement('div');
    newMealsItem.classList.add('newMealsitem');

    var newCalorieItem = document.createElement('div');
    newCalorieItem.classList.add('newCalorieitem');

    newImgItem.innerHTML = "<img src=img/photo.png>";
    newMealsItem.innerHTML = mealText;
    newCalorieItem.innerHTML = calorieText;

    newDivItem.appendChild(newImgItem);
    newDivItem.appendChild(newMealsItem);
    newDivItem.appendChild(newCalorieItem);

    mealsContainer.appendChild(newDivItem);
  })
}
