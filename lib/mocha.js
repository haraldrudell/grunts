// mocha.js
// Run all mocha tests
// © Harald Rudell 2013 <harald@allgoodapps.com> All rights reserved.

// http://nodejs.org/api/path.html
var path = require('path')
var mochaPath = ['node_modules', 'mochawrapper', 'node_modules', 'mocha2']

exports.mocha = mocha

function mocha(grunt) {// from grunt-bump that is not compatible with grunt 0.4
	grunt.registerTask('test', 'Run mocha tests', doMocha)

	function doMocha() {
		var done = this.async()

		var options = {
			reporter: 'spec',
			ui: 'exports',
		}
		var mocha2 = require(path.join.apply(path, [process.cwd()].concat(mochaPath)))
		var mocha_instance = new mocha2(options)

		mocha_instance.addFile('test/test-package.js')

		var mochaRunner
		try {
			// on syntax errors, mocha simply exits
			mochaRunner = mocha_instance.run(mochaResult)
		} catch (e) {
			console.log('Mocha exception', e.stack || e.message || e)
		}

		function mochaResult(failureCount) {
console.log('fail', failureCount)
			done(failureCount === 0)
		}
	}
}
