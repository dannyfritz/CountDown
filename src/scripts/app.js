'use strict';
const Vue = require('vue');

module.exports = new Vue({
	el: 'body',
	template: require('./templates/app.vue'),
	data: {
		view: 'v-setup'
	}
});
