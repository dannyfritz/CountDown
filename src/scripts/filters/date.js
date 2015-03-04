'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('date', function (value) {
	return moment(value).format('D');
});
