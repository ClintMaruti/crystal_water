const express = require("express");
const router = express.Router();
const meterController = require("../controllers/meter");

/* GET meter listing. */
router.post("/api/v1/meter/:id", meterController.createNewMeter);
router.get("/api/v1/meter", meterController.fetchAllMeter);
router.get("/api/v1/meter/:id", meterController.fetchMeterById);

module.exports = router;
