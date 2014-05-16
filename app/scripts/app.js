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
        controller: 'WellnessPlanCtrl'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'InstructionsCtrl'
      })
      .when('/medications', {
        templateUrl: 'views/medications.html',
        controller: 'MedicationsCtrl'
      })
      .when('/reduce_risk', {
        templateUrl: 'views/reduce_risk.html',
        controller: 'ReduceRiskCtrl'
      })
      .when('/awareness_and_action', {
        templateUrl: 'views/awareness_and_action.html',
        controller: 'AwarenessAndActionCtrl'
      })
      .when('/charts', {
        templateUrl: 'views/charts.html',
        controller: 'ChartsCtrl'
      })
      .when('/intervention/:type/:filterA', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/intervention/:type/:filterA/:filterB', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/intervention/:type/:filterA/:filterB', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/intervention/:type/:filterA/:filterB/:filterC', {
        templateUrl: 'views/intervention.html',
        controller: 'InterventionCtrl'
      })
      .when('/intervention_review', {
        templateUrl: 'views/intervention_review.html',
        controller: 'InterventionReviewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
