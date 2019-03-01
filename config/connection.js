"use strict";

const mysql = require("mysql");

const connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bochoro8",
  database: "burgers_db",
});

connection.connect((error) => {
  if (error) {
    console.error("error connecting: " + error.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;