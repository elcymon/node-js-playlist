//#17 serving up html files. This involves creating a readstream and piping the html file. 

//header content type has to be changed to text/html
var http = require('http');

var fs = require('fs');//needed for using files

//using pipe to send what has been read to the server
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-Type': 'text/html'});
   
    var myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
    myReadStream.pipe(res);

});

//set port to listen to, else it will not work, because all applications listen to particular port numbers
//so we will also need a port number to communicate with our nodejs server
const portNum = 3000;
server.listen(portNum,'127.0.0.1');
console.log('yo dawgs, now listening to port ',portNum);

