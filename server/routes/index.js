const express = require("express");
let app = express();
app.use(require("./proveedor.router"));
app.use(require("./products.router"));
module.exports = app;