const { Router } = require('express');
const router = Router();
const BrandsController = require('../../controllers/brands/Brands.controller');



router
.get('/', BrandsController.fetch)
.post('/', BrandsController.create)
.put('/:id', BrandsController.update)
.delete('/:id', BrandsController.delete)
.get('/:id', BrandsController.findOne)

module.exports = router;