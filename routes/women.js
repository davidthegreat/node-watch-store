var express = require('express');
var router = express.Router();

var Women = require('../app/models/women');


/* GET home page. */
router.get('/', function(req, res, next) {
  Women.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('women/index', { title: 'World of Watches', products: productChunks });
  });
});

/* GET mens watches show page. */
router.get('/:id', function(req, res, next){
  var product_id = req.param('id');
  Women.findOne({'_id': product_id}, function(err, products){
    if (!err){
      var product = [];
      var c = products;
      product.push(c);
      res.render('women/show', {title: 'World of Watches', product: product});
    }else{
      return console.log(err);
    }
  });
});

module.exports = router;
