/**
 * Created by Chazaid on 08/09/2016.
 */
//link http library that ships with node
var http = require('http');
//our first callback
http.createServer(function(request, response){
    response.writeHead(200);
    response.end("First node page");
}).listen(3000);
console.log('Server running on port 3000');




