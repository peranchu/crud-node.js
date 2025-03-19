const express = require("express");
const router = express.Router();

router.get('/productos', (req, res) => {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => res.json(data));
});

router.get('/productos/:id', (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response => response.json())
        .then(data => res.json(data));
});

module.exports = router;