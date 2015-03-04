'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('year', function (value) {
	return moment(value, moment.ISO_8601).format('YYYY');
});
