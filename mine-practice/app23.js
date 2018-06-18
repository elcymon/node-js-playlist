// #23 introduction to express
var express = require('express');

//To give us access to the numerous cool features/functions in express
//such as routing and templating.
var app = express();

//app also gives us access to http verbs or methods: get, post, delete and put requests.
app.get('/',function(req,res){
    res.send('this is the home page');
});

app.get('/contact',function(req,res){
    res.send('this is the contact page');
});


//listen to port
app.listen(3000);
