const express = require('express')

const enrutador = express.Router()

const db = require('../database')

enrutador.get('/producto', (req,res) => {

db.query('select * from producto', (err,rows) => {
    if(err){
    console.log('Algo sucedio al realizar la consulta')
    }else{
     res.json(rows)
     }
    })   
})
enrutador.delete('/producto/:codigo', async (req,res) => {

    const id = req.params.codigo
    await db.query('delete from producto where id_producto = ?' , [id], (err,result) => {
        if(err){
            return console.log ('Hay un error al eliminar el producto')
        }else{
            res.json('Producto Eliminado')
        }
    })
})

enrutador.post('/producto', async(req,res) => {
//req.body entrega todos los datos del producto
    const unProducto = req.body
    await db.query('insert into producto set ?', [unProducto], (err,result) => {

        if(err){
            return console.log('Algo ocurrio!')
        }else{
            res.json("El producto se inserto exitosamente")
        }
    })
})
enrutador.put('/producto/:codigo', async (req,res) =>{
//busca y trae el parametro(en este caso codigo) para poder editar luego
    const id = req.params.codigo
    
    const ProductoModificado = req.body;
//en esta linea se modifica un parametro el cual se indica con ? y se obtienen de la constante anterior
    await db.query('update producto set ? where id_producto = ?', [ProductoModificado, id], (err,result) => {
        if(err){
            console.log('Algo ocurrio!')
        }else{
            console.log('Operacion con exito')
            res.json('Operacion exitosa!')
        }
    })


})


module.exports = enrutador