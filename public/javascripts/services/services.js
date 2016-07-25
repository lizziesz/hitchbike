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
    },
    signIn: function(username, password) {
      var user = {};
      user.username = username;
      user.password = password;
      return $http.post('/api/signin', user);
    }
  }
})
