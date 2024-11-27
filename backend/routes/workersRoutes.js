const express = require("express");
const { addWorker, getAllWorkers, getWorkerById } = require("../controllers/workerController");

const router = express.Router();

router.post("/add", addWorker);
router.get("/getAll", getAllWorkers);
router.get("/getById", getWorkerById);

module.exports = router;
