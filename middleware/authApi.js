var express = require('express');
var jwt = require('jsonwebtoken');

const authApi = (req, res, next) => {

	const validKeys = [
		{key: '0c82a54f22f775a3ed8b97b2dea74036'},
		{key: '1234'},
	]

    console.log("authenticating api request")

	const key = req.body.key || 
  	  req.query.key || 
  	  req.headers['x-access-token'];

   // var decoded = jwt.verify(key, 'secret');
   // console.log(decoded.email) 
   // let found = false;
   // if (decoded.email === 'peterept@gmail') {
   // 	found = true;
   //  }


  	const found =  validKeys.find(k => k.key === key);

  	  if (found) {
  	  	next();
  	  } else {
		res.json(401, {
		  	success: false,
		  	message: 'Not Authorized',
		});
	}
};

module.exports = authApi;

