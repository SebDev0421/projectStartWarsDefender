const attacks = require("../components/attacks/network");
const sensors = require("../components/sensors/network");

const router = (server) => {
	server.use("/attacks", attacks);
	server.use("/battle", sensors);
};

module.exports = router;
