const express = require("express");
const router = express.Router();
const suscriptionController = require("../controllers/suscriptionController");

router.post("/create",suscriptionController.crearSuscripcion);
router.post("/bring",suscriptionController.obtenerSuscripciones);
router.put("/update/:id",suscriptionController.actualizarSuscripcion);
router.delete("/delete/:id",suscriptionController.borrarSuscripcion);

module.exports = router;    