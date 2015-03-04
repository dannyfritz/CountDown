<div class="v-datepicker__year">
	<button v-on="click: previousYear"><i class="fa fa-angle-left fa-2x"></i></button>
	<span class="v-datepicker__year__title">{{moment | year}}</span>
	<button v-on="click: nextYear"><i class="fa fa-angle-right fa-2x"></i></button>
</div>
<div class="v-datepicker__month">
	<button v-on="click: previousMonth"><i class="fa fa-angle-left fa-2x"></i></button>
	<span class="v-datepicker__month__title">{{moment | month}}</span>
	<button v-on="click: nextMonth"><i class="fa fa-angle-right fa-2x"></i></button>
</div>
<div class="v-datepicker__daysOfTheWeek">
	<div v-repeat="daysInTheWeek" class="v-datepicker__daysOfTheWeek__day">
		{{$index | day ddd}}
	</div>
</div>
<div class="v-datepicker__dates">
	<div class="v-datepicker__dates__date date" v-repeat="monthBlock"
		v-on="click: selectDate(date)"
		v-class="
			date--isCurrentDay: isCurrentDay,
		  date--isCurrentMonth: isCurrentMonth,
			date--isCurrentYear: isCurrentYear,
			date--isSelectedDay: isSelectedDay,
			date--isSelectedMonth: isSelectedMonth,
			date--isSelectedYear: isSelectedYear,
		">
		{{date | date}}
	</div>
</div>
