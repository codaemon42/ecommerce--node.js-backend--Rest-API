const { console } = require("../../helpers");
const { User, UserRole } = require('../../models');
const createError = require('http-errors');
const { Op } = require('sequelize');
const Service = require("../Service");

class UsersService extends Service {
	constructor() {
		super(User);
		console(`${this.model.name} service started`);
	}

	async getUsers(offset=0, limit=10, order='createdAt' ) {
		try{
			return await this.model.findAndCountAll({
				include: [
						{
							model: UserRole,
							as: 'userRole',
							required: false,
							attributes: {exclude: ['createdAt', 'updatedAt']},
						},
					],
					attributes: {exclude: ['password', 'roleId']},
					offset,
					limit,
					order: [[order, 'DESC']]
			});
		}catch(err){
			console(err, 'product service')
			return createError(500);
		}
	}

	async checkUser(username, email){
		return await this.model.findOne({
			where: {
				[Op.or]: [{username}, {email}]
			},
			include: [
				{
					model: UserRole,
					as: 'userRole',
					required: false,
					attributes: {exclude: ['createdAt', 'updatedAt']},
				}
			],
		});
	}


	async verify(id) {
		return await this.update(id, {verified: true});
	}

}

module.exports = new UsersService();