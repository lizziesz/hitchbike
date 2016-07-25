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
    },
    signUp: function(array, username, password, email, street_address, city, state, zip_code) {
      var newUser = {};
      newUser.username = username;
      newUser.password = password;
      newUser.email = email;
      newUser.street_address = street_address;
      newUser.city = city;
      newUser.state = state;
      newUser.zip_code = zip_code;
      array.push(newUser);
      return $http.post('/api/signup', newUser);
    }
  }
})
