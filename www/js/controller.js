/**
 * Angular JS Controllers
 */
var app = angular.module('TransportApp.controllers', []);

app.controller('HomeTabCtrl', function($scope) {
	console.log('HomeTabCtrl');
});

app.controller('StopTabCtrl', function($scope) {
	console.log('StopTabCtrl');
});

app.controller('RoutesTabCtrl', function($scope) {
	console.log('RoutesTabCtrl');
});

app.controller('LocateTabCtrl', function($scope, $ionicLoading, MapService) {
	/*
	var defaultLat = 18.505175;
	var defaultLng = 73.791721;
	var map = new google.maps.Map(document.getElementById("locate-content"),
			MapService.getMapOptions(defaultLat, defaultLng));

	var marker = MapService.getMapMarker(map, defaultLat, defaultLng,
			"Default Location");

	navigator.geolocation.getCurrentPosition(function(pos) {
		$scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude,
				pos.coords.longitude));
	}, function(error) {

		$scope.loading = $ionicLoading.show({
			content : 'Unable to current location...<br/>' + error.message,
			showBackdrop : false
		});
	});
	*/
});

app.controller('SettingsTabCtrl', function($scope) {
	console.log('SettingsTabCtrl');
});
