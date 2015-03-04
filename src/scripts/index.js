'use strict';
const bulk = require('bulk-require');
const components = bulk(__dirname, [
	'components/**/*.js', 'filters/**/*.js', 'directives/**/*.js'
]);
const app = require('./app.js');
const page = require('page');

page('/setup', () => app.view = 'v-setup');
page('/time', () => app.view = 'v-timer');
page('*', () => page.redirect('/setup'));
page.start({
	hashbang: true
});
