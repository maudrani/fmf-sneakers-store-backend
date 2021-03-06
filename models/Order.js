const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  items: {
    type: Array,
    required: true,
  },
  payer: {
    name: { type: String, required: true, trim: true },
    surname: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: {
      number: { type: String, required: true, trim: true },
    },
    address: {
      street_name: { type: String, required: true, trim: true },
      street_number: { type: String, required: true, trim: true },
      zip_code: { type: String, required: true, trim: true },
    },
  },
  payment_method: { type: String, required: true, trim: true },
  order_id: { type: String, required: true, trim: true },
  totals: {
    subtotal_products: { type: Number, required: true },
    other_charge: { type: Number, required: true },
  },
  state: { type: String, required: true, trim: true },
});

module.exports = mongoose.model("Order", OrderSchema);
