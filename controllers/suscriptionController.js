const Suscription = require("../models/Suscription");

exports.crearSuscripcion = async (req, res) => {
  try {
    const suscripcion = new Suscription(req.body);
    suscripcion.save();
    res.json(suscripcion);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la creacion de la suscripcion");
  }
};

exports.obtenerSuscripciones = async (req, res) => {
  try {
    const config = {
      query: (await req.body.query) || {},
      filter: (await req.body.filter) || {},
      limit: (await req.body.limit) ? JSON.parse(req.body.limit) : null,
      random: (await req.body.random) || null,
      skip: null,
    };

    if (config.random === true) {
      const n = await Suscription.collection.countDocuments(config.query);
      const r = Math.floor(Math.random() * n);
      config.skip = r;
    }

    const suscriptions = await Suscription.find(config.query, config.filter)
      .limit(config.limit)
      .skip(config.skip);

    res.json(suscriptions);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar las suscripciones");
  }
};

exports.actualizarSuscripcion = async (req, res) => {
  const { email } = req.body;
  const nuevaSuscripcion = {};

  if (email) {
    nuevaSuscripcion.email = email;
  }
  
  
  try {
    let suscripcion = await Suscription.findById(req.params.id);

    if (!suscripcion) {
      return res.status(404).json({ msg: "Suscripcion no encontrada" });
    }

    suscripcion = await Suscription.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevaSuscripcion },
      { new: true }
    );

    res.json({ suscripcion });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización de la suscripcion");
  }
};

exports.borrarSuscripcion = async (req, res) => {
  try {
    let suscripcion = await Suscripcion.findById(req.params.id);

    if (!suscripcion) {
      return res.status(404).json({ msg: "Suscripcion no encontrada" });
    }

    suscripcion = await Suscripcion.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: "Suscripcion eliminada" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización de la Suscripcion");
  }
};
