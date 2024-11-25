const express = require("express");
const { addWorker } = require("../controllers/workerController");

const router = express.Router();

router.post("/add", addWorker);

module.exports = router;
