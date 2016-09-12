app.controller("HitchBikeController", ['$scope', 'HitchBikeService', '$location', '$http', '$window', '$route', '$routeParams', function($scope, HitchBikeService, $location, $http, $window, $route, $routeParams){

  $scope.$on('$routeChangeSuccess', function() {
    $scope.authPath();
  });

  $scope.view = {};

  $scope.view.popUp = true;
  $scope.view.time = ['7am', '730am', '8am', '830am', '9am', '930am', '10am', '1030am', '11am', '1130am', '12pm', '1230pm', '1pm', '130pm', '2pm', '230pm', '3pm', '330pm','4pm', '430pm', '5pm', '530pm', '6pm', '630pm', '7pm', '730pm', '8pm', '830pm', '9pm', '930pm', '10pm'];
  $scope.view.states = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];

  HitchBikeService.bikes().then(function(data) {
    $scope.view.bikes = data.data;
  });

  HitchBikeService.requestedbikes().then(function(data) {
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
      if(res.data.errors){
        $scope.view.error = res.data.errors;
      }
      else{
        localStorage.jwt = res.data.token;
        $location.path('/bikes');
        $window.location.reload();
      }
    });
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
    .then(function(res) {
      if(res.data.errors){
        $scope.view.error = res.data.errors;
      }else {
        localStorage.jwt = res.data.token;
        $location.path('/bikes');
        $window.location.reload();
      }
    });
  }

  $scope.view.signOut = function() {
    localStorage.clear();
    $location.path('/');
    $window.location.reload();
  }

  $scope.displayAuthOption = function() {
    $scope.openPopUp();
    return $location.path('/bikes/authoption');
  }

  $scope.directToSignup = function() {
    $scope.openPopUp();
    return $location.path('/bikes/signup');
  }

  $scope.directToSignin = function() {
    $scope.openPopUp();
    return $location.path('/bikes/signin');
  }

  $scope.authPath = function() {
    console.log($scope.view.onBikes);
    var path = $route.current.$$route.originalPath;
    if ( (path === '/bikes') || (path === '/bikes/authoption') || (path === '/bikes/signup') || (path === '/bikes/signin') ) {
      $scope.view.onBikes = true;
    } else {
      $scope.view.onBikes = false;
    }
    console.log($scope.view.onBikes);
  }

  $scope.requestBike = function() {
    return $location.path('/bikes/request');
  }

  $scope.openPopUp = function() {
    $scope.view.popUp = true;
    console.log('open');
  }

  $scope.closePopUp = function() {
    $scope.view.popUp = false;
    var path = $route.current.$$route.originalPath;
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
    else if (path === '/bikes/request/bike/:id/:ownerid') {
      return $location.path('/bikes');
    }
    else if (path === '/bikes/authoption') {
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

  $scope.view.submitRequest = function(user_id, message, startDate, endDate) {
    console.log("SUBMIT");
    HitchBikeService.submitRequest(user_id, $routeParams.id, $routeParams.ownerid, message, startDate, endDate);
    $location.path('/dashboard/' + user_id);
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

app.controller("dashboardController", ['$scope', 'HitchBikeService', '$routeParams', '$window', function($scope, HitchBikeService, $routeParams, $window){
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
  var vm = this;
  $scope.view.showRequests = false;
  $scope.view.editBike = false;



  HitchBikeService.dashboardBikes($routeParams.id).then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
    $scope.view.myBikeCount = 0;
    for(var i=0; i<$scope.view.bikes; i++) {
      if($scope.view.bikes[i].owner_id == $routeParams.id) {
        $scope.view.myBikeCount = $scope.view.myBikeCount + 1;
      }
    }

  })

  HitchBikeService.borrowedBikes($routeParams.id).then(function(data) {
    $scope.view.borrowedBikes = data.data;
    $scope.view.pendingCount = 0;
    for(var i=0; i<$scope.view.borrowedBikes; i++) {
      if($scope.view.borrowedBikes[i].status === 'pending') {
        $scope.view.pendingCount = $scope.view.pendingCount + 1;
      }
    }
  })


  $scope.view.pendingRequests = [];

  HitchBikeService.requests($routeParams.id).then(function(data) {
    $scope.view.requests = data.data;
    for(var i=0; i<$scope.view.requests.length; i++) {
      if($scope.view.requests[i].status === 'pending') {
        $scope.view.pendingRequests.push($scope.view.requests[i]);
      }
      else {
        console.log("No pending");
      }
    }
  });



  HitchBikeService.userInfo($routeParams.id).then(function(data) {
    $scope.view.userData = data.data;
    console.log($scope.view.userData);
    // console.log(data);
  });

  $scope.view.updateAddress = function(id) {
    console.log(id);
    console.log(updateAddressForm.street_address.value);
    HitchBikeService.updateAddress(id, updateAddressForm.street_address.value, updateAddressForm.city.value, updateAddressForm.state.value, updateAddressForm.zip_code.value);
  }

  $scope.view.changeBikeAvailability = function(id, status) {
    console.log(id);
    var newStatus = !status;
    console.log(newStatus);
    HitchBikeService.updateBikeAvailability(id, newStatus);
    $window.location.reload();
  }

  $scope.view.updateBikeInfo = function(id, title, description, instructions, type, condition, price_day, price_hour, street_address, city, state, zip_code) {
    console.log(id);
    // console.log($scope);
    // console.log(form);
    // console.log(bike);
    // console.log(updateBikeForm.title);
    console.log(description, instructions, type, condition, price_day, price_hour, street_address, city, state, zip_code);
    HitchBikeService.updateBikeInfo(id, title, description, instructions, type, condition, price_day, price_hour, street_address, city, state, zip_code);
    // .then(function(){
      $window.location.reload();
    // });
  }

  $scope.view.deleteBike = function(id) {
    console.log("DELETE");
    HitchBikeService.deleteBike(id);
    $window.location.reload();
  }

}])

app.controller("requestController", ['$scope', 'HitchBikeService', '$routeParams', '$window', function($scope, HitchBikeService, $routeParams, $window){

  $scope.view = {};
  $scope.view.popUp = true;
  HitchBikeService.requestsToConfirm($routeParams.id).then(function(data) {
    console.log(data);
    $scope.view.requests = data.data;
  });

  $scope.view.updateRequest = function(message) {
    // console.log(request_id);
    HitchBikeService.confirmRequest($routeParams.id, message);
    $window.location.reload();
  }

  $scope.view.deleteRequest = function(id) {
    HitchBikeService.deleteRequest($routeParams.id);
    $window.location.reload();
  }
}]);
