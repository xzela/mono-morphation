
// Attempts to detect the window object
// determines whether we're in client mode or server mode
var isClient = typeof window !== 'undefined'

// load the context specific module [browser || server]
if (isClient) {
    var stringy = require('./stringy-browser');
} else {
    var stringy = require('./stringy-server');
}
console.log(stringy("hello world: "));
