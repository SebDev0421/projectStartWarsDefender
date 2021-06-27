"use strict";
const express = require("express");
const router = express.Router();
const controller = require("./controller");
const splitter = require("../../middlewares/spliterSensor");
const sensorsDataParser = require('../../middlewares/sensrorsDataParser')
const Alerts = require('../Model/Alerts');
const Battle = require('../Model/Battle');

let sample = 0;
let sensorsAlerts = []



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

router.post("/", async (req, res) => {
	const { data } = req.body;
	const { data:parsedSensorrsData } = req
	//const { success} = await controller.saveDataSensors(originalData, date);
	const parsed = { data: [], date: ""};

	
	sample += 1;

	console.log(sample)
	const parseout = await splitter(data);
	const timeShow = parseout[0];

	socket.io.emit("data", {data: parsedSensorrsData});
	const { success} = await controller.saveDataSensors(data, timeShow);

	parseout.forEach(async (data, index) => {
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


				//create internal alerts
				if (sensorValue > 100) {
		
				sensorsAlerts.push({timeShow, type:"1", index, sensorValue, sensorName,sample: sample+3})

				const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"1", ship:sensorName})
				await alerts.save()

        	} else if (sensorValue === 0) {
				//detect fail in sensor

				//entry in monitoring 2 seconds
				sensorsAlerts.push({timeShow, type: "2", index, sensorValue, sensorName,smaple: sample+5})
				//save alerts
				//send index
				const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"2", ship:sensorName})
				await alerts.save() 
			}
			}else{

				// emit alert for time
				
				
				if(sensorSave[0].type === "1"){

				if (sensorValue < 100){
					console.log('alert canceled in sensor', index)
					console.log('alert sensor value',sensorSave)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})
					return true;
					
				}}
				else if(sensorSave[0].type === "2"){
					if (sensorValue > 0){
					console.log('alert canceled ', index)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})
					return true;
					
				  }}
				
				if (sample === sensorSave[0].sample){
					sendAlert(timeShow, sensorSave[0].type, index, sensorValue, sensorName)
					console.log('send alert ',sensorSave[0].type)
					console.log('send alert ',sensorSave[0].sensorValue)
					console.log('send alert ',sensorSave[0].sensorName)
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

});




module.exports = router;