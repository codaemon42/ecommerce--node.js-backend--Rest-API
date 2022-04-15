const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const Cart = sequelize.define('carts',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	productId: {
		type: DataTypes.INTEGER
	},
	variationId: {
		type: DataTypes.INTEGER
	},
	userId: {
		type: DataTypes.INTEGER,
		defaultValue: 'guest'
	},
	rating: {
		type: DataTypes.INTEGER
	},
	description: {
		type: DataTypes.STRING
	}
});

module.exports = Cart;