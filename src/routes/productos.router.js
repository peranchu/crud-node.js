const express = require("express");
const router = express.Router();

const controller = require("../controllers/productos.controller"); //importa los controles

router.get('/productos', controller.index);

router.get('/productos/:id', controller.mostrar );

module.exports = router;