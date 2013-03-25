'use strict';

require.config({
    paths: {
        'angular': 'lib/angular/angular.min'
    },
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

require([
    'angular',
    'js/app'
], function (angular, app) {
    //This function will be called when all the dependencies
    //listed above are loaded. Note that this function could
    //be called before the page is loaded.
    //This callback is optional.

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['myApp']);
    });
});