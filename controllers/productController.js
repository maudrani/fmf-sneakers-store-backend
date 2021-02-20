const Product = require("../models/Product");
const db = require("../config/db");

exports.crearProducto = async (req, res) => {
  try {
    const producto = new Product(req.body);
    producto.save();
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la creacion del producto");
  }
};

exports.obtenerProductos = async (req, res) => {
  try {
    const config = {
      query: (await req.body.query) || {},
      filter: (await req.body.filter) || {},
      limit: (await req.body.limit) ? JSON.parse(req.body.limit) : null,
      random: (await req.body.random) || null,
      skip: null,
    };

    if (config.random === true) {
      const n = await Product.collection.countDocuments(config.query);
      const r = Math.floor(Math.random() * n);
      config.skip = r;
    }

    const products = await Product.find(config.query, config.filter)
      .limit(config.limit)
      .skip(config.skip);

    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar los productos");
  }
};
