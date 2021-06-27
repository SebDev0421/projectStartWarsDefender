"use strict";
const attacks = require("../components/attacks/network");
const sensors = require("../components/sensors/network");

const router = (server) => {
	server.use("/api/attacks", attacks);
	server.use("/api/battle", sensors);
};

module.exports = router;
