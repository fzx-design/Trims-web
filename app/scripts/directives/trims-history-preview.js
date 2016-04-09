'use strict';

/**
 * @ngdoc function
 * @name sixminsClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sixminsClientApp
 */
angular.module('sixminsClientApp')
	.directive('trimshistorypreview', function() {
		return {
			restrict: 'AE',
			templateUrl: 'template/local-history-preview-template.html',
			replace: true,
			link: function(scope, element, attr){
				console.log(scope.preview);
			}
		};
	});