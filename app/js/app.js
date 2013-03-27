'use strict';

var angular = require('./shims/angular');

var wfApp = angular.module('wfApp', []);

/* register controllers */
wfApp.controller('MainCtrl', function ($scope, stringTricksFactory) {
    $scope.name = 'World';
    $scope.reverseName = function () {
        $scope.name = stringTricksFactory.reverse($scope.name);
    };
});

/* register directives */
wfApp.directive('wfRichForm', function (getData) {
    return {
        restrict: 'A',
        templateUrl: '/app/partials/wfRichFormTemplate.html',
        link: function (scope, element, attrs) {
            scope.data = getData.profileJson();
        }
    };
});

/* register services */
wfApp.factory('stringTricksFactory', function () {
    return {
        reverse: function (str) {
            return str.split('').reverse().join('');
        }
    };
});

wfApp.factory('getData', function ($http) {
    var getData = {
        profileJson: function () {
            var promise = $http.get('js/test.json').then(function (response) {
                // manipulate json response object?
                return response.data;
            });
            return promise;
        }
    };
    return getData;
});

module.exports = wfApp;