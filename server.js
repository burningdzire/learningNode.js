//dependencies required
var express = require('express');
var morgan = require('morgan');

var app = express();

// middleware to collect the log requests from the user
app.use(morgan('dev'));

app.get('/',function(req, res){
  var name = "Knight of Hell";
  res.json("My name is " + name);
});

app.get('/catname', function(req, res){
  res.json('CatWoman');
});
app.listen(3000,function(err){
  if(err) throw err;
  console.log("Server is running on port 3000");
});
