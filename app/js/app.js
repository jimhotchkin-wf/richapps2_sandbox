var angular = require('./shims/angular');

var module = angular.module('myApp', []);

/* register a controller */
module.controller('MainCtrl', function ($scope) {
    /* $scope is what is used for two-way binding */
    $scope.name = 'World';

    /* declare a method to call from a click in our markup */
    $scope.reverseName = function () {
        $scope.name = $scope.name.split('').reverse().join('');
    };
});

module.exports = module;