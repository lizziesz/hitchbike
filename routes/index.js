var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var bcrypt = require('bcrypt');

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

    }
  }).catch(function(err) {
    next(err)
  })
})

module.exports = router;
