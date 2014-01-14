# Example 00_test

Simple test to demonstrate how isomorphic javascript works (most basic example). 

## To Install

	$ npm install

### Dev Dependencies
This uses an awesome library called `browserify` which to allow node-style modules to be used in the browser. See [node-brwserify](https://github.com/substack/node-browserify) for more information

## 1) To run server side
Assuming you have everything running installed and properly setup, run the following command:

	$ node index.js

The output should be:

	my string!
Not very exciting but, it proves that there are no errors. Now let's try it in the browser!

## 2) To run in the client (browser)
Run the following command to output a client side version:

	$ browserify index.js -o bundle.js
	
This should output a file called `bundle.js` which will contain all of our server side code. To see this in action, open `index.html` in a browser (such as chrome). 

In the browser console, you should see:
	
	my string!	