const mongoose = require("mongoose");
require("../config/config");
mongoose.connect(
	process.env.URLDB,
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	(err, res) => {
		if (err) throw err; //  <--------------Obteniendo el error
		console.log("MongoDB initiated");
	}
);
