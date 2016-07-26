var app = angular.module("hitchBikeApp", ['angularMoment', 'ngAnimate', 'ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: "HitchBikeController"
    })
    .when('/signup', {
      templateUrl: 'views/signup.html'
    })
    .when('/signupsuccess', {
      templateUrl: 'views/signupsuccess.html'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html'
    })
    .when('/bikes', {
      templateUrl: 'views/bikes.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/addbike', {
      templateUrl: 'views/addbike.html'
    })
    .when('/bikes/addbikesuccess', {
      templateUrl: 'views/addbikesuccess.html'
    })
    .when('/bikes/signup', {
      templateUrl: 'views/signup.html'
    })
    .when('/bikes/signupsuccess', {
      templateUrl: 'views/signupsuccess.html'
    })
    .when('/bikes/signin', {
      templateUrl: 'views/signin.html'
    })
    .when('/bikes/request', {
      templateUrl: 'views/request.html'
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html'
    })
    .when('/dashboard/addbike', {
      templateUrl: 'views/addbike.html'
    })
    .when('/dashboard/settings', {
      templateUrl: 'views/dashboard.html'
    })
    .when('/dashboard/mybikes', {
      templateUrl: 'views/mybikes.html'
    })
    .when('/dashboard/mybikes/confirmaccept', {
      templateUrl: 'views/confirmaccept.html'
    })
    .when('/dashboard/mybikes/confirmdeny', {
      templateUrl: 'views/confirmdeny.html'
    })
    .when('/dashboard/mybikes/deleteconfirm', {
      templateUrl: 'views/bikedelete.html'
    })
    .when('/dashboard/borrowed', {
      templateUrl: 'views/borrowedbikes.html'
    })
    .otherwise( { redirectTo: '/' } );
  });
