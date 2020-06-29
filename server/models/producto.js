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
	urlImagenes: {
		type: Array,
		required: [true, "El urlImagenes es obligatorio"],
	},
	caracteristicas: {
		type: Array,
		required: [true, "El proveedor es obligatorio"],
	},
	descripcion: {
		type: String,
		required: [true, "El proveedor es obligatorio"],
	},
	urlSeo: {
		type: String,
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