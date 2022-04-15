const productRouter = require('./products/products.route');
const variationRouter = require('./variations/variations.route');
const orderRouter = require('./orders/orders.route');
const attributesRouter = require('./attributes/attributes.route')
const attributeValuesRouter = require('./attributes/attributes-values.route')
const UsersRouter = require('./users/users.route');

module.exports = (app) => {
	app.use('/products', productRouter);

	app.use('/orders', orderRouter);

	app.use('/attributes', attributesRouter)

	app.use('/attribute-values', attributeValuesRouter)

	app.use('/users', UsersRouter)

	app.use('/variations', variationRouter)

	
	app.use('/', (req, res, next) => {
		res.send('working')
	})
}