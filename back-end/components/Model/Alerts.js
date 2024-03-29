"use strict";

const mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	AlertsSchema = new Schema(
		{
			date: "String",
			sensor: "String",
			value: "String",
			type: "String",
			ship: "String",
			infromation: "String"
		},
		{
			collection: "alerts",
		}
	),
	AlertsModel = mongoose.model("Alerts", AlertsSchema);

module.exports = AlertsModel;
