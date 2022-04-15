const joi = require('@hapi/joi');


class ProductValidator {

	searchDto(data) {
		return joi.object({
			title: joi.string().optional(),
			page: joi.number().optional(),
			limit: joi.number().optional(),
			categoryId: joi.number().optional()
		}).validate(data);
	}
}

module.exports = new ProductValidator();