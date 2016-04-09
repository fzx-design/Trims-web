'use strict';

angular.module('trimsWebFrontApp')
  .directive('trimsHeader', function($location, $timeout, $state, ngDialog) {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'template/web/trims-header.html',
      controller: function ($scope, $window, UserService, UserResource) {
        // get current user
        $scope.currUser = UserService.getCurrentUser();

        // nav header logic
        var path = $location.path();
        if(/^\/download/i.test(path)) {
          $scope.activeLink = 'download';
        }

        $scope.openLoginDialog = function () {
          ngDialog.open({
            template: 'template/web/dialog/login-dialog.html',
            showClose: false,
            className: 'trims-dialog trims-login-dialog',
            controller: function ($scope, UserService) {
              // login dialog logic
              $scope.email = '';
              $scope.password = '';
              $scope.remember = true;

              $scope.onClickLoginBtn = function () {
                //登录获取用户信息并根据用户选择保存到LocalStorage

                if($scope.remember) {
                  UserService.saveCurrentUser({
                    email: $scope.email,
                    password: $scope.password,
                    name: 'Evan'
                  });

                  $timeout(function () {
                    $window.location.reload();
                  }, 100);
                  /*UserResource.login({email: $scope.email, password: $scope.password}, function (data) {
                    
                  });*/
                }
              };
            }
          });
        };

        $scope.logout = function () {
          UserService.deleteCurrentUser();
          $timeout(function () {
            $window.location.reload();
          }, 100);
        };
      }
    };
  });
