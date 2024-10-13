const { Router } = require('express');
const { check } = require('express-validator')


const router = Router();

const { SubirPost, traerTodosLosPost, darLikeAPost, traerPorId, traerPorUsuario, comentarPost } = require('../controllers/post');
const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');


router.post
    ('/post',
        [
            check('DisplayName', 'El DisplayName es obligatorio').notEmpty(),
            check('DisplayName', 'El DisplayName debe tener un minimo de 4 caracteres').isLength({ min: 4 }),
            check('Cuerpo_de_post', 'El cuerpo del post esta vacio').notEmpty(),
            check('uid', 'El uid es obligatorio').notEmpty(),
            check('token', 'El token es obligatorio').notEmpty(),
            check('esComentario', 'el valor de esComentario es obligatorio').notEmpty(),
            validarCampos,
            validarJWT
        ],
        SubirPost)


router.get
    ('/traerTodos',
        [
            validarCampos,
        ],
        traerTodosLosPost)

router.get
    ('/traerPorId',
        [
            validarCampos,
        ],
        traerPorId)

router.get
    ('/traerPorUsuario',
        [
            validarCampos,
        ],
        traerPorUsuario)

router.put(
    '/darLike',
    [
        check('uid', 'El uid es obligatorio').notEmpty(),
        check('idPost', 'El id del post es obligatorio').notEmpty(),
        validarCampos
    ],
    darLikeAPost
)

router.put(
    '/agregarComentario',
    [
        check('idPost', 'El idPost es obligatorio').notEmpty(),
        check('idComentario', 'El idComentario del post es obligatorio').notEmpty(),
        validarCampos
    ],
    comentarPost
)


module.exports = router;