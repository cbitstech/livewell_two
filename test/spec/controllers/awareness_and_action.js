'use strict';

describe('Controller: AwarenessAndActionCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var AwarenessAndActionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AwarenessAndActionCtrl = $controller('AwarenessAndActionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
