var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://test123:test123@ds163700.mlab.com:63700/elcymon-todo');

//you need to create a schema - i.e. blueprint for our data.
var todoSchema = new mongoose.Schema({
    item: String
});

//create a model based on the schema
var Todo = mongoose.model('Todo', todoSchema);

//testing
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
                if(err) throw err;
                console.log('item saved');
            });

var data = [
    {item: 'get milk'},
    {item: 'walk dog'},
    {item: 'kick some coding ass'}
];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req,res){
        res.render('todo',{todos: data});
    });

    app.post('/todo', urlencodedParser, function(req,res){
        data.push(req.body);
        console.log(data);
        res.json(data);

    });

    app.delete('/todo/:item', function(req,res){
        data = data.filter(function(todo){
            console.log(todo);
            return todo.item.replace(/ /g, '-') !== req.params.item;
        });
        res.json(data);
    });
    
};