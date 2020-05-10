const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: String,
    title: String,
    description: String,
    firmness: Number,
    breathability: Number,
    adaptability: Number,
    price: Number,
    image: String,
    featuredProduct: Boolean,
    assessment: Number,
    type: String
});

const Product = mongoose.model('products', productsSchema);
exports.Product = Product;