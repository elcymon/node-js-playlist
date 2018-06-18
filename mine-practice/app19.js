//#19: routing
var http = require('http');

var fs = require('fs');//needed for using files

//using pipe to send what has been read to the server
var server = http.createServer(function(req,res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url === '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        //piping the html page can be done without having to store the readstream
        //in a variable like so:
        fs.createReadStream(__dirname + '/index.html').pipe(res);
        
    } else if (req.url === '/contact'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api/ninjas'){
        var ninjas = [{name: 'ryu', age:29},
                        {name: 'yoshi',age:32}];
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    }else{
        res.writeHead(404,{'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
    
   

});

//set port to listen to, else it will not work, because all applications listen to particular port numbers
//so we will also need a port number to communicate with our nodejs server
const portNum = 3000;
server.listen(portNum,'127.0.0.1');
console.log('yo dawgs, now listening to port ',portNum);

