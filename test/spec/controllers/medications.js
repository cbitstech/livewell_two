'use strict';

describe('Controller: MedicationsCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellApp'));

  var MedicationsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MedicationsCtrl = $controller('MedicationsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
