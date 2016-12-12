var express = require('express');
var router = express.Router();

var Men = require('../app/models/men');


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
  })});

module.exports = router;
