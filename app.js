const express = require('express');

const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

let rutasIndex = require('./routes/index.js')

let rutasUsuarios = require('./routes/usuarios.js')

let rutasProductos = require('./routes/productos.js')

app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Servidor funcionando"));

app.use('/', rutasIndex);

app.use('/usuarios', rutasUsuarios);

app.use('/productos', rutasProductos);