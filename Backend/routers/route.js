const express = require('express')
const router = express.Router()
const {Signup,Login,GetDoctor,GetById} = require('../controllers/controller')

router.post('/signup',Signup)
router.post('/login',Login)
router.get('/getdoctor',GetDoctor)
router.get('/getbyid/:id',GetById)

module.exports = router