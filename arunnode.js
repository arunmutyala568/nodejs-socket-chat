var http = require('http');
http.createServer(function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
}).listen(8080, '10.10.10.131');
console.log('Server running at http://10.10.12.171:8080/'); 