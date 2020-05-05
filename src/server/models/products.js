const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    firmeza: Number,
    Transpirabilidad: Number,
    adaptabilidad: Number,
    price: Number,
    image: String,
    productoDestacado: Boolean,
    valoracion: Number,
});

const Product = mongoose.model('products', productsSchema);
exports.Product = Product;