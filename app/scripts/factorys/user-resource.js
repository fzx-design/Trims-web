'use strict';
angular.module('trimsWebFrontApp')
  .factory('UserResource', function ($resource, GlobalConfig) {
  	return $resource(GlobalConfig.api + '/user', {}, {
      login: {
        method: 'POST',
        url: GlobalConfig.api + '/user/login'
      },
      register: {
        method: 'POST',
        url: GlobalConfig.api + '/user/register'
      }
    })
  });
