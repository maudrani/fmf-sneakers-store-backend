const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/create",orderController.crearOrden);
router.post("/bring",orderController.obtenerOrdenes);
router.put("/update/:id",orderController.actualizarOrden);
router.delete("/delete/:id",orderController.borrarOrden);

module.exports = router;    