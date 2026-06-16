
const supabase = require("../config/supabase");
 
const {
  saveApplication
} = require("../services/applicationService");
 
const generateRegistrationNumber = require(
  "../utils/generateRegistrationNumber"
);
 
const createApplication = async (req, res) => {
 
  console.log("=================================");
  console.log("APPLICATION SUBMIT API HIT");
  console.log("REQUEST BODY:");
  console.log(req.body);
  console.log("=================================");
 
  try {
 
    const body = req.body;
 
 
    console.log("CHECKING EXISTING APPLICATION");
 
    const existing = await supabase
      .from("applications")
      .select("*")
      .eq("payment_reference_id", body.paymentRef)
      .maybeSingle();
 
    console.log("EXISTING APPLICATION RESULT:");
    console.log(existing.data);
 
    if (existing.data) {
 
      console.log("APPLICATION ALREADY EXISTS");
 
      return res.status(400).json({
        success: false,
        message: "Application already submitted"
      });
    }
 
    
 
   
 
    const registrationNumber =
      generateRegistrationNumber();
 
    console.log("GENERATED REGISTRATION NUMBER:");
    console.log(registrationNumber);
 

    const {
      payment_reference_id,
      hall_ticket_no,
      mobile_number,
      date_of_birth,
      candidate_name,
      father_name,
      mother_name,
      gender,
      email,
      alternate_mobile,
      category,
      ph_status,
      local_area,
      branch_diploma,
      branch_entrance,
      passing_year,
      marks_percentage,
      employer_name_address,
      employment_designation,
      address,
      district,
      state,
      pincode,
      permanent_address,
      permanent_district,
      permanent_state,
      permanent_pincode,
      photo_url,
      signature_url
    } = body.applicationData;

    const applicationData = {
      payment_reference_id,
      hall_ticket_no,
      mobile_number,
      date_of_birth,
      candidate_name,
      father_name,
      mother_name,
      gender,
      email,
      alternate_mobile,
      category,
      ph_status,
      local_area,
      branch_diploma,
      branch_entrance,
      passing_year,
      marks_percentage,
      employer_name_address,
      employment_designation,
      address,
      district,
      state,
      pincode,
      permanent_address,
      permanent_district,
      permanent_state,
      permanent_pincode,
      photo_url,
      signature_url,
      registration_number: registrationNumber
    };
 
    console.log("FINAL APPLICATION DATA:");
    console.log(applicationData);
 
    console.log("SAVING APPLICATION");
 
    await saveApplication(applicationData);
 
    console.log("APPLICATION SAVED SUCCESSFULLY");
 
    res.status(201).json({
      success: true,
      registration_number:
	    registrationNumber
    });
 
  } catch (error) {
 
    console.log("APPLICATION SUBMIT ERROR");
    console.log(error);
 
    res.status(500).json({
      success: false,
      message: error.message
    });
 
  }
 
};
 
module.exports = {
  createApplication
};
