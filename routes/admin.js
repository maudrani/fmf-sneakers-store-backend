const express = require("express");
const router = express.Router();

router.post("/validate", async (req, res) => {
  try {
    const admin = {
      user: "fmfadmin",
      password: "38sURJWJBxghDYNMxd",
    };

    if (req.body.user === admin.user && req.body.password === admin.password) {
      res.json({ value: true, msg: "Ingreso concedido" });
    } else {
      res.json({
        value: false,
        msg:
          req.body.user !== admin.user
            ? "Usuario Incorrecto"
            : req.body.password !== admin.password
            ? "Contraseña Incorrecta"
            : "Ambos campos son incorrectos",
      });
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al loguearse");
  }
});

module.exports = router;
