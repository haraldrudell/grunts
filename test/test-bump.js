// test-bump.js
// © 2013 Harald Rudell  <harald@therudells.com> MIT License

var bump = require('../tasks/bump')

// https://github.com/haraldrudell/mochawrapper
var assert = require('mochawrapper')

exports['Bump:'] = {
	'Exports': function () {
		assert.exportsTest(bump, 0, null, 'function')
	},
	'TODO': function () {
	},
}
