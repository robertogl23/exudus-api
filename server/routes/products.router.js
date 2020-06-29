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
/*FIND PRODUCTS*/
router.get("/api/v1/find/productos/:url", (req, res) => {
	const url = req.params.url
    Producto.find({urlSeo:url})
        .populate('proveedor','nombreProveedor')
        .exec((err, productDB) => {
		if (err) {
			return res.status(500).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			productDB,
		});
	});
});
/*CREAR PRODUCTO*/
router.post("/api/v1/agregar/producto", (req, res) => {
	const nombreProducto = req.body.nombreProducto;
	const cantidad = req.body.cantidad;
	const pricio = req.body.pricio;
	const imagenes = req.body.urlImg;
	const idProveedor = req.body.idProveedor;
	const caracteristicas = req.body.caracteristicas;
	const descripcion = req.body.descripcion;
	const urlSeo = req.body.urlSeo;
	const producto = new Producto({
		nombreProducto,
		cantidad,
		pricio,
		urlImagenes:imagenes,
		proveedor: idProveedor,
		caracteristicas: caracteristicas,
		descripcion: descripcion,
		urlSeo: urlSeo,
	});
	producto.save((err, productoDB) => {
		if (err) {
			console.log(err)
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
