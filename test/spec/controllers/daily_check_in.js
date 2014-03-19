'use strict';

describe('Controller: DailyCheckInCtrl', function () {

  // load the controller's module
  beforeEach(module('livewellTwoApp'));

  var DailyCheckInCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DailyCheckInCtrl = $controller('DailyCheckInCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
