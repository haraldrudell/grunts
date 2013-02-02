// mocha.js
// Run tests using mochawrapper module
// © 2013 Harald Rudell  <harald@therudells.com> MIT License

// http://nodejs.org/api/path.html
var path = require('path')
var mochaPath = ['node_modules', 'mochawrapper', 'node_modules', 'mocha2']
var options = {
	reporter: 'spec',
	ui: 'exports',
}

module.exports = function(grunt) {
	grunt.registerTask('test', 'Run tests using mochawrapper module', doMocha)

	function doMocha() {
		var done = this.async() // task that ends with a callback

		// top-level dependency mochawrapper, module mocha2, instantiate
		var mocha2 = require(path.join.apply(path, [process.cwd()].concat(mochaPath)))
		var mocha_instance = new mocha2(options)

		grunt.file.expand('test/*.js').forEach(addFile) // add all tests to mocha

		var mochaRunner // run tests
		try {
			// on syntax errors, mocha simply exits
			mochaRunner = mocha_instance.run(mochaResult)
		} catch (e) {
			grunt.log.fail('Mocha exception', e.stack || e.message || e)
		}

		function mochaResult(failureCount) {
			done(failureCount === 0)
		}

		function addFile(file) {
			mocha_instance.addFile(file)
		}
	}
}
