'use strict';

angular.module('vizApp')
  .config(function($httpProvider) {
      //Enable cross domain calls
      $httpProvider.defaults.useXDomain = true;

      //Remove the header used to identify ajax call  that would prevent CORS from working
      delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .service('Data',function() {
  	this.getData = function() {
  		return [
   	{
		"name": "Fuller",
		"address": "P.O. Box 144, 1175 Mi Rd.",
		"mail": "a@quistristiqueac.edu",
		"phone": "03 54 62 93 94"
	},
	{
		"name": "Tanek",
		"address": "8781 Diam Street",
		"mail": "ut@necenim.org",
		"phone": "07 82 14 40 93"
	},
	{
		"name": "Fulton",
		"address": "Ap #148-6792 Maecenas Road",
		"mail": "nulla@nequeNullam.org",
		"phone": "07 36 66 15 34"
	},
	{
		"name": "Noah",
		"address": "231-3336 Mi St.",
		"mail": "netus.et@sociis.ca",
		"phone": "04 09 91 10 56"
	},
	{
		"name": "Lars",
		"address": "796-2555 Orci St.",
		"mail": "vel.sapien@mitempor.com",
		"phone": "08 27 42 13 50"
	},
	{
		"name": "Stuart",
		"address": "Ap #535-7293 Auctor. Av.",
		"mail": "neque.In@ac.edu",
		"phone": "08 98 68 86 88"
	},
	{
		"name": "Palmer",
		"address": "Ap #703-1473 Tristique Road",
		"mail": "elit.pretium@dolor.com",
		"phone": "02 34 61 03 24"
	},
	{
		"name": "Jordan",
		"address": "179-7896 Nec St.",
		"mail": "Duis.sit@vestibulumMaurismagna.com",
		"phone": "08 25 54 90 64"
	}
];
  	}
  })
   

  .controller('MainCtrl', function ($scope,Data) {
    
    $scope.data = Data.getData();
    
    $scope.deletePerson = function(index) {
    	console.log(index);
    	$scope.data.splice(index,1);
}
    $scope.addPerson = function() {
    	// console.log(person);
    	// console.log($scope.data[$scope.data.length-1]);
    	$scope.data.push($scope.person);
    	// console.log($scope.data.length);
    	// person = {};
    	$scope.person = {};
    }

    $scope.updatePerson = function(index) {
    	console.log($scope.person);
    	$scope.data[index] = $scope.person;
    	$scope.person = {};
    }
    
  });
