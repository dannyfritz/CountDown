'use strict';
const Vue = require('vue');

Vue.component('v-timer', {
	el () {
		return document.createElement('div');
	},
	template: require('../templates/v-timer.vue'),
	data () {
		return {
			title: null,
			message: null,
			date: null,
			backgroundColor: null,
			fontColor: null
		};
	}
});
