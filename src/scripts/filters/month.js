'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('month', function (value) {
	return moment(value, moment.ISO_8601).format('MMMM');
});
