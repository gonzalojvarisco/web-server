const http = require('http');

http.createServer((req, res)=>{
    //res.write('hola');
    let salida = {
        nombre:'Gonzalo',
        edad:30,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();

})
.listen(8080);

console.log('Escuchando puerto 8080');