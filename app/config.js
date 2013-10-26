requirejs.config({
	baseUrl: './app',
	paths: {
		moment: 'vendor/momentjs',
		handlebars: 'vendor/handlebars',
		lodash: 'vendor/lodash',
		zepto: 'vendor/zepto',
		backbone: 'vendor/backbone'
	},
	shim: {
		lodash: {
			exports: '_'
		},
		zepto: {
			exports: '$'
		},
		backbone: {
			exports: 'Backbone',
			deps: ['lodash', 'zepto']
		},
		handlebars: {
			exports: 'Handlebars'
		}
	}
});

require(["main"], function() {});
