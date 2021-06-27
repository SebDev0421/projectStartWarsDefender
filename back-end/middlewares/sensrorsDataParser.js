"use strict ";


module.exports = (sensorsString) => {
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
		}
	});

	return parsed;
};

