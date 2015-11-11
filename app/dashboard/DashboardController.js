(function () {
'use strict';
/**
 * Dashboard controller
*/
sampleApp.controller('DashboardController', function(
	UserService
) {
	var vm = this;
	// Fetch data from resource created to get all user's data
	UserService.query().$promise.then(function(userListResponse) {
	 		//Data set contains all user's information
	 		vm.userDataSet = userListResponse;
	});
});
})();