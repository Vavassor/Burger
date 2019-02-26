"use strict";

const burger = require("../models/burger.js");
const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
  burger.all((results) => {
    response.render("index", {
      burgers: results,
    });
  });
});

router.post("/api/burger", (request, response) => {
  burger.create(request.body, (results) => {
    if (results.affectedRows === 0) {
      response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

router.put("/api/burger", (request, response) => {
  burger.update(request.body, (results) => {
    if (results.affectedRows === 0) {
      response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

module.exports = router;