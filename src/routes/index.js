const router = require("express").Router();
const ratesRoutes  = require('./ratesRoutes')

router.use("/rates", ratesRoutes);

module.exports = router;