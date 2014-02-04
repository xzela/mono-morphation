var express = require('express'),
	app = express(),
	path = require('path'),
	http = require('http'),
	router = require('./router'),
	validator = require('./lib/validator');

app.configure(function () {
	app.set('port', 3000);
	app.set('views', __dirname + '/public/views');
	app.use(express.static(__dirname + '/public'));
	app.engine('html', require('ejs').renderFile);
});

app.get('/', router.index);
app.post('/', router.post);

http.createServer(app).listen(app.get('port'), function () {
	console.log('server created and listening on: ' + app.get('port'));
});
