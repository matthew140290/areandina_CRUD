const express = require('express')
const router = express.Router()

const productoController = require('../controllers/productoController')

//mostrar cuando se acceda a la raiz
router.get('/', productoController.mostrar)

//Crear alumno (POST)
router.post('/crear', productoController.crear)

//editar alumno (POST)
router.post('/editar', productoController.editar)

//Borrar alumno (GET)
router.get('/borrar/:id', productoController.borrar)


module.exports = router