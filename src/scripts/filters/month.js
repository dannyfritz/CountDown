'use strict';
const Vue = require('vue');
const moment = require('moment');

Vue.filter('month', function (value) {
	return moment(value).format('MMMM');
});
