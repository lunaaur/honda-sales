const express = require('express')
const router = express.Router()
const { getCars } = require('../controllers/api')


router.get('/cars', getCars)

module.exports = router;