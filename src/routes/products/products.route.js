const { Router } = require('express');
const router = Router();

const { ProductController } = require('../../controllers')

router
.get('/', ProductController.fetch)
.post('/', ProductController.create)
.get('/:id', ProductController.fetchOne)
.put('/:id', ProductController.update)
.delete('/:id', ProductController.delete)

module.exports = router;