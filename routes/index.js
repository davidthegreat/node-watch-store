var express = require('express');
var router = express.Router();

var Men = require('../app/models/men');
var Cart = require('../app/models/cart');
var Order = require('../app/models/order');
var Kid = require('../app/models/kid');
var Women = require('../app/models/women');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/////////////////////////////////////////////////////////////////////////////////
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

/* GET mens watches  add to cart from the show page. */
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

/* GET mens watches  add to cart from the index page. */
router.get('/mens-watches-carts/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Men.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/Mens-Watches/')
  })
});
/////////////////////////////////////////////////////////////////////////////////
/* GET kids watches page. */
router.get('/Kids-Watches', function(req, res, next) {
  Kid.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('kids/index', { title: 'Cool Watches', products: productChunks });
  })
});

/* GET kids watches show page. */
router.get('/Kids-Watches/:id', function(req, res, next){
  var product_id = req.param('id');
  Kid.findOne({'_id': product_id}, function(err, products){
    if (!err){
      var product = [];
      var c = products;
      product.push(c);
      res.render('kids/show', {product: product});
    }else{
      return console.log(err);
    }
  });
});

/* GET kids watches  add to cart from the index page. */
router.get('/kids-watches-carts/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Kid.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/Kids-Watches/')
  })
});

/* GET mens watches  add to cart from the show page. */
router.get('/kids-watches-cart/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Kid.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/kids-Watches/'+ product.id)
  })
});
/////////////////////////////////////////////////////////////////////////////////
/* GET women watches page. */
router.get('/Womens-Watches', function(req, res, next) {
  Women.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('women/index', { title: 'Cool Watches', products: productChunks });
  })
});

/* GET mens watches show page. */
router.get('/Womens-Watches/:id', function(req, res, next){
  var product_id = req.param('id');
  Women.findOne({'_id': product_id}, function(err, products){
    if (!err){
      var product = [];
      var c = products;
      product.push(c);
      res.render('women/show', {product: product});
    }else{
      return console.log(err);
    }
  });
});

/* GET mens watches  add to cart from the show page. */
router.get('/womens-watches-cart/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Women.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/Womens-Watches/'+ product.id)
  })
});

/* GET mens watches  add to cart from the index page. */
router.get('/womens-watches-carts/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Women.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/Womens-Watches/')
  })
});

/* GET cart page. */
router.get('/cart', function(req, res, next){
  if(!req.session.cart){
		return res.render('shopping-cart', {products: null});
	}
	var cart = new Cart(req.session.cart);
	res.render('shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
});

/* GET Checkout page. */
router.get('/checkout', isLoggedIn, function(req, res, next){
  if(!req.session.cart){
		return res.redirect('/cart')
	}
	var cart = new Cart(req.session.cart);
	var errMsg = req.flash('error')[0];
	res.render('checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});

/* POST Checkout page. */
router.post('/checkout', isLoggedIn, function(req, res, next){
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

    var order = new Order({
      user: req.user,
      cart: cart,
      address: req.body.address,
      name: req.body.name,
      email: req.body.email,
      paymentId: charge.id
    });
    order.save(function(){
      if (err) {
        redirect('/')
      }
      req.flash('success', 'Thank You for your purchase!');
      req.session.cart = null;
      res.redirect('/users/MyAcount');
    });
  });
});

/* GET reduce product page. */
router.get('/reduce/:id', function(req, res, next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	cart.reduceByOne(productId);
	req.session.cart = cart;
	res.redirect('/cart');
});

/* GET add product page. */
router.get('/add/:id', function(req, res, next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	cart.addOne(productId);
	req.session.cart = cart;
	res.redirect('/cart');
});

/* GET remove product page. */
router.get('/remove/:id', function(req, res, next){
	var productId = req.params.id;
	var cart = new Cart(req.session.cart ? req.session.cart : {});

	cart.removeItem(productId);
	req.session.cart = cart;
	res.redirect('/cart');
});



module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url
    res.redirect('/users/signin');
}
