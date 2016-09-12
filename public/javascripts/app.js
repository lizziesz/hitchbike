var app = angular.module("hitchBikeApp", ['angularMoment', 'ngAnimate', 'ngRoute'])


app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('HitchBikeInterceptor');
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: "HitchBikeController"
    })
    .when('/signup', {
      templateUrl: '/views/landing-signup.html',
      controller: "HitchBikeController"
    })
    .when('/signupsuccess', {
      templateUrl: 'views/landing-signupsuccess.html',
      controller: "HitchBikeController"
    })
    .when('/signin', {
      templateUrl: 'views/landing-signin.html',
      controller: "HitchBikeController"
    })
    .when('/bikes', {
      templateUrl: 'views/bikes.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/search/:location', {
      templateUrl: 'views/bikes.html',
      controller: "BikesSearchController"
    })
    .when('/bikes/search/:location/:startTime/:endTime', {
      templateUrl: 'views/bikes.html',
      controller: "BikesSearchDateController"
    })
    .when('/bikes/addbike', {
      templateUrl: 'views/bikes-addbike.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/addbikesuccess', {
      templateUrl: 'views/bikes-addbikesuccess.html'
    })
    .when('/bikes/signup', {
      templateUrl: 'views/bikes-signup.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/signupsuccess', {
      templateUrl: 'views/bikes-signupsuccess.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/signin', {
      templateUrl: 'views/bikes-signin.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/request/bike/:id/:ownerid', {
      templateUrl: 'views/bikes-request.html',
      controller: 'BikesSearchController'
    })
    .when('/bikes/authoption', {
      templateUrl: 'views/bikes-authoption.html',
      controller: "HitchBikeController",
    })
    .when('/dashboard/:id', {
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardController',
      resolve: {
        check: function($location, $rootScope, $route){
            if($rootScope.user.id == $route.current.params.id){
                console.log('you are good');//Do something
            }else{
                $location.path('/bikes');    //redirect user to home.
                console.log("Nice try");
            }
        }
      }
    })
    .when('/dashboard/addbike', {
      templateUrl: 'views/dashboard-addbike.html',
    })
    .when('/dashboard/addbikesuccess', {
      templateUrl: 'views/dashboard-addbikesuccess.html'
    })
    .when('/dashboard/settings', {
      templateUrl: 'views/dashboard.html'
    })
    .when('/dashboard/borrowed', {
      templateUrl: 'views/borrowedbikes.html'
    })
    .when('/dashboard/mybikes', {
      templateUrl: 'views/dashboard-mybikes.html'
    })
    .when('/dashboard/mybikes/confirmaccept/:id', {
      templateUrl: 'views/dashboard-confirmaccept.html',
      controller: 'requestController'
    })
    .when('/dashboard/mybikes/confirmdeny/:id', {
      templateUrl: 'views/dashboard-confirmdeny.html',
      controller: 'requestController'
    })
    .when('/dashboard/mybikes/deleteconfirm', {
      templateUrl: 'views/dashboard-bikedelete.html'
    })
    .otherwise( { redirectTo: '/' } );
  });
  //
  app.run(function($rootScope, $location) {

    if (localStorage.jwt) {
      $rootScope.user = jwt_decode(localStorage.jwt);
    }
  });
