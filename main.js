const express = require('express');
const controladoresProductos = require('./controladores/controladoresProductos');
const controladoresPagina = require('./controladores/controladoresPagina');
const app = express();
const PORT = 8080;

app.get('/', controladoresPagina.root);
app.get('/inicio', controladoresPagina.inicio);
app.get('/productos', controladoresProductos.productos);
app.get('/productoRandom', controladoresProductos.productoRandom);


const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => {console.log(error.message)});