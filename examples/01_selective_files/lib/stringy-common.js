var isClient;
try {
    window;
    isClient = true;
} catch(e) {
    isClient = false;
}
console.log(isClient);
if (isClient) {
    var stringy = require('./stringy-browser');
} else {
    var stringy = require('./stringy-server');
}

