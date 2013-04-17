'use strict';

angular.module('yeomanAngularApp')
    .factory('getTemplate', function () {

        var getTemplate = function (type) {
            var labelTemplate = '<label for="id_{{field.entity}}">{{field.label}}:<span ng-show="field.required" class="required-indicator" title="This Field is Required">*</span></label>', template;
            switch (type) {
            case 'textarea':
                template = labelTemplate + '<textarea rows="{{field.rows}}" cols="{{field.columns}}" name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" maxlength="{{field.maxlength}}" ng-required="field.required"></textarea>';
                break;
            case 'select':
                template = labelTemplate + '<select name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" maxlength="{{field.maxlength}}" ng-required="field.required" ng-options="o.value as o.label for o in field.choices"></select>';
                break;
            case 'hidden':
                template = '<input type="hidden" name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" />';
                break;
            case 'date':
                template = labelTemplate + '<div wf-date-picker></div>';
                break;
            default:
                template = labelTemplate + '<input name="{{field.entity}}" id="id_{{field.entity}}" type="{{field.type}}" ng-required="field.required" maxlength="{{field.maxlength}}" ng-readonly="field.readonly" ng-model="field.value" />';
                break;
            }
            return template;
        };

        return getTemplate;

    });
