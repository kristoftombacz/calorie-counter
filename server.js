'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var items = require("./items.js");

var app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

app.listen(3000);

app.post('/meals', function (req, res) {
  items.add(req.body, function (item) {
    res.json(item)
  });
});

app.get('/meals', function (req, res) {
  items.all(function(result) {res.json(result);})
});