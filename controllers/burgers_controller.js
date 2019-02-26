"use strict";

const burger = require("../models/burger.js");
const express = require("express");

const router = express.Router();

router.get("/", function(request, response) {
  response.render("index");
});

module.exports = router;