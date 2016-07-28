require('dotenv').config();
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var bearerToken = require('express-bearer-token');
var jwtDecode = require('jwt-decode');
var token;

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
  knex('bikes').then(function(data) {
    // console.log(data);
    res.json(data);
  });
});

router.get('/api/dashboard/:id', function(req, res, next) {
  knex('bikes').then(function(data) {
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
  // knex('bikes')
  //   .fullOuterJoin('requested_bikes', 'bikes.id', 'requested_bikes.bike_id')
  //   .fullOuterJoin('users', 'requested_bikes.requestor_id', 'users.id')
  //   .then(function(data) {
  //     console.log(data);
  //     res.json(data);
  //   });
  knex('requested_bikes').where('requested_bikes.owner_id', req.params.id)
    .fullOuterJoin('bikes', 'bikes.id', 'requested_bikes.bike_id')
    .fullOuterJoin('users', 'requested_bikes.requestor_id', 'users.id')
    .then(function(data) {
      console.log(data);
      res.json(data);
    });
});

router.get('/api/bikes/search/:location', function(req, res, next) {
  console.log("PARAMS: " + req.params.location);
  knex('bikes').where(function() {
    this.where({zip_code: req.params.location}).orWhere({city: req.params.location})
  }).where('is_available', 'true').then(function(data) {
    // console.log(data);
    res.json(data);
  });
});

router.get('/api/bikes/search/:location/:startTime/:endTime', function(req, res, next) {
  // console.log("PARAMS: " + req.params.location);
  // console.log("START: " + req.params.startTime);
  var start = Date.parse(req.params.startTime.slice(1,11));
  var end = Date.parse(req.params.endTime.slice(1,11));
  // console.log("Short start: " + start);
  // console.log("Short end: " + end);
  knex('bikes').fullOuterJoin('requested_bikes', 'requested_bikes.bike_id', 'bikes.id').where(function() {
    this.where({zip_code: req.params.location}).orWhere({city: req.params.location})
  })
  .where('is_available', 'true')
  .then(function(data) {
    dataToSend = [];
    for(var i=0; i<data.length; i++) {
      if(start < data[i].startDate && end < data[i].startDate) {
        dataToSend.push(data[i]);
      }
      else if(start > data[i].endDate) {
        dataToSend.push(data[i]);
      }
      else if(!data[i].startDate || !data[i].endDate) {
        dataToSend.push(data[i]);
      }
    }
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

router.post('/api/signin', function(req, res, next) {
  console.log("POSTING");
  knex('users')
  .where({
    username: req.body.username
  })
  .first()
  .then(function(data) {
    console.log(data);
    if(!data) {
      console.log("username doesn't exist");
    }
    else if(bcrypt.compareSync(req.body.password, data.password)) {
      console.log("Password correct");
      token = jwt.sign({ id: data.id, username: data.username, is_admin: data.is_admin }, process.env.SECRET);
      res.json({token:token});
      console.log("token token: " + token);
      // res.redirect('/bikes');
    }
  }).catch(function(err) {
    next(err)
  })
});

router.post('/api/signup', function(req, res, next) {
  var password = bcrypt.hashSync(req.body.password, 8);
  console.log(req.body.zip_code);
  console.log(typeof(req.body.zip_code));
  var zip = parseInt(req.body.zip_code);
  console.log(req.body.street_address);
  console.log("ZIPPY: " + zip);
  knex('users')
  .where({
    username: req.body.username
  })
  .then(function(data) {
    if(data.length > 0) {
      console.log("Username is already taken");
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



module.exports = router;
