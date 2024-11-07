const prisma = require('../db/prisma');

// Create a new route
const addRates = async (ratesData) => {
  const { baseFare, distanceFare, timeFare, additionalCharges } = ratesData;
  return await prisma.$executeRaw`
   INSERT INTO rates (user_id, base_fare,additional_charges,distance_fare,time_fare)
   VALUES (${req.user.user_id},${baseFare},${additionalCharges},${distanceFare},${timeFare}) RETURNING *;`;
};

const updateRates = async (ratesData,id) => {
  const { baseFare, distanceFare, timeFare, additionalCharges } = ratesData;
  return await prisma.$executeRaw`
   update rates 
   set base_fare=${baseFare},
   additional_charges=${additionalCharges},
   distance_fare=${distanceFare},
   time_fare=${timeFare} 
   where rate_id=${id} RETURNING *;`;
};
const getRates = async (id) => {
  return await prisma.rates.findFirst({
    where: { user_id: Number(id) },
  });
};

module.exports = {
  addRates,
  getRates,
  updateRates};
