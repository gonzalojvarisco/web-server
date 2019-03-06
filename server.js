const express = require('express');
const app = express();
 
app.get('/', function (req, res) {
  //res.send('hola mundo');
  let salida = {
    nombre:'Gonzalo',
    edad:30,
    url: req.url
}
res.send(salida);
});
 
app.listen(3000, ()=>{
    console.log('escuchando en el puerto 3000');
});