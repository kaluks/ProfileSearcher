
var router = require('./router.js');
var profile = require('./profile.js');
//create a web server. from Nodejs.org
var http = require('http');
http.createServer(function(request,response){
  router.home(request,response);
  router.user(request,response);
}).listen(8000, '127.0.0.1');
console.log('Server running');





//http.createServer(function(request,response){
  //response.writeHead(200,{'Content-Type': 'text/plain'});

    //Write date every second with setInterval
  //setInterval(function(){
    //response.write(new Date() + '\n');
  //}, 1000);
  //response.end('Bye World');
  //router.home(request,response);
  //router.user(request,response);
//}).listen(8000, '127.0.0.1');
