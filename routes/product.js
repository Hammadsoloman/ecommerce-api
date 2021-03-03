const models = require('../models/product');

module.exports = {
    create(req, res){
		// const models = models;
		// models.name = req.sanitize('name').escape();
		// models.description = req.sanitize('description').escape();
        // models.price = req.sanitize('price').escape();
		// models.stock = req.sanitize('stock').escape();

	       models.name = req.name;
		   models.description = req.description;
           models.price = req.price;
		   models.stock = req.stock;

		console.log("models",models);
		models.save()
		.then((instance)=>{
            res.status(200).json(instance);
        })
		.catch((error)=>{
            res.status(500).json(error);
        })
	},
}

