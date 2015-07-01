'use strict';

var guestbookApp = angular.module('guestbookApp',[
	'ngRoute',

	'guestbookControllers',
	'guestbookServices',
	'guestbookFilters'
]);

guestbookApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/messages', {
        templateUrl: 'partials/messages.html',
        controller: 'MessageListCtrl'
      }).
      when('/messages/:messageId', {
        templateUrl: 'partials/message-detail.html',
        controller: 'MessageDetailCtrl'
      }).
      otherwise({
        redirectTo: '/messages'
      });
  }]);



