require("./config/config"); /*Configuracion de environment*/
require("./db/conexion");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index")); /*Rutas*/
app.listen(process.env.PORT, (err) => {
	if (err) throw new Error(err);
	console.log(`Servidor http://localhost:${process.env.PORT}`);
});
