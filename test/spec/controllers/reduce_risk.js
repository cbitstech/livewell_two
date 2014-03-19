'use strict';

describe('Controller: ReduceRiskCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var ReduceRiskCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReduceRiskCtrl = $controller('ReduceRiskCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
