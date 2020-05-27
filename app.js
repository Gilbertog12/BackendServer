//Requires

var express = require('express');
var moongose = require('mongoose');

//varibles 

var puerto = 3000
var BaseDatos = 'Hospitaldb';
var ruta= 'localhost'

//inicializar Variables

var app = express();

//Conexion BD
moongose.connection.openUri('mongodb://localhost:27017/Hospitaldb', { useNewUrlParser: true, useUnifiedTopology: true  }), (error, res)=>{

if(error){
    throw error
} 



}
console.log('Base de Datos \x1b[32m%s\x1b[0m','online')

//Rutas 

app.get('/', (req,res,next )=>{

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion Realizada Correctamente'
    })

});

//Escuchar peticiones 

app.listen(puerto , ()=>{
    console.log('express server corriendo en el puerto'+' '+ puerto + ' '+ '\x1b[32m%s\x1b[0m','online')

    
})