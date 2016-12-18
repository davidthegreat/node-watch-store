var express = require('express');
var router = express.Router();

var Men = require('../app/models/men');

/* GET home page. */
router.get('/', function(req, res, next) {
  Men.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('mens/index', { title: 'Cool Watches', products: productChunks });
  });
});

/* GET mens watches show page. */
router.get('/:id', function(req, res, next){
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


module.exports = router;
