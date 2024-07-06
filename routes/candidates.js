var express = require("express");
var UserDBService = require("../services/CandidateDBService");
var router = express.Router();

/* GET candidates listing. */
router.post("/saveCandidates", function (req, res, next) {
  let { candidate } = req.body;
  let user = UserDBService.createCandidate(candidate);
  console.log(user);
  res.send("respond with a resource");
});

module.exports = router;
