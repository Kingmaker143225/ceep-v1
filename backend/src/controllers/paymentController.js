const {
 savePayment,
 getPaymentStatus,
 verifyPayment,
 checkExistingApplication,
 getApplicationDetails,
 getRegistrationNumber,
 updatePaymentStatus,
 getPaymentByRef
} = require("../services/paymentService");

const generatePaymentRef =
 require("../utils/generatePaymentRef");

const sbiClient =
 require("../config/sbiClient");

const calculateFee =
 require("../utils/feeCalculator");
/*
|--------------------------------------------------
| CREATE PAYMENT
|--------------------------------------------------
*/

const createPayment = async (req, res) => {

 console.log("=================================");
 console.log("CREATE PAYMENT API HIT");
 console.log(req.body);
 console.log("=================================");

 try {

   const {
     qualifyingExam,
     hallTicketNo,
     branchDiploma,
     branchEntrance,
     passingYear,
     candidateName,
     dob,
     mobile,
     alternateMobile,
     email,
     category,
     phStatus,
     paymentMode
   } = req.body;

   /*
   |--------------------------------------------------
   | VALIDATION
   |--------------------------------------------------
   */

   if (
     !qualifyingExam ||
     !hallTicketNo ||
     !branchDiploma ||
     !branchEntrance ||
     !passingYear ||
     !candidateName ||
     !dob ||
     !mobile ||
     !email ||
     !category ||
     !phStatus ||
     !paymentMode
   ) {

     return res.status(400).json({
       success: false,
       message: "All required fields are mandatory"
     });

   }

   /*
   |--------------------------------------------------
   | PAYMENT REF
   |--------------------------------------------------
   */

   const paymentRef =
     generatePaymentRef();

   /*
   |--------------------------------------------------
   | CALCULATE FEES
   |--------------------------------------------------
   */

   const feeDetails =
     calculateFee(req.body);

   console.log(
     "FEE DETAILS =>",
     feeDetails
   );

   /*
   |--------------------------------------------------
   | SAVE PAYMENT IN DB
   |--------------------------------------------------
   */

   const paymentData = {

     payment_reference_id:
       paymentRef,

     qualifying_exam:
       qualifyingExam,

     hall_ticket_no:
       hallTicketNo,

    //  branch_diploma:
    //    branchDiploma,

    branch_degree: branchDiploma,

     branch_entrance:
       branchEntrance,

     passing_year:
       passingYear,

     candidate_name:
       candidateName,

     date_of_birth:
       dob,

     mobile_number:
       mobile,

     alternate_mobile:
       alternateMobile,

     email,

     category,

     ph_status:
       phStatus,

     payment_mode:
       paymentMode,

     payment_status:
       "PENDING",

    //  base_fee:
    //    feeDetails.baseFee,

    //  late_fee:
    //    feeDetails.lateFee,

    //  ph_discount:
    //    feeDetails.phDiscount,

    //  total_amount:
    //    feeDetails.totalAmount
    amount: feeDetails.totalAmount

   };

   console.log("PAYMENT DATA =>");
   console.log(paymentData);

   await savePayment(paymentData);

   /*
   |--------------------------------------------------
   | SBI PAY MODE
   |--------------------------------------------------
   */

   let sbiPayMode = "CC";

   if (paymentMode.includes("Credit Card")) {
 
      sbiPayMode = "CC";
 
    }
 
    else if (paymentMode.includes("Debit Card")) {
 
      sbiPayMode = "DC";
 
    }
 
    else if (paymentMode.includes("Net Banking")) {
 
      sbiPayMode = "NB";
 
    }
 
    else if (paymentMode.includes("UPI")) {
 
      sbiPayMode = "UPI";
 
    }

   /*
   |--------------------------------------------------
   | SBI ORDER CREATE
   |--------------------------------------------------
   */

   const orderDetails = {

     currencyCode: "INR",

     orderAmount:
       feeDetails.totalAmount,

     orderRefNumber:
       paymentRef,

     returnUrl:
       process.env.SBI_RETURN_URL,

     payMode:
       sbiPayMode

   };

   console.log("=================================");
   console.log("SBI ORDER DETAILS");
   console.log(orderDetails);
   console.log("=================================");

   const response =
     await sbiClient.order.create(
       orderDetails
     );

  console.log("=================================");
console.log("SBI FULL RESPONSE");

console.log(
 JSON.stringify(
   response,
   null,
   2
 )
);

const sbiData =
 response.data[0];

await updatePaymentStatus(

 paymentRef,

 {

   order_no:
     sbiData.orderRefNumber,

   order_id:
     sbiData.sbiOrderRefNumber,

   payment_status:
     "INITIATED"

 }

);

console.log(
 "PAYMENT UPDATED WITH SBI ORDER DETAILS"
);

console.log("=================================");
   /*
   |--------------------------------------------------
   | RETURN RESPONSE
   |--------------------------------------------------
   */

   return res.status(200).json({

     success: true,

     payment_reference_id:
       paymentRef,

     feeDetails,

     sbiResponse:
       response

   });

 }

 catch (error) {

   console.log("=================================");
   console.log("CREATE PAYMENT ERROR");
   console.log(error);
   console.log("=================================");

   return res.status(500).json({

     success: false,

     message:
       error.message ||
       "Failed to initialize payment request"

   });

 }

};

/*
|--------------------------------------------------
| PAYMENT STATUS
|--------------------------------------------------
*/

const checkPaymentStatus = async (req, res) => {

 try {

   const {
     hallTicket,
     mobile
   } = req.body;

   if (!hallTicket || !mobile) {

     return res.status(400).json({
       success: false,
       message: "Hall Ticket and Mobile required"
     });

   }

   const payment =
     await getPaymentStatus(
       hallTicket,
       mobile
     );

   if (!payment) {

     return res.status(404).json({
       success: false,
       message: "Payment details not found"
     });

   }

   return res.status(200).json({
     success: true,
     payment
   });

 }

 catch (error) {

   return res.status(500).json({
     success: false,
     message: error.message
   });

 }

};

/*
|--------------------------------------------------
| VERIFY PAYMENT
|--------------------------------------------------
*/

const verifyPaymentDetails = async (req, res) => {

 try {

   const {
     mobile,
     dob
   } = req.body;

   if (!mobile || !dob) {

     return res.status(400).json({
       success: false,
       message: "Mobile and DOB required"
     });

   }

   const payment =
     await verifyPayment(
       mobile,
       dob
     );

   if (!payment) {

     return res.status(404).json({
       success: false,
       message:
         "Payment not found"
     });

   }

   return res.status(200).json({
     success: true,
     payment
   });

 }

 catch (error) {

   return res.status(500).json({
     success: false,
     message: error.message
   });

 }

};

/*
|--------------------------------------------------
| PRINT APPLICATION
|--------------------------------------------------
*/

const printApplicationDetails = async (req, res) => {

 try {

   const {
     registrationNumber,
     mobile,
     dob
   } = req.body;

   const result =
     await getApplicationDetails(
       registrationNumber,
       mobile,
       dob
     );

   if (!result) {

     return res.status(404).json({
       success: false,
       message:
         "Application not found"
     });

   }

   return res.status(200).json({

 success: true,

 application:
   result.application,

 payment:
   result.payment,
  qualifications: result.qualifications

});

 }

 catch (error) {

   return res.status(500).json({
     success: false,
     message: error.message
   });

 }

};

/*
|--------------------------------------------------
| GET REGISTRATION NUMBER
|--------------------------------------------------
*/

const getRegistrationNumberDetails =
 async (req, res) => {

   try {

     const {
       mobile,
       dob
     } = req.body;

     const result =
       await getRegistrationNumber(
         mobile,
         dob
       );

     if (!result) {

       return res.status(404).json({
         success: false,
         message:
           "No registration found"
       });

     }

     return res.status(200).json({
       success: true,
       result
     });

   }

   catch (error) {

     return res.status(500).json({
       success: false,
       message: error.message
     });

   }

 };

const getPaymentDetailsByRef = async (req, res) => {
  try {
    const { paymentRef } = req.params;

    if (!paymentRef) {
      return res.status(400).json({
        success: false,
        message: "Payment reference is required"
      });
    }

    const payment = await getPaymentByRef(paymentRef);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment details not found"
      });
    }

    return res.status(200).json({
      success: true,
      payment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {

 createPayment,

 checkPaymentStatus,

 verifyPaymentDetails,

 printApplicationDetails,

 getRegistrationNumberDetails,

 getPaymentDetailsByRef

};
