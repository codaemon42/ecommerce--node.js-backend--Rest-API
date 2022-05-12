const Controller = require("../Controller");
const CartValidator = require('../../validations/carts/carts.validation');
const CartService = require('../../services/carts/Cart.service');


class CartController extends Controller {
	constructor() {
		super(CartValidator, CartService);
		
	}
	

}

module.exports = new CartController()