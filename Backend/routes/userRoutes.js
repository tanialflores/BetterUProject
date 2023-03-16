const express = require("express");
const dotenv = require("dotenv");
const { userStore } = require("../controllers/userController");

const app = express();
dotenv.config();

// routes
app.route("/register").post(userStore);



module.exports = app;