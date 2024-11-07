const ratesHandler = require('../handlers/ratesHandlers');

// Create a new rates
const addRates = async (req, res, next) => {
  try {
    const rates = await ratesHandler.addRates(req.body);
    res.status(201).json(rates);
  } catch (error) {
    next(error)
  }
};
const updateRates = async (req, res, next) => {
  try {
    const rates = await ratesHandler.updateRates(req.body,req.params.id);
    res.status(201).json(rates);
  } catch (error) {
    next(error)
  }
};
const getRates = async (req, res, next) => {
  try {
    const rates = await ratesHandler.getRates(req.user.user_id);   
    res.status(200).json(rates);
  } catch (error) {
    next(error)
  }
};


module.exports = {
  addRates,
  getRates,
  updateRates};
