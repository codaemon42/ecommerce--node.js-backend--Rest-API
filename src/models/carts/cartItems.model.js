const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const CartItem = sequelize.define('cartItems',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	cartId: {
		type: DataTypes.INTEGER
	},
	productId: {
		type: DataTypes.INTEGER
	},
	variationId: {
		type: DataTypes.INTEGER
	},
	quantity: {
		type: DataTypes.INTEGER
	}
});

module.exports = CartItem;