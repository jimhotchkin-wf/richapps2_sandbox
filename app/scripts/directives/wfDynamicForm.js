'use strict';

angular.module('yeomanAngularApp')
    .directive('wfDynamicForm', function (getData) {
        return {
            restrict: 'A',
            scope: {},
            controller: function ($scope, $element) {
                var formData = getData.entityJson($element.attr('entity')).then(function (response) {
                    $scope.formDefinitionObject = response;
                });
                return formData;
            }
        };
    });
