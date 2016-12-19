var express = require('express');
var router = express.Router();

var Kid = require('../app/models/kid');


/* GET home page. */
router.get('/', function(req, res, next) {
  Kid.find(function(err, docs) {
      var productChunks = [];
      var chunkSize = 3;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('kids/index', { title: 'World of Watches', products: productChunks });
  })
});

/* GET kids watches show page. */
router.get('/:id', function(req, res, next){
  var product_id = req.param('id');
  Kid.findOne({'_id': product_id}, function(err, products){
    if (!err){
      var product = [];
      var c = products;
      product.push(c);
      res.render('kids/show', { title: 'World of Watches', product: product});
    }else{
      return console.log(err);
    }
  });
});


module.exports = router;
