'use strict';
angular.module('trimsWebFrontApp')
  .factory('UserService', function ($localStorage, $http) {
  	var UserModel = {
      email: '',
      password: '',
      planType: '5GB',     //5GB, 30GB, 120GB
      timeType: '1month',  //1month, 6month, 12month

      discountCode: '',
      inviteCode: '',
      payType: 'alipay',    //alipay, wechat, other
      payPrice: 0
    };

    var UserService = {
      getModel: function () {
        return angular.extend({}, UserModel);
      },

      getCurrentUser: function () {
        return $localStorage.user || null;
      },

      saveCurrentUser: function (user) {
        $localStorage.user = user;
      },

      deleteCurrentUser: function () {
        delete $localStorage.user;
      }
    };

    return UserService;
  });
