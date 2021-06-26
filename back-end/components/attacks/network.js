const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", (req, res) => {
  let {page, limit} = req.query
  page = parseInt(page) || 0;
  limit = parseInt(limit) || 10;
});

router.post("/", (req, res) => {

})