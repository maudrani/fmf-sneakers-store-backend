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

exports.actualizarProducto = async (req, res) => {
  const { name, price, category, tags, images, price_original_quality } = req.body;
  const nuevoProducto = {};

  if (name) {
    nuevoProducto.name = name;
  }
  if (price) {
    nuevoProducto.price = price;
  }
  if (price_original_quality) {
    nuevoProducto.price_original_quality = price_original_quality;
  }

  if (category) {
    nuevoProducto.category = category;
  }
  if (tags) {
    nuevoProducto.tags = tags;
  }
  if (images) {
    nuevoProducto.images = images;
  }

  try {
    let producto = await Product.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    producto = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: nuevoProducto },
      { new: true }
    );

    res.json({ producto });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización del producto");
  }
};

exports.borrarProducto = async (req, res) => {
  try {
    let producto = await Product.findById(req.params.id);

    if (!producto) {
      return res.status(404).json({ msg: "Producto no encontrado" });
    }

    producto = await Product.findOneAndRemove({ _id: req.params.id });

    res.json({ msg: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error en la actualización del producto");
  }
};
