/**
 * Angular JS Controllers
 */
var app = angular.module('transportApp.controllers', [ 'ionic' ]);

app.controller('HomeTabCtrl', function($scope) {
	console.log('HomeTabCtrl');
});

app.controller('StopTabCtrl', function($scope) {
	console.log('StopTabCtrl');
});

app.controller('RoutesTabCtrl', function($scope) {
	console.log('RoutesTabCtrl');
});

app.controller('LocateTabCtrl', function($scope) {
	console.log('LocateTabCtrl');

	var mapOptions = {
		center : new google.maps.LatLng(43.07493, -89.381388),
		zoom : 16,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("locate-content"), mapOptions);

});

app.controller('SettingsTabCtrl', function($scope) {
	console.log('SettingsTabCtrl');
});
