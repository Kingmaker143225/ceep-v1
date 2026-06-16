const { z } = require("zod");

const createPaymentSchema = z.object({
  qualifyingExam: z.string().min(1, "Qualifying exam is required"),
  hallTicketNo: z.string().min(1, "Hall ticket number is required").max(50),
  branchDiploma: z.string().min(1, "Branch diploma is required"),
  branchEntrance: z.string().min(1, "Branch entrance is required"),
  passingYear: z.string().regex(/^\d{4}$/, "Passing year must be a 4-digit number"),
  candidateName: z.string().min(1, "Candidate name is required").max(100),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be in DD/MM/YYYY format"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
  alternateMobile: z.string().regex(/^\d{10}$/, "Alternate mobile must be a 10-digit number").optional().or(z.literal("")),
  email: z.string().email("Invalid email format"),
  //category: z.enum(["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E", "SC", "ST"]),
  category: z.enum(["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E","BC_A", "BC_B", "BC_C", "BC_D", "BC_E","SC","SC-I", "SC-II", "SC-III","SC_I", "SC_II", "SC_III", "ST"]), 
	phStatus: z.enum(["YES", "NO"]),
  paymentMode: z.string().min(1, "Payment mode is required") // Allow free string to prevent strict mismatches initially, will clean up
});

const checkPaymentStatusSchema = z.object({
  hallTicket: z.string().min(1, "Hall Ticket is required"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number")
});

const verifyPaymentDetailsSchema = z.object({
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be in DD/MM/YYYY format")
});

const printApplicationDetailsSchema = z.object({
  registrationNumber: z.string().min(1, "Registration number is required"),
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be in DD/MM/YYYY format")
});

const getRegistrationNumberDetailsSchema = z.object({
  mobile: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
  dob: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be in DD/MM/YYYY format")
});

const loginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(4, "Password must be at least 4 characters"),
  role: z.enum(["admin", "student"])
});

const createApplicationSchema = z.object({
  paymentRef: z.string().min(1, "Payment reference is required"),
  applicationData: z.object({
    payment_reference_id: z.string().min(1, "Payment reference is required"),
    hall_ticket_no: z.string().min(1, "Hall Ticket is required"),
    mobile_number: z.string().regex(/^\d{10}$/, "Mobile must be a 10-digit number"),
    date_of_birth: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "DOB must be in DD/MM/YYYY format"),
    candidate_name: z.string().min(1, "Candidate name is required"),
    father_name: z.string().min(1, "Father name is required"),
    mother_name: z.string().min(1, "Mother name is required"),
    gender: z.enum(["Male", "Female", "Other"]),
    email: z.string().email("Invalid email format"),
    alternate_mobile: z.string().regex(/^\d{10}$/, "Alternate mobile must be a 10-digit number").optional().or(z.literal("")),
    //category: z.enum(["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E", "SC", "ST"]),
    category: z.enum(["OC", "BC-A", "BC-B", "BC-C", "BC-D", "BC-E","BC_A", "BC_B", "BC_C", "BC_D", "BC_E","SC","SC-I", "SC-II", "SC-III","SC_I", "SC_II", "SC_III", "ST"]),
    ph_status: z.enum(["YES", "NO"]),
    local_area: z.enum(["LOCAL", "NON-LOCAL"]),
    branch_diploma: z.string().min(1, "Diploma branch is required"),
    branch_entrance: z.string().min(1, "Entrance branch is required"),
    passing_year: z.string().regex(/^\d{4}$/, "Passing year must be a 4-digit number"),
    marks_percentage: z.string().min(1, "Marks percentage is required"),
    employer_name_address: z.string().min(1, "Employer name/address is required"),
    employment_designation: z.string().min(1, "Employment designation is required"),
    address: z.string().min(1, "Address is required"),
    district: z.string().min(1, "District is required"),
    state: z.string().min(1, "State is required"),
    pincode: z.string().regex(/^\d{6}$/, "Pincode must be 6 digits"),
    permanent_address: z.string().min(1, "Permanent address is required"),
    permanent_district: z.string().min(1, "Permanent district is required"),
    permanent_state: z.string().min(1, "Permanent state is required"),
    permanent_pincode: z.string().regex(/^\d{6}$/, "Permanent pincode must be 6 digits"),
    photo_url: z.string().url("Invalid photo URL"),
    signature_url: z.string().url("Invalid signature URL")
  })
});

module.exports = {
  createPaymentSchema,
  checkPaymentStatusSchema,
  verifyPaymentDetailsSchema,
  printApplicationDetailsSchema,
  getRegistrationNumberDetailsSchema,
  loginSchema,
  createApplicationSchema
};
