'use strict';

var angular = require('./shims/angular');
require('./app');

angular.element(document).ready(function () {
    angular.bootstrap(document, ['wfApp']);
});
