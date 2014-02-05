var validator = require('./lib/validator');

var index = function (req, res) {
	res.render('index.html');
};

var post = function (req, res) {
	// var json = JSON.parse(req.body);
	res.json(req.body);
};

exports.index = index;
exports.post = post;
