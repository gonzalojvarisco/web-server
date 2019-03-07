const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

//express HBS engine
app.set('view engine', 'hbs');

app.get('/', function(req, res) {

    res.render('home', {
        nombre: 'Gonzalo',
        anio: new Date().getFullYear()
    });

});

app.listen(3000, () => {
    console.log('escuchando en el puerto 3000');
});