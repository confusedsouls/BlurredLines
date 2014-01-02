'use strict';

angular.module('vizApp', [
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
      .when('/upload',{
        templateUrl:'views/partial.html',
        controller:'UploadCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
