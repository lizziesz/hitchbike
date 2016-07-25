var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

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

module.exports = router;
