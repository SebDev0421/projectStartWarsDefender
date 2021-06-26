"use strict";

const express = require("express"),
	app = express.Router();

app.get("/", (req, res) => {
	res.json({ status: "online" });
});

app.post("/", (req, res) => {
  console.log('Ok', req);
	res.json({ status: "online" });
});

module.exports = app;
