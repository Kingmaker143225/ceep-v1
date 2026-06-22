const crypto = require("crypto");

const generatePaymentRef = () => {
  const uniqueId = crypto.randomBytes(8).toString("hex").toUpperCase();
  return `CEEP${uniqueId}`;
};

module.exports = generatePaymentRef;