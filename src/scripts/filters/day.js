'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('day', function (value, format) {
	return moment().day(value).format(format || 'dddd');
});
