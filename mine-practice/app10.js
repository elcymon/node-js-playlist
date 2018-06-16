//#10: creating/removing directories

var fs = require('fs');
//asynchronous
//make directory, use callback function to read file
//then within the call back of reading file, write to 
//created directory. If there is error in writing, log error message
// fs.mkdir('stuff',function(){
//     fs.readFile('readme.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,(err) => {
//                 if(err) console.log(err.message)
//             });
//     });
// });

//removing directory
//if directory is not empty, empty directory first
//else there will be error while trying to remove the directory
fs.unlink('./stuff/writeMe.txt',(err) =>{
    if(err){
        console.log(err.message);
        return
    }

    fs.rmdir('stuff',(err) =>{
        if(err)
            console.log(err.message);
    });
});

//syncronous
// fs.mkdirSync('stuff');//make directory

// fs.rmdirSync('stuff');//remove directory


//deleting a file
// fs.unlink('writeMe.txt',(err) =>{
//     if(err) console.log(err.message);
// });
