'use strict';
const Vue = require('vue');

Vue.component('v-setup', {
	el () {
		return document.createElement('div');
	},
	template: require('../templates/v-setup.vue')
});
