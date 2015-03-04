'use strict';
const Vue = require('vue');
const page = require('../router.js');

Vue.component('v-setup', {
	el () {
		return document.createElement('div');
	},
	template: require('../templates/v-setup.vue'),
	data () {
		return {
			date: null,
			title: ''
		};
	},
	methods: {
		create () {
			page.redirect(`/countdown?date=${this.date}&title=${this.title}`);
		}
	}
});
