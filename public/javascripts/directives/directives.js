app.directive('bikesPage', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/page-bikes.html'
  }
})
app.directive('dashboardPage', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/page-dashboard.html'
  }
})
app.directive('landingPage', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/page-landing.html'
  }
})
app.directive('addBike', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-addbike.html'
  }
})
app.directive('addBikeSuccess', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-addbikesuccess.html'
  }
})
app.directive('deleteBike', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-bikedelete.html'
  }
})
app.directive('confirmAccept', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-confirmaccept.html'
  }
})
app.directive('confirmDeny', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-confirmdeny.html'
  }
})
app.directive('requestBike', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-request.html'
  }
})
app.directive('signUp', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-signup.html'
  }
})
app.directive('signUpSuccess', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-signupsuccess.html'
  }
})
app.directive('signIn', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-signin.html'
  }
})
app.directive('popupOverlay', function() {
  return {
    restrict: 'E',
    templateUrl: 'javascripts/directives/partials/popup-overlay.html'
  }
})
