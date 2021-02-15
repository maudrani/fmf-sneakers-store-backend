const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: { type: Number, required: true, default: 7000 },
  rating: { type: Number, default: 5 },
  tags: { type: Array },
});

module.exports = mongoose.model("Product", ProductSchema);
