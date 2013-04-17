'use strict';

angular.module('yeomanAngularApp')
  .directive('wfDynamicField', function ($compile, getTemplate) {

        var linker = function (scope, element) {
            var fieldTemplate = getTemplate(scope.field.type);
            element.html(fieldTemplate);
            $compile(element.contents())(scope);
        };

        return {
            restrict: 'A',
            replace: true,
            link: linker,
            scope: {
                field: '=content'
            }
        };
    });
