'use strict';

/* Initialization of Sample App
* version 1.4.7
* Add module names which needs to be pre-loaded
*/
var sampleApp = angular.module('sampleApp', [
    'ngResource',
    'ui.router', // Used UI router to load views as per state of application
    'ui.bootstrap',
    'datatables',
    'ngMap'
]);

// Define required states here
sampleApp.config(function($urlRouterProvider,$stateProvider,LAYOUT_OBJ) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('/', {
        url:'/',
        views: {
		'@' : {
                templateUrl: LAYOUT_OBJ.LAYOUT_FILE_NAME
            },
            "header@/": {
                templateUrl: LAYOUT_OBJ.HEADER_FILE_NAME
            },
            "content@/":{
                //templateUrl: templateDir+'content.html',
                templateUrl: LAYOUT_OBJ.MODULE_DIR + 'dashboard/content.html',
                controller: "DashboardController",
                controllerAs: "vm"
            },
            "footer@/":{
                templateUrl: LAYOUT_OBJ.FOOTER_FILE_NAME
            }
        }
    })
    .state('/user/:id', {
        url:'/user/:id',
        views: {
			'@' : {
                templateUrl: LAYOUT_OBJ.LAYOUT_FILE_NAME
            },
            "header@/user/:id": {
                templateUrl: LAYOUT_OBJ.HEADER_FILE_NAME
            },
            "content@/user/:id":{
                templateUrl: LAYOUT_OBJ.MODULE_DIR + 'userdetails/userDetails.html',
                controller: "UserController",
                controllerAs: "vm"
            },
            "footer@/user/:id":{
                templateUrl: LAYOUT_OBJ.FOOTER_FILE_NAME
            }
        }
    })
    .state('/usermap/:id', {
        url:'/usermap/:id',
        views: {
			'@' : {
                templateUrl: LAYOUT_OBJ.LAYOUT_FILE_NAME
            },
            "header@/usermap/:id": {
                templateUrl: LAYOUT_OBJ.HEADER_FILE_NAME
            },
            "content@/usermap/:id":{
                templateUrl: LAYOUT_OBJ.MODULE_DIR + 'map/map.html',
                controller: "MapController",
                controllerAs: "vm"
            },
            "footer@/usermap/:id":{
                templateUrl: LAYOUT_OBJ.FOOTER_FILE_NAME
            }
        }
    })
});