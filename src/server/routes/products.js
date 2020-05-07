const express = require('express');
const router = express.Router();
const { Product } = require('../models/products');

router.get('/', async (req, res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});

router.get('/:id', async (req, res) => {
    const param = req.params.id;
    const product = await Product.findById(param);
    res.send(product);
});

module.exports = router;