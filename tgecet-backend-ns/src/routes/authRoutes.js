const express = require("express");
const router = express.Router();
const { login } = require("../controllers/authController");
const validateSchema = require("../middleware/validationMiddleware");
const { loginSchema } = require("../middleware/schemas");

router.post("/login", validateSchema(loginSchema), login);

module.exports = router;
