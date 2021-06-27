const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { errorHandler, successHandler } = require("../../network/responses");

router.get("/", async (req, res) => {
	/*let { page, limit } = req.query;
	page = parseInt(page) || 0;
	limit = parseInt(limit) || 10;
	const { success, data, date } = await controller.getAttacksByPagination(
		page,
		limit
	);
	if (success) {
		successHandler(req, res, { data, date }, 200);
	} else {
		errorHandler(req, res, "Error getting attacks", 500, "");
	}*/
	res.json({ status: "ok" });
});

router.post("/", (req, res) => {
	res.json({ status: "ok" });
});

module.exports = router;
