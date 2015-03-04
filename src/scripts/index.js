'use strict';
const bulk = require('bulk-require');
const components = bulk(__dirname, [
	'components/**/*.js', 'filters/**/*.js', 'directives/**/*.js'
]);
