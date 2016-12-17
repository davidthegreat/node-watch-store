var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

var Men = require('../app/models/men');
var Cart = require('../app/models/cart');
var Order = require('../app/models/order');
var Kid = require('../app/models/kid');
var Women = require('../app/models/women');

/* GET home page. */
router.get('/', isAdmin, function(req, res, next) {
  Order.find( function(err, orders) {
    if (err) {
        return res.write('Error!');
    }
    var cart;
    orders.forEach(function(order) {
        cart = new Cart(order.cart);
        order.items = cart.generateArray();
    });
    res.render('admin/index', { orders: orders,layout: false });
});
});

module.exports = router;

function isAdmin(req, res, next) {
   if (req.user && req.user.isAdmin === true){
     next();
   }
   else{
     res.send(401, 'Unauthorized');
   }
 }
