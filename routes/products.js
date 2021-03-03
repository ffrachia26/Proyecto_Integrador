var express = require('express');
var router = express.Router();
let productsController = require('../controllers/productsController.js')


router.get('/', productsController.products); 

router.get('/crear', productsController.crear);
router.post('/crear', productsController.crear);

router.get('/editar/:id', productsController.editar)
router.post('/editar/:id', productsController.editar)

module.exports = router