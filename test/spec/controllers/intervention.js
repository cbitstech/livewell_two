'use strict';

describe('Controller: InterventionCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var InterventionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterventionCtrl = $controller('InterventionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
