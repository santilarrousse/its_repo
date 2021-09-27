const mysql = require('mysql')

const db = mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'',
    port:'3300',
    database:'API-TP1'

})

db.connect(function(err){

    if(err){
        console.log('Error de Conexion')
        return
    }else{
        console.log('La conexion fue exitosa')
    }
})

module.exports = db