var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/databaseuser');

var Mymodel = require('./UserModel');
var Friendmodel = require('./FriendModel');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.post('/users', function (req, res) {
  var user = new Mymodel(req.body);
  user.save(function (err, userInDB) {
    if (err) { console.log(err)}
    res.json(userInDB);
  });
});

app.post('/friends', function (req, res, done) {
  
  Mymodel.findOne({name: req.body.name}, function (err, user) {
    if (err) {
      console.log ('error in finding a match on db')
    }
    if (user) {
      var friend = new Friendmodel(req.body);
      console.log ('i am in')
    }
    return done(null, friend)
  })
});

app.listen(8000, function () {
  console.log('ok!');
});