'use strict';

function drawCircleProgress(whereToPut, number) {
  var dividedCalorie = number/1500;
  var isLowerThanOne = true;
  var colorSwap = '#9B59B6';
  if (dividedCalorie > 1){
    colorSwap = '#D24D57';
    number = 1500;
    isLowerThanOne = false;
  }
  var circle = new ProgressBar.Circle(whereToPut, {
    color: colorSwap,
    strokeWidth: 5,
    trailWidth: 1,
    duration: 2000,
    text: {
      value: '0'
    },
    step: function(state, bar) {
      if (isLowerThanOne == true) {
        bar.setText(number.toFixed(0) + "/1500 kcal");
      } else {
        bar.setText('Too high number');
      }
    }
  });
  circle.animate(number/1500);
}
function createDiv(classname) {
  var name = document.createElement('div');
  name.classList.add(classname);
  return name;
}

var callBack = function(response) {
  var mealsArray = JSON.parse(response);
  var mealsContainer = document.querySelector('.meals-container');
  var progressContainer = document.querySelector('.chart');
  var chartContainer = document.querySelector('.progress');
  var youCanEatMoreCointainer = document.querySelector('.rest');
  var sumCalories = 0;

  if (chartContainer.lastChild != null){
    youCanEatMoreCointainer.innerHTML = '';
    progressContainer.innerHTML = '';
    chartContainer.innerHTML = '';
  }

  mealsContainer.innerHTML = '';
  mealsArray.forEach(function(mealsItem) {
    var mealText = mealsItem.name;
    var calorieText = mealsItem.calories + " kcal";
    var newDivItem = createDiv('newDivitem');
    var newImgItem = createDiv('newImgitem');
    var newMealsItem = createDiv('newMealsitem');
    var newCalorieItem = createDiv('newCalorieitem');
    var newCloseItem2 = createDiv('closeItem');

    newDivItem.setAttribute('id', mealsItem.meal_id);
    sumCalories += Number(mealsItem.calories);

    newCloseItem2.innerHTML = "<i class=\"fa fa-times\"></i>";
    newImgItem.innerHTML = "<img src=img/photo.png>";
    newMealsItem.innerHTML = mealText;
    newCalorieItem.innerHTML = calorieText;

    newDivItem.appendChild(newImgItem);
    newDivItem.appendChild(newMealsItem);
    newDivItem.appendChild(newCalorieItem);
    newDivItem.appendChild(newCloseItem2);
    mealsContainer.appendChild(newDivItem);

    newCloseItem2.addEventListener('click', function(e){
      var getId = e.target.parentNode;
      var id = getId.getAttribute('id');
      createRequest('DELETE', 'http://localhost:3000/meals/' + id, undefined, refresh);
      refresh();
    })
  })
  chartContainer.innerHTML = "The summary of calories: " + sumCalories + " kcal";
  drawCircleProgress(progressContainer, sumCalories);
  if (1500-sumCalories > 0){
    youCanEatMoreCointainer.innerHTML = 'You can eat ' + (1500-sumCalories) + " kcal more";
  }
}
