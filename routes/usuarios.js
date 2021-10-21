let express = require('express');
const userController = require('../controllers/users_controller.js');

let router = express.Router();

router.get('/registrar', userController.registrar);

router.get('/ingresar', userController.ingresar);



module.exports = router;

