'use strict';

angular.module('vizApp')
  .factory('fileupload',['$http',function ($http) {
  	return function(url) {
  	  	
    var myobj =
{
	get: function(path) { 	
	var promise = $http.get(url+path)
		.then(function(response) {
				return response.data;
			
		})
	return promise;
				
  	},
   
   post: function(path,value) { 	
	var promise = $http.post(url+path,{'movie':value})
		.then(function(response) {
				return response.data;
			
		})
	return promise;
				
  	}
   }
  return myobj;
}
  }])
  .controller('UploadCtrl', function ($scope,fileupload) {
 	var sinatra = fileupload('http://localhost:4567/');
    $scope.get = function() {
        sinatra.get('movie').then(function(results) {
    	console.log(results);
    });
}
	$scope.post = function(value) {
		sinatra.post('upload',value).then(function(results) {
		console.log(results);
		})
	}

  });
