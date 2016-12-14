var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport')

var csrfProtection = csrf();
router.use(csrfProtection);

var Men = require('../app/models/men');
var Cart = require('../app/models/cart')


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
  })
});

/* GET mens watches show page. */
router.get('/Mens-Watches/:id', function(req, res, next){
  var product_id = req.param('id');
  Men.findOne({'_id': product_id}, function(err, products){
    if (!err){
      var product = [];
      var c = products;
      product.push(c);
      res.render('mens/show', {product: product});
    }else{
      return console.log(err);
    }
  });
});

router.get('/mens-watches-cart/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Men.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/Mens-Watches/'+ product.id)
  })
});

router.get('/cart', function(req, res, next){
  if(!req.session.cart){
		return res.render('shopping-cart', {products: null});
	}
	var cart = new Cart(req.session.cart);
	res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
})
/* GET users Acount listing. */
router.get('/MyAcount', isLoggedIn, function(req, res, next){
  res.render('user/profile');
});

/* GET users registration listing. */
router.get('/register', notLoggedIn, function(req, res, next) {
var messages = req.flash('error');
res.render('user/signup',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

/* post users registration  listing. */
router.post('/register', notLoggedIn, passport.authenticate('local.signup',{
  successRedirect: '/',
  failureRedirect: '/register',
  failureFlash: true
}));

/* GET users signin  listing. */
router.get('/signin', notLoggedIn, function(req, res, next) {
  var messages = req.flash('error');
  res.render('user/signin',{csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});

/* post users signin  listing. */
router.post('/signin',notLoggedIn,  passport.authenticate('local.signin',{
  successRedirect: '/',
  failureRedirect: '/signin',
  failureFlash: true
}));

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
