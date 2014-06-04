module.exports = (function() {

	"use strict";

	/**
	 * Takes two arrays (keys and values) and returns an object made of those keys
	 * and values.
	 */
	return function(keys, values) {
		if (keys.length != values.length) { throw "Keys and Values are different lengthts"; }
		var r = {};
		for (var i=0, l=keys.length; i<l; i++) {
			r[keys[i]] = values[i];
		}
		return r;
	};

}());
