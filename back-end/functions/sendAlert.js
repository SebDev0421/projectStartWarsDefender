"use strict";
const { socket } = require("../socket"),
	Alerts = require("../components/Model/Alerts");

module.exports = (date, type, index, value, ship) => {
	socket.io.emit("alert", "Hola");
	console.log(date, type, index, value, ship);
	// socket.io.emit('alert, "Hola undo');
	//const alerts = new Alerts({date:date,type:type,sensor:sensor,value:value,ship:ship})
	//await alerts.save();
};
