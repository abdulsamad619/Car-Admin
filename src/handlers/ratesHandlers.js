const ratesService = require('../services/ratesService');
const ratesService2 = require('../services/rideService');

const { createError } = require('../utils/createError');

// Create a new route
const addRates = async (ratesData) => {
  try {
    const rates = await ratesService.addRates(ratesData);
    return rates
    } catch (error) {
      throw error
    }   
};
const updateRates = async (ratesData,id) => {
  try {
    const rates = await ratesService.updateRates(ratesData,id);
    return rates
    } catch (error) {
      throw error
    }   
};

const getRates = async (id) => {
  try {
    const rate = await ratesService.getRates(id);
    if (!rate) {
       throw createError(404,'Rates not found');
    }
    return rate
  } catch (error) {
    throw error    
  }
};

module.exports = {
  addRates,
  getRates,
  updateRates};
