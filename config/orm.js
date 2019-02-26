"use strict";

const connection = require("./connection.js");

const orm = {
  insertOne: function(table, row, callback) {
    connection.query(
      "INSERT INTO ?? SET ?",
      [table, row],
      (error, results) => {
        if (error) {
          throw error;
        }
        callback(results);
      });
  },

  selectAll: function(table, callback) {
    connection.query(
      "SELECT * FROM ??",
      table,
      (error, results) => {
        if (error) {
          throw error;
        }
        callback(results);
      });
  },

  updateOne: function(table, values, id, callback) {
    connection.query(
      "UPDATE ?? SET ? WHERE id = ?",
      [table, values, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        callback(results);
      });
  },
};

module.exports = orm;