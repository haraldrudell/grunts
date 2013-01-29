// gruntexports.js
// List module exports
// © 2013 Harald Rudell  <harald@allgoodapps.com> MIT License

// http://nodejs.org/api/path.html
var path = require('path')
// http://nodejs.org/api/util.html
var util = require('util')

module.exports = function(grunt) {
	grunt.registerTask('exports', 'Lists library exports.', doExports)

	function doExports() {
		var result
		var packageString = grunt.file.readJSON('package.json')

		if (typeof packageString.main === 'string') {
			var theExports = require(path.join(process.cwd(), packageString.main))
			result = util.format(theExports)
		} else result = 'No exports'

		grunt.log.ok(result)
	}
}
