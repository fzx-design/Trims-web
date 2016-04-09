'use strict';

/**
 * @ngdoc function
 * @name sixminsClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sixminsClientApp
 */
angular.module('sixminsClientApp')
	.directive('trimsPreview', function() {
		return {
			restrict: 'AE',
			templateUrl: 'template/trims-preview.html',
			replace: true,
			scope: {
				value: "=",
				mode: "@"
			},
			link: function(scope, element, attr){
				var img = new Image();
				img.src = scope.value.snapshotUrl;
				var callback = function(imgWidth, imgHeight){
					if(imgWidth >= imgHeight){
						element.children().children()[0].width = 150;
					}else{
						element.children().children()[0].height = 150;
					}
				};
				if (img.complete) {
					callback(img.width, img.height);
				} else {
					img.onload = function () {
						callback(img.width, img.height);
						img.onload = null;
					};
				};
			}
		};
	});
