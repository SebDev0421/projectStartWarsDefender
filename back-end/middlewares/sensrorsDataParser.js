"use strict ";

const sendAlerts = require("../functions/sendAlert");

module.exports = (sensorsString = "") => {
	// const r = "2021-06-01 08:00:01,(Bomber|122),(-|99),(-|0)";

	const splitted = sensorsString.split(",");
	const parsed = { data: [], date: "", originalData: sensorsString };
	const timeShow = splitted[0];
	splitted.forEach((data, index) => {
		if (index === 0) {
			parsed.date = data;
		} else {
			const aditionalDataRemoved = data.replace(/[{()}]/g, "");
			const [sensorName, sensorValue] = aditionalDataRemoved.split("|");

			parsed.data.push({ name: sensorName, value: sensorValue });
			// send to define alarms
			//console.log(sensorName, sensorValue)
			if (sensorValue > 100) {
				//detect possible enemy
				//send index
				sendAlerts(timeShow, "1", index, sensorValue, sensorName);
				//save alerts
			} else if (sensorValue === 0) {
				//detect fail in sensor

				//entry in monitoring 2 seconds
				sendAlerts(timeShow, "2", index, sensorValue, sensorName);
				//save alerts
				//send index
			}
		}
	});
	return parsed;
};
