'use strict';

/**
 * @ngdoc overview
 * @name trimsWebFrontApp
 * @description
 * # trimsWebFrontApp
 *
 * Main module of the application.
 */
angular
  .module('sixminsClientApp', []);

angular
  .module('trimsWebFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngDialog',
    'ngStorage',
    'ui.router',
    'sixminsClientApp'
  ])

  .constant('GlobalConfig', {
    api: 'http://10.60.36.8:8080/trims-web'
  })

  .config(function ($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;
 
            for (name in obj) {
                value = obj[name];
 
                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '='
                            + encodeURIComponent(value) + '&';
                }
            }
 
            return query.length ? query.substr(0, query.length - 1) : query;
        };
 
        return angular.isObject(data) && String(data) !== '[object File]'
                ? param(data)
                : data;
    }];
  })

  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    //$locationProvider.html5Mode(true);

    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .state('download', {
        url: '/download',
        templateUrl: 'views/download.html',
        controller: 'DownloadCtrl'
      })
      .state('center', {
        url: '/center',
        templateUrl: 'views/center.html',
        controller: 'CenterCtrl'
      })
      // For Demo
      .state('demo-mac', {
        url: '/demo/mac',
        templateUrl: '/views/demo-mac.html',
        controller: 'DemoMacCtrl'
      })
      .state('demo-web', {
        url: '/demo/web',
        templateUrl: '/views/demo-web.html',
        controller: 'DemoWebCtrl'
      });
  });
