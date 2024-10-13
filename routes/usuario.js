const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validar-campos');
const router = Router();


const { buscarUsuario } = require('../controllers/usuario')
router.post(
    '/buscar',
    [
        check('uid', 'El Uid es obligatorio').notEmpty(),
        validarCampos
    ], buscarUsuario


)


module.exports = router;