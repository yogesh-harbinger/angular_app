(function () {
'use strict';
/**
 * Map controller
*/
sampleApp.controller('MapController', function(
    $scope,
    $stateParams,
    $filter,
    UserService,
    FilterService
) {
    // Map Object initialization
    var vm = this;
    var mapObj;
    vm.recordFound = true;
    vm.LatLongObj = undefined;

    $scope.$on('mapInitialized', function(event, map) {
        //Basic configuration
        mapObj = map;
        mapObj.setZoom(8); // Zoom level

    });
    var userID = $stateParams.id;
    if(userID){
        UserService.query().$promise.then(function(userListResponse) {
            // Use of angularJS filter functionality to get specific record
            vm.userData = FilterService.filterData( userListResponse , {id:parseInt(userID)}, true);
            if(typeof vm.userData != 'undefined'){
                // As Address is auto-generated they are not valid so passing complete address may not give any latlong object so passing only country
                vm.addressString = vm.userData.address.street_address+',<br>'+vm.userData.address.city+',<br>'+vm.userData.address.region+',<br>'+vm.userData.address.country;
                // Call getcoder to get latlong object for address
                var geocoder = new google.maps.Geocoder();
                if (geocoder) {
                    geocoder.geocode({'address': vm.userData.address.country}, function(results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                                vm.LatLongObj = results[0].geometry.location;

                                // Now setting Marker position
                                mapObj.setCenter(vm.LatLongObj);
                                var infowindow = new google.maps.InfoWindow({
                                    content: '<div><b>' + vm.addressString + '</b></div>',
                                    size: new google.maps.Size(150, 50)
                                });
                                var marker = new google.maps.Marker({
                                    position: vm.LatLongObj,
                                    title: 'Address',
                                    map: mapObj
                                });
                                google.maps.event.addListener(marker, 'click', function() {
                                    infowindow.open(mapObj, marker);
                                });
                            } else {
                                // No latitude longitude found
                                console.log('Latitude and Longitude not found for address '+address);
                            }
                        } else {
                            console.log('Geocode was successful with status '+ status);
                        }
                    });
                }
            } else {
                vm.recordFound = false;
            }
        });
    }
});
})();