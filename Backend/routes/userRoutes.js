const { Router } = require("express");
const { check } = require('express-validator');
const dotenv = require("dotenv");
const { userStore, userLogin } = require("../controllers/userController");
const { Validate } = require("../middlewars/validations");

const app = Router();
dotenv.config();

// routes
app.post("/register", [
    check('email', 'El correo es incorrecto').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    Validate
], userStore);

app.post("/login", [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    Validate
], userLogin);



module.exports = app;