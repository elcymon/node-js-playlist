var express = require('express');
var bodyParser = require('body-parser');
//To give us access to the numerous cool features/functions in express
//such as routing and templating.
var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

//set the view engine you want to use
app.set('view engine', 'ejs');


//'/assets' matches the route. name can be changed if you want
//express.static('assets') matches the folder. name can be changed if you want
app.use('/assets',express.static('assets'));//inbuilt express function to handle static assets points to 'assets' folder

//rendering views
app.get('/',function(req,res){
    res.render('index');
});

app.get('/contact',function(req,res){
    //console.log(req.query);
    res.render('contact', {qs: req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
    console.log(req.body);

    //console.log(req.query);
    res.render('contact-success', {data: req.body});
});

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
