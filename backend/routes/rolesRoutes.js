const express = require("express");
const { getAllRoles } = require("../controllers/rolesController");

const router = express.Router();

router.get("/getAll", getAllRoles);

module.exports = router;
