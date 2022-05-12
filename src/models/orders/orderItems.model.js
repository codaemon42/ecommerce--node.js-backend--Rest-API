const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const OrderItems = sequelize.define('ordersItems',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	orderId: {
		type: DataTypes.INTEGER
	},
	productId: {
		type: DataTypes.INTEGER
	},
	product_title: {
		type: DataTypes.STRING
	},
	product_image: {
		type: DataTypes.STRING
	},
	variationId: {
		type: DataTypes.INTEGER
	},
	variation_title: {
		type: DataTypes.STRING
	},
	variation_value: {
		type: DataTypes.STRING
	},
	price: {
		type: DataTypes.INTEGER
	},
	quantity: {
		type: DataTypes.INTEGER
	}
});

module.exports = OrderItems;