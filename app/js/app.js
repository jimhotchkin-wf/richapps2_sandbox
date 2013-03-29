'use strict';

var angular = require('./shims/angular');

var textInputTemplate = require('text!../partials/wfRichFormText.html');
var textareaInputTemplate = require('text!../partials/wfRichFormTextarea.html');
var selectInputTemplate = require('text!../partials/wfRichFormSelect.html');
var hiddenInputTemplate = require('text!../partials/wfRichFormhidden.html');
var labelTemplate = require('text!../partials/wfRichFormLabel.html');

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
        // console.log(attrs);
        var e, i, child_scope;
        getData.entityJson(attrs.entity).then(function (result) {
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
        entityJson: function (entity) {
            var jsonUri, promise;
            switch (entity) {
                case 'userprofile':
                    jsonUri = 'js/profile.json';
                    break;
                case 'accounts':
                    jsonUri = 'js/accounts.json';
                    break;
            };
            promise = $http.get(jsonUri).then(function (response) {
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
        var textTemplate = labelTemplate + textInputTemplate;
        var textareaTemplate = labelTemplate + textareaInputTemplate;
        var selectTemplate = labelTemplate + selectInputTemplate;
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
                template = hiddenInputTemplate;
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
