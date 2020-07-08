const express = require("express");

const router = express.Router();
const { policies } = require("../models/policies");
const { clients } = require("../models/clients");
const auth = require("../middleware/auth");
const admin = require("../middleware/admin");

router.get("/user/:id", auth, admin, async (req, res) => {
  const param = req.params.id;
  const client = await clients.findOne({ name: param });
  if (!client) return res.status(400).send("client name does not exist.");
  const policie = await policies.find({ clientId: client.id });
  res.send(policie);
});

router.get("/id/:id", auth, admin, async (req, res) => {
  const param = req.params.id;
  const policie = await policies.findOne({ id: param });
  if (!policie) return res.status(400).send("policie ID does not exist.");
  const client = await clients.find({ id: policie.clientId });
  res.send(client);
});

module.exports = router;
