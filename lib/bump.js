// gruntbump.js
// Increase version number
// © 2013 Harald Rudell  <harald@allgoodapps.com> MIT License
module.exports = function(grunt) {
	grunt.registerTask('bump', 'Increment the version number.', modifyVersion)

	var type = {
		major: 0,
		minor: 1,
		patch: 2,
	}
	var PACKAGE_FILE = 'package.json'

	function modifyVersion(versionType) {

		// read package.json and determine method of indentation
		var packageString = grunt.file.read(PACKAGE_FILE)
		var package = JSON.parse(packageString)
		var indentation = getJsonIndentation(packageString)

		package.version = increaseVersion(package.version, versionType)

		grunt.file.write(PACKAGE_FILE, JSON.stringify(package, null, indentation))
		grunt.log.ok('Version bumped to:', package.version)
	}
	function increaseVersion(version, versionType) { // compute new version number
		if (!version) version = '0.0.0'
		else version = String(version)
		var parts = version.split('.')
		var idx = type[versionType || 'patch'] || type.patch
		parts[idx] = (parseInt(parts[idx], 10) || 0) + 1
		while (++idx < parts.length) parts[idx] = '0'
		return parts.join('.')
	}
	function getJsonIndentation(str) {
		var result = '\t' // default indentation
		var s = str.match(/^(\s+)\S/m)
		if (s) result = s[1]
		return result
	}
}
