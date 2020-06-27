const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductoSchema = new Schema({
	nombreProducto: {
		type: String,
		unique: true,
		required: [true, "El proveedor es obligatorio"],
	},
	cantidad: {
		type: Number,
		required: [true, "El proveedor es obligatorio"],
	},
	pricio: {
		type: Number,
		required: [true, "El proveedor es obligatorio"],
	},
	urlImg: {
		type: String,
		unique: true,
		required: [true, "El proveedor es obligatorio"],
	},
	fechaRegistro: {
		type: Date,
		default: Date.now()
	},
	proveedor:{
		type: Schema.Types.ObjectId, ref: "Proveedor"
	}
});
module.exports = mongoose.model("Producto", ProductoSchema);