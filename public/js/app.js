(function(){
	var app = angular.module('ritopls',[
		'ngRoute',
		'ritopls.controllers',
		'ritopls.services'
		]);

	app.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'views/champions.html',
			controller:'championsController'
		})
		.when('/champ/:id',{
			templateUrl:'views/champion.html',
			controller:'getChampController'	
		});

	});

	app.filter('imgruote', function(){
		return function(input){
			var name = input
							.replace("'","")
							.replace("’","")
							.replace(".","")
							.replace(" ","");
			var url ='http://ddragon.leagueoflegends.com/cdn/4.21.3/img/champion/' + name +'.png';
			return url;
		};
	});


})();