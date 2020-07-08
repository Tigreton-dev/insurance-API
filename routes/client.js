const express = require("express");

const router = express.Router();
const { clients } = require("../models/clients");

router.get("/id/:id", async (req, res) => {
  const param = req.params.id;
  const client = await clients.find({ id: param });
  res.send(client);
});

router.get("/name/:id", async (req, res) => {
  const param = req.params.id;
  const client = await clients.find({ name: param });
  res.send(client);
});

module.exports = router;
