const express = require('express');
const router = express.Router();

const controller = require('../controllers/main.controllers'); //Control de la pagina ríz

router.get("/", controller.index);  //Ruta del ríz

module.exports = router;