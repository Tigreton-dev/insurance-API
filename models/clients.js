const mongoose = require("mongoose");

const clientsSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  role: String,
});

const clients = mongoose.model("clients", clientsSchema);
exports.clients = clients;
