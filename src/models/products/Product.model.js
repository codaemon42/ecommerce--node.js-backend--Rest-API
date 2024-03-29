const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const Product = sequelize.define('products',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING
	},
	description: {
		type: DataTypes.TEXT('long')
	},
	shortDescription: {
		type: DataTypes.TEXT('long')
	},
	price: {
		type: DataTypes.INTEGER
	},
	featureImage: {
		type: DataTypes.STRING
	},
	updatedAt: {
		type: DataTypes.DATE
	},
	createdAt: {
		type: DataTypes.DATE
	}
});

module.exports = Product;