// test-mocha.js
// © 2013 Harald Rudell  <harald@therudells.com> MIT License

var mocha = require('../tasks/mocha')

// https://github.com/haraldrudell/mochawrapper
var assert = require('mochawrapper')

exports['Mocha:'] = {
	'Exports': function () {
		assert.exportsTest(mocha, 0, null, 'function')
	},
	'TODO': function () {
	},
}
