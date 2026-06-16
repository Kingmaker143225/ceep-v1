const express = require("express");

const multer = require("multer");

const router = express.Router();

const upload = multer();

const {
  createApplication
} = require("../controllers/applicationController");
const validateSchema = require("../middleware/validationMiddleware");
const { createApplicationSchema } = require("../middleware/schemas");

router.post(
  "/create",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 }
  ]),
  validateSchema(createApplicationSchema),
  createApplication
);

module.exports = router;