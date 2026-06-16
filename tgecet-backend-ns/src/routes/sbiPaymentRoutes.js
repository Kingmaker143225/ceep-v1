const express = require("express");
const axios = require("axios");
 
const {
  paymentCallback,
  orderSearch
} = require(
  "../controllers/sbiPaymentController"
);
 
const router = express.Router();
 
/*
|------------------------------------------------------------------
| SBI CALLBACK ROUTES
|------------------------------------------------------------------
*/
 
router.get(
  "/callback",
  paymentCallback
);
 
router.post(
  "/callback",
  paymentCallback
);
 
router.get(
  "/order-search/:orderRef",
  orderSearch
);
 
/*
|------------------------------------------------------------------
| SBI CONNECTION TEST
|------------------------------------------------------------------
*/
 
router.get(
  "/test-connection",
  async (req, res) => {
 
    try {
 
      const response =
        await axios.get(
          process.env.SBI_TEST_URL,
          {
            timeout: 15000
          }
        );
 
      return res.status(200).json({
 
        success: true,
 
        message:
          "SBI reachable",
 
        status:
          response.status
 
      });
 
    }
 
    catch (error) {
 
      return res.status(500).json({
 
        success: false,
 
        error:
          error.message
 
      });
 
    }
 
  }
);
 
module.exports = router;
 
 
