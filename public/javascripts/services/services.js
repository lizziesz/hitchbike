app.factory('HitchBikeService', function($http, $location) {
  return {
    bikes: function() {
      return $http.get('/api/bikes');
    },
    requestedbikes: function() {
      return $http.get('/api/requestedbikes')
    },
    dashboardBikes: function(id) {
      return $http.get('/api/dashboard/' + id)
    },
    borrowedBikes: function(id) {
      return $http.get('/api/dashboard/borrowedbikes/' + id)
    },
    requests: function(id) {
      return $http.get('/api/dashboard/requests/' + id)
    },
    users: function() {
      return $http.get('/api/users');
    },
    searchBikes: function(locationInput) {
      return $http.get('/api/bikes/search/' + locationInput);
    },
    searchBikesDate: function(locationInput, startInput, endInput) {
      return $http.get('/api/bikes/search/' + locationInput + '/' + startInput + '/' + endInput)
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
    },
    addBike: function(array, title, image, priceday, pricehour, type, condition, instructions, description, street_address, city, state, zip_code, owner_id) {
      var newBike = {};
      newBike.owner_id = owner_id;
      newBike.title = title;
      newBike.picture = image;
      newBike.price_day = priceday;
      newBike.price_hour = pricehour;
      newBike.type = type;
      newBike.condition = condition;
      newBike.instructions = instructions;
      newBike.description = description;
      newBike.street_address = street_address;
      newBike.city = city;
      newBike.state = state;
      newBike.zip_code = zip_code;
      array.push(newBike);
      return $http.post('/api/addbike', newBike);
    }
  }
})

app.service("HitchBikeInterceptor", function HitchBikeInterceptor() {
  return {
    request: function(config){
      console.log(localStorage.jwt);
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  }
})
