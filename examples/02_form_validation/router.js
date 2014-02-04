var validator = require('./lib/validator');

var index = function (req, res) {
	res.render('index.html');
};

var post = function (req, res) {
	validator(req, res);
};

exports.index = index;
exports.post = post;
