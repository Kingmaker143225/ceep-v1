import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";
import { api } from "@/lib/api";

import { useState, useEffect } from "react";

const diplomaBranches = [
  
  // "Electrical Engineering",
  // "Mechanical Engineering",
  // "Electronics & Communication Engineering",
  // "Computer Science",

  "B.E./B.Tech./AMIE in Electrical Engineering",
    "B.E./B.Tech. Instrumentation Engineering",


    "B.E./B.Tech/AMIE in Mechanical Engg",
    "Mechanical Engg. (Mechatronics)",
    "Automobile Engineering",
    "Mechanical Engg. (Production Engg.)",
    "Industrial Engineering",
    "Marine Engineering",
    "Aeronautical Engineering",
    "Mechanical Engineering (Mechatronics)",
    "Industrial and Production Egg",


    "B.E./B.Tech/AMIE in ECE",
    "AMIE ECE ",
    "AMIETE Electronics & Telematics",

    "B.E./B.Tech. /AMIE in Computer Science Engineering",
    "B.E./B.Tech. /AMIE in Computer Science",
    "B.E./B.Tech. /AMIE in Information Technology",
  
];

const entranceBranchMap = {
  

 
    "B.E./B.Tech./AMIE in Electrical Engineering":["Electrical Engineering"],
    "B.E./B.Tech. Instrumentation Engineering": ["Electrical Engineering"],
  

  
    "B.E./B.Tech/AMIE in Mechanical Engg" :["Mechanical Engineering"],
    "Mechanical Engg. (Mechatronics)":["Mechanical Engineering"],
    "Automobile Engineering":["Mechanical Engineering"],
    "Mechanical Engg. (Production Engg.)":["Mechanical Engineering"],
    "Industrial Engineering":["Mechanical Engineering"],
    "Marine Engineering":["Mechanical Engineering"],
    "Aeronautical Engineering":["Mechanical Engineering"],
    "Mechanical Engineering (Mechatronics)":["Mechanical Engineering"],
    "Industrial and Production Egg":["Mechanical Engineering"],
  

  
    "B.E./B.Tech/AMIE in ECE":["Electronics & Communication Engineering"],
    "AMIE ECE ":["Electronics & Communication Engineering"],
    "AMIETE Electronics & Telematics":["Electronics & Communication Engineering"],
  

 
    "B.E./B.Tech. /AMIE in Computer Science Engineering": ["Computer Science"],
    "B.E./B.Tech. /AMIE in Computer Science": ["Computer Science"],
    "B.E./B.Tech. /AMIE in Information Technology": ["Computer Science"],
  

  
};

const passingYears = ["2025","2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005", "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995", "1994", "1993", "1992", "1991", "1990", "1989", "1988", "1987", "1986", "1985", "1984", "1983", "1982", "1981", "1980", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950"];
const PAYMENT_ENABLED = true; // Set to false to disable payment and show alert instead

export default function FeePayment() {
  const [showNote, setShowNote] = useState(true);
  const [form, setForm] = useState({
    qualifyingExam: "",
    hallTicketNo: "",
    branchDiploma: "",
    branchEntrance: "",
    passingYear: "",
    candidateName: "",
    dob: "",
    mobile: "",
    alternateMobile: "",
    email: "",
    category: "",
    phStatus: "",
    paymentMode: "",
    declaration: false,
  });

  const entranceOptions = entranceBranchMap[form.branchDiploma] || [];

  const formatDOB = (value) => {
    const numbers = value.replace(/\D/g, "").slice(0, 8);

    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4) {
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    }

    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;
  };

  const isValidMobile = (mobile) => /^[6-9]\d{9}$/.test(mobile);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidDOB = (dob) => {
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    const match = dob.match(regex);

    if (!match) return false;

    const day = Number(match[1]);
    const month = Number(match[2]);
    const year = Number(match[3]);

    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    if (year < 1950 || year > 2026) return false;

    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (e.target.type === "checkbox") {
      setForm((prev) => ({ ...prev, [name]: e.target.checked }));
      return;
    }

    if (name === "dob") {
      setForm((prev) => ({ ...prev, dob: formatDOB(value) }));
      return;
    }

    if (name === "mobile" || name === "alternateMobile") {
      setForm((prev) => ({
        ...prev,
        [name]: value.replace(/\D/g, "").slice(0, 10),
      }));
      return;
    }

    if (name === "qualifyingExam") {
      setForm((prev) => ({
        ...prev,
        qualifyingExam: value,
        branchDiploma: "",
        branchEntrance: "",
        passingYear: "",
      }));
      return;
    }

    if (name === "branchDiploma") {
      setForm((prev) => ({
        ...prev,
        branchDiploma: value,
        branchEntrance: "",
      }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.qualifyingExam ||
      !form.hallTicketNo ||
      !form.branchDiploma ||
      !form.branchEntrance ||
      !form.passingYear ||
      !form.candidateName ||
      !form.dob ||
      !form.mobile ||
      !form.email ||
      !form.category ||
      !form.phStatus ||
      !form.paymentMode ||
      !form.declaration
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (!isValidDOB(form.dob)) {
      alert("Please enter Date of Birth in dd/mm/yyyy format");
      return;
    }

    if (!isValidMobile(form.mobile)) {
      alert("Mobile number must be exactly 10 digits and start with 6, 7, 8, or 9");
      return;
    }

    if (form.alternateMobile && !isValidMobile(form.alternateMobile)) {
      alert("Alternate mobile number must be exactly 10 digits and start with 6, 7, 8, or 9");
      return;
    }

    if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address");
      return;
    }

    const amount = form.category === "SC_I" || form.category === "SC_II" || form.category === "SC_III" || form.category === "ST" ? "500.00" : "900.00";

    try {
      /*
|--------------------------------------------------------------------------
| CLEAR PREVIOUS FAILED SESSION
|--------------------------------------------------------------------------
*/

localStorage.removeItem(
  "paymentData"
);

sessionStorage.clear();

      const { data: encryptedRes, error: encryptError } =
  await api.payment.createPayment({

    qualifyingExam: form.qualifyingExam,
    hallTicketNo: form.hallTicketNo,
    branchDiploma: form.branchDiploma,
    branchEntrance: form.branchEntrance,
    passingYear: form.passingYear,
    candidateName: form.candidateName,
    dob: form.dob,
    mobile: form.mobile,
    alternateMobile: form.alternateMobile,
    email: form.email,
    //category: form.category?.replace("_", "-"),
    category: form.category,
    phStatus: form.phStatus?.toUpperCase(),
    paymentMode: form.paymentMode

  });

      if (encryptError) {

  throw new Error(
    encryptError?.message ||
    "Failed to initialize payment request"
  );

}

console.log("PAYMENT RESPONSE =>");
console.log(encryptedRes);

/*
|--------------------------------------------------
| REDIRECT TO SBI PAYMENT PAGE
|--------------------------------------------------
*/
const transactionUrl =
  encryptedRes?.sbiResponse?.data?.[0]?.transactionUrl;

console.log(
  "TRANSACTION URL =>",
  transactionUrl
);

// if (transactionUrl) {

//   window.location.href =
//     transactionUrl;

// }
if (transactionUrl) {

  window.onbeforeunload = null;

  window.location.href =
    transactionUrl;

}

else {

  console.log(
    "FULL SBI RESPONSE =>",
    encryptedRes
  );

  throw new Error(
    "SBI transaction URL not received"
  );

}

    } catch (err) {

  console.error(
    "Payment Error:",
    err
  );

  /*
  |--------------------------------------------------------------------------
  | CLEAR OLD PAYMENT SESSION
  |--------------------------------------------------------------------------
  */

  localStorage.removeItem(
    "paymentData"
  );

  sessionStorage.clear();

  alert(
    "Payment Initialization Failed: " +
    err.message
  );

}
  };

  return (
    <SiteLayout>
      {showNote && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">

            <h2 className="text-xl font-bold text-red-600 mb-3">
              Note :
            </h2>

            <p className="text-sm text-gray-800 leading-relaxed mb-6">
              I have read the Detailed Notification and Instruction Booklet.
              I declare that I have ensured my eligibility criteria for M.E/M.Tech.(CEEP) - 2026 examination.
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowNote(false)}
                className="bg-gray-500 text-white px-5 py-2 rounded-md font-semibold
             hover:bg-green-700 hover:scale-105 hover:shadow-lg
             active:scale-95 transition-all duration-200"
              >
                YES
              </button>

              <button
                onClick={() => (window.location.href = "/")}
                className="bg-gray-500 text-white px-5 py-2 rounded-md font-semibold
             hover:bg-red-600 hover:scale-105 hover:shadow-lg
             active:scale-95 transition-all duration-200"
              >
                NO
              </button>
            </div>

          </div>
        </div>
      )}
      <PageBanner title="Fee Payment" crumbs={[{ label: "Fee Payment" }]} />

      <div className="container mx-auto max-w-7xl py-12 px-4">
        <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm">
          <h2 className="bg-[#4b3f8f] text-white text-center font-bold text-xl py-2">
            FEE PAYMENT FOR M.E/M.Tech.(CEEP) - 2026
          </h2>

          <form onSubmit={handleSubmit} className="p-6 space-y-5">
           <Field label="Qualifying Degree *">
  <label className="flex items-center gap-2">
    <input
      type="radio"
      name="qualifyingExam"
      value="BE_BTECH"
      checked={form.qualifyingExam === "BE_BTECH"}
      onChange={handleChange}
    />
    B.E./B.Tech / AMIE
  </label>
</Field>

            <Input
             label="Qualifying Degree Hall Ticket No. *"
              name="hallTicketNo"
              value={form.hallTicketNo}
              onChange={handleChange}
              placeholder="Enter Degree Hall Ticket No."
            />

            <Select
              label="Name of the Discipline *"
              name="branchDiploma"
              value={form.branchDiploma}
              onChange={handleChange}
              options={diplomaBranches}
              disabled={!form.qualifyingExam}
            />

           <Field label="Eligible Qualifying Degree *">
              {form.branchDiploma ? (
                <div className="flex flex-wrap gap-8 pt-2">
                  {entranceOptions.map((branch) => (
                    <label
                      key={branch}
                      className="flex items-center gap-2 text-[#06254D] font-medium"
                    >
                      <input
                        type="radio"
                        name="branchEntrance"
                        value={branch}
                        checked={form.branchEntrance === branch}
                        onChange={handleChange}
                      />
                      <span className="whitespace-nowrap">
                        {branch}
                      </span>
                    </label>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 pt-2">
                  Please select diploma branch first
                </p>
              )}
            </Field>

            <Select
              label="Year of Passing the Qualifying Exam *"
              name="passingYear"
              value={form.passingYear}
              onChange={handleChange}
              options={passingYears}
            />

            <Input
              label="Candidate's Name *"
              name="candidateName"
              value={form.candidateName}
              onChange={handleChange}
              placeholder="Enter Candidate's Name"
            />

            <Input
              label="Date of Birth *"
              name="dob"
              value={form.dob}
              onChange={handleChange}
              placeholder="dd/mm/yyyy"
            />

            <Input
              label="Mobile Number *"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter 10 digit mobile number"
            />

            <Input
              label="Alternate Mobile Number"
              name="alternateMobile"
              value={form.alternateMobile}
              onChange={handleChange}
              placeholder="Enter 10 digit alternate mobile number"
            />

            <Input
              label="E-Mail ID *"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
            />

            <Field label="Category *">
              <div className="flex flex-wrap gap-4">
                {["OC", "BC_A", "BC_B", "BC_C", "BC_D", "BC_E", "SC_I", "SC_II", "SC_III", "ST"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="category"
                      value={item}
                      checked={form.category === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Physically Challenged (PH) *">
              <div className="flex gap-6">
                {["YES", "NO"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="phStatus"
                      value={item}
                      checked={form.phStatus === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </Field>

            <Field label="Payment Mode *">
              <div className="flex flex-wrap gap-4">
                {["Credit Card(VISA,Master,Rupay)", "Debit Card(Rupay)", "Net Banking", "UPI"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMode"
                      value={item}
                      checked={form.paymentMode === item}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
            </Field>

            <div className="border border-red-400 rounded-md p-6 w-full">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="declaration"
                  checked={form.declaration}
                  onChange={handleChange}
                  className="w-5 h-5"
                />
                <span className="text-[#06254D] font-medium text-base">
                  I have carefully gone through the Detailed Notification, Eligibility Criteria and Instruction Booklet. I am responsible for the correctness of the above details filled in by me and the CONVENER, M.E/M.Tech.(CEEP) - 2026 is not responsible in any way.
                </span>
              </label>
            </div>


            <div className="text-center">
  <button
    type="submit"
    disabled={!PAYMENT_ENABLED}
    className={`px-8 py-3 rounded-md text-white font-semibold transition-all duration-200 ${
      PAYMENT_ENABLED
        ? "bg-green-600 hover:bg-green-700"
        : "bg-gray-400 cursor-not-allowed"
    }`}
  >
    {PAYMENT_ENABLED ? "Proceed to Payment" : "Coming Soon"}
  </button>

  {!PAYMENT_ENABLED && (
    <p className="text-red-600 text-sm mt-3 font-medium">
      Online payment will be enabled shortly.
    </p>
  )}
</div>
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <Field label={label}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3"
      />
    </Field>
  );
}

function Select({ label, name, value, onChange, options, disabled }) {
  return (
    <Field label={label}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full max-w-md border border-gray-300 rounded-md px-4 py-3 disabled:bg-gray-100"
      >
        <option value="">--Select--</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </Field>
  );
}

function Field({ label, children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-4">
      <label className="font-semibold text-black pt-2">
        {label}
      </label>

      <div className="flex items-start">
        {children}
      </div>
    </div>
  );
}

