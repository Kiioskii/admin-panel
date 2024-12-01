const express = require("express");
const { addWorker, editWorkers, getAllWorkers, getWorkerById } = require("../controllers/workerController");

const router = express.Router();

router.post("/add", addWorker);
router.post("/edit", editWorkers);
router.get("/getAll", getAllWorkers);
router.get("/getById", getWorkerById);

module.exports = router;
