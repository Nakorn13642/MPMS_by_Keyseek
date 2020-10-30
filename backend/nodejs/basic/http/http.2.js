var http = require("http");
var url = require('url');

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    resp.write(req.url+'\n'); //return req.url to website
    resp.write(req.url+'111122223333'+'\n'); //return req.url to website
    console.log('req.url |', req.url);
    resp.end("Hello World Ok.\n"); //much in the last of resp.write

}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");
