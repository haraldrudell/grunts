// grunts.js
// Add custom grunt tasks
// © Harald Rudell 2013 <harald@allgoodapps.com> All rights reserved.

exports.registerTask = registerTask

function registerTask(grunts) {
	require('./gruntbump').dump(grunt)
	require('./gruntexports').listExports(grunt)
}
