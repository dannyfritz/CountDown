(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


var components = ({"components":({"v-datepicker":require("./components\\v-datepicker.js"),"v-setup":require("./components\\v-setup.js"),"v-timer":require("./components\\v-timer.js")}),"filters":({"date":require("./filters\\date.js"),"day":require("./filters\\day.js"),"month":require("./filters\\month.js"),"year":require("./filters\\year.js")})});
var app = require("./app.js");
var page = require("page");

page("/setup", function () {
	return app.view = "v-setup";
});
page("/time", function () {
	return app.view = "v-timer";
});
page("*", function () {
	return page.redirect("/setup");
});
page.start({
	hashbang: true
});

},{"./app.js":2,"./components\\v-datepicker.js":3,"./components\\v-setup.js":4,"./components\\v-timer.js":5,"./filters\\date.js":7,"./filters\\day.js":8,"./filters\\month.js":9,"./filters\\year.js":10,"page":"page"}],2:[function(require,module,exports){
"use strict";

var Vue = require("vue");

module.exports = new Vue({
	el: "body",
	template: require("./templates/app.vue"),
	data: {
		view: "v-setup"
	}
});

},{"./templates/app.vue":11,"vue":"vue"}],3:[function(require,module,exports){
"use strict";

var Vue = require("vue");
var moment = require("moment");
var datepickerUtil = require("../datepicker-util.js");

Vue.component("v-datepicker", {
	el: function el() {
		return document.createElement("div");
	},
	template: require("../templates/v-datepicker.vue"),
	paramAttributes: ["date"],
	data: function data() {
		return {
			date: moment(),
			daysInTheWeek: 7
		};
	},
	computed: {
		moment: (function (_moment) {
			var _momentWrapper = function moment() {
				return _moment.apply(this, arguments);
			};

			_momentWrapper.toString = function () {
				return _moment.toString();
			};

			return _momentWrapper;
		})(function () {
			return moment(this.date);
		}),
		day: function day() {
			return this.moment.day();
		},
		month: function month() {
			return this.moment.month();
		},
		year: function year() {
			return this.moment.year();
		},
		monthBlock: function monthBlock() {
			return datepickerUtil.getMonthBlock(this.moment);
		}
	},
	methods: {
		previousMonth: function previousMonth() {
			this.date = this.moment.subtract(1, "month").toISOString();
		},
		nextMonth: function nextMonth() {
			this.date = this.moment.add(1, "month").toISOString();
		},
		previousYear: function previousYear() {
			this.date = this.moment.subtract(1, "year").toISOString();
		},
		nextYear: function nextYear() {
			this.date = this.moment.add(1, "year").toISOString();
		},
		selectDate: function selectDate(value) {
			this.date = value;
		}
	}
});

},{"../datepicker-util.js":6,"../templates/v-datepicker.vue":12,"moment":"moment","vue":"vue"}],4:[function(require,module,exports){
"use strict";

var Vue = require("vue");

Vue.component("v-setup", {
	el: function el() {
		return document.createElement("div");
	},
	template: require("../templates/v-setup.vue")
});

},{"../templates/v-setup.vue":13,"vue":"vue"}],5:[function(require,module,exports){
"use strict";

var Vue = require("vue");

Vue.component("v-timer", {
	el: function el() {
		return document.createElement("div");
	},
	template: require("../templates/v-timer.vue"),
	data: function data() {
		return {
			title: null,
			message: null,
			date: null,
			backgroundColor: null,
			fontColor: null
		};
	}
});

},{"../templates/v-timer.vue":14,"vue":"vue"}],6:[function(require,module,exports){
"use strict";

var moment = require("moment");
var _fp = require("lodash-fp");

function isCurrentYear(date1) {
	return moment(date1).year() === moment().year();
}

function isCurrentMonth(date1) {
	return isCurrentYear(date1) && moment(date1).month() === moment().month();
}

function isCurrentDay(date1) {
	return isCurrentYear(date1) && isCurrentMonth(date1) && moment(date1).date() === moment().date();
}

function isSameYear(date1, date2) {
	return moment(date1).year() === moment(date2).year();
}

function isSameMonth(date1, date2) {
	return isSameYear(date1, date2) && moment(date1).month() === moment(date2).month();
}

function isSameDay(date1, date2) {
	return isSameYear(date1, date2) && isSameMonth(date1, date2) && moment(date1).date() === moment(date2).date();
}

function getDayBlock(date, selectedDate) {
	return {
		date: date.toISOString(),
		isCurrentDay: isCurrentDay(date),
		isCurrentMonth: isCurrentMonth(date),
		isCurrentYear: isCurrentYear(date),
		isSelectedDay: isSameDay(date, selectedDate),
		isSelectedMonth: isSameMonth(date, selectedDate),
		isSelectedYear: isSameYear(date, selectedDate)
	};
}

function getMonthBlock(date) {
	var currentMonth = moment(date).date(1);
	var lowerBound = moment(currentMonth);
	if (currentMonth.day() === 0) {
		lowerBound.day(-7);
	} else {
		lowerBound.day(0);
	}
	return _fp.map(function (i) {
		return getDayBlock(moment(lowerBound).add(i, "days"), date);
	}, _fp.range(0, 42));
}

module.exports = {
	getDayBlock: getDayBlock,
	getMonthBlock: getMonthBlock
};

},{"lodash-fp":"lodash-fp","moment":"moment"}],7:[function(require,module,exports){
"use strict";

var Vue = require("vue");
var moment = require("moment");

Vue.filter("date", function (value) {
	return moment(value).format("D");
});

},{"moment":"moment","vue":"vue"}],8:[function(require,module,exports){
"use strict";

var Vue = require("vue");
var moment = require("moment");

Vue.filter("day", function (value, format) {
	return moment().day(value).format(format || "dddd");
});

},{"moment":"moment","vue":"vue"}],9:[function(require,module,exports){
"use strict";

var Vue = require("vue");
var moment = require("moment");

Vue.filter("month", function (value) {
	return moment(value).format("MMMM");
});

},{"moment":"moment","vue":"vue"}],10:[function(require,module,exports){
"use strict";

var Vue = require("vue");
var moment = require("moment");

Vue.filter("year", function (value) {
	return moment(value).format("YYYY");
});

},{"moment":"moment","vue":"vue"}],11:[function(require,module,exports){
module.exports = '<div v-component="{{view}}"></div>\n';
},{}],12:[function(require,module,exports){
module.exports = '<div class="v-datepicker__year">\n	<button v-on="click: previousYear"><i class="fa fa-angle-left fa-2x"></i></button>\n	<span class="v-datepicker__year__title">{{moment | year}}</span>\n	<button v-on="click: nextYear"><i class="fa fa-angle-right fa-2x"></i></button>\n</div>\n<div class="v-datepicker__month">\n	<button v-on="click: previousMonth"><i class="fa fa-angle-left fa-2x"></i></button>\n	<span class="v-datepicker__month__title">{{moment | month}}</span>\n	<button v-on="click: nextMonth"><i class="fa fa-angle-right fa-2x"></i></button>\n</div>\n<div class="v-datepicker__daysOfTheWeek">\n	<div v-repeat="daysInTheWeek" class="v-datepicker__daysOfTheWeek__day">\n		{{$index | day ddd}}\n	</div>\n</div>\n<div class="v-datepicker__dates">\n	<div class="v-datepicker__dates__date date" v-repeat="monthBlock"\n		v-on="click: selectDate(date)"\n		v-class="\n			date--isCurrentDay: isCurrentDay,\n		  date--isCurrentMonth: isCurrentMonth,\n			date--isCurrentYear: isCurrentYear,\n			date--isSelectedDay: isSelectedDay,\n			date--isSelectedMonth: isSelectedMonth,\n			date--isSelectedYear: isSelectedYear,\n		">\n		{{date | date}}\n	</div>\n</div>\n';
},{}],13:[function(require,module,exports){
module.exports = '<v-datepicker></v-datepicker>\n<button>Save</button>\n';
},{}],14:[function(require,module,exports){
module.exports = 'timer\n';
},{}]},{},[1])


//# sourceMappingURL=bundle.js.map