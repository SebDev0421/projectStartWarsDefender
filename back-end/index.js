"use strict";

const express = require("express"),
	app = express(),
	server = require("http").Server(app),
	port = process.env.PORT || 3000,
	morgan = require("morgan"),
	Sensors = require("./Routes/Sensor.Route"),
	router = require("./network/router"),
	socket = require("./socket"),
	ip = require("ip"),
	mongoose = require("./Database");

app.use(express.json());
socket.connect(server);

app.set("port", port);

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

//

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

router(app);

app.listen(app.get("port"), () => {
	console.log(
		"App is running on: ",
		"http://" + ip.address() + ":" + app.get("port")
	);
});
