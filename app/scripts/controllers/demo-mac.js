'use strict';
angular.module('trimsWebFrontApp')
  .controller('DemoMacCtrl', function ($scope) {
    $scope.currentProjectId = -1;
    $scope.projectList = [];
    $scope.updateInfo = {};

    $scope.progress = 40;
    $scope.isEnabled = true;

    $scope.file = {
      name: "about.psd",
      msg: "低栏设计",
      snapshotUrl: "http://c.hiphotos.baidu.com/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=5e90e7d9eef81a4c323fe49bb6430b3c/4034970a304e251fc769b155a286c9177e3e5384.jpg",
      operation: "create"
    };

    function loadProjectList() {
      $scope.projectList = [
        {
          "id": 120,
          "name": "Trims",
          "description": ""
        },
        {
          "id": 225,
          "name": "VCard 5",
          "description": ""
        },
        {
          "id": 312,
          "name": "Happy Sonic Town",
          "description": ""
        }
      ];

      $scope.currentProjectId = $scope.projectList.length > 0? $scope.projectList[0].id : -1;
    }

    function loadUpdateInfo() {
      $scope.updateInfo = {
        "needUpdate": true,
        "updateNumber": 3,
        "lastSyncDate": 1429888458890
      };
    }

    $scope.changeCurrentProject = function() {
      for (var i = 0; i < $scope.projectList.length; i++) {
        if ($scope.currentProjectId === $scope.projectList[i].id) {
          console.log($scope.projectList[i].id+":"+$scope.projectList[i].name);
          break;
        }
      }
    };

    $scope.isFirst=true;
    $scope.click_1 = function() {
      $scope.isFirst = true;
      // todo
    };
    $scope.click_2 = function() {
      $scope.isFirst = false;
      // todo
    };

    $scope.radioModel = "left";

    $scope.isLoadingSearch = false;

    $scope.checkbox_checked = true;

    $scope.emailbox = "alex@123.com";

    loadProjectList();
    loadUpdateInfo();
  });
