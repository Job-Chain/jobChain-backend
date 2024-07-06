var express = require("express");
var InstituteDBService = require("../services/InstituteDBService.js");
var router = express.Router();

router.post("/saveInstitute", function (req, res, next) {
  let { institute } = req.body;
  let user = InstituteDBService.createInstitute(institute);
  console.log(user);
  res.send("respond with a resource");
});

module.exports = router;
