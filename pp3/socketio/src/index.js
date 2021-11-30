const express = require('express')
const cors = require('cors')
const socketio = require('socket.io')
const os = require('node-os-utils')

const cpu = os.cpu
const server = express()

server.set('port', process.env.PORT || 3000 )

server.use(cors())

const servidor = server.listen(server.get('port'), () => {

    console.log('La conexion fue exitosa!')
})
const io = socketio(servidor)


io.on('connection', (socket) => {

    setInterval(()=>{
        socket.emit('dato-socket', 
        {
            dato:Math.random(),
            nombre:'Santiago'
        })
    }, 1000)

    setInterval(() =>{

    })

    setInterval(() => {
        cpu.free()
        .then(info => {
            socket.emit('datos-cpu',
            {
                descripcion:'CPU FREE',
                data :info
            })
        }, 
      }), 
    
socket.on('respuesta', (valor) => {
    console.log(valor)
        }) 