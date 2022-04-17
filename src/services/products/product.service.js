const { console } = require("../../helpers");
const createError = require('http-errors');
const { Product, VariationAttributes, Variations, VariationDetails, AttributeValues, Images, Categories } = require("../../models");
const Service = require("../Service");
const VariationDetailsService = require("../variations/VariationDetails.service");
const Brand = require("../../models/brands/Brands.model");

class ProductService extends Service {

	constructor() {
		super(Product);
		console('product service created')
	}

		getIncludeQueryForOtherModel(){
			return [
						{
							model: Variations,
							include: [
								{
									model: VariationAttributes,
									include: {
										model: AttributeValues,
										required: false,
										attributes: ['id', 'title']
									},
									required: false,
									attributes: ['id', 'attributeId', 'attributeValueId']
								},
								{
									model: Images,
									where: {
										caseType: 'variation'
									},
									required: false,
									attributes: ['id', 'url', 'title']
								},
								{
									model: VariationDetails,
									required: false,
									attributes: {exclude: ['variationId', 'createdAt', 'updatedAt']}
								}
							],
							required: false,
							attributes: ['id']
						},
						{
							model: Images,
							where: {
								caseType: 'product'
							},
							required: false,
							attributes: ['id', 'url', 'title']
						},
						{
							model: Categories,
							required: false,
							attributes: {exclude: ['product_category_relation', 'updatedAt', 'createdAt']}
						},
						{
							model: Brand,
							as: 'brand',
							required: false
						}
					];
		}

		async getProduct(id) {
		try{
			const data = await this.model.findOne({
				where: {id},
				include: this.getIncludeQueryForOtherModel()
			});

			return data;
			// return createError(500)
		}catch(err){
			console(err, 'product service')
			return createError(500);
		}
	}

	async getProducts(offset=0, limit=10, order='createdAt' ) {
		try{
			const data = await this.model.findAndCountAll({
				include: this.getIncludeQueryForOtherModel(),
					attributes: {exclude: ['brandId']},
					offset,
					limit,
					order: [[order, 'DESC']]
			});

			// const totalPage = await this.model.count();

			return data;
			// return createError(500)
		}catch(err){
			console(err, 'product service')
			return createError(500);
		}
	}

	/**
	 * TODO: Needs to test the function
	 * // fetch product
	 * * if stock === -1 returns true
	 * ! if new stock < 0 i.e stock out order, return Error
	 * ? if not cal and return new stock
	 * @param {*} productId 
	 * @param {*} variationId 
	 * @param {*} amount 
	 * @returns true | Error | update
	 */
	async orderOccur(productId, variationId=null, amount=1){
		try{
			const product = await this.getProduct(productId);
			const newProductStock = this.changeStock(product, amount);
			const productUpdated = await this.update(productId, {stock: newProductStock});
			let variationUpdated = false;
			if(variationId) {
				const orderedVariation = product.Variations.find(v => v.id === variationId);
				const newVariationStock = this.changeStock(orderedVariation, amount);
				variationUpdated = await VariationDetailsService.update(variationId, {stock: newVariationStock})
			}
			return {productUpdated, variationUpdated}
		}catch(err) {
			console(err, 'during order occur in product service')
			return createError(500);
		}
	}

	/**
	 * TODO: Needs to test the function
	 * ? if stock === -1, return false
	 * ! if stock < 0, return Error
	 * * else return newStock
	 * @param {*} item 
	 * @param {*} deductAmount 
	 * @returns 
	 */
	changeStock(item, deductAmount=1) {
		if(item.stock === -1) {
			return false;
		}
		else {
			const newStock = item.stock - deductAmount;
			if(newStock < 0) {
				const error = new Error(`Item ${item.title} has ${item.stock} quantity available for order`);
				error.statusCode = 400;
				return error;
			}
			else {
				return newStock;
			}
		}
	}
}

module.exports = new ProductService();