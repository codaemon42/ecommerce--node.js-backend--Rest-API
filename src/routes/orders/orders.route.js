const { Router } = require('express');
const router = Router();

router
.get('/', (req, res, next) => {
	res.json({msg: 'this is a order api'});
})

module.exports = router;