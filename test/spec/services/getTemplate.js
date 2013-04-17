'use strict';

describe('Service: getTemplate', function () {

  // load the service's module
  beforeEach(module('yeomanAngularApp'));

  // instantiate service
  var getTemplate;
  beforeEach(inject(function (_getTemplate_) {
    getTemplate = _getTemplate_;
  }));

  it('should do something', function () {
    expect(!!getTemplate).toBe(true);
  });

});
