"use strict";
const Model = require("../Model");
const sensrorsDataParser = require("../../middlewares/sensrorsDataParser");

 function getAttacksByPagination(page = 0, limit = 10) {
	const status = { data: [], success: false };
	return new Promise((resolve, reject)=>{
		Model.find({})
		.skip(page * limit)
		.limit(limit)
		.exec(function (err, doc) {
			if (err) {
				status.success = false;
				reject(status)
			}
			status.data = doc.map((x,ind) =>{
				const {data, date} = sensrorsDataParser(x.sensorsString)
				return {date, data:data.map((xd,i)  => ({...xd, sensor:i}) )}
			});
			status.success=true;
			resolve(status)
		});
	})
}

module.exports = {
	getAttacksByPagination,
};