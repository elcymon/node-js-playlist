//#12 creating a server
var http = require('http');

var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

//set port to listen to, else it will not work, because all applications listen to particular port numbers
//so we will also need a port number to communicate with our nodejs server
const portNum = 3000;
server.listen(portNum,'127.0.0.1');
console.log('yo dawgs, now listening to port ',portNum);