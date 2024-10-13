const express = require('express');
const bcypt = require('bcryptjs')
const Usuario = require('../models/Usuario');

const buscarUsuario = async (req, res = express.response) => {
    const { uid } = req.body
    try {
        let usuario = await Usuario.findOne({ _id: uid })
        if (usuario) {
            res.status(200).json({
                ok: true,
                usuario: usuario
            })
        } else {
            res.status(404).json({
                ok: false,
                msg: `No se ha encontrado el usuario con uid ${uid}`
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: `ha ocurrido un error inesperado, por favor, hable con el administrador. `
        })
    }
}
module.exports = {
    buscarUsuario
}