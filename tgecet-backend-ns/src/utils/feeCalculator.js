//const calculateFee = (params = {}) => {
//  const { category = "OC", phStatus = "NO", isLateFee = false } = params;
//
//  let baseFee = 1;
//  if (category === "OC" || category.startsWith("BC")) {
//    baseFee = 1;
//  } else if (category.startsWith("SC") || category === "ST") {
//    baseFee = 1;
//  }
//
//  let phDiscount = 0;
//  if (phStatus === "YES") {
//    phDiscount = baseFee;
//  }
//
//  let lateFee = 0;
//  const today = new Date();
//  const lateFeeStart = new Date("2026-07-12T00:00:00");
//  const lateFeeEnd = new Date("2026-07-21T23:59:59");
//
//  if (isLateFee || (today >= lateFeeStart && today <= lateFeeEnd)) {
//    lateFee = 500;
//  }
//
//  const totalAmount = baseFee - phDiscount + lateFee;
//
//  return {
//    baseFee,
//    lateFee,
//    phDiscount,
//    totalAmount
//  };
//};
//
//module.exports = calculateFee;


const calculateFee = (params = {}) => {
  const { isLateFee = false } = params;

  // Same fee for all categories and PH candidates
  const baseFee = 1;

  const phDiscount = 0;

  let lateFee = 0;
  const today = new Date();
  const lateFeeStart = new Date("2026-07-12T00:00:00");
  const lateFeeEnd = new Date("2026-07-21T23:59:59");

  if (isLateFee || (today >= lateFeeStart && today <= lateFeeEnd)) {
    lateFee = 500;
  }

  const totalAmount = baseFee + lateFee;

  return {
    baseFee,
    lateFee,
    phDiscount,
    totalAmount
  };
};

module.exports = calculateFee;
