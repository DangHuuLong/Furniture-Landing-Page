const express = require('express')
const { login, register, requestResetCode, verifyResetCode, resetPassword } = require('../controllers/auth_controller')

const router = express.Router();

router.post('/login', login)
router.post('/register', register)
router.post('/forgot-password', requestResetCode);  
router.post('/verify-reset', verifyResetCode);      
router.post('/reset-password', resetPassword);

module.exports = router