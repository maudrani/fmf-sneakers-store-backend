const express = require("express");
const router = express.Router();
const multer = require("multer");
const productController = require("../controllers/productController");

const storage = multer.diskStorage({
  destination: function (request, files, callback) {
    callback(null, "./public/uploads/images");
  },

  filename: function (request, files, callback) {
    callback(null, Date.now() + files.originalname);
  },
});

const upload = multer({
  storage: storage,
});


// Crea un producto
// api/products
router.post("/", upload.array('images', 12) ,productController.crearProducto);
router.get("/",productController.obtenerProductos);

module.exports = router;
