'use strict';
// note, this uses the require.js syntax to facilitate the
// bootstrapping process. the rest of the calls are using
// the more-simple, commonjs syntax:  var angular = require('./shims/angular');
require(['./shims/angular', './app'], function (angular, app) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['wfApp']);
    });
});