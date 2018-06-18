//template engines allow us to load html, javascript etc on our response message to the client

var express = require('express');

//To give us access to the numerous cool features/functions in express
//such as routing and templating.
var app = express();

//set the view engine you want to use
app.set('view engine', 'ejs');

//app also gives us access to http verbs or methods: get, post, delete and put requests.
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/contact.html');
});

// //route parameters
// app.get('/profile/:name', function(req,res){
//     res.send('You viewing the profile of ' + req.params.name);
// });


//rendering views
app.get('/profile/:name', function(req,res){
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };
    res.render('profile',{person: req.params.name, data: data});
});



//listen to port
app.listen(3000);
