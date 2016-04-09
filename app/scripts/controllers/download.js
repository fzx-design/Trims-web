'use strict';
angular.module('trimsWebFrontApp')
  .controller('DownloadCtrl', function ($scope, ngDialog) {
    var downloadInfo = {
      'win': {
        'info-title': '下载 Trims for Windows',
        'btn-title-sub': 'Windows 版',
        'img-bg-class': 'pc'
      },
      'mac': {
        'info-title': '下载 Trims for Mac',
        'btn-title-sub': 'OS X 版',
        'img-bg-class': 'mac'
      },
      'linux': {
        'info-title': '下载 Trims for Linux',
        'btn-title-sub': 'Linux 版',
        'img-bg-class': 'mac'
      }
    };

    var platform = navigator.platform;

    // 判断用户操作系统类型
    var isWin = (platform === "Win32") || (platform === "Windows");
    var isMac = (platform === "Mac68K") || (platform === "MacPPC") || (platform === "Macintosh") || (platform === "MacIntel");
    var isLinux = (String(platform).indexOf("Linux") > -1);


    isMac ? ($scope.downloadInfo = downloadInfo.mac) : (isLinux ? $scope.downloadInfo = downloadInfo.linux : $scope.downloadInfo = downloadInfo.win);

    $scope.openDownloadDialog = function () {
      ngDialog.open({
        template: 'template/web/dialog/download-dialog.html',
        showClose: false,
        className: 'trims-dialog trims-download-dialog'
      });
    };
  });
