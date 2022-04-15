const { console, prepare, errorHandler, isValid } = require('../../helpers');
const createError = require('http-errors');
const { ProductValidator } = require('../../validations');
const ProductService = require('../../services/products/product.service');


class ProductController {
	constructor() {
		console('product controller created');
	}

	async fetch(req, res, next){
		try{
			// validation & verification
			const validation = ProductValidator.searchDto(req.body);
			const validationHandler = isValid(validation);
			if(!validationHandler.valid) return next(validationHandler.error)

			// process
			const result = await ProductService.getProducts();

			// handle error & send response
			return res.json(prepare(result));
		}catch(err){
			console(err.message)
			return next(err);
		}
	}
}

module.exports = new ProductController();
