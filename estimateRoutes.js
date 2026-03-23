const express = require("express");
const router = express.Router();

const { estimateCost } = require("../controllers/estimateController");

router.post("/", estimateCost);

module.exports = router;