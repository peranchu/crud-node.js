const querystring = require("querystring");


const index = (req, res) => {
    const query = querystring.stringify(req.query);

    fetch('https://fakestoreapi.com/products?' + query)
        .then((res) => res.json())
        .then((productos) => res.render('productos', { productos }));
};

/////////////////////////////////
const mostrar = (req, res) => {
    fetch('https://fakestoreapi.com/products/' + req.params.id)
        .then(response => response.json())
        .then(data => res.json(data));
};

module.exports = {
    index,
    mostrar
};