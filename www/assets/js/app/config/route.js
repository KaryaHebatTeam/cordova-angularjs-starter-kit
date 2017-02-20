angular
	.module('Starter')
	.config(Route);

function Route($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');

	$routeProvider
		.when('/', {
			templateUrl: 'view/splash.html'
		})
		.when('/friend-list', {
			templateUrl: 'view/friend-list.html'
		});
}