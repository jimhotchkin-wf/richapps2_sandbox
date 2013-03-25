require.config({
    paths: {
        angular: 'lib/angular/angular.min',
        app: 'js/app',
        domReady: 'lib/require/domReady'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    },
    priority: [
        'angular'
    ]
});

require([
    'domReady',
    'angular',
    'app'
], function (domReady, angular, app) {
    'use strict';
    domReady(function () {
        angular.bootstrap(document, ['myApp']);
    });
});