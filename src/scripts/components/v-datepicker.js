'use strict';
const Vue = require('vue');
const moment = require('moment');
const datepickerUtil = require('../datepicker-util.js');

Vue.component('v-datepicker', {
	el () {
		return document.createElement('div');
	},
	template: require('../templates/v-datepicker.vue'),
	paramAttributes: ['date'],
	data () {
		return {
			date: moment(),
			daysInTheWeek: 7
		};
	},
	computed: {
		moment () {
			return moment(this.date);
		},
		day () {
			return this.moment.day();
		},
		month () {
			return this.moment.month();
		},
		year () {
			return this.moment.year();
		},
		monthBlock () {
			return datepickerUtil.getMonthBlock(this.moment);
		}
	},
	methods: {
		previousMonth () {
			this.date = this.moment.subtract(1, 'month').toISOString();
		},
		nextMonth () {
			this.date = this.moment.add(1, 'month').toISOString();
		},
		previousYear () {
			this.date = this.moment.subtract(1, 'year').toISOString();
		},
		nextYear () {
			this.date = this.moment.add(1, 'year').toISOString();
		},
		selectDate (value) {
			this.date = value;
		}
	}
});
