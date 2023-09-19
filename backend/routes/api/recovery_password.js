const express = require('express')
const router = express.Router()
const RecoveryPasswordController = require('../../controllers/RecoveryPasswordController')

router.post('/', RecoveryPasswordController.verificarEmailRegistrado);
  
module.exports = router
