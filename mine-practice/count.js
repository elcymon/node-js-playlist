var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

//need to explicitly say what part of this module we want available outside this module

module.exports = counter;

// console.log(counter(['shaun','crystal','ryu']));