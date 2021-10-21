const express = require('express');

const productsController = require('../controllers/products_controller');

let router = express.Router();

router.get('/carrito', productsController.carrito);

router.get('/detalles', productsController.detalles);


module.exports = router;