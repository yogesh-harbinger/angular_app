(function () {
'use strict';
/*
* Service to filter data on the basis of values
*/
sampleApp.factory("FilterService", function(
	$filter
) {
	return{
		filterData: function(list, expression, comparator){
	   		// Use of angularJS filter functionality to get specific record since API to get specific record is not available
      	var dataSet;
        dataSet = $filter("filter")(list, expression, comparator);
        return dataSet[0]; //return 0th element
		}
	};
});
})();