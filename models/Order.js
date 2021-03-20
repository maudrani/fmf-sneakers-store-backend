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
      state: { type: String, required: true, trim: true },
      province: { type: String, required: true, trim: true },
    },
  },
  payment_method: { type: String, required: true, trim: true },
  order_id: { type: String, required: true, trim: true },
  totals: {
    subtotal_products: { type: Number, required: true },
    other_charge: { type: Number, required: true },
  },
  order_state: { type: String, required: true, trim: true },
  date: { type: String, required: true, trim: true },
  hour: { type: String, required: true, trim: true },
  viewed: { type: Boolean, default: false },
  state_changed: { type: Boolean, default: false },
  mercadopago_received_data: { type: Object, default: {} },
});

module.exports = mongoose.model("Order", OrderSchema);
