define(
['moment', 'zepto', 'backbone'],
function(moment, $, Backbone) {
	var Time = Backbone.Model.extend({
		defaults: {
			date: moment()
		},
		initialize: function () {},
		during: function () {
			var now = moment();
			if (now.isAfter(this.get('to'))) {
				return 1;
			} else if (now.isBefore(this.get('from'))) {
				return -1;
			} else {
				return 0;
			}
		},
		relativeTime: function () {
			return this.get('from').fromNow();
		}
	});
	var israelTime = new Time({from: moment('2013 11 06'), to: moment('2013 11 10')});
	var TimeView = Backbone.View.extend({
		tagName: 'span',
		className: 'timeview',
		initialize: function () {
			this.render();
		},
		render: function () {
			this.$el.empty();
			var $isItTime = $('<span class="answer">');
			if (this.model.during() === 0) {
				$isItTime.text('YES');
			} else {
				$isItTime.text('NO');
				var $relativeTime = $('<div class="relative">');
				$relativeTime.text('But, she leaves ' + this.model.relativeTime() + '!');
				this.$el.append($relativeTime);
			}
			this.$el.prepend($isItTime);
			return this;
		}
	});
	var isStephInIsreal = new TimeView({model: israelTime});
	$('#isItTime').append(isStephInIsreal.$el);
});
