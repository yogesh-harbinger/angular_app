(function () {
'use strict';
/**
 * User controller
*/
sampleApp.controller('UserController', function(
        $stateParams,
        UserService,
        FilterService
    ) {
    var vm = this;
    // Fetch data from resource
    // In real application application must fetch data using GET method and for specific record
    var userID = $stateParams.id;
    if(userID){
        UserService.query().$promise.then(function(userListResponse) {
            // Use of angularJS filter functionality to get specific record
            vm.userDataSet = FilterService.filterData( userListResponse , {id:parseInt(userID)},true);
            vm.recordFound = true;
            if(typeof vm.userDataSet == 'undefined'){
                vm.recordFound = false;
            }
        });
    }
});
})();
