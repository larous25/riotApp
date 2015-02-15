(function(){
	angular.module('ritopls.services', [])
	.factory('ritoChampionService', ['$http', '$q', function($http, $q){

		var paths = {
			basePath:'https://lan.api.pvp.net/api/',
			key:{
				'api_key':'YOUR_API_KEY'
			}
		};

		function champions (){
			var deferred = $q.defer();
			var opctionsXhrNames = {
				method:'GET',
				url:paths.basePath+'lol/static-data/lan/v1.2/champion/',
				dataType:'JSON',
				params:paths.key
			};

			$http(opctionsXhrNames)
			.success(function(data, status){
				if(status === 200){
					deferred.resolve(data.data);
				}else{
					deferred.reject('some error');
				}
			});
			console.log( deferred.promise);
			return deferred.promise;
		}

		function champion(championId){
			var deferred = $q.defer();
			var params = paths.key;

			params.champData = 'all';

			var opctionsXhrNames = {
				method:'GET',
				url:paths.basePath+'lol/static-data/lan/v1.2/champion/'+championId,
				dataType:'JSON',
				params:params
			};

			$http(opctionsXhrNames)
			.success(function(data){
				deferred.resolve(data);
			});

			return deferred.promise;
		}
		
		return {
			champions : champions,
			champion : champion
		};
	}])
		
})();