"use strict";
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const sensorsDataParser = require("../../middlewares/sensrorsDataParser");
let sample = 0;
let sensorsAlerts = []


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

router.post("/", async (req, res) => {
	const { data } = req.body;
	//const { success} = await controller.saveDataSensors(originalData, date);
	const parsed = { data: [], date: ""};
	
	sample += 1;

	console.log(sample)
	const parseout = await sensorsDataParser(data);
	const timeShow = parseout[0];

	parseout.forEach((data, index) => {
		if (index === 0) {
			parsed.date = data;
		} else {
			const aditionalDataRemoved = data.replace(/[{()}]/g, "");
			const [sensorName, sensorValue] = aditionalDataRemoved.split("|");

			parsed.data.push({ name: sensorName, value: sensorValue });
			// send to define alarms
			//console.log(sensorName, sensorValue)
			const sensorSave = sensorsAlerts.filter(el=>{
				return el.index == index;
			})

			if(sensorSave.length === 0){
				//console.log('testing')

				//create internal alerts
				if (sensorValue > 100) {
				//detect possible enemy
				//send index
				//sendAlerts(timeShow, "1", index, sensorValue, sensorName,sample+30);
				sensorsAlerts.push({timeShow, type:"1", index, sensorValue, sensorName,sample: sample+30})
        //console.log(sample)
				//save alerts
			} else if (sensorValue === 0) {
				//detect fail in sensor

				//entry in monitoring 2 seconds
				//sendAlerts(timeShow, "2", index, sensorValue, sensorName,sample+2);sensorsAlerts.push({timeShow, "1", index, sensorValue, sensorName,sample+30})
				sensorsAlerts.push({timeShow, type: "2", index, sensorValue, sensorName,smaple: sample+32})
				//save alerts
				//send index
			}
			}else{
				
				if(sensorSave[0].type === "1"){

				if (sensorValue < 100){
					console.log('alert canceled ', index)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})
				}}
				else if(sensorSave[0].type === "2"){
					if (sensorValue > 0){
					console.log('alert canceled ', index)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})
				  }}
				

				// emit alert for time
				if (sample === sensorSave[0].sample){
					console.log('send alert ',sensorSave[0].type)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})
				}
			}
			
		}
	});

	console.log(sensorsAlerts)

	res.json({ sample: sample });
	// controller.
});

module.exports = router;
