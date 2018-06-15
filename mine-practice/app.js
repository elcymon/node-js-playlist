//#7
var stuff = require('./stuff');//what is exported is returned and stored in counter variable.

console.log(stuff.counter(['shaun','crystal','ryu']));
console.log(stuff.adder(4,5));
console.log(stuff.adder(stuff.pi,5));
