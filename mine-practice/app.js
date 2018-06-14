//#6 Modules and require
//for dividing code into logical modules i.e. separate files.
//our applications can be divided into logical files.

var counter = require('./count');//what is exported is returned and stored in counter variable.

console.log(counter(['shaun','crystal','ryu']));
//#4
// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + ' seconds have passed');
//     if (time > 5){
//         clearInterval(timer);
//     }
// },2000);


// console.log(__dirname);
// console.log(__filename);


//#5 Function Expressions
function callFunction(fun){
    fun();
}
//normal function statement

function sayHi(){
    console.log('Hi');
}

sayHi();

//function expression is assigning a variable to an anonymous function

var sayBye = function(){
    console.log('bye');

};

sayBye();

callFunction(sayBye);

callFunction(sayHi);