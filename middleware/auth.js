const { clients } = require("../models/clients");

module.exports = async function (req, res, next) {
  const user = req.header("user-name");
  if (!user)
    return res.status(401).send("Access denied. No user auth provided.");

  try {
    const client = await clients.findOne({ name: user });
    if (!client) return res.status(401).send("Access denied. user is invalid.");
    req.user = client;
    next();
  } catch (ex) {
    res.status(400).send("Invalid user.");
  }
};
