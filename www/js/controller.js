/**
 * Angular JS Controllers
 */
angular.module('transportApp', [ 'ionic' ])

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

	$stateProvider.state('tabs', {
		url : "/tab",
		abstract : true,
		templateUrl : "tabs.html"
	}).state('tabs.home', {
		url : "/home",
		views : {
			'home-tab' : {
				templateUrl : "home.html",
				controller : 'HomeTabCtrl'
			}
		}
	}).state('tabs.stops', {
		url : "/stops",
		views : {
			'stops-tab' : {
				templateUrl : "stops.html",
				controller : "StopTabCtrl"
			}
		}
	}).state('tabs.routes', {
		url : "/routes",
		views : {
			'routes-tab' : {
				templateUrl : "routes.html",
				controller: "RoutesTabCtrl"
			}
		}
	}).state('tabs.locate', {
		url : "/locate",
		views : {
			'locate-tab' : {
				templateUrl : "locate.html",
				controller : "LocateTabCtrl"
			}
		}
	}).state('tabs.settings', {
		url : "/settings",
		views : {
			'settings-tab' : {
				templateUrl : "settings.html",
				controller : "SettingsTabCtrl"
			}
		}
	});

	$urlRouterProvider.otherwise("/tab/home");
	$ionicConfigProvider.tabs.position('bottom');
	$ionicConfigProvider.navBar.alignTitle('center');

})

.controller('HomeTabCtrl', function($scope) {
	console.log('HomeTabCtrl');
})

.controller('StopTabCtrl', function($scope) {
	console.log('StopTabCtrl');
})

.controller('RoutesTabCtrl', function($scope) {
	console.log('RoutesTabCtrl');
})

.controller('LocateTabCtrl', function($scope) {
	console.log('LocateTabCtrl');
})

.controller('SettingsTabCtrl', function($scope) {
	console.log('SettingsTabCtrl');
});
