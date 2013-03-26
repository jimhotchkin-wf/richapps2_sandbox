'use strict';

var angular = require('./shims/angular');

var myApp = angular.module('myApp', []);

/* register controllers */
myApp.controller('MainCtrl', function ($scope, stringTricksFactory) {
    $scope.name = 'World';
    $scope.reverseName = function () {
        $scope.name = stringTricksFactory.reverse($scope.name);
    };
});

/* register directives */
myApp.directive('testElem', function (getData) {
    return {
        restrict: 'A',
        templateUrl: '/app/partials/testElemTemplate.html',
        link: function (scope, element, attrs) {
            scope.arr = getData.profileJson();
        }
    };
});

/* register services */
myApp.factory('stringTricksFactory', function () {
    return {
        reverse: function (str) {
            return str.split('').reverse().join('');
        }
    };
});

myApp.factory('getData', function ($http) {
    var getData = {
        profileJson: function () {
            var promise = $http.get('js/test.json').then(function (response) {
                console.log(response);

                return response.data;
            });
            return promise;
        }
    };
    return getData;
});

module.exports = myApp;