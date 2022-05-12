const { Router } = require('express');
const router = Router();
const CategoryController = require('../../controllers/categories/Category.controller');



router
.get('/', CategoryController.fetchNestedCats)
.post('/', CategoryController.create)
.put('/:id', CategoryController.update)
.delete('/:id', CategoryController.delete)
// .get('/:id', AttributesController.findOne)

module.exports = router;