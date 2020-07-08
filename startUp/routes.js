const express = require("express");
const client = require("../routes/client");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/client", client);
};
