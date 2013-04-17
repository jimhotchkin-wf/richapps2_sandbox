'use strict';

angular.module('yeomanAngularApp')
.directive('wfDatePicker', function () {
    return {
        restrict: 'A',
        link: function (scope) {
            scope.additionalEvent = function () {
                // alert('todo: attach additional behaviour');
            };
        },
        template: '<input name="{{field.entity}}" id="id_{{field.entity}}" type="date" ng-required="field.required" ng-model="field.value" maxlength="{{field.maxlength}}" ng-readonly="field.readonly" ng-click="additionalEvent()" />',
        replace: true
    };
});
