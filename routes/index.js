var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/whitepaper', function(req, res, next) {
  res.render('whitepaper');
});

module.exports = router;
