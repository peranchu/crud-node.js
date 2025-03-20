const path = require("path");

//Control de "/"
const index = (req, res) => {
    res.sendFile(path.resolve(__dirname, "../../private/index.html")); 
};

module.exports = {
    index,
};