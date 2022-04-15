const { Router } = require('express');
const router = Router();

const { AttributesController } = require('../../controllers')

router
.get('/', AttributesController.fetch)
.post('/', AttributesController.create)
.put('/:id', AttributesController.update)
.delete('/:id', AttributesController.delete)
.get('/:id', AttributesController.findOne)

module.exports = router;