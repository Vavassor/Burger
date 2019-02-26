"use strict";

const orm = require("../config/orm.js");

const burger = {
  all: function(callback) {
    orm.selectAll("burgers", callback);
  },

  create: function(burger, callback) {
    orm.insertOne("burgers", burger, callback);
  },

  update: function(burger, callback) {
    orm.updateOne("burgers", burger, burger.id, callback);
  },
};

module.exports = burger;