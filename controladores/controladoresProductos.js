const ContenedorArchivo = require('../assets/Contenedor.js');
const contenedor = new ContenedorArchivo('./controladores/productos.txt')

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


const controladoresProductos = {

    productos : async (req, res) => {
        const prod = await contenedor.getAll()
        res.json(prod)
    },

    productoRandom : async (req,res) => {
        const producto = await contenedor.getById(randomInt(1,3))
        res.json(producto)
    }
    
}


module.exports = controladoresProductos;