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
    requestsToConfirm: function(id) {
      return $http.get('/api/confirmrequests/' + id);
    },
    confirmRequest: function(id, message) {
      var updateRequest = {};
      updateRequest.message = message;
      return $http.post('/api/confirmrequest/' + id, updateRequest);
    },
    deleteRequest: function(id) {
      console.log('deleteinadslj a');
      return $http.get('/api/deleterequest/' + id);
    },
    users: function() {
      return $http.get('/api/users');
    },
    userInfo: function(id) {
      return $http.get('/api/userinfo/' + id);
    },
    submitRequest: function(user_id, bike_id, owner_id, message, startDate, endDate) {
      var newRequest = {};
      newRequest.requestor_id = user_id;
      newRequest.owner_id = owner_id;
      newRequest.bike_id = bike_id;
      newRequest.request_time_stamp = new Date();
      newRequest.borrow_start_time = startDate;
      newRequest.borrow_end_time = endDate;
      newRequest.startDate = Date.parse(startDate);
      newRequest.endDate = Date.parse(endDate);
      newRequest.message = message;
      // array.push(newRequest);
      return $http.post('/api/newrequest', newRequest);
    },
    searchBikes: function(locationInput) {
      return $http.get('/api/bikes/search/' + locationInput);
    },
    searchBikesDate: function(locationInput, startInput, endInput) {
      return $http.get('/api/bikes/search/' + locationInput + '/' + startInput + '/' + endInput)
    },
    updateAddress: function(id, street_address, city, state, zip_code) {
      var newAddress = {};
      newAddress.street_address = street_address;
      newAddress.city = city;
      newAddress.state = state;
      newAddress.zip_code = zip_code;
      return $http.post('/api/updateaddress/' + id, newAddress);
    },
    updateBikeAvailability: function(id, status) {
      return $http.post('/api/updatebikestatus/' + id + '/' + status);
    },
    updateBikeInfo: function(id, title, description, instructions, type, condition, price_day, price_hour, street_address, city, state, zip_code) {
      var updateBike = {};
      updateBike.id = id;
      updateBike.title = title;
      updateBike.description = description;
      updateBike.instructions = instructions;
      updateBike.type = type;
      updateBike.condition = condition;
      updateBike.price_day = price_day;
      updateBike.price_hour = price_hour;
      updateBike.street_address = street_address;
      updateBike.city = city;
      updateBike.state = state;
      updateBike.zip_code = zip_code;
      return $http.post('/api/updatebike', updateBike);
    },
    deleteBike: function(id) {
      return $http.get('/api/deletebike/' + id);
    },
    signIn: function(username, password) {
      var user = {};
      user.username = username.toLowerCase();
      user.password = password;
      return $http.post('/api/signin', user);
    },
    signUp: function(array, username, password, email, street_address, city, state, zip_code) {
      var newUser = {};
      newUser.username = username.toLowerCase();
      newUser.password = password;
      newUser.email = email;
      newUser.street_address = street_address;
      newUser.city = city.toLowerCase();
      newUser.state = state.toUpperCase();
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
      newBike.city = city.toLowerCase();
      newBike.state = state.toUpperCase();
      newBike.zip_code = zip_code;
      array.push(newBike);
      return $http.post('/api/addbike', newBike);
    }
  }
})

app.service("HitchBikeInterceptor", function HitchBikeInterceptor() {
  return {
    request: function(config){
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  }
})
