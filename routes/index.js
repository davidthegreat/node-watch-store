var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')

var csrfProtection = csrf();
router.use(csrfProtection);

var Men = require('../app/models/men');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET mens watches page. */
router.get('/Mens-Watches', function(req, res, next) {
  Men.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('mens/index', { title: 'Cool Watches', products: productChunks });
  })});

  /* GET users registration listing. */
  router.get('/register', function(req, res, next) {
    var messages = req.flash('error');
    res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
  });

  /* GET users registration listing. */
  router.post('/register', passport.authenticate('local.signup',{
    successRedirect: '/',
    failureRedirect: '/register',
    failureFlash: true
  }));

module.exports = router;
