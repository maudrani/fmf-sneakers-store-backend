const mongoose = require("mongoose");

const SuscriptionSchema = mongoose.Schema({
  email: { type: String, required: true, trim: true },
  date_created: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Suscription", SuscriptionSchema);
