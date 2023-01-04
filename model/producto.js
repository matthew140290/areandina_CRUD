const mongoose = require('mongoose')
const Schema = mongoose.Schema

// se crea mongoose para que la aplicacion entienda con que tipo de datos y a que coleccion estamos apuntando

const productoSchema = new Schema({
    nombre: String,
    precio: Number
})


module.exports = mongoose.model('productos', productoSchema)