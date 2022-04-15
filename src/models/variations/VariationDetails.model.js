const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const VariationDetails = sequelize.define('VariationDetails',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	variationId: {
		type: DataTypes.INTEGER
	},
	price: {
		type: DataTypes.INTEGER
	}
});

module.exports = VariationDetails;