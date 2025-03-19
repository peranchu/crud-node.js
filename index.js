require("dotenv").config();

const express = require("express");
const app = express();

const mainRouter = require("./src/routes/main.router");  //Llama al módulo de rutas
app.use(mainRouter);
app.use(require('./src/routes/productos.router'));




const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));