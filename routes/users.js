var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');

var Handlebars = require("handlebars");
var MomentHandler = require("handlebars.moment");
MomentHandler.registerHelpers(Handlebars);

var csrfProtection = csrf();
router.use(csrfProtection);

var Order = require('../app/models/order');
var Cart = require('../app/models/cart');


/* GET users Acount listing. */
router.get('/MyAcount', isLoggedIn, function(req, res, next){
  var successMsg = req.flash('success')[0];
  Order.find({user: req.user},null,{ sort :{  created_at : -1}}, function(err, orders){
    if (err) {
        return res.write('Error!');
    }
    var cart;
    orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
    });
    res.render('user/profile',{ title: 'World of Watches', successMsg: successMsg, noMessages: !successMsg, orders: orders} );
  });
});

/* GET users registration listing. */
router.get('/register', notLoggedIn, function(req, res, next) {
var messages = req.flash('error');
res.render('user/signup',{ title: 'World of Watches', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

/* post users registration  listing. */
router.post('/register', notLoggedIn, passport.authenticate('local.signup',{
  failureRedirect: '/users/register',
  failureFlash: true
}), function(req, res, next){
  if (req.session.oldUrl){
		var oldUrl = req.session.oldUrl
		req.session.oldUrl = null;
		res.redirect(oldUrl);
	} else {
		res.redirect('/')
	}
});

/* GET users signin  listing. */
router.get('/signin', notLoggedIn, function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin',{title: 'World of Watches', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

/* post users signin  listing. */
router.post('/signin',notLoggedIn,  passport.authenticate('local.signin',{
  failureRedirect: '/users/signin',
  failureFlash: true
}), function(req, res, next){
  if (req.session.oldUrl){
		var oldUrl = req.session.oldUrl
		req.session.oldUrl = null;
		res.redirect(oldUrl);
	} else {
		res.redirect('/')
	}
});

/* GET users logout  listing. */
router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/')
});

/* GET 404 page. */
router.get('*', function(req, res, next){
  res.render('404', {title: 'World of Watches', layout: false})
});


module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}
