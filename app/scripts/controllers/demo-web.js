'use strict';
angular.module('trimsWebFrontApp')
  .controller('DemoWebCtrl', function ($scope, ngDialog) {
  	$scope.openInfoDialog = function () {
  		ngDialog.openConfirm({
        template: 'template/web/dialog/info-dialog.html',
        showClose: false,
        closeByDocument: false,
        closeByEscape: false,
        className: 'trims-dialog trims-info-dialog'
      });
  	};
  });
