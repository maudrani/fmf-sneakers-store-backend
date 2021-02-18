const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/",orderController.crearOrden);
router.get("/",orderController.obtenerOrdenes);

module.exports = router;