const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProveedorSchema = new Schema({
	nombreProveedor: {
		type: String,
		unique: true,
		required: [true, "El proveedor es obligatorio"],
	},
	fechaRegistro: {
		type: Date,
		default: Date.now()
	},
});
module.exports = mongoose.model("Proveedor", ProveedorSchema);
