//#13 streams and buffers
//#14 working with readable streams
//#15 writable streams

var http = require('http');

var fs = require('fs');//needed for using files

//create read stream to create readable stream
// var myReadStream = fs.createReadStream(__dirname + '/readMe14.txt','utf8');

// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');


//every time a data is received, the emitter emits this the event, which will 
//fire the function to log the data received.
// myReadStream.on('data',function(chunk){
//     console.log('new chunk received: ');
//     //console.log(chunk);

//     //#15 write the read chunk of data
//     myWriteStream.write(chunk);
// });


//#16 using pipes to automatically handle chunks of data from readable stream
//that means we do not have to manually handle it by listening to the 'data'
//pipe has to be used with a readable stream and not a writestream
// myReadStream.pipe(myWriteStream);


//using pipe to send what has been read to the server
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
    var myReadStream = fs.createReadStream(__dirname + '/readMe14.txt','utf8');
    myReadStream.pipe(res);

});

//set port to listen to, else it will not work, because all applications listen to particular port numbers
//so we will also need a port number to communicate with our nodejs server
const portNum = 3000;
server.listen(portNum,'127.0.0.1');
console.log('yo dawgs, now listening to port ',portNum);