// gruntexports.js
// List exports
// © Harald Rudell 2013 <harald@allgoodapps.com> All rights reserved.

// http://nodejs.org/api/path.html
var path = require('path')
// http://nodejs.org/api/util.html
var util = require('util')

exports.listExports = listExports

function listExports(grunt) {// from grunt-bump that is not compatible with grunt 0.4
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
