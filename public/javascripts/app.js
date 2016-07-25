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
    .when('/addbike', {
      templateUrl: 'views/addbike.html'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html'
    })
    .otherwise( { redirectTo: '/' } );
  });
