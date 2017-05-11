var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const drinks = ["coke", "coffee"];

  res.json({
  	success: true,
  	message: '',
  	data: {
	  	drinks: drinks
	}
  });
  
});

module.exports = router;

