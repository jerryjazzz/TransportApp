/**
 * Angular JS Controllers
 */
var app = angular.module('transportApp.controllers', [ 'ionic', 'ngCordova' ]);

app.controller('HomeTabCtrl', function($scope) {
	console.log('HomeTabCtrl');
});

app.controller('StopTabCtrl', function($scope, $cordovaToast) {
	console.log('StopTabCtrl');
	$cordovaToast.show('Here is a message', 'long', 'center').then(
			function(success) {
				console.log('success');
			}, function(error) {
				console.log(error.message);
			});
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
	var map = new google.maps.Map(document.getElementById("locate-content"),
			mapOptions);

});

app.controller('SettingsTabCtrl', function($scope) {
	console.log('SettingsTabCtrl');
});
