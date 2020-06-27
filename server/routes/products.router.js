const { Router } = require("express");
const router = Router();
const Producto = require("../models/producto");
const { populate } = require("../models/producto");
/*GET ALL PRODUCTS*/
router.get("/api/v1/productos", (req, res) => {
    Producto.find({})
        .sort('proveedor')
        .populate('proveedor','nombreProveedor')
        .exec((err, productsDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			productsDB,
		});
	});
});
/*CREAR PRODUCTO*/
router.post("/api/v1/agregar/producto", (req, res) => {
	const nombreProducto = req.body.nombreProducto;
	const cantidad = req.body.cantidad;
	const pricio = req.body.pricio;
	const urlImg = req.body.urlImg;
	const idProveedor = req.body.idProveedor;
	const producto = new Producto({
		nombreProducto,
		cantidad,
		pricio,
		urlImg,
		proveedor: idProveedor,
	});
	producto.save((err, productoDB) => {
		if (err) {
			return res.status(400).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			productoDB,
		});
	});
});
module.exports = router;
