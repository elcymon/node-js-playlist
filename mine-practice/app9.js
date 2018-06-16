var fs = require('fs');

//asynchronoous version
fs.readFile('readme.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt',data,function(err,data){
        console.log(err,data);
    });
});

console.log('test');

//synchronous version
// var readMe = fs.readFileSync('./readme.txt','utf-8');//blocks code until it is completed. i.e. before going to next line
// fs.writeFileSync('./writeMe.txt',readMe);
// // console.log(readMe);

