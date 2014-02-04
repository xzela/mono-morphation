var express = require('express'),
	app = express(),
	path = require('path'),
	http = require('http');

app.configure(function () {
	app.set('port', 3000);
	app.set('views', __dirname + '/public/views');
	app.use(express.static(__dirname + '/public'));
	app.engine('html', require('ejs').renderFile);
});

app.get('/', function (req, res) {
	res.render('index.html');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('server created and listening on: ' + app.get('port'));
});
