var isClient;
// horrible way to detect context
// don't use this in production
try {
    // will throw an exception if window is not found
    window;
    isClient = true;
} catch(e) {
    isClient = false;
}
// load the context specific module [browser || server]
if (isClient) {
    var stringy = require('./stringy-browser');
} else {
    var stringy = require('./stringy-server');
}
console.log(stringy("hello world: "));
