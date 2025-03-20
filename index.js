require("dotenv").config(); //Archivos de entorno

const express = require("express");
const app = express();


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));  //Ruta archivos estáticos

//Motor plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "src/views"));  //Ruta vistas

//Rutas de las páginas
const mainRouter = require("./src/routes/main.router");  //Llama al módulo de rutas
app.use(mainRouter);
app.use(require('./src/routes/productos.router'));




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));