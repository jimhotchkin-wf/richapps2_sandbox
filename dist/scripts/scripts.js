"use strict";angular.module("yeomanAngularApp",[]).config(["$routeProvider",function(e){e.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/dynaform",{templateUrl:"views/dynaform.html",controller:"DynaFormCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("yeomanAngularApp").controller("MainCtrl",["$scope",function(e){e.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]).controller("DynaFormCtrl",function(){}),angular.module("yeomanAngularApp").factory("getData",["$http",function(e){return{entityJson:function(t){var n,i;switch(t){case"userprofile":n="scripts/data/profile.json";break;case"accounts":n="scripts/data/accounts.json"}return i=e.get(n).then(function(e){return e.data})}}}]),angular.module("yeomanAngularApp").directive("wfDynamicForm",["getData",function(e){return{restrict:"A",scope:{},controller:function(t,n){var i=e.entityJson(n.attr("entity")).then(function(e){t.formDefinitionObject=e});return i}}}]),angular.module("yeomanAngularApp").directive("wfDynamicField",["$compile","getTemplate",function(e,t){var n=function(n,i){var a=t(n.field.type);i.html(a),e(i.contents())(n)};return{restrict:"A",replace:!0,link:n,scope:{field:"=content"}}}]),angular.module("yeomanAngularApp").factory("getTemplate",function(){var e=function(e){var t,n='<label for="id_{{field.entity}}">{{field.label}}:<span ng-show="field.required" class="required-indicator" title="This Field is Required">*</span></label>';switch(e){case"textarea":t=n+'<textarea rows="10" cols="40" name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" ng-required="{{field.required}}"></textarea>';break;case"select":t=n+'<select name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" ng-required="{{field.required}}"><option ng-repeat="option in field.choices" value="{{option.value}}">{{option.label}}</option></select>';break;case"hidden":t='<input type="hidden" name="{{field.entity}}" id="id_{{field.entity}}" ng-model="field.value" value="" />';break;case"date":t=n+"<div wf-date-picker></div>";break;default:t=n+'<input name="{{field.entity}}" id="id_{{field.entity}}" type="{{field.type}}" ng-required="{{field.required}}" ng-model="field.value" value="" />'}return t};return e}),angular.module("yeomanAngularApp").directive("wfDatePicker",["alert",function(e){return{restrict:"A",link:function(t){t.additionalEvent=function(){e("todo: attach additional behaviour")}},template:'<input name="{{field.entity}}" id="id_{{field.entity}}" type="date" ng-required="{{field.required}}" ng-model="field.value" ng-click="additionalEvent()" value="" />',replace:!0}}]);