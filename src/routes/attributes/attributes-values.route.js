const { Router } = require('express');
const router = Router();

const { AttributeValuesController } = require('../../controllers')

router
.get('/', AttributeValuesController.fetch)
.post('/', AttributeValuesController.create)
.put('/:id', AttributeValuesController.update)
.delete('/:id', AttributeValuesController.delete)
.get('/:id', AttributeValuesController.findOne)

module.exports = router;