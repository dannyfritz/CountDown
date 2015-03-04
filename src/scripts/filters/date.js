'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('date', function (value) {
	return moment(value, moment.ISO_8601).format('D');
});
