(function(){
	angular.module('ritopls.controllers', {})

	.controller('championsController',['$scope', 'ritoChampionService', function($scope, ritoChampionService){
		

		$scope.champions = [];
		ritoChampionService.champions().then(function(data){
			$scope.champions = data;
		});
		

	}])

	.controller('getChampController',['$scope', 'ritoChampionService', '$routeParams', function($scope, ritoChampionService, $routeParams){
		var championId = $routeParams.id;
		
		ritoChampionService.champion(championId).then(function(data){
			$scope.champion = data;
		});
		
		
	}]);
	
})();

