const { Sequelize } = require('sequelize');

const database = process.env.DATABASE;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
// const database = 'wigbdcom_ecommerce';
// const username = 'wigbdcom_new';
// const password = 'wigbdcom_new';

const sequelize = new Sequelize(database, username, password, {
	host: 'localhost',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});


module.exports = sequelize;