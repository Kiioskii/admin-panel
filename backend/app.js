const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const workerRoutes = require("./routes/workersRoutes");
const rolesRoutes = require("./routes/rolesRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/roles", rolesRoutes);
app.use("/workers", workerRoutes);

app.use((err, req, res, next) => {
    if (err) {
        console.log("err", err);
        console.error("errrrr", err.message);
        res.status(500).json({ message: err.message || "Internal server error" });
    }
});

module.exports = app;
