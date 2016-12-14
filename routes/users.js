var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')

var csrfProtection = csrf();
router.use(csrfProtection);

/* GET users Acount listing. */
router.get('/MyAcount', isLoggedIn, function(req, res, next){
  var successMsg = req.flash('success')[0];
  res.render('user/profile',{tile:'Watch Store', successMsg: successMsg, noMessages: !successMsg} );
});

/* GET users registration listing. */
router.get('/register', notLoggedIn, function(req, res, next) {
var messages = req.flash('error');
res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
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
		res.redirect('/user/profile')
	}
});

/* GET users signin  listing. */
router.get('/signin', notLoggedIn, function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
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
		res.redirect('/user/profile')
	}
});

/* GET users logout  listing. */
router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/')
})


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
