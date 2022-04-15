const joi = require('@hapi/joi');

class VariationsValidator {

	postDto(data) {
		return joi.object({
			productId: joi.number().required(),
			title: joi.string().required()
		}).validate(data);
	}

	updateDto(data) {
		return joi.object({
			title: joi.string().optional()
		}).validate(data);
	}


}

module.exports = new VariationsValidator()