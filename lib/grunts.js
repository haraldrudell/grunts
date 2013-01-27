// grunts.js
// Add custom grunt tasks
// © Harald Rudell 2013 <harald@allgoodapps.com> All rights reserved.

exports.registerTask = registerTask

function registerTask(grunt) {
	require('./gruntbump').bump(grunt)
	require('./gruntexports').listExports(grunt)
}
