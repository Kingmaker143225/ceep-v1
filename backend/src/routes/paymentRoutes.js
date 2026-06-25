const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const validateSchema = require("../middleware/validationMiddleware");
const {
  createPaymentSchema,
  checkPaymentStatusSchema,
  verifyPaymentDetailsSchema,
  printApplicationDetailsSchema,
  getRegistrationNumberDetailsSchema
} = require("../middleware/schemas");

router.post(
  "/create",
  validateSchema(createPaymentSchema),
  paymentController.createPayment
);

router.post(
  "/status",
  validateSchema(checkPaymentStatusSchema),
  paymentController.checkPaymentStatus
);

router.post(
  "/verify",
  validateSchema(verifyPaymentDetailsSchema),
  paymentController.verifyPaymentDetails
);

router.post(
  "/print",
  validateSchema(printApplicationDetailsSchema),
  paymentController.printApplicationDetails
);

router.post(
  "/registration-number",
  validateSchema(getRegistrationNumberDetailsSchema),
  paymentController.getRegistrationNumberDetails
);

router.get(
  "/details/:paymentRef",
  paymentController.getPaymentDetailsByRef
);

module.exports = router;
