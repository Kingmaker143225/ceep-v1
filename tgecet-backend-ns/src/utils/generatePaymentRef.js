const crypto = require("crypto");

const generatePaymentRef = () => {
  const uniqueId = crypto.randomBytes(8).toString("hex").toUpperCase();
  return `TGECET${uniqueId}`;
};

module.exports = generatePaymentRef;