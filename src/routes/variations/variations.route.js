const {Router} = require('express');
const VariationsController = require('../../controllers/variations/Variations.controller');
const router = Router();



router
.post('/', VariationsController.create)
.put('/:id', VariationsController.update)


module.exports = router;