'use strict';

describe('Controller: WellnessPlanCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var WellnessPlanCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WellnessPlanCtrl = $controller('WellnessPlanCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
