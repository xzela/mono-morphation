# 01 Selective Files

In the previous example we saw that we can expose server side code and enable it to run client.

This example attempts illustrate the ability to selectively expose specific files. Common use cases are exposing code that is strictly for the browser but shares common functionality.

## To Install

	$ npm install


## Grunt

We're using `Grunt` to help use automate some of the tasks that are repeatable. In this example, we're going to have grunt `bundle` our javascript and output the file to `bundle.js`

To do this, we've created a `Gruntfile.js` file. This holds all of the grunt tasks that we'd like to run.

Our grunt file has the following task registard:

	browserify: {
    	main: {
        	options: {
            	debug: true
			},
			files: {
				'bundle.js': 'index.js'
			}
		}
	}

The above is essentially the grunt version of:

	$ browserify index.js -o -d bundle.js


Because I've added the grunt task as part of the `Default` task list:

	grunt.registerTask('default', ['browserify']);

This task will be triggered when calling:

	$ grunt


## Server side

	$ node index.js
	
Should output:

	Hello world: (from the server)


## Browser side
