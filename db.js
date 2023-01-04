const mongoose = require('mongoose')
//URI de la base de datos
const url = 'mongodb://127.0.0.1:27017/db_productos'



mongoose.set("strictQuery", false);
mongoose.connect(url, {
    useNewUrlParser: true
    
})

//conexion a la base de datos
const db =  mongoose.connection
db.on('error', console.error.bind(console, 'Error al concetar mongoDB'))
db.once('open', function callback() {
    console.log("¡Conectado a MongoDB")
})

module.exports = db