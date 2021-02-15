const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Crea un producto
// api/products
router.post("/", productController.crearProducto);

module.exports = router;
