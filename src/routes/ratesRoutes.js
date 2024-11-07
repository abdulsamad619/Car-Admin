const express = require('express');
const router = express.Router();
const ratesController = require('../controllers/ratesController');

// Define the routes and map to the controller functions
router.post('/add/rates', ratesController.addRates);
router.get('/update/rates/:id', ratesController.updateRates);
router.get('/rates', ratesController.getRates);


module.exports = router;
