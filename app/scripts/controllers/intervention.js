'use strict';

angular.module('livewellApp')
  .controller('InterventionCtrl', function ($scope, $routeParams) {

  	$scope.question = "Medication question one",
  	$scope.responses = [{
  		content:"med response one section 1",
  		next:"a"
  	},{
  		content:"med response two section 1",
  		next:"b"
  	},{
  		content:"med response three section 1",
  		next:"c"
  	},{
  		content:"med response four section 1",
  		next:"d"
  	}
  	];

    $scope.type = $routeParams.type;
    $scope.filterA = $routeParams.filterA;
    $scope.filterB = $routeParams.filterB;
    $scope.filterC = $routeParams.filterC;


  });
