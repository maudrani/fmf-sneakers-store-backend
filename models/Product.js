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
  price: { type: Number, required: true },
  rating: { type: Number, default: 5 },
  tags: { type: Array },
  images: {
    x50: {
      type: Array,
      required: true,
    },
    x25: {
      type: Array,
      required: true,
    },
    x15: {
      type: Array,
      required: true,
    },
  },
});

module.exports = mongoose.model("Product", ProductSchema);
