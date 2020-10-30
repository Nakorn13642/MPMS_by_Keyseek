var http = require("http");

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/plain" });
    console.log('req.url |', req.url);
    // console.log('req.headers |', req.headers);
    resp.end("Hello World Ok.\n");
})
.listen(8081);

console.log("Server running at http://127.0.0.1:8081/");