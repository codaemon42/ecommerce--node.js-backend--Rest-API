const { Router } = require('express');
const router = Router();
const CartItemController = require('../../controllers/carts/CartItems.controller');



router
.get('/', CartItemController.fetch)
.post('/', CartItemController.create)
.put('/:id', CartItemController.update)
.delete('/:id', CartItemController.delete)
.get('/:id', CartItemController.findOne)

module.exports = router;