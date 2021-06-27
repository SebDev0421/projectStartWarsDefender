"use strict";
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const sensorsDataParser = require("../../middlewares/sensrorsDataParser");
const sendAlert = require("../../functions/sendAlert")

const getDataMiddleware = (req, res, next) => {
	const { data: sensors } = req.body;
	const { data, date, originalData } = sensorsDataParser(sensors);
	console.log("Body", data, date, originalData);
	req.data = data;
	req.date = date;
	req.originalData = originalData;
	next();
};

router.get("/", getDataMiddleware, (req, res) => {
	res.json({ message: "hello world" });
	res.send("Holaa");
});

router.post("/", getDataMiddleware, async (req, res) => {
	const { data, date, originalData } = req;
	const actives =  [""];
	// [{
	// 	sensorNumber: 0,
	// 	thirtyTimesCounter: 1++,
	// 	timesThirtyTimesCounter: 1, 
	// 	zeroTimes:1++,
	// 	zeroTotalTimes:
	// }]
	console.log("Getted data", data, date, originalData);
	//const { success} = await controller.saveDataSensors(originalData, date);
	// const parseout = await sensorsDataParser(data);
	res.json({ status: "ok" });
	// controller.
});

module.exports = router;
