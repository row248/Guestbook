'use strict';

var guestbookControllers = angular.module('guestbookControllers', []);

guestbookControllers.controller('MessageListCtrl', ['$scope', 'Message' , '$location',
	function($scope, Message, $location) {
		$scope.messages = Message.query();
		$scope.idMessage = 0;
		$scope.addAction = function() {
			if ($scope.idMessage > 0) {
				$scope.message.$update({messageId: $scope.idMessage});
			} else {
				Message.save($scope.message);
			}

			$location.path("/");
		}
		$scope.editPost = function(id) {
			$scope.idMessage = id;
			$scope.message = Message.get({messageId: id});
		}
		$scope.resetForm = function() {
			$scope.idMessage = 0;
			$scope.message = "";
		}
		$scope.deletePost = function(id) {
			Message.remove({messageId: id});
			$location.path("/");
		}
	}]);

guestbookControllers.controller('MessageDetailCtrl', ['$scope', '$routeParams', '$location', 'Message',
	function($scope, $routeParams, $location, Message) {
		$scope.message = Message.get({messageId: $routeParams.messageId});

		$scope.updateAction = function() {
			$scope.message.$update({messageId: $routeParams.messageId});
			$location.path("/");

		}
	}]);