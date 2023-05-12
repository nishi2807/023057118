var express = require("express");
var router = express.Router();

const AppliedJobs = require("../models/person_data");

router.get('/:mail', function(req, res) {
  const email = req.params.email;

  AppliedJobs.find({ mail: mail }, function(err, appliedjobs) {
    if (err) {
      console.log(err);
      res.status(500).send('Error fetching jobs');
    } else {
        console.log(appliedjobs)
      res.json(appliedjobs);
    }
  });
});

module.exports = router;