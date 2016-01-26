'use strict';

function createRequest(method, url, data, cb) {
  var myRequest = new XMLHttpRequest();

  myRequest.open(method, url);
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(data);
  myRequest.onreadystatechange = function () {
    if (myRequest.readyState == 4) {
      cb(myRequest.response);
    }
  }
}
