const Order = require("../models/Order");

exports.crearOrden = async (req, res) => {
    try {
      const orden = new Order(req.body);
      orden.save();
      res.json(orden);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error en la creacion de la orden");
    }
  };
  
  exports.obtenerOrdenes = async (req, res) => {
    try {
      const ordenes = await Order.find();
      res.json( ordenes );
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error al cargar las ordenes");
    }
  };
  