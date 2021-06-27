"use strict";
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const sensorsDataParser = require("../../middlewares/sensrorsDataParser");
const sendAlert = require("../../functions/sendAlert")
const {socket} = require("../../socket")

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
	socket.io.emit("data", {data: data.map((x, i) =>({...x, sensor:i}) ), date});
	const { success} = await controller.saveDataSensors(originalData, date);
	res.json({ status: "ok" });
});

module.exports = router;
