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
    const config = {
      query: (await req.body.query) || {},
      filter: (await req.body.filter) || {},
      limit: (await req.body.limit) ? JSON.parse(req.body.limit) : null,
      random: (await req.body.random) || null,
      skip: null,
    };

    if (config.random === true) {
      const n = await Order.collection.countDocuments(config.query);
      const r = Math.floor(Math.random() * n);
      config.skip = r;
    }

    const orders = await Order.find(config.query, config.filter)
      .limit(config.limit)
      .skip(config.skip);

    res.json(orders);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar las ordenes");
  }
};

exports.actualizarOrden = async (req, res) => {
  const { state } = req.body;
  const nuevaOrden = {};

  if (state) {
    nuevaOrden.state = state;
  }

  try {
    let order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: "Orden no encontrado" });
    }

    order = await Order.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevaOrden },
      { new: true }
    );

    res.json({ order });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización de la orden");
  }
};

exports.borrarOrden = async (req, res) => {
  try {
    let order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ msg: "Orden no encontrada" });
    }

    order = await Order.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: "Orden eliminada" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización de la orden");
  }
};
