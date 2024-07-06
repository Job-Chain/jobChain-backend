var express = require("express");
var CompanyDBService = require("../services/CompanyDBService.js");
var router = express.Router();

router.post("/saveCompany", function (req, res, next) {
  let { company } = req.body;
  let user = CompanyDBService.createCompany(company);
  console.log(user);
  res.send("respond with a resource");
});

module.exports = router;
