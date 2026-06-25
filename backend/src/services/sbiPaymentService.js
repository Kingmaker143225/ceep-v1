const crypto = require("crypto");

const generateChecksum = (payload, secretKey) => {

  return crypto
    .createHmac("sha256", secretKey)
    .update(payload)
    .digest("hex");

};

module.exports = {
  generateChecksum
};