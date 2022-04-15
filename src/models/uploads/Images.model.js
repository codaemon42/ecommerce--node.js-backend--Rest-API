const { DataTypes } = require("sequelize");
const sequelize = require('../../config/mysql.db');

const Images = sequelize.define('Images',{
	id: {
		type: DataTypes.BIGINT,
		autoIncrement: true,
		primaryKey: true
	},
	caseType: {
		type: DataTypes.ENUM('product', 'variation')
	},
	caseId: {
		type: DataTypes.INTEGER
	},
	url: {
		type: DataTypes.STRING
	}
});

module.exports = Images;