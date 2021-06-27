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

let clusters = [] 

const sendAlert = require("../../functions/sendAlert")
const {socket} = require("../../socket")

const getDataMiddleware = (req, res, next) => {
	const { data: sensors } = req.body;
	const { data, date, originalData } = sensorsDataParser(sensors);
	//console.log("Body", data, date, originalData);
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
	const  {payload:data}  = req.body;
	const { data:parsedSensorrsData } = req
	//const { success} = await controller.saveDataSensors(originalData, date);
	const parsed = { data: [], date: ""};

	
	sample += 1;
	//console.log(data)
	console.log(sample)
	const parseout = await splitter(data);
	const timeShow = parseout[0];

	//socket.io.emit("data", {data: data});
	const { success} = await controller.saveDataSensors(data, timeShow);
	
	clusters = []

	parseout.forEach(async (data, index) => {
		if (index === 0) {
			parsed.date = data;
		} else {
			const aditionalDataRemoved = data.replace(/[{()}]/g, "");
			const [sensorName, sensorValueString] = aditionalDataRemoved.split("|");

			const sensorValue = Number(sensorValueString)

			parsed.data.push({ name: sensorName, value: sensorValue });
			// send to define alarms
			//console.log(sensorName, sensorValue)

			if(sensorValue > 100){
				if(sensorValue === 1234 && sensorName === "Bomber"){
					clusters.push(0.968)
				}else{
					clusters.push(0.375)
				}

				if(clusters.length === 7){
					//calculated probably that gosht ship is in cluster
					let acumCluster = 0;
					clusters.forEach((data,index)=>{
						acumCluster += data
					})

					const probShip = acumCluster/clusters.length

					if(probShip >= 0.95){
						console.log('detect gosth ship')
						socket.io.emit("detect", {ship_gosht: index-7});
					}
				}
			}else{
				//clear cluster
				clusters = []
			}
			const sensorSave = sensorsAlerts.filter(el=>{
				return el.index == index;
			})

			if(sensorSave.length === 0){
				
				//create internal alerts
				if (sensorValue > 100) {
		
				sensorsAlerts.push({timeShow, type:"1", index, sensorValue, sensorName,sample: sample+3})

				const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"1", ship:sensorName,information:"internal"})
				await alerts.save()

        	} else if (sensorValue === 0) {
				//detect fail in sensor
				//console.log('detect type 2 ',sensorName)
				//entry in monitoring 2 seconds
				sensorsAlerts.push({timeShow, type: "2", index, sensorValue, sensorName,smaple: sample+3})
				//save alerts
				//send index
				const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"2", ship:sensorName,information:"internal"})
				await alerts.save() 
			}
			}else{

				// emit alert for time
				
				
				if(sensorSave[0].type === "1"){

				if (sensorValue < 100){
					//console.log('alert canceled in sensor', index)
					//console.log('alert sensor value',sensorSave)
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})

					const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"1", ship:sensorName,information:"cancelled"})
				    await alerts.save()

					return true;
					
				}}
				else if(sensorSave[0].type === "2"){
					if (sensorValue > 0){
					//console.log('alert canceled ', index)
					const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:"2", ship:sensorName,information:"cancelled"})
				  await alerts.save()
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})

					
					return true;	
				  }}
				
				if (sample === sensorsAlerts[0].sample){
					sendAlert(timeShow, sensorSave[0].type, index, sensorValue, sensorName)
					//console.log('send alert ',sensorSave[0].type)
					//console.log('send alert ',sensorSave[0].sensorValue)
					//console.log('send alert ',sensorSave[0].sensorName)
					const alerts = new Alerts({date: timeShow,sensor: index,value: sensorValue ,type:sensorSave[0].type, ship:sensorName,information:"Moff"})
				    await alerts.save()
					sensorsAlerts= sensorsAlerts.filter((el,_index) => {
						return(
							el.index != index
							)
					})

				}

				
			}
			
		}
	});

	//console.log(sensorsAlerts)

	res.json({ sample: sample });

});




module.exports = router;