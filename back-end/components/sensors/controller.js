"use strict";
const Model = require("../Model");

async function saveDataSensors(originalData='', date='') {
	const response = { success: false };
	const _data = new Model({ sensorsString: originalData, date });
	const saved = await _data.save();
	response.success = saved;
	return response;
}

module.exports = {
	saveDataSensors,
};
