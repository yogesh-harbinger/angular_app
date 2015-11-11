(function () {
'use strict';
/*
* Resource to get all users data
*/
sampleApp.factory("UserService", function(
		$resource,
		BASE_API_URL,
		USER_LIST_API
	) {
  	return $resource(BASE_API_URL + USER_LIST_API);
});
})();





