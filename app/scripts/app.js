'use strict';

angular.module('yeomanAngularApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/dynaform', {
                templateUrl: 'views/dynaform.html',
                controller: 'DynaFormCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
