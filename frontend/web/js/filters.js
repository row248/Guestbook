'use strict'

var guestbookFilters = angular.module('guestbookFilters', []);

guestbookFilters.filter('insertOrUpdate', function() {
	return function(id) {
		console.log(id);
		return id > 0 ? "Обновить" : "Отправить";
	};
});