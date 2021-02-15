const express = require("express");
const conectarDB = require("./config/db");

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar express.json
app.use(express.json({ extend: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use("/api/create-product", require("./routes/products"));
app.use("/api/mercadopago", require("./routes/mercadopago"));

//Arrancar app
app.listen(PORT, () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

// Definir la pagina principal
app.get("/", (req, res) => {
  res.send("Hola mundo");
});
