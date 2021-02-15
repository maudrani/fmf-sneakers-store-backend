const Product = require("../models/Product");

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
    const productos = await res.json();
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al cargar los productos");
  }
};
