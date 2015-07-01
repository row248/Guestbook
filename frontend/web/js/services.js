'use strict';

var guestbookServices = angular.module('guestbookServices', ['ngResource']);

guestbookServices.factory('Message', ['$resource',
	function($resource) {
		return $resource('messages/:messageId', {messageId: '@messageId'}, {
			// query: {method: 'GET', params: {messageId:'messages1'}, isArray:true}
			query: {
				method: 'GET', isArray:true
			},
			'update': {
			 	method: 'PUT' 
			},
			'save': {
				method: 'POST'
			},
			'remove': {
				method: 'DELETE'
			}
		});
	}]);