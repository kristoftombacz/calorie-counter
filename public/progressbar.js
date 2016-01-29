'use strict';

function drawCircleProgress(whereToPut, number, limit) {
  var dividedCalorie = number/limit;
  var isLowerThanOne = true;
  var colorSwap = '#9B59B6';

  if (dividedCalorie > 1){
    colorSwap = '#D24D57';
    number = limit;
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
        bar.setText(number.toFixed(0) + "/" + limit + " kcal");
      } else {
        bar.setText('Too high number');
      }
    }
  });
  circle.animate(number/limit);
}
