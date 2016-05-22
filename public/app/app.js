
(function() {
	"use strict";
	var app = angular.module("myquiz",['ngRoute']);
	/**
        Setting up routes for the application.
        config() is the first function to run when the app bootstraps.
            Use config to set any configuration parameters to the app/service
    **/
    app.config(function($routeProvider) {
		$routeProvider
            /**
                Takes two arguments @url, @object.
                Object contains different properties such as
                    1. templateURL
                    2. controller
                    3. controllerAs (Alias name to the controller)
                    4. resolve (if you want to load data before loading the view)
                    5. template (HTML string of template)
            **/
			.when("/dash", {
				templateUrl : "app/modules/dashboard/dashboard.template.html"
			})
			
            /**
                Used to redirect 404 pages.
            **/
			.otherwise("/dash");
	});
})();
