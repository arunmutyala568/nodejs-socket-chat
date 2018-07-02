//var http = require('http');
//http.createServer(function (req, res) {
//res.writeHead(200, {'Content-Type': 'text/plain'});
//res.end('Hello World\n');
//}).listen(8080, '10.10.10.27');
//console.log('Server running at http://10.10.12.171:8080/'); 

var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
//app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
 //   res.render('index');
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});