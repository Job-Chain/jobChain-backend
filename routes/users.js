var express = require('express');
var UserDBService = require('../services/UserDBService');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

  //create a user object
  const user = {
    name: req.body.name,
    email: req.body.email,
    address: req.body.address
  };

  //call the createUser method from the UserDBService
  UserDBService.createUser(user)
    .then((result) => {
      res.send('User created with ID: ' + result);
    })
    .catch((error) => {
      //res.send('Error creating user: ' + error);
    });

  res.send('respond with a resource');
});

module.exports = router;
