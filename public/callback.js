'use strict';

function drawCircleProgress(whereToPut, number) {
  var circle = new ProgressBar.Circle(whereToPut, {
    color: '#9A12B3',
    strokeWidth: 5,
    trailWidth: 1,
    duration: 2000,
    text: {
      value: '0'
    },
    step: function(state, bar) {
      bar.setText((bar.value() *1500).toFixed(0) + "/1500 kcal");
    }

  });
  circle.animate(number/1500);
}

var callBack = function(response) {
  var mealsArray = JSON.parse(response);
  var mealsContainer = document.querySelector('.meals-container');
  var progressContainer = document.querySelector('.chart');
  var chartContainer = document.querySelector('.progress');
  var sumCalories = 0;

  if (chartContainer.lastChild != null){
    progressContainer.innerHTML = '';
    chartContainer.innerHTML = '';
  }

  mealsContainer.innerHTML = '';
  mealsArray.forEach(function(mealsItem) {
    var mealText = mealsItem.name;
    var calorieText = mealsItem.calories + " kcal";
    sumCalories += Number(mealsItem.calories);

    var newDivItem = document.createElement('div');
    newDivItem.classList.add('newDivitem');
    newDivItem.setAttribute('id', mealsItem.meal_id);

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
    newDivItem.addEventListener('click', function(e) {
      var newCloseItem = document.createElement('div');
      newCloseItem.innerHTML = "<i class=\"fa fa-times\"></i>";
      if (newDivItem.lastChild.classList.contains('closeItem')) {
        newCloseItem.classList.remove('closeItem');
        newDivItem.removeChild(newDivItem.lastChild);
      } else {
        newCloseItem.classList.add('closeItem');
        newDivItem.appendChild(newCloseItem);
        var del = document.querySelector('.closeItem');
        del.addEventListener('click', function(){
          var id = e.target.getAttribute('id');
          var areYouSure = confirm('Are you sure to delete this item?');
          if (areYouSure == true){
            createRequest('DELETE', 'http://localhost:3000/meals/' + id, undefined, refresh());
            refresh();
          } else {
            newCloseItem.classList.remove('closeItem');
            newDivItem.removeChild(newDivItem.lastChild);
            refresh();
          }
        })
      }
    })
  })
  chartContainer.innerHTML = "The summary of calories: " + sumCalories + " kcal";
  drawCircleProgress(progressContainer, sumCalories);
}
