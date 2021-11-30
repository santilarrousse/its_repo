const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const server = express()

server.use(express.json())
server.use(cors())
server.use(morgan('dev'))

server.set('port', process.env.PORT || 3006)

server.use(require('./routes/cliente.route')) 

server.listen( server.get('port'))  

console.log(`Servidor corriendo en el puerto ${server.get('port')}`)