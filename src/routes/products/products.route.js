const { Router } = require('express');
const router = Router();

const { ProductController } = require('../../controllers')

router
.get('/', ProductController.fetch)

module.exports = router;