const express = require('express');
const router = express.Router();
const { Product } = require('../models/products');

router.get('/', async (req, res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});

router.get('/selected', async (req, res) => {
    const param = req.query.foo;
    const products = await Product.find({ grupo: param }).sort('name');
    res.send(products);
});

module.exports = router;