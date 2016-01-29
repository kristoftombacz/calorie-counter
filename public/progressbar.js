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
