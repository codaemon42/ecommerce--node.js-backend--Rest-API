const { console } = require("../../helpers");
const { Cart } = require('../../models')
const Service = require("../Service");

class CartService extends Service {
	constructor() {
		super(Cart);
		console(`${this.model.name} service started`);
	}

}

module.exports = new CartService();