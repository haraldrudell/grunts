// test-exports.js
// © 2013 Harald Rudell  <harald@therudells.com> MIT License

var gExports = require('../tasks/exports')

// https://github.com/haraldrudell/mochawrapper
var assert = require('mochawrapper')

exports['Exports:'] = {
	'Exports': function () {
		assert.exportsTest(gExports, 0, null, 'function')
	},
	'TODO': function () {
	},
}
