const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'content-Type': 'text/html; charset=utf-8'});
    res.write("<h1>Hello NodeJS Server</h1>");
    res.end("<p>This is node Server.</p>");
}).listen(2000, () => {
    console.group("[Server Load...] Connect Port >> 2000");
});