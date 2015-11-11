(function () {
'use strict';
// define constants here
var LAYOUT_OBJ = {};
LAYOUT_OBJ = {
		LAYOUT_FILE_NAME: 'app/templates/layout.html',
		HEADER_FILE_NAME: 'app/templates/header.html',
		FOOTER_FILE_NAME: 'app/templates/footer.html',
		MODULE_DIR: 'app/'
	};

sampleApp
	.constant('BASE_API_URL', 'json/')
	.constant('USER_LIST_API', 'user_list.json')
	.constant('LAYOUT_OBJ', LAYOUT_OBJ);
})();