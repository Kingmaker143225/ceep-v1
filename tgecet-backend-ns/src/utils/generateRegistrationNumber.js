const crypto = require("crypto");

const generateRegistrationNumber = () => {
  const randomHex = crypto.randomBytes(4).toString("hex").toUpperCase();
  return `CEEP2026${randomHex}`;
};

module.exports = generateRegistrationNumber;