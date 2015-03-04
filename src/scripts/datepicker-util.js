'use strict';
const moment = require('moment');
const _fp = require('lodash-fp');

function isCurrentYear (date1) {
	return moment(date1).year() === moment().year();
}

function isCurrentMonth (date1) {
	return isCurrentYear(date1) &&
		moment(date1).month() === moment().month();
}

function isCurrentDay (date1) {
	return isCurrentYear(date1) &&
		isCurrentMonth(date1) &&
		moment(date1).date() === moment().date();
}

function isSameYear (date1, date2) {
	return moment(date1).year() === moment(date2).year();
}

function isSameMonth (date1, date2) {
	return isSameYear(date1, date2) &&
		moment(date1).month() === moment(date2).month();
}

function isSameDay (date1, date2) {
	return isSameYear(date1, date2) &&
		isSameMonth(date1, date2) &&
		moment(date1).date() === moment(date2).date();
}

function getDayBlock (date, selectedDate) {
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

function getMonthBlock (date) {
	const currentMonth = moment(date).date(1);
	const lowerBound = moment(currentMonth);
	if (currentMonth.day() === 0) {
		lowerBound.day(-7);
	}
	else {
		lowerBound.day(0);
	}
	return _fp.map(
		(i) => getDayBlock(moment(lowerBound).add(i, 'days'), date),
		_fp.range(0, 42)
	);
}

module.exports = {
	getDayBlock: getDayBlock,
	getMonthBlock: getMonthBlock
};
