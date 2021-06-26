"use strict";
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const sensorsDataParser = require("../../middlewares/sensrorsDataParser");

const getDataMiddleware = (req, res, next) => {
	const { sensors } = req.body;
	const { data, date, originalData } = sensorsDataParser(sensors);
	req.data = data;
	req.date = date;
	req.originalData = originalData;
	next();
};

router.get("/", getDataMiddleware, (req, res) => {
<<<<<<< HEAD

	res.json({"message":"hello world"})
=======
	res.send("Holaa")
>>>>>>> 94b37ef1f121a6a289933842f55543a6dc3bb973
});

router.post("/", getDataMiddleware, async (req, res) => {
	const { data, date, originalData } = req;
	const { success } = await controller.saveDataSensors(originalData, date);
	// controller.
});

<<<<<<< HEAD

module.exports = router;
=======
module.exports = router;
>>>>>>> 94b37ef1f121a6a289933842f55543a6dc3bb973
