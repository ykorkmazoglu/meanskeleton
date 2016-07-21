var myApp = angular.module('myApp', ['ngRoute']);
// We instantiate our application and we inject ngrouter so that it's available
// and so that we can use it to set up our routes below.

// this is our front end router
myApp.config(function($routeProvider){
    $routeProvider
	.when('/',
    {
        controller: 'partial1Controller',
		templateUrl: "partials/partial1.html"
    })
    .when('/mongoose/edit/:id',
    {
        controller: "editController",
		templateUrl: "partials/edit.html"
	})
	.when('/mongoose/:id',
	{
		controller: 'showController',
		templateUrl: "partials/show.html"
	})
});
