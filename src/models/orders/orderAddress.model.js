const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const OrderAddress = sequelize.define('ordersAddress',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	orderId: {
		type: DataTypes.INTEGER
	},
	name: {
		type: DataTypes.INTEGER
	},
	email: {
		type: DataTypes.INTEGER
	},
	phone: {
		type: DataTypes.STRING
	},
	whatsapp: {
		type: DataTypes.STRING
	},
	address: {
		type: DataTypes.INTEGER
	},
	state: {
		type: DataTypes.INTEGER
	},
	postcode: {
		type: DataTypes.STRING
	},
	country: {
		type: DataTypes.INTEGER
	}
});

module.exports = OrderAddress;