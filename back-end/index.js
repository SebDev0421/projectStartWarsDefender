"use strict";

const express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	port = process.env.PORT || 3000,
	morgan = require("morgan"),
	Sensors = require("./Routes/Sensor.Route"),
	router = require("./network/router"),
	ip = require("ip"),
	mongoose = require("./Database"),
	socketIO = require('socket.io'),
	io = socketIO(server);



app.use(express.json());
//socket.connect(server);


io.on('connect',socket =>{
	socket.on('message',body=>{
		socket.broadcast.emit('message',{
			body,
			from: socket.id.slice(8)
		})
	})
})

app.set("port", port);

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));


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


/*
io.on('connection',socket=>{
	socket.on('messages',body => {
		socket.broadcast.emit('messages')
	})
})
*/
app.listen(app.get("port"), () => {
	console.log(
		"App is running on: ",
		"http://" + ip.address() + ":" + app.get("port")
	);
});
