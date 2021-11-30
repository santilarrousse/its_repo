const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const socketio = require('socket.io')

const server = express()
const ops = require('os')

const os = require('node-os-utils')
const cpu = os.cpu 
const mem = os.mem
const drive = os.drive
const netstat = os.netstat

const os2 = require('node-os-utils').os

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))
server.set('port', process.env.PORT || 3006)
server.use(require('./routes/cliente.route'))

const servidor = server.listen(server.get('port'), () => {
    console.log('Conexion Exitosa')
})
const io = socketio(servidor)

io.on('connection', (socket) => {
    
    
    setInterval (()=> {
        cpu.free()
        .then(info => {
            socket.emit('datos-cpu',{
                descripcion:'Cpu Libre',
                data:info
            })
        })
    },1000);

    setInterval(()=>{
        cpu.usage()
        .then(info => {
            socket.emit('datos-cpu-usage',{
                descripcion:'Cpu en Uso',
                data:info
            })
        })
    },1000);
    const count = cpu.count()
    socket.emit('datos-cpu-count',{
            descripcion:'Numero de Procesadores',
            data:count
    });
    const model = cpu.model()
    socket.emit('dato-modelo', {
        descripcion:'Modelo de Cpu',
        data: model
    });
    
   const driver= drive.info()
        .then(info => {
        socket.emit('datos-drive',{
               descripcion:'Datos de Drive',
               data:info
    }); })  

    setInterval(() =>{
       mem.info()
       .then(info =>{
           socket.emit('datos-memoria', {
               descripcion:'Datos sobre Memoria',
               data:info
           })
       })
   },1000)
   
 
 

    const netstats = netstat.stats()
    .then(info => {
        socket.emit('datos-netstat', {
            descripcion:'Netstat',
            data:info
        })

    })

 
    
  
        os2.oos()
        .then(info => {
            socket.emit('sistema', {
                descripcion:'sistema',
                data:info
            })
        })
        
})

