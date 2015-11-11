# angular_app

This Demo app is created in AngularJS 1.4.7.

It uses the UI Router, Resources, Filter and Services.

It also make use of external module ngmap to display Google map and datatable module is used to add pagination on dashboard page.

In this demo app it fetches the User data from JSON file using resources.

UI router is used to have different pages as per the layout.

Services are written to create resource and filter data when there is a need to fetch specific record since API to fetch specific data is not available.

Apart from above code for controllers, constants and services is enclosed in anonymous function to avoid variable name or function name collision incase files are concatinated and merged in single file. It also uses the 'use strict' directive  
