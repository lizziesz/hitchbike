require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var jwtDecode = require('jwt-decode');
var token;
var errors;

function protect(req,res,next) {
  // var decoded = jwtDecode(req.token);
  // console.log(decoded);
  // console.log("REQ.JWT: " + req.token);
  jwt.verify(req.token, process.env.SECRET, function (err,decoded) {
    if (!err) {

      next();
    } else {
      res.status(400).send('Bad Request');
    }
  });
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/bikes', function(req, res, next) {
  knex('bikes').where('is_available', true).then(function(data) {
    // console.log(data);
    res.json(data);
  });
});

router.get('/api/dashboard/:id', function(req, res, next) {
  knex('bikes').where('owner_id', req.params.id).then(function(data) {
    res.json(data);
  });
});

router.get('/api/dashboard/borrowedbikes/:id', function(req, res, next) {
  knex('requested_bikes').where('requestor_id', req.params.id)
    .fullOuterJoin('bikes', 'bikes.id', 'requested_bikes.bike_id')
    .fullOuterJoin('users', 'requested_bikes.owner_id', 'users.id')
    .then(function(data) {
      console.log(data);
      res.json(data);
  });
});

router.get('/api/dashboard/requests/:id', function(req, res, next) {

  knex('requested_bikes')
  // .select('requested_bikes.id as newId')
  .where('requested_bikes.owner_id', req.params.id)
    .fullOuterJoin('bikes', 'bikes.id', 'requested_bikes.bike_id')
    .fullOuterJoin('users', 'requested_bikes.requestor_id', 'users.id')
    .then(function(data) {
      console.log(data);
      // console.log(requested_bikes.owner_id);
      res.json(data);
    });
});

router.get('/api/confirmrequests/:id', function(req, res, next) {

  knex('requested_bikes').where('requested_bikes.requestor_id', req.params.id)
    .fullOuterJoin('bikes', 'bikes.id', 'requested_bikes.bike_id')
    .fullOuterJoin('users', 'requested_bikes.requestor_id', 'users.id')
    .then(function(data) {
      console.log(data);
      res.json(data);
    });
});

router.post('/api/confirmrequest/:id', function(req, res, next) {
  knex('requested_bikes').where('requestor_id', req.params.id).update({
    message: req.body.message,
    status: 'confirmed'
  }).then(function(data) {
    res.redirect('/');
  });
});

router.get('/api/deleterequest/:id', function(req, res, next) {
  console.log("DELTETETETETET");
  knex('requested_bikes').where('requestor_id', req.params.id).delete().then(function(){
    res.redirect('/');
  });
});

router.get('/api/bikes/search/:location', function(req, res, next) {
  console.log("PARAMS: " + req.params.location);
  var location = req.params.location.toLowerCase();
  knex('bikes').where(function() {
    this.where({zip_code: req.params.location}).orWhere({city: location})
  }).where('is_available', 'true').then(function(data) {
    // console.log(data);
    res.json(data);``
  });
});

router.get('/api/bikes/search/:location/:startTime/:endTime', function(req, res, next) {
  // console.log("PARAMS: " + req.params.location);
  // console.log("START: " + req.params.startTime);
  var location = req.params.location.toLowerCase();
  var start = Date.parse(req.params.startTime.slice(1,11));
  var end = Date.parse(req.params.endTime.slice(1,11));
  console.log("Short start: " + start);
  console.log("Short end: " + end);
  knex('bikes').fullOuterJoin('requested_bikes', 'requested_bikes.bike_id', 'bikes.id').where(function() {
    this.where({zip_code: req.params.location}).orWhere({city: location})
  })
  .where('is_available', 'true')
  .then(function(data) {
    alreadyLookedAtBikes = [];
    dataToSend = [];
    dataNotToSend = [];
    for(var i=0; i<data.length; i++) {
      // alreadyLookedAtBikes.push(data[i].bike_id)
      if((start < data[i].startDate && end < data[i].startDate) && alreadyLookedAtBikes.indexOf(data[i].bike_id) == -1) {
        dataToSend.push(data[i]);
        alreadyLookedAtBikes.push(data[i].bike_id);
      }
      else if((start > data[i].endDate) && alreadyLookedAtBikes.indexOf(data[i].bike_id) == -1) {
        dataToSend.push(data[i]);
        alreadyLookedAtBikes.push(data[i].bike_id);
      }
      else if((!data[i].startDate || !data[i].endDate) && alreadyLookedAtBikes.indexOf(data[i].bike_id) == -1) {
        dataToSend.push(data[i]);
        alreadyLookedAtBikes.push(data[i].bike_id);
      }
      else if(start >= data[i].startDate && start <= data[i].endDate) {
        dataNotToSend.push(data[i]);
      }
      else if(end >= data[i].startDate && end <= data[i].endDate) {
        dataNotToSend.push(data[i]);
      }
      else if(data[i].startDate > start && data[i].endDate < end) {
        dataNotToSend.push(data[i]);
      }
    }
    console.log(dataToSend);
    console.log(dataNotToSend);
    console.log(alreadyLookedAtBikes);
    for(var i=0; i<dataToSend.length; i++) {
      for(var j=0; j<dataNotToSend.length; j++) {
        if(dataToSend[i].bike_id === dataNotToSend[j].bike_id) {
          dataToSend.splice(i, 1);
        }
      }
    }
    console.log(dataToSend);
    res.json(dataToSend);
  });
});

router.get('/api/requestedbikes', function(req, res, next) {
  knex('requested_bikes').then(function(data) {
    // console.log(data);
    res.json(data);
  });
});

router.get('/api/users', function(req, res, next) {
  knex('users').then(function(data) {
    res.json(data);
  });
});

router.get('/api/userinfo/:id', function(req, res, next) {
  knex('users').where('id', req.params.id).then(function(data) {
    res.json(data);
  });
});

router.post('/api/updateaddress/:id', function(req, res, next) {
  knex('users').where('id', req.params.id).update({
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  }).then(function(){
    res.redirect('/');
  });
});

router.post('/api/updatebikestatus/:id/:status', function(req, res, next) {
  knex('bikes').where('id', req.params.id).update({
    is_available: req.params.status
  }).then(function(){
    res.redirect('/');
  });
});

router.post('/api/updatebike', function(req, res, next) {
  console.log("Posting update");
  try{
    knex('bikes').where('id', req.body.id).update({
      title: req.body.title,
      description: req.body.description,
      instructions: req.body.instructions,
      type: req.body.type,
      condition: req.body.condition,
      price_day: req.body.price_day,
      price_hour: req.body.price_hour,
      street_address: req.body.street_address,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code
    }).then(function() {
      res.redirect('/');
    });

  } catch(err){
    console.log(err);
  }
});

router.get('/api/deletebike/:id', function(req, res, next) {
  console.log("DELETE");
  knex('bikes').where('id', req.params.id).delete().then(function(){
    res.redirect('/');
  });
});

router.post('/api/signin', function(req, res, next) {
  console.log("POSTING");
  knex('users')
  .where({
    username: req.body.username
  })
  .first()
  .then(function(data) {
    if(!data) {
      res.json({errors: 'username or password is incorrect'})
    }
    else if(bcrypt.compareSync(req.body.password, data.password)) {
      token = jwt.sign({ id: data.id, username: data.username, is_admin: data.is_admin }, process.env.SECRET);
      res.json({token:token});
      console.log("token token: " + token);
      // res.redirect('/bikes');
    } else{
      console.log('username or password is incorrect');
      res.json({errors: 'username or password is incorrect'});
    }
  }).catch(function(err) {
    console.log(err);
    next(err)
  })
});

router.post('/api/signup', function(req, res, next) {
  var password = bcrypt.hashSync(req.body.password, 8);

  var zip = parseInt(req.body.zip_code);

  knex('users')
  .where({
    username: req.body.username
  })
  .then(function(data) {
    if(data.length > 0) {
      res.json({errors: "username is already taken"});
    }
    else {
      knex('users')
      .insert({
        username: req.body.username,
        password: password,
        email: req.body.email,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        zip_code: zip,
        is_admin: false
      }).returning("*")
      .then(function(user) {
        token = jwt.sign({ id: user[0].id, username: user[0].username, is_admin: user[0].is_admin}, process.env.SECRET);
        console.log(token);
        res.json({token:token});
        // res.redirect('/bikes');
      }).catch(function(err) {
        console.log(err);
      })
    }
  })
});

router.post('/api/addbike', protect,function(req, res, next) {
  knex('bikes').insert({
    owner_id: req.body.owner_id,
    title: req.body.title,
    description: req.body.description,
    picture: req.body.picture,
    type: req.body.type,
    condition: req.body.condition,
    price_day: req.body.price_day,
    price_hour: req.body.price_hour,
    instructions: req.body.instructions,
    street_address: req.body.street_address,
    city: req.body.city,
    state: req.body.state,
    zip_code: req.body.zip_code
  }).then(function(data){
    res.redirect('/#/');
  });
});

router.post('/api/newrequest', protect,function(req, res, next) {
  knex('requested_bikes').insert({
    requestor_id: req.body.requestor_id,
    owner_id: req.body.owner_id,
    bike_id: req.body.bike_id,
    request_time_stamp: req.body.request_time_stamp,
    borrow_start_time: req.body.borrow_start_time,
    borrow_end_time: req.body.borrow_end_time,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    message: req.body.message
  }).then(function() {
    res.redirect('/#/');
  });
});


module.exports = router;
