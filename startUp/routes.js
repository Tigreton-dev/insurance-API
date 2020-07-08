const express = require("express");
const client = require("../routes/client");
const policies = require("../routes/policies");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/client", client);
  app.use("/api/policies", policies);
};
