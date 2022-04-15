const { console } = require("../../helpers");
const createError = require('http-errors');
const { Product, VariationAttributes, Variations, VariationDetails, AttributeValues, Images } = require("../../models");
const Service = require("../Service");

class ProductService extends Service {

	constructor() {
		super(Product);
		console('product service created')
	}

	async getProducts(offset=0, limit=10, order='createdAt' ) {
		try{
			const data = await this.model.findAll({
				include: [
						{
							model: Variations,
							include: [
								{
									model: VariationAttributes,
									include: {
										model: AttributeValues,
										required: false,
										attributes: ['title']
									},
									required: false,
									attributes: ['attributeId', 'attributeValueId']
								},
								{
									model: Images,
									where: {
										caseType: 'variation'
									},
									required: false,
									attributes: ['url']
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
							attributes: ['url']
						}
					],
					offset,
					limit,
					order: [[order, 'DESC']]
			});

			const totalPage = await this.model.count();

			return {totalPage, data};
			// return createError(500)
		}catch(err){
			console(err, 'product service')
			return createError(500);
		}
	}
}

module.exports = new ProductService();