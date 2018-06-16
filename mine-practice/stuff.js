var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};
var adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`;
};

var pi = 3.142;
// //need to explicitly say what part of this module we want available outside this module
// //module.exports is an empty object, which we can use dot notation to add properties to it

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// console.log(counter(['shaun','crystal','ryu']));

//ANOTHER WAY IS TO ASSIGN THE VALUES/FUNCTIONS TO MODULE.EXPORTS.PROPERTIES

// module.exports.counter = function(arr){
//     return 'There are ' + arr.length + ' elements in this array';
// };
// module.exports.adder = function(a,b){
//     return `The sum of the 2 numbers is ${a+b}`;
// };

// module.exports.pi = 3.142;

//A THIRD APPROACH IS TO ASSIGN MODULE.EXPORTS TO A JAVASCRIPT OBJECT
// module.exports = {
//     counter: counter,
//     adder: adder,
//     pi: pi
// };