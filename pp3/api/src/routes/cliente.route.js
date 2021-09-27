const express = require('express')

const enrutador = express.Router()

const db = require('../database')

enrutador.get('/cliente', (req,res) => {

db.query('select * from cliente', (err,rows) => {
    if(err){
    console.log('Algo sucedio al realizar la consulta')
    }else{
     res.json(rows)
     }
    })   
})
enrutador.delete('/cliente/:codigo', async (req,res) => {

    const id = req.params.codigo
    await db.query('delete from cliente where id_cliente = ?' , [id], (err,result) => {
        if(err){
            return console.log ('Hay un error al eliminar el cliente')
        }else{
            res.json('Cliente Eliminado')
        }
    })
})

enrutador.post('/cliente', async(req,res) => {
    const unCliente = req.body
    await db.query('insert into cliente set ?', [unCliente], (err,result) => {

        if(err){
            return console.log('Algo ocurrio')
        }else{
            res.json("El cliente se inserto exitosamente")
        }
    })
})
enrutador.put('/cliente/:codigo', async (req,res) =>{
    const id = req.params.codigo
    
    const ClienteModificado = req.body;

    await db.query('update cliente set ? where id_cliente = ?', [ClienteModificado, id], (err,result) => {
        if(err){
            console.log('Algo ocurrio!')
        }else{
            console.log('Operacion con exito')
            res.json('Operacion exitosa!')
        }
    })


})


module.exports = enrutador