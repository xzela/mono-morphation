
function Validator(value) {
	this.value = value;
	this.isString = function () {
		if (typeof(this.value) !== 'string') {
			throw new TypeError('not a string');
		} else {
			return true;
		}
	};
}

Validator.prototype.empty = function (value) {
	if (this.isString() && this.value.trim() !== '') {
		return false;
	} else {
		return true;
	}
};

Validator.prototype.email = function (value) {
	var pattern = /^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,3})$/;
	var reg = new RegExp(pattern);
	if (reg.test(this.value)) {
		return true;
	} else {
		return false;
	}
};

module.exports = Validator;
