const express = require('express')
const router = express.Router()
const { getCars } = require('../controllers/api');
const { registerUser, loginUser, logout } = require('../controllers/users'); 

router.get('/cars', getCars)
router.post('/signup', registerUser);
router.post('/signin', loginUser);
router.get('/logout', logout)


module.exports = router;