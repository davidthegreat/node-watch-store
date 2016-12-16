var express = require('express');
var router = express.Router();
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

/* GET home page. */
router.get('/', isAdmin, function(req, res, next) {
  res.render('admin/index', { title: 'Express',layout: false});
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
