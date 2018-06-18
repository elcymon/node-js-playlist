//#8 Events module

//NODEJS comes with some core modules built into nodejs
var events = require('events');
var util = require('util');

var Person = function(name){
    this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person('James');
var mary = new Person('Mary');
var ryu = new Person('Ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said ' + msg);
    });
});

james.emit('speak', 'hey dudes');
ryu.emit('speak', 'I want a curry');

//You can create custom events and work on them.

// var myEmitter = new events.EventEmitter();

// //wire up events to it
// myEmitter.on('someEvent', function(msg){
//     console.log(msg);
// });

// myEmitter.emit('someEvent','the event was emitted');