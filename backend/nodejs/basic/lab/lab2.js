var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer((req, resp) => {
    // http://127.0.0.1:8081/home.html
    // http://127.0.0.1:8081/about.html
    var q = url.parse(req.url);
    console.log(q);
    // ./home.html, ./about.html
    fs.readFile("." + q.pathname, (err, data) => {
        if (err) {
            fs.readFile("./404.html", (err, data) => {
                resp.writeHead(404, {"content-type" : "text/html"});
                resp.write(data,toString());
                resp.end();     

            })

        } else {
        resp.writeHead(200, {"content-type" : "text/html"});
        resp.write(data,toString());
        resp.end();
    }
    });


    // error | 404.html
    
})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");