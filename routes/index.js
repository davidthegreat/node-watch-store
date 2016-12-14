var express = require('express');
var router = express.Router();

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
});

router.get('/checkout', function(req, res, next){
  if(!req.session.cart){
		return res.redirect('/cart')
	}
	var cart = new Cart(req.session.cart);
	var errMsg = req.flash('error')[0];
	res.render('checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

router.post('/checkout', function(req, res, next){
  if(!req.session.cart){
		return res.redirect('/cart')
	}

  var cart = new Cart(req.session.cart);

  var stripe = require("stripe")(
    SECRET_KEY
  );

  stripe.charges.create({
    amount: cart.totalPrice * 100,
    currency: "usd",
    source: req.body.stripeToken, // obtained with Stripe.js
    description: "Luxury Watch"
  }, function(err, charge) {
    if (err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    }
    req.flash('success', 'Thank You for your purchase!');
    req.session.cart = null;
    res.redirect('/users/MyAcount');
  });
});


module.exports = router;
