const { console } = require("../../helpers");
const { Variations } = require('../../models')
const Service = require("../Service");

class VariationsService extends Service {
	constructor() {
		super(Variations);
		console(`${this.model.name} service started`);
	}

	// async getAttributes(searchQuery) {
	// 	try {
	// 		const defaults = {
	// 			title: '',
	// 			limit: 10,
	// 			offset: 0,
	// 			order: 'createdAt',
	// 			date: null
	// 		}
	// 		Object.assign(defaults, searchQuery);

	// 		const where = {
	// 			title: {
	// 				[Op.like]: `%${defaults.title}%`
	// 			}
	// 		}
	// 		if(defaults.date) where.createdAt = { [Op.between]: [defaults.date.split(',')[0], defaults.date.split(',')[1]] }
		
	// 		return await this.model.findAndCountAll({
	// 			where,
	// 			limit: +defaults.limit,
	// 			offset: +defaults.offset,
	// 			order: [[defaults.order, 'DESC']]
	// 		});
	// 	} catch(err) {
	// 		console(err, 'attr get')
	// 		throw createError(500);
	// 	}
	// }

}

module.exports = new VariationsService();