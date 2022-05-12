const { Router } = require('express');
const router = Router();
const CartController = require('../../controllers/carts/Carts.controller');
const cartItemRouter = require('./cartItems.route');



router
.use('/items', cartItemRouter)

.get('/', CartController.fetch)
.post('/', CartController.create)
.put('/:id', CartController.update)
.delete('/:id', CartController.delete)
.get('/:id', CartController.findOne)

module.exports = router;