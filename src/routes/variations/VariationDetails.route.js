const {Router} = require('express');
const VariationDetailsController = require('../../controllers/variations/VariationDetails.controller');
const router = Router();



router
.post('/', VariationDetailsController.create)
.get('/:id', VariationDetailsController.findOne)
.put('/:id', VariationDetailsController.update)
.delete('/:id', VariationDetailsController.delete)



module.exports = router;