import { useEffect, useState } from "react";
import { useLocation } from "wouter";

import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

import { api } from "@/lib/api";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function FullApplication() {
  const [, navigate] = useLocation();

  const [photoFile, setPhotoFile] = useState(null);
  const [signatureFile, setSignatureFile] = useState(null);
  const [sameAddress, setSameAddress] = useState(false);
  const [declaration, setDeclaration] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] =
  useState(false);

  const [qualificationDetails, setQualificationDetails] = useState([
  {
    qualification_type: "10th Class",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: "NA"
  },
  {
    qualification_type: "Inter",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  },
  {
    qualification_type: "Diploma",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  },
  {
    qualification_type: "BE/B.TECH",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  },
  {
    qualification_type: "B.SC",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  },
  {
    qualification_type: "M.SC/MCA",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  },
  {
    qualification_type: "AMIE/AMI",
    board_university: "",
    hall_ticket_no: "",
    place_of_study: "",
    aggregate_percentage: "",
    passing_year: "",
    branch_name: ""
  }
]);

const [registrationNumber, setRegistrationNumber] =
  useState("");

  const [form, setForm] = useState({
    paymentRef: "",
    hallTicket: "",
    mobile: "",
    dob: "",

    candidateName: "",
    fatherName: "",
    motherName: "",
    gender: "",
    email: "",
    alternateMobile: "",

    category: "",
    // phStatus: "",
    localArea: "",
    // branchDiploma: "",
    // branchEntrance: "",
    // passingYear: "",
    // marksPercentage: "",

    qualifyingExam: "",
branchDegree: "",
branchEntrance: "",
sscHallTicketNo: "",
sscPassMonthYear: "",
occupationOfFather: "",
specialCategory: "",
appliedSubject: "",
course: "",

    employerNameAddress: "",
    employmentDesignation: "",

    commHouseNo: "",
    commVillage: "",
    commDistrict: "",
    commState: "Telangana",
    commPincode: "",

    permHouseNo: "",
    permVillage: "",
    permDistrict: "",
    permState: "Telangana",
    permPincode: "",
  });

  useEffect(() => {
    const saved = sessionStorage.getItem("verifiedPaymentData");

    if (!saved) {
      alert("Please complete fee payment first");
      navigate("/fee-payment");
      return;
    }

    const parsed = JSON.parse(saved);

    setForm((prev) => ({
      ...prev,
      paymentRef: parsed.payment_reference_id || "",
      hallTicket: parsed.hall_ticket_no || "",
      mobile: parsed.mobile_number || "",
      dob: parsed.date_of_birth || "",
    }));

    fetchPaymentDetails(parsed);
  }, []);

  const fetchPaymentDetails = async (verifiedData) => {
    const { data, error } = await api.application.fetchPaymentDetails({
      paymentRef: verifiedData.payment_reference_id,
      hallTicket: verifiedData.hall_ticket_no,
      mobile: verifiedData.mobile_number,
      dob: verifiedData.date_of_birth,
    });

    console.log("PAYMENT DATA =>", data);

    if (error || !data) {
      alert("Payment details not found");
      navigate("/fee-payment");
      return;
    }

    if (data.payment_status !== "PAID") {
      alert("Payment is not completed");
      navigate("/fee-payment");
      return;
    }

    setForm((prev) => ({
      ...prev,
      candidateName: data.candidate_name || "",
      email: data.email || "",
      alternateMobile: data.alternate_mobile || "",
      category: data.category || "",
      // phStatus: data.ph_status || "",
      // branchDiploma: data.branch_diploma || "",
      // branchEntrance: data.branch_entrance || "",
      // passingYear: data.passing_year || "",
//       qualifyingExam: data.qualifying_exam || "",
// branchDegree: data.branch_degree || "",
// branchEntrance: data.branch_entrance || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const lockedFields = [
      "paymentRef",
      "hallTicket",
      "mobile",
      "dob",
      "candidateName",
      "email",
      "alternateMobile",
      "category",
      // "phStatus",
      // "branchDiploma",
      // "branchEntrance",
      // "passingYear",
//       "qualifyingExam",
// "branchDegree",
// "branchEntrance",
    ];

    if (lockedFields.includes(name)) return;

    setForm((prev) => {
      const updated = { ...prev, [name]: value };

      if (sameAddress && name.startsWith("comm")) {
        updated.permHouseNo = updated.commHouseNo;
        updated.permVillage = updated.commVillage;
        updated.permDistrict = updated.commDistrict;
        updated.permState = updated.commState;
        updated.permPincode = updated.commPincode;
      }

      return updated;
    });
  };

  const handleQualificationChange = (index, field, value) => {
  const updated = [...qualificationDetails];
  updated[index][field] = value;
  setQualificationDetails(updated);
};

  const handleSameAddress = (checked) => {
    setSameAddress(checked);

    if (checked) {
      setForm((prev) => ({
        ...prev,
        permHouseNo: prev.commHouseNo,
        permVillage: prev.commVillage,
        permDistrict: prev.commDistrict,
        permState: prev.commState,
        permPincode: prev.commPincode,
      }));
    }
  };

  const uploadFile = async (file, folder) => {
    try {
      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", folder);

      const response = await fetch(`${API_BASE_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      console.log("UPLOAD RESPONSE =>", result);

      if (!result.success) {
        alert(result.message);
        return "";
      }

      return result.url;
    } catch (error) {
      console.log("UPLOAD ERROR =>", error);
      alert("Upload failed");
      return "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   const requiredFields = [
  "paymentRef",
  "hallTicket",
  "mobile",
  "dob",

  "candidateName",
  "fatherName",
  "occupationOfFather",
  "motherName",
  "gender",

  "email",
  "category",
  "specialCategory",
  "localArea",

  // "qualifyingExam",
  // "branchDegree",

  "sscHallTicketNo",
  "sscPassMonthYear",

  "appliedSubject",
  "course",

  "employerNameAddress",
  "employmentDesignation",

  "commHouseNo",
  "commVillage",
  "commDistrict",
  "commState",
  "commPincode",

  "permHouseNo",
  "permVillage",
  "permDistrict",
  "permState",
  "permPincode",
];

    const isValid = requiredFields.every((field) =>
      String(form[field] || "").trim()
    );

    if (!isValid) {
      alert("Please fill all required fields");
      return;
    }

    if (!photoFile) {
      alert("Please upload candidate photo");
      return;
    }

    if (!signatureFile) {
      alert("Please upload signature");
      return;
    }

    if (!declaration) {
      alert("Please accept declaration");
      return;
    }

    setLoading(true);

    const photoUrl = await uploadFile(photoFile, "photos");
    const signatureUrl = await uploadFile(signatureFile, "signatures");

    if (!photoUrl || !signatureUrl) {
      setLoading(false);
      return;
    }

    const communicationAddress = `${form.commHouseNo}, ${form.commVillage}, ${form.commDistrict}, ${form.commState} - ${form.commPincode}`;

    const permanentAddress = `${form.permHouseNo}, ${form.permVillage}, ${form.permDistrict}, ${form.permState} - ${form.permPincode}`;

    const { data: response, error } = await api.application.submitApplication({
      paymentRef: form.paymentRef,
      applicationData: {
        registration_number: " ",
        payment_reference_id: form.paymentRef,
        hall_ticket_no: form.hallTicket,
        mobile_number: form.mobile,
        date_of_birth: form.dob,

        candidate_name: form.candidateName,
        father_name: form.fatherName,
        mother_name: form.motherName,
        gender: form.gender,
        email: form.email,
        alternate_mobile: form.alternateMobile,

        category: form.category,
        // ph_status: form.phStatus,
        // local_area: form.localArea,
        // branch_diploma: form.branchDiploma,
        // branch_entrance: form.branchEntrance,
        // passing_year: form.passingYear,
        // marks_percentage: form.marksPercentage,
        

        occupation_of_father: form.occupationOfFather,

ssc_hall_ticket_no: form.sscHallTicketNo,
ssc_pass_month_year: form.sscPassMonthYear,

special_category: form.specialCategory,

local_area_status: form.localArea,

applied_subject: form.appliedSubject,
course: form.course,

// qualifying_exam: form.qualifyingExam,
// branch_degree: form.branchDegree,
// branch_entrance: form.branchEntrance,

        employer_name_address: form.employerNameAddress,
        employment_designation: form.employmentDesignation,

       communication_address: communicationAddress,
        communication_district: form.commDistrict,
        communication_state: form.commState,
        communication_pincode: form.commPincode,

        permanent_address: permanentAddress,
        permanent_district: form.permDistrict,
        permanent_state: form.permState,
        permanent_pincode: form.permPincode,

        photo_url: photoUrl,
        signature_url: signatureUrl,
        
      },
      qualification_details: qualificationDetails
    });

    setLoading(false);

    if (error || response?.error) {
      alert("Error: " + (error?.message || response?.error));

      if (response?.existing) {
        navigate("/print-application");
      }

      return;
    }

    sessionStorage.removeItem("verifiedPaymentData");

    sessionStorage.setItem(
      "applicationData",
      JSON.stringify({
        registrationNumber:
  response?.registration_number,
        paymentRef: form.paymentRef,
        hallTicket: form.hallTicket,
        mobile: form.mobile,
        dob: form.dob,
      })
    );

  setRegistrationNumber(
  response?.registration_number
);

setShowSuccessPopup(true);
    
  };
const copyRegistrationNumber =
  async () => {

    try {

      await navigator.clipboard.writeText(
        registrationNumber
      );

      alert(
        "Registration number copied successfully"
      );

    }

    catch (err) {

      console.log(err);

    }

  };
  return (
    <SiteLayout>
      <PageBanner title="Application Form" crumbs={[{ label: "Application Form" }]} />

      <div className="container mx-auto max-w-7xl px-4 py-10">
        <div className="border border-gray-300 bg-white shadow-md rounded-md overflow-hidden">
          <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-3">
           M.E./M.Tech. (CEEP) - 2026 APPLICATION FORM
          </h2>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            <Section title="Step 1: Verified Payment Details">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input label="Payment Reference ID" name="paymentRef" value={form.paymentRef} readOnly />
                <Input label="Hall Ticket No" name="hallTicket" value={form.hallTicket} readOnly />
                <Input label="Mobile Number" name="mobile" value={form.mobile} readOnly />
                <Input label="Date of Birth" name="dob" value={form.dob} readOnly />
              </div>
            </Section>

            <Section title="1. Candidate Information">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Candidate Name" name="candidateName" value={form.candidateName} readOnly />
                <Input label="Father Name *" name="fatherName" value={form.fatherName} onChange={handleChange} />
                <Input
  label="Occupation of Father *"
  name="occupationOfFather"
  value={form.occupationOfFather}
  onChange={handleChange}
/>
                <Input label="Mother Name *" name="motherName" value={form.motherName} onChange={handleChange} />
                <Select label="Gender *" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
                <Input
  label="SSC Hall Ticket No *"
  name="sscHallTicketNo"
  value={form.sscHallTicketNo}
  onChange={handleChange}
/>

<Input
  label="SSC Passed Month & Year *"
  name="sscPassMonthYear"
  value={form.sscPassMonthYear}
  onChange={handleChange}
  // placeholder="MM-YYYY"
/>
                <Input label="Email ID" name="email" value={form.email} readOnly />
                <Input label="Alternate Mobile" name="alternateMobile" value={form.alternateMobile} readOnly />
              </div>
            </Section>

            <Section title="2. Reservation Details">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="Category" name="category" value={form.category} readOnly />
                <Select
  label="Special Category *"
  name="specialCategory"
  value={form.specialCategory}
  onChange={handleChange}
  options={[
    "NO",
    "PH",
    "CAP",
    "NCC",
    "SPORTS"
  ]}
/>
                <Select
                  label="Local Area Status *"
                  name="localArea"
                  value={form.localArea}
                  onChange={handleChange}
                  options={["LOCAL", "NON-LOCAL"]}
                />
              </div>
            </Section>

            <Section title="3. Academic Details">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
               {/* <Input
  label="Qualifying Exam"
  name="qualifyingExam"
  value={form.qualifyingExam}
  readOnly
/>

<Input
  label="Branch Degree"
  name="branchDegree"
  value={form.branchDegree}
  readOnly
/> */}

<Input
  label="Applied Subject *"
  name="appliedSubject"
  value={form.appliedSubject}
  onChange={handleChange}
/>

<Input
  label="Course *"
  name="course"
  value={form.course}
  onChange={handleChange}
/>
              </div>
            </Section>
            
  <Section title="4. Details of Qualifying Examination">
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-sm">
      <thead>
        <tr className="bg-gray-100">
          <th>Course/Class</th>
          <th>Board / University</th>
          <th>Hall Ticket No</th>
          <th>Place of Study</th>
          <th>Aggregate %</th>
          <th>Passing Year</th>
          <th>Branch</th>
        </tr>
      </thead>

      <tbody>
        {qualificationDetails.map((item, index) => (
          <tr key={index}>
            <td>{item.qualification_type}</td>

            <td>
              <input
                value={item.board_university}
                onChange={(e) =>
                  handleQualificationChange(index, "board_university", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={item.hall_ticket_no}
                onChange={(e) =>
                  handleQualificationChange(index, "hall_ticket_no", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={item.place_of_study}
                onChange={(e) =>
                  handleQualificationChange(index, "place_of_study", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={item.aggregate_percentage}
                onChange={(e) =>
                  handleQualificationChange(index, "aggregate_percentage", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={item.passing_year}
                onChange={(e) =>
                  handleQualificationChange(index, "passing_year", e.target.value)
                }
              />
            </td>

            <td>
              <input
                value={item.branch_name}
                onChange={(e) =>
                  handleQualificationChange(index, "branch_name", e.target.value)
                }
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Section>


            <Section title="5. Employment Details">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Name & Address of Employer/Work Place *"
                  name="employerNameAddress"
                  value={form.employerNameAddress}
                  onChange={handleChange}
                />

                <Input
                  label="Designation *"
                  name="employmentDesignation"
                  value={form.employmentDesignation}
                  onChange={handleChange}
                />
              </div>
            </Section>

            <Section title="6. Address for Communication">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Input label="House / Door No *" name="commHouseNo" value={form.commHouseNo} onChange={handleChange} />
                <Input label="Village / Street *" name="commVillage" value={form.commVillage} onChange={handleChange} />
                <Input label="District *" name="commDistrict" value={form.commDistrict} onChange={handleChange} />
                <Input label="State *" name="commState" value={form.commState} onChange={handleChange} />
                <Input label="Pincode *" name="commPincode" value={form.commPincode} onChange={handleChange} />
              </div>
            </Section>

            <Section title="7. Permanent Address">
              <label className="flex items-center gap-2 mb-4 font-semibold text-[#06254D]">
                <input
                  type="checkbox"
                  checked={sameAddress}
                  onChange={(e) => handleSameAddress(e.target.checked)}
                />
                Permanent address is same as communication address
              </label>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Input label="House / Door No *" name="permHouseNo" value={form.permHouseNo} onChange={handleChange} />
                <Input label="Village / Street *" name="permVillage" value={form.permVillage} onChange={handleChange} />
                <Input label="District *" name="permDistrict" value={form.permDistrict} onChange={handleChange} />
                <Input label="State *" name="permState" value={form.permState} onChange={handleChange} />
                <Input label="Pincode *" name="permPincode" value={form.permPincode} onChange={handleChange} />
              </div>
            </Section>

            <Section title="8. Upload Photo and Signature">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <UploadBox
                  label="Upload Candidate Photo * (Maximum 2MB Size allowed)"
                  file={photoFile}
                  onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
                  previewClass="w-28 h-32 object-cover"
                />

                <UploadBox
                  label="Upload Signature * (Maximum 500KB Size allowed)"
                  file={signatureFile}
                  onChange={(e) => setSignatureFile(e.target.files?.[0] || null)}
                  previewClass="w-40 h-16 object-contain"
                />
              </div>
            </Section>

            <div className="border border-red-400 bg-red-50 rounded-md p-4">
              <label className="flex gap-3 items-start font-medium text-sm text-gray-800">
                <input
                  type="checkbox"
                  checked={declaration}
                  onChange={(e) => setDeclaration(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  I declare that the above details are true and correct. I am
                  responsible for the correctness of the information submitted.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white px-10 py-3 rounded-md font-bold hover:bg-green-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>
      {showSuccessPopup && (

  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white rounded-xl p-6 w-[420px] shadow-2xl">

      <h2 className="text-2xl font-bold text-green-700 mb-4 text-center">
        Application Submitted Successfully
      </h2>

      <p className="text-sm text-red-600 font-semibold mb-2">
  Please copy the registration number for download application
</p>

      <div className="flex gap-2 mb-5">

        <input
          type="text"
          value={registrationNumber}
          readOnly
          className="flex-1 border rounded px-3 py-2 bg-gray-100 font-bold"
        />


      </div>

      <button
        onClick={() => {

          setShowSuccessPopup(false);

          navigate("/print-application");

        }}
        className="w-full bg-green-600 text-white py-2 rounded font-bold"
      >
        Continue
      </button>

    </div>

  </div>

)}
    </SiteLayout>
  );
}

function Section({ title, children }) {
  return (
    <div className="border border-gray-300 bg-[#f8fbf8] rounded-md p-5">
      <h3 className="text-lg font-bold text-[#06254D] border-b pb-2 mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Input({ label, name, value, onChange, readOnly = false }) {
  return (
    <div>
      <label className="font-semibold text-sm text-[#06254D] block mb-2">
        {label}
      </label>

      <input
        name={name}
        value={value || ""}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#4b3f8f]/30 ${
          readOnly ? "bg-gray-100 text-gray-700 cursor-not-allowed" : "bg-white"
        }`}
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="font-semibold text-sm text-[#06254D] block mb-2">
        {label}
      </label>

      <select
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2.5 text-sm bg-white outline-none focus:ring-2 focus:ring-[#4b3f8f]/30"
      >
        <option value="">--Select--</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function UploadBox({ label, file, onChange, previewClass }) {
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!file) {
      setPreviewUrl("");
      return;
    }

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return (
    <div className="border border-dashed border-gray-400 rounded-md p-4 bg-white">
      <label className="font-semibold text-sm text-[#06254D] block mb-2">
        {label}
      </label>

      <input
        type="file"
        accept="image/*"
        onChange={onChange}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
      />

      {previewUrl && (
        <div className="mt-4">
          <p className="text-xs text-gray-600 mb-2">Preview:</p>

          <img
            src={previewUrl}
            className={`border rounded bg-gray-50 ${previewClass}`}
            alt="Preview"
          />
        </div>
      )}
    </div>
  );
}
