const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

// crear el servidor
const app = express();

// Conectar a la base de datos
conectarDB();

//hailitar cors
app.use(cors());

// Habilitar express.json
app.use(express.json({ extend: true }));

// puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use("/api/products", require("./routes/products"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/mercadopago", require("./routes/mercadopago"));
app.use("/api/sendmail", require("./routes/sendmail"));


//server side test
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//Arrancar app
app.listen(PORT, '0.0.0.0', () => {
  console.log(`El servidor está funcionando en el puerto ${PORT}`);
});

// Definir la pagina principal
app.get("/", (req, res) => {
  res.send("FMF Sneakers");
});
