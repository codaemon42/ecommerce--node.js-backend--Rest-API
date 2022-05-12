const joi = require('@hapi/joi');

class CartsValidator {

	postDto(data) {
		return joi.object({
			type: joi.string().optional(),
			userId: joi.number().required()
		}).validate(data);
	}

	updateDto(data) {
		return joi.object({
			type: joi.string().optional(),
			userId: joi.number().optional()
		}).validate(data);
	}


}

module.exports = new CartsValidator()