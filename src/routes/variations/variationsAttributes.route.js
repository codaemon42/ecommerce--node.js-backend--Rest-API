const {Router} = require('express');
const VariationAttributesController = require('../../controllers/variations/VariationAttributes.controller');
const router = Router();



router
.post('/', VariationAttributesController.create)
.get('/:id', VariationAttributesController.findOne)
.put('/:id', VariationAttributesController.update)
.delete('/:id', VariationAttributesController.delete)



module.exports = router;