const { console } = require("../../helpers");
const { Attributes } = require('../../models')
const createError = require('http-errors');
const { Op } = require('sequelize');
const Service = require("../Service");

class AttributesService extends Service {
	constructor() {
		super(Attributes);
		console(`${this.model.name} service started`);
	}

	async getAttributes(searchQuery) {
		try {
			const defaults = {
				title: '',
				limit: 10,
				offset: 0,
				order: 'createdAt',
				date: null
			}
			Object.assign(defaults, searchQuery);

			const where = {
				title: {
					[Op.like]: `%${defaults.title}%`
				}
			}
			if(defaults.date) where.createdAt = { [Op.between]: [defaults.date.split(',')[0], defaults.date.split(',')[1]] }
		
			return await this.model.findAndCountAll({
				where,
				limit: +defaults.limit,
				offset: +defaults.offset,
				order: [[defaults.order, 'DESC']]
			});
		} catch(err) {
			console(err, 'attr get')
			throw createError(500);
		}
	}

}

module.exports = new AttributesService();