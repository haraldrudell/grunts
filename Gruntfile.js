// grunts.js
// Export custom grunt tasks
// © 2013 Harald Rudell <harald@allgoodapps.com> MIT License

// http://nodejs.org/api/path.html
var path = require('path')

module.exports = function(grunt) {
	grunt.file.expand('lib/*.js').forEach(requireFile) // load tasks in lib folder

	function requireFile(relativePath) { // load a grunt task
		require(path.resolve(relativePath))(grunt)
	}
}
