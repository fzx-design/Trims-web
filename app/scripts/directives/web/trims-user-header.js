'use strict';

angular.module('trimsWebFrontApp')
  .directive('trimsUserHeader', function() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'template/web/trims-user-header.html',
      controller: function ($scope, UserService) {
        // get current user
        $scope.currUser = UserService.getCurrentUser();
      }
    };
  });
