"use strict";
const { socket } = require("../socket"),
	Alerts = require("../components/Model/Alerts");

module.exports = async (date, type, index, value, ship) => {
	socket.io.emit("alert", { type, tittle, value });
	console.log(date, type, index, value, ship);
	// socket.io.emit('alert, "Hola undo');
	//const alerts = new Alerts({date:date,type:type,sensor:sensor,value:value,ship:ship})
	//await alerts.save();
};
