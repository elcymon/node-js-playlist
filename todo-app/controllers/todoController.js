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

// //testing
// var itemOne = Todo({item: 'buy flowers'}).save(function(err){
//                 if(err) throw err;
//                 console.log('item saved');
//             });

// var data = [
//     {item: 'get milk'},
//     {item: 'walk dog'},
//     {item: 'kick some coding ass'}
// ];
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req,res){
        //get data from mongoDB and pass it to the view
        Todo.find({}, function(err,data){
            if (err) throw err;
            res.render('todo',{todos: data});
        });//retrieve all the items. Finding a specific item, we need to pop in a specific item e.g. {item: "buy flowers"}
        
    });

    app.post('/todo', urlencodedParser, function(req,res){
        //get data from the view and add it to the mongodb
        var newTodo = Todo(req.body).save(function(err,data){
            if(err) throw err;
            res.json(data);

        });
        // data.push(req.body);
        //console.log(data);
        
    });

    app.delete('/todo/:item', function(req,res){
        //delete the requested item from mongoDB
        Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
            if (err) throw err;
            res.json(data);
        });
        // data = data.filter(function(todo){
        //     console.log(todo);
        //     return todo.item.replace(/ /g, '-') !== req.params.item;
        // });
        // res.json(data);
    });
    
};