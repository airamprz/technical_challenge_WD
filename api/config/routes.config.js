const express = require('express');
const router = express.Router();

const phone = require('../controllers/phone.controller');

router.get('/phones', phone.viewAll);
router.get('/phones/:id', phone.viewOne);

module.exports = router;