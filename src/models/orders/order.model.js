const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const Order = sequelize.define('orders',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	productId: {
		type: DataTypes.INTEGER
	},
	product_title: {
		type: DataTypes.INTEGER
	},
	variationId: {
		type: DataTypes.INTEGER
	},
	userId: {
		type: DataTypes.STRING,
		defaultValue: 'guest'
	},
	subTotal: {
		type: DataTypes.INTEGER
	},
	total: {
		type: DataTypes.INTEGER
	},
	shippingId: {
		type: DataTypes.STRING
	},
	discount: {
		type: DataTypes.INTEGER
	},
	couponCodes: {
		type: DataTypes.ARRAY
	}
});

module.exports = Order;