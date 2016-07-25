var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var secret="secretsareReal";
var token;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/bikes', function(req, res, next) {
  knex('bikes').then(function(data) {
    console.log(data);
    res.json(data);
  });
});

router.get('/api/requestedbikes', function(req, res, next) {
  knex('requested_bikes').then(function(data) {
    console.log(data);
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
    if(!data) {
      console.log("username doesn't exist");
    }
    else if(bcrypt.compareSync(req.body.password, data.password)) {
      console.log("Password correct");
      token = jwt.sign({ id: data.id, username: data.username, is_admin: data.is_admin }, secret);
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
        var listedItems = {id: user[0].id, username: user[0].username, is_admin: user[0].is_admin};
        token = jwt.sign({ id: user[0].id}, secret);
        res.json({token:token, user:listedItems});
        // res.redirect('/bikes');
      }).catch(function(err) {
        console.log(err);
      })
    }
  })
})

module.exports = router;
