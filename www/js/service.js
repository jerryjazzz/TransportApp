/**
 * Angular JS Services
 */
var app = angular.module('TransportApp.services', []);

app.factory('MapService', function() {
	return {
		getMapOptions : function(lat, lng) {
			var mapOption = {
				center : new google.maps.LatLng(lat, lng),
				zoom : 16,
				mapTypeId : google.maps.MapTypeId.ROADMAP
			};
			return mapOption;
		},

		getMapMarker : function(mapInstance, lat, lng, markerTitle) {
			var mapMarker = new google.maps.Marker({
				position : new google.maps.LatLng(lat, lng),
				map : mapInstance,
				title : markerTitle
			});
			return mapMarker;
		}
	};
});