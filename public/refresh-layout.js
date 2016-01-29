'use strict';

function createDiv(classname) {
  var name = document.createElement('div');
  name.classList.add(classname);
  return name;
}

var refreshLayout = function(response) {
  var mealsArray = JSON.parse(response);
  var mealsContainer = document.querySelector('.meals-container');
  var progressContainer = document.querySelector('.chart');
  var chartContainer = document.querySelector('.progress');
  var youCanEatMoreCointainer = document.querySelector('.rest');
  var sumCalories = 0;
  var dailyLimit = 1500;

  if (chartContainer.lastChild != null){
    youCanEatMoreCointainer.innerHTML = '';
    progressContainer.innerHTML = '';
    chartContainer.innerHTML = '';
    mealsContainer.innerHTML = '';
  }

  mealsArray.forEach(function(mealsItem) {
    var mealText = mealsItem.name;
    var calorieText = mealsItem.calories + " kcal";
    var newDivItem = createDiv('newDivitem');
    var newImgItem = createDiv('newImgitem');
    var newMealsItem = createDiv('newMealsitem');
    var newCalorieItem = createDiv('newCalorieitem');
    var newCloseItem2 = createDiv('closeItem');

    newCloseItem2.innerHTML = "<i class=\"fa fa-times\"></i>";
    newImgItem.innerHTML = "<img src=img/photo.png>";
    newMealsItem.innerHTML = mealText;
    newCalorieItem.innerHTML = calorieText;

    newDivItem.appendChild(newImgItem);
    newDivItem.appendChild(newMealsItem);
    newDivItem.appendChild(newCalorieItem);
    newDivItem.appendChild(newCloseItem2);
    mealsContainer.appendChild(newDivItem);

    newDivItem.setAttribute('id', mealsItem.meal_id);
    newCloseItem2.setAttribute('id', mealsItem.meal_id);

    newCloseItem2.addEventListener('click', function(e){
      var id = e.target.parentNode.getAttribute('id');
      createRequest('DELETE', 'http://localhost:3000/meals/' + id, undefined, refresh);
    })
    sumCalories += Number(mealsItem.calories);
  })

  drawCircleProgress(progressContainer, sumCalories, dailyLimit);

  chartContainer.innerHTML = "The summary of calories: " + sumCalories + " kcal";
  if (dailyLimit-sumCalories > 0){
    youCanEatMoreCointainer.innerHTML = 'You can eat ' + (dailyLimit-sumCalories) + " kcal more";
  }
}
