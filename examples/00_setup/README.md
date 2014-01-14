# Example 00_setup

Simple setup and test to demonstrate how isomorphic javascript works (basic example). 

## To Install

	$ npm install

### Dev Dependencies
This uses an awesome library called `browserify` which allows node-style modules to be used in the browser. See [node-brwserify](https://github.com/substack/node-browserify) for more information

Run the following command to install `browserify` locally:

	$ npm install -g browserify

## 1) To run server side
Assuming you have everything installed and properly setup, run the following command:

	$ node index.js

The output should be:

	my string!

Not very exciting. In fact, quite boring. However, it proves that there are no errors and you are setup properly. Now, let's try this in the browser!

## 2) To run in the client (browser)
Run the following command to output a client side version (here's where `browserify` comes in):

	$ browserify index.js -o bundle.js
	
This should output a file called `bundle.js` which will contain all of our server side code which is wrapped up and exposed to the client. To see this in action, open `index.html` in a browser (such as chrome). 

When the page loads you should see the following statement in the console:
	
	my string!

You may be saying one of two phrases: "Holy bananas batman! What just happened!?" or "eh".

The general idea is we used `browserify` to wrap the server side javascript and exposed it to the browser. This also means you can start using `require` in your front-end code.

