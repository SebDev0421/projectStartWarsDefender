"use strict";
const { socket } = require("../socket"),
	Alerts = require("../components/Model/Alerts");


module.exports = (date, type, index, value, ship) => {
	socket.io.emit("alert", {date, type, index, value, ship});
	console.log(date, type, index, value, ship);
};
