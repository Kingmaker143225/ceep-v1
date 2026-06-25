const { SBIEPayClient } = require("epay_nodejs_sdk/dist");
 
console.log("=================================");
console.log("INITIALIZING SBI SDK");
console.log("=================================");
 
const sbiClient = new SBIEPayClient(
  {
    apiKey: process.env.MERCHANT_API_KEY_ID,
    apiSecret: process.env.MERCHANT_API_KEY_SECRET,
    encryptionKey: process.env.ENCRYPTION_KEY
  },
  process.env.SBI_ENV || "SANDBOX",
  false
);
 
console.log("=================================");
console.log(`SBI CLIENT CREATED in ${process.env.SBI_ENV || "SANDBOX"} mode`);
console.log("=================================");
 
module.exports = sbiClient;
