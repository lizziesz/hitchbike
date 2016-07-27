app.controller("HitchBikeController", ['$scope', 'HitchBikeService', '$location', function($scope, HitchBikeService, $location){
  $scope.view = {};
  // this should technically be false, but works as true for some reason..
  $scope.view.popUp = true;

  HitchBikeService.bikes().then(function(data) {
    // console.log(data);
    $scope.view.bikes = data.data;
  });

  HitchBikeService.requestedbikes().then(function(data) {
    // console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  $scope.view.addBike = function() {
    HitchBikeService.addBike($scope.view.bikes, )
  }

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

  $scope.openPopUp = function() {
    $scope.view.popUp = true;
    console.log('open');
  }

  $scope.closePopUp = function() {
    $scope.view.popUp = false;
    var path = $location.path();
    if (path === '/signup') {
      return $location.path('/');
    }
    else if (path === '/signupsuccess') {
      return $location.path('/');
    }
    else if (path === '/signin') {
      return $location.path('/');
    }
    else if (path === '/bikes/signup') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/signupsuccess') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/signin') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/addbike') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/addbikesuccess') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/request') {
      return $location.path('/bikes');
    }
    else if (path === '/dashboard/addbike') {
      return $location.path('/dashboard');
    }
    else if (path === '/dashboard/addbikesuccess') {
      return $location.path('/dashboard');
    }
    else if (path === '/dashboard/mybikes/confirmdeny') {
      return $location.path('/dashboard/mybikes');
    }
    else if (path === '/dashboard/mybikes/confirmaccept') {
      return $location.path('/dashboard/mybikes');
    }
    console.log('closed');
  }

}]);

app.controller("BikesSearchController", ['$scope', 'HitchBikeService', '$location', '$routeParams', function($scope, HitchBikeService, $location, $routeParams){
  $scope.view = {};

  HitchBikeService.searchBikes($routeParams.location).then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
  })

  HitchBikeService.requestedbikes().then(function(data) {
    console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);

app.controller("BikesSearchDateController", ['$scope', 'HitchBikeService', '$location', '$routeParams', function($scope, HitchBikeService, $location, $routeParams){
  $scope.view = {};

  HitchBikeService.requestedbikes().then(function(data) {
    // console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.searchBikesDate($routeParams.location, $routeParams.startTime, $routeParams.endTime).then(function(data) {
    // console.log(data);
    $scope.view.bikes = data.data;
  })

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
    $location.path('/bikes');
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);

app.controller("dashboardController", function($scope){
  $scope.showAccountInfo = false;
  $scope.toggleAccount = function(){
    if($scope.showAccountInfo === false){
      $scope.showAccountInfo = true;
    }
    else {
      $scope.showAccountInfo = false;
    }
  };
  $scope.showBorrowedBikes = false;
  $scope.toggleBorrowedBikes = function(){
    if($scope.showBorrowedBikes === false){
      $scope.showBorrowedBikes = true;
    }
    else {
      $scope.showBorrowedBikes = false;
    }
  };
  $scope.showMyBikes = false;
  $scope.toggleMyBikes = function(){
    if($scope.showMyBikes === false){
      $scope.showMyBikes = true;
    }
    else {
      $scope.showMyBikes = false;
    }
  };
})
