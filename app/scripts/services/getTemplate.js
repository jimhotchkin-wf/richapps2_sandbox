'use strict';

angular.module('yeomanAngularApp')
    .factory('getTemplate', function () {

        var getTemplate = function (type) {
            var template, labelTemplate = '<label for="id_{{field.entity}}" class="control-label">{{field.label}}<span ng-show="field.required" class="required-indicator" title="This Field is Required">*</span></label>';
            switch (type) {
            case 'textarea':
                template = labelTemplate + '<div class="controls"><textarea rows="{{field.rows}}" name="{{field.entity}}" id="id_{{field.entity}}" class="input-small" ng-model="field.value" maxlength="{{field.maxlength}}" ng-required="field.required"></textarea></div>';
                break;
            case 'select':
                template = labelTemplate + '<div class="controls"><select name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" class="input-small" maxlength="{{field.maxlength}}" ng-required="field.required" ng-options="o.value as o.label for o in field.choices"></select></div>';
                break;
            case 'hidden':
                template = '<input type="hidden" name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" />';
                break;
            case 'date':
                template = labelTemplate + '<div wf-date-picker></div>';
                break;
            default:
                template = labelTemplate + '<div class="controls"><input type="{{field.type}}" id="id_{{field.entity}}" placeholder="{{field.label}}" class="input-small" ng-required="field.required" maxlength="{{field.maxlength}}" ng-readonly="field.readonly" ng-model="field.value"></div>';
                break;
            }
            return template;
        };

        return getTemplate;

    });
