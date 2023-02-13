const { application } = require('express')
const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')


router.get('/login',AuthController.loginPage)
router.post('/login',AuthController.loginPost)
router.get('/register', AuthController.registerPage)
router.post('/register',AuthController.registerPost)
router.get('/logout',AuthController.logout)




module.exports = router