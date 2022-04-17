const {Router} = require('express');
const VariationsController = require('../../controllers/variations/Variations.controller');
const router = Router();
const VariationAttributesRouter = require('./variationsAttributes.route')
const VariationDetailsRouter = require('./VariationDetails.route')



router
.use('/attributes', VariationAttributesRouter)
.use('/details', VariationDetailsRouter)

.post('/', VariationsController.create)
.put('/:id', VariationsController.update)

module.exports = router;