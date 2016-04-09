'use strict';

angular.module('trimsWebFrontApp')
  .controller('CenterCtrl', function ($scope, UserService) {
  	// get current user
    $scope.currUser = UserService.getCurrentUser();
  });