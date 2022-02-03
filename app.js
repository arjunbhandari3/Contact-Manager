const express = require("express");
const router = require("./routes/index");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.get("/", (req, res) => res.send("Welcome to the Contact Manager."));

module.exports = app;
