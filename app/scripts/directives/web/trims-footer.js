'use strict';

angular.module('trimsWebFrontApp')
  .directive('trimsFooter', function() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'template/web/trims-footer.html'
    };
  });
