app.factory('HitchBikeService', function($http) {
  return {
    bikes: function() {
      return $http.get('/api/bikes');
    },
    requestedbikes: function() {
      return $http.get('/api/requestedbikes')
    },
    users: function() {
      return $http.get('/api/users');
    }
  }
})
