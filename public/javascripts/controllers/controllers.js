app.controller("HitchBikeController", ['$scope', 'HitchBikeService', '$location', '$http', '$window', function($scope, HitchBikeService, $location, $http, $window){
  $scope.view = {};
  // this should technically be false, but works as true for some reason..
  $scope.view.popUp = true;
  $scope.view.time = ['7am', '730am', '8am', '830am', '9am', '930am', '10am', '1030am', '11am', '1130am', '12pm', '1230pm', '1pm', '130pm', '2pm', '230pm', '3pm', '330pm','4pm', '430pm', '5pm', '530pm', '6pm', '630pm', '7pm', '730pm', '8pm', '830pm', '9pm', '930pm', '10pm'];

  HitchBikeService.bikes().then(function(data) {
    // console.log(data);
    $scope.view.bikes = data.data;
  });

  HitchBikeService.requestedbikes().then(function(data) {
    // console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  $scope.view.addBike = function(id) {
    // console.log($scope.view.addBikeOwnerId);
    console.log(id);
    HitchBikeService.addBike($scope.view.bikes, $scope.view.addBikeTitle, $scope.view.addBikeImage, $scope.view.addBikePriceday, $scope.view.addBikePricehour, $scope.view.addBikeType, $scope.view.addBikeCondition, $scope.view.addBikeInstructions, $scope.view.addBikeDescription, $scope.view.addBikeStreet_address, $scope.view.addBikeCity, $scope.view.addBikeState, $scope.view.addBikeZip_code, id);
    $location.path('/bikes');
    $window.location.reload();
  }

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password).then(function (res) {
      localStorage.jwt = res.data.token;
      $location.path('/bikes');
      $window.location.reload();
    });
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
    .then(function(res) {
      localStorage.jwt = res.data.token;
      $location.path('/bikes');
      $window.location.reload();
    });
  }

  $scope.view.signOut = function() {
    localStorage.clear();
    $location.path('/');
    $window.location.reload();
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

app.controller("dashboardController", ['$scope', 'HitchBikeService', '$routeParams', function($scope, HitchBikeService, $routeParams){
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

  $scope.view = {};
  $scope.view.showRequests = false;
  HitchBikeService.dashboardBikes($routeParams.id).then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
  })

  HitchBikeService.borrowedBikes($routeParams.id).then(function(data) {
    $scope.view.borrowedBikes = data.data;
  })

  HitchBikeService.requests($routeParams.id).then(function(data) {
    $scope.view.requests = data.data;
  });

}])
