'use strict';

angular.module('livewellApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foundations', {
        templateUrl: 'views/foundations.html',
        controller: 'FoundationsCtrl'
      })
      .when('/daily_review', {
        templateUrl: 'views/daily_review.html',
        controller: 'DailyReviewCtrl'
      })
      .when('/checkins', {
        templateUrl: 'views/checkins.html',
        controller: 'CheckinsCtrl'
      })
      .when('/daily_check_in', {
        templateUrl: 'views/daily_check_in.html',
        controller: 'DailyCheckInCtrl'
      })
      .when('/weekly_check_in', {
        templateUrl: 'views/weekly_check_in.html',
        controller: 'WeeklyCheckInCtrl'
      })
      .when('/wellness_plan', {
        templateUrl: 'views/wellness_plan.html',
        controller: 'Wellness_planCtrl'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'InstructionsCtrl'
      })
      .when('/medications', {
        templateUrl: 'views/medications.html',
        controller: 'MedicationsCtrl'
      })
      .when('/medications', {
        templateUrl: 'views/reduce_risk.html',
        controller: 'ReduceRiskCtrl'
      })
      .when('/medications', {
        templateUrl: 'views/awareness_and_action.html',
        controller: 'AwarenessAndActionCtrl'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
