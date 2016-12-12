var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users registration listing. */
router.get('/register', function(req, res, next) {
  res.render('user/signup',{csrfToken: req.csrfToken()});
});



module.exports = router;
