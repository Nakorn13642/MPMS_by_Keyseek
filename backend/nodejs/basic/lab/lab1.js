var http = require("http");
var fs = require("fs");

http.createServer((req, resp) => {
    // Read file demo.html
    fs.readFile("demo.html", (err, data) => {
        if (err) console.log('ERROR');
        resp.writeHead(200, {"content-type" : "text/html"});
        resp.write(data);
        resp.end();

    });
    
})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");