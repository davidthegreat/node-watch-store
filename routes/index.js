var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var Men = require('../app/models/men');
var Cart = require('../app/models/cart');
var Order = require('../app/models/order');
var Kid = require('../app/models/kid');
var Women = require('../app/models/women');

/* GET home page. */
router.get('/', function(req, res, next) {
  Men.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 4; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('index', { title: 'Cool Watches', products: productChunks });
  });
});


/* GET mens watches  add to cart from the index page. */
router.get('/Mens-watches-carts/:id', function(req, res, next){
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  Men.findById(productId, function(err,product){
    if (err) {
      return res.redirect('/');
    };
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart)
    res.redirect('/')
  })
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

/* GET contact page. */
router.get('/contact', function(req, res, next){
  res.render('contact');
});

/* GET contact page. */
router.get('/contact', function(req, res, next){
  res.render('contact');
});

/* POST contact page. */
router.post('/contact', function(req, res, next){

console.log('dsflakjsdafjlk;sdajflksdajflkdsajflk')
  var dmail = req.body.email
console.log("dsajfkkdjshafkjdshafklsdjfkljdsk")
  //var dmail =  'davidsramirez11@gmail.com'
    console.log(dmail);
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email('example@example.com');
    var to_email = new helper.Email('example@example.com');
    var subject = 'Salud Message';
    var content = new helper.Content('text/plain', 'Thankyou for shopping at Salud ');
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')('APIKEY');
    var request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
      console.log(response.statusCode);
      console.log(response.body);
      console.log(response.headers);
    });
  res.redirect('/thankyou');
});

/* GET contact page. */
router.get('/thankyou', function(req, res, next){
  res.render('thankyou');
});

router.post('/new-menwatch', isAdmin, function(req, res, next){

  var product = new Men ({
		imagePath: req.body.image,
    secondimagePath: req.body.image2,
    thirdimagePath: req.body.image3,
		title: req.body.name,
		description: req.body.description,
		price: req.body.price,
    sale: req.body.sale,

	});
	product.save(function(err, result){
		if(err){
			req.flash('error', err.message);
			return res.redirect('/admin/new-menwatch')
		}
	res.redirect('/admin/Mens-Watches')
	});
});

router.post('/new-womenwatch', isAdmin, function(req, res, next){

  var product = new Women ({
		imagePath: req.body.image,
    secondimagePath: req.body.image2,
    thirdimagePath: req.body.image3,
		title: req.body.name,
		description: req.body.description,
		price: req.body.price,
    sale: req.body.sale,

	});
	product.save(function(err, result){
		if(err){
			req.flash('error', err.message);
			return res.redirect('/admin/new-womenwatch')
		}
	res.redirect('/admin/Womens-Watches')
	});
});




module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.session.oldUrl = req.url
    res.redirect('/users/signin');
}

function isAdmin(req, res, next) {
   if (req.user && req.user.isAdmin === true){
     next();
   }
   else{
     res.render('404', {layout: false})
   }
 }
