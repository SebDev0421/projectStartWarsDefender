const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { errorHandler, successHandler } = require("../../network/responses");

router.get("/",  (req, res) => {
	let { page, limit } = req.query;
	page = parseInt(page) || 0;
	limit = parseInt(limit) || 10;
	controller.getAttacksByPagination(page, limit)
	.then(data =>{
		if(data.success){
			successHandler(req, res, data.data, 200);
		}
	})
	.catch(data =>{errorHandler(req, res, "Error getting attacks", 500, "");})
});

router.post("/delete", (req, res) => {
	res.json({ status: "ok" });
});

module.exports = router;
