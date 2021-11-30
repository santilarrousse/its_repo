const mysql = require('mysql')
const db = mysql.createConnection ({

    host:'localhost',
    user:'root',
    password:'',
    port:'3300',
    database:'monitoreo_db'
})

db.connect(function(err){
    if(err){
        console.log('Error de conexion')
        return
    }else{
        console.log('Conexion Exitosa')
    }
})

module.exports = db
