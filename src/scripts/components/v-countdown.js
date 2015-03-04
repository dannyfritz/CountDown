'use strict';
const Vue = require('vue');
const moment = require('moment');
const queryString = require('url-querystring');
const page = require('../router.js');

Vue.component('v-countdown', {
	el () {
		return document.createElement('div');
	},
	template: require('../templates/v-countdown.vue'),
	created () {
		const data = queryString(window.location.href);
		if (!data.qs.date) {
			page.redirect('/setup');
			return;
		}
		this.date = data.qs.date;
		this.title = data.qs.title;
		setInterval(() => {
			this.tick = this.tick + 1;
		}, 1000);
	},
	data () {
		return {
			title: null,
			date: null,
			backgroundColor: null,
			fontColor: null,
			tick: 0
		};
	},
	computed: {
		timeLeft () {
			this.tick = this.tick;
			return moment(this.date, moment.ISO_8601).fromNow();
		}
	}
});
