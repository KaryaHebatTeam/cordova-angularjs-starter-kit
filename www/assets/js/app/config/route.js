angular
	.module('Starter')
	.config(Route);

function Route($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/friend-list.html'
		});
}