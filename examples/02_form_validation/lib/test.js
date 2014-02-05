var Validator = require('./validator.js');

var v = new Validator('aol@aol.com');

console.log(v.empty());
console.log(v.email());
