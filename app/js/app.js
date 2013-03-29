'use strict';

var angular = require('./shims/angular');

var wfApp = angular.module('wfApp', []);

/* register controllers */
wfApp.controller('wfCtrl', function () {
    // app-level functionality, etc.
});

/* register directives */
wfApp.directive('wfDatePicker', function () {
    return {
        restrict: 'E',
        link: function (scope, elem, attr) {
            elem.click(function (e) {
                alert('todo: display a date picker');
            });
        },
        template: '<input name="{{entity}}" id="id_{{entity}}" type="text" ng-required="{{required}}" value="" />',
        replace: true
    };
});

wfApp.directive('wfInput', function () {
    return {
        link: function (scope, element, attrs) {},
        restrict: 'E',
        template: '<input name="{{entity}}" id="id_{{entity}}" type="{{type}}" ng-required="{{required}}" value="" />',
        replace: true
    };
});

wfApp.directive('wfDynamicForm', function (getData, getTemplate) {

    var linker = function (scope, element, attrs) {
        var e, i, child_scope;
        getData.profileJson().then(function (result) {
            for (i = 0; i < result.data.fields.visible.length; i++) {
                e = result.data.fields.visible[i];
                child_scope = scope.$new();
                angular.extend(child_scope, e);
                element.append(getTemplate(e.type)(child_scope));
            }
        });
    };

    return {
        restrict: 'A',
        link: linker
    };

});

/* register services */

wfApp.factory('getData', function ($http) {
    var getData = {
        profileJson: function () {
            var promise = $http.get('js/test.json').then(function (response) {
                // manipulate json response object?
                return response;
            });
            return promise;
        }
    };
    return getData;
});

wfApp.factory('getTemplate', function ($compile) {
    var getTemplate = function (type) {
        var labelTemplate = '<label for="id_{{entity}}">{{label}}:<span ng-show="required" class="required-indicator" title="This Field is Required">*</span></label>';
        var textTemplate = labelTemplate + '<input name="{{entity}}" id="id_{{entity}}" type="{{type}}" ng-required="{{required}}" value="" />';
        var textareaTemplate = labelTemplate + '<textarea rows="10" cols="40" name="{{entity}}" id="id_{{entity}}" ng-required="{{required}}"></textarea>';
        var selectTemplate = labelTemplate + '<select name="{{entity}}" id="id_{{entity}}" ng-required="{{required}}"><option ng-repeat="option in choices" value="{{option.value}}">{{option.label}}</option></select>';
        var hiddenTemplate = '<input type="hidden" name="{{entity}}" id="id_{{entity}}" value="" />';
        var dateTemplate = labelTemplate + '<wf-date-picker></wf-date-picker>';
        var result;
        var template;
        switch (type) {
            case 'textarea':
                template = textareaTemplate;
                break;
            case 'select':
                template = selectTemplate;
                break;
            case 'hidden':
                template = hiddenTemplate;
                break;
            case 'date':
                template = dateTemplate;
                break;
            default:
                template = textTemplate;
                break;
        }
        result = $compile(template);
        return result;
    };
    return getTemplate;
});

module.exports = wfApp;