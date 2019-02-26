"use strict";

const burger = require("../models/burger.js");
const express = require("express");

const router = express.Router();

router.get("/", function(request, response) {
  burger.all((results) => {
    response.render("index", {
      burgers: results,
    });
  });
});

module.exports = router;