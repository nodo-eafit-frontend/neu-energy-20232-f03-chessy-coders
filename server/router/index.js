const express = require('express');
const router = express.Router();
const { readEnergy } = require('./api/get');
const { createEnergy } = require('./api/post');
const { updateEnergy } = require('./api/put');
const { deleteEnergy } = require('./api/delete');

router.get('/energy/:year/:month', readEnergy);
router.post('/energy', createEnergy);
router.put('/energy', updateEnergy);
router.delete('/energy', deleteEnergy);

module.exports = router;