const mongoose = require("mongoose");

const policiesSchema = new mongoose.Schema({
  id: String,
  amountInsured: Number,
  inceptionDate: String,
  installmentPayment: Boolean,
  clientId: String,
});

const policies = mongoose.model("policies", policiesSchema);
exports.policies = policies;
