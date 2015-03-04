'use strict';
const bulk = require('bulk-require');
const components = bulk(__dirname, [
	'components/**/*.js', 'filters/**/*.js', 'directives/**/*.js'
]);
const app = require('./app.js');
const page = require('./router.js');

page('/setup', () => app.view = 'v-setup');
page('/countdown', () => app.view = 'v-countdown');
page('*', () => page.redirect('/setup'));

page.start({
	hashbang: true,
	decodeURLComponents: false
});
