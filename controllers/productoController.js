const Producto = require('../model/producto')


//Mostrar
module.exports.mostrar = (req, res)=>{
    //metodo para traer todos los documentos
    Producto.find({}, (error, productos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando productos'
            })
        }
        return res.render('index', {productos: productos})
    })
}

//crear
module.exports.crear = (req, res)=>{
    console.log(req.body)
    // const producto = new Producto({
    //     nombre: req.body.nombre,
    //     precio: req.body.precio
    // })
    producto.save(function(error, producto){
        if(error){
            return res.status(500).json({
                message: 'Error al crear producto'
            })
        }
        res.redirect('/')
    })
}

//editar
module.exports.editar = (req, res)=>{
    const id = req.body.id_editar
    const nombre = req.body.nombre_editar
    const precio = req.body.precio_editar
    Producto.findByIdAndUpdate(id, {nombre, precio}, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar producto'
            })
        }
        res.redirect('/')
    })
}

//Borrar
module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Producto.findByIdAndRemove(id, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al borrar producto'
            })
        }
        res.redirect('/')
    })
}