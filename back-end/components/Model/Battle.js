"use strict";

const mongoose = require("mongoose"),
	Schema = mongoose.Schema,
	BattleSchema = new Schema(
		{
			date: "String",
			data: "String",
		},
		{
			collection: "battle",
		}
	),
	BattleModel = mongoose.model("Battle", BattleSchema);

module.exports = BattleModel;