var express = require('express');
var router = express.Router();
// Bring in the queries object that has all of the db query functions
var queries = require('../db/query');

// Get all secrets
router.get("/:id", function(request, response, next) {
  queries.getSecrets(req.params.id).then(function(secrets) {
    response.json(secrets);
  });
});
