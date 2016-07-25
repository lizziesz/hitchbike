var app = angular.module("hitchBikeApp", ['angularMoment', 'ngAnimate', 'ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: 'HitchBikeController'
    })
    .when('/bikes', {
      templateUrl: 'views/bikes.html'
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html'
    })
    .otherwise( { redirectTo: '/' } );
  });
