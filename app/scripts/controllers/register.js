'use strict';
angular.module('trimsWebFrontApp')
  .controller('RegisterCtrl', function ($scope, $rootScope, $timeout, $window, UserService, UserResource) {
    var TRANS_TIME = 700;

  	$scope.currStep = 1;
    $scope.currTitle = '注册您的帐号';

    $scope.confirmPassword = '';

    $scope.userModel = UserService.getModel();

    // Step 1
  	$scope.confirmRegister = function () {
      /*UserResource.register({email: $scope.userModel.email, password: $scope.userModel.password}, function (data) {

      });*/

  		$scope.currStep = 2;
      $scope.hideTitle('选择计划*');
  	};

    // Step 2
    $scope.changePlanType = function (type) {
      $scope.userModel.planType = type;
    };

  	$scope.confirmPlan = function () {
  		$scope.currStep = 3;
      $scope.hideTitle('确认账单');
  	};

    // Step 3
  	$scope.confirmPay = function () {
      
  	};

    $scope.changeTimeType = function (type) {
      $scope.userModel.timeType = type;
    };

    $scope.hideTitle = function (str) {
      var title = '.register-title .register-step';

      $(title).addClass('closing');

      $timeout(function () {
          $(title).hide().removeClass('closing').text(str).show();
        }, TRANS_TIME);
    };

    $scope.resize = function (height) {
      var winHeight = $window.innerHeight;
    };

  	$scope.$watch('currStep', function (value) {
  		var step = '.register-step-' + value;
      
      if(value > 1) {
        var preStep = '.register-step-' + (value - 1);
        $(preStep).addClass('closing');


        $timeout(function () {
          $(preStep).hide().removeClass('closing') && $(step).show();
        }, TRANS_TIME);

      } else {
        $(step).show();
      }

  	});

    $scope.resize();
  });
