const { Router } = require('express');
const router = Router();
const attributeValuesRouter = require('./attributes-values.route')
const { AttributesController } = require('../../controllers')

router
.use('/values', attributeValuesRouter)

.get('/', AttributesController.fetch)
.post('/', AttributesController.create)
.put('/:id', AttributesController.update)
.delete('/:id', AttributesController.delete)
.get('/:id', AttributesController.findOne)

module.exports = router;