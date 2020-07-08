const express = require("express");

const router = express.Router();
const { clients } = require("../models/clients");
const auth = require("../middleware/auth");

router.get("/id/:id", auth, async (req, res) => {
  const param = req.params.id;
  const client = await clients.findOne({ id: param });
  if (!client) return res.status(400).send("Invalid client ID.");
  res.send(client);
});

router.get("/name/:id", auth, async (req, res) => {
  const param = req.params.id;
  const client = await clients.findOne({ name: param });
  if (!client) return res.status(400).send("Invalid client name.");
  res.send(client);
});

module.exports = router;
