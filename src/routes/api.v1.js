const { Router } = require('express');
const router = Router();
const productRouter = require('./products/products.route');
const variationRouter = require('./variations/variations.route');
const orderRouter = require('./orders/orders.route');
const attributesRouter = require('./attributes/attributes.route')
const UsersRouter = require('./users/users.route');
const categoryRouter = require('./categories/category.route')
const brandRouter = require('./brands/brands.route')

router
.use('/products', productRouter)

.use('/orders', orderRouter)

.use('/attributes', attributesRouter)

.use('/users', UsersRouter)

.use('/variations', variationRouter)

.use('/categories', categoryRouter)

.use('/brands', brandRouter)

	
.use('/', (req, res, next) => {
		res.send('working')
})

module.exports = router;