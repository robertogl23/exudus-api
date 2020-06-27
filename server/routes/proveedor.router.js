const { Router } = require("express");
const router = Router();
const Proveedor = require("../models/proveedor");
/*GET ALL PRODUCTS*/
router.get("/api/v1/proveedor", (req, res) => {
	res.json({
		status: true,
	});
});
/*CREAR PRODUCTO*/
router.post("/api/v1/agregar/proveedor", (req, res) => {
	const nombreProveedor = req.body.nombreProveedor;
	const proveedor = new Proveedor({
		nombreProveedor,
    });
    proveedor.save((err,proveedorDB) => {
        if (err) {
			return res.status(400).json({
				status: false,
				err,
			});
		}
		res.json({
			status: true,
			proveedorDB,
		}); 
    })
});
module.exports = router;
