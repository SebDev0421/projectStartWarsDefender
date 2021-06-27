"use strict ";

//const sendAlerts = require("../functions/sendAlert");



module.exports = (sensorsString) => {
	// "2021-06-01 08:00:01,(Bomber|122),(-|99),(-|0)";

	const splitted = sensorsString.split(",");

	return splitted;
};