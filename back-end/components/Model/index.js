"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const _Schema = new Schema({
	sensorsString: {
		type: String,
		required: true,
	},
	date: Date,
});

const model = mongoose.model("sensors", _Schema);
module.exports = model;
