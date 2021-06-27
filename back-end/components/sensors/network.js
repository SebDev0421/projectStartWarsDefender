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


	res.json({"message":"hello world"})
	res.send("Holaa")
});

router.post("/", getDataMiddleware, async (req, res) => {
	const { data } = req.body;
	//const { success} = await controller.saveDataSensors(originalData, date);
	const parseout = await sensorsDataParser(data) 
	res.json({'status':'ok'})
	// controller.
});


module.exports = router;
