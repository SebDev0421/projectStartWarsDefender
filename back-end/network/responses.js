"use strict";

exports.successHandler = (req, res, message, status) => {
	if (typeof status !== "number")
		return console.error("[Error]: --> El status debe ser un número");
	res.status(status || 200).send(message);
};

exports.errorHandler = (req, res, message, status, details) => {
	console.error("[Error]: -->", details, "message", message);
	if (typeof status !== "number")
		return console.error("[Error]: --> El status debe ser un número");
	res.status(status || 500).send(message);
};
