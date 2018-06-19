'use strict';

var arg_arr = null;

const self = function nodeArgvParams (callback, args) {
	if (typeof callback != 'function')
		throw new Error('Callback is not a function');

	if (args) self.setArgs(args);
	callback.apply(null, arg_arr || process.argv.slice(2));
}
Object.assign(self, {
	apply: self,
	setArgs: function (arr) {
		arg_arr = Array.from(arr);
		return this;
	}
});

module.exports = self;
