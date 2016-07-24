var app = angular.module("hitchBikeApp", ['angularMoment', 'ngAnimate', 'ngRoute'])

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'index.html',
      controller: 'HitchBikeController'
    })
    .otherwise( { redirectTo: '/' } );
  });
