'use strict';

describe('Controller: InterventionReviewCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var InterventionReviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InterventionReviewCtrl = $controller('InterventionReviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
