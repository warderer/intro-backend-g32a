const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')

// Definir las rutas con el router
router.post('/homes', homeController.createHome)
router.get('/homes', homeController.findAllHomes)
router.get('/homes/:idHome', homeController.findOneHome)

// Exportar el router
module.exports = router
