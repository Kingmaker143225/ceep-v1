import { useState } from "react";

import SiteLayout
from "@/components/layout/SiteLayout";

import PageBanner
from "@/components/layout/PageBanner";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL;

export default function PrintApplication() {

  const printStyles = `
    @media print {

      .print-area {
        border: 2px solid black !important;
      }

      .section-box {
        border: 1px solid black !important;
      }

      * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
    }
  `;

  const [form, setForm] =
    useState({

      registrationNumber: "",

      mobile: "",

      dob: ""

    });

  const [application, setApplication] =
    useState(null);

  const [payment, setPayment] =
    useState(null);

  /*
  |--------------------------------------------------------------------------
  | FORMAT DOB
  |--------------------------------------------------------------------------
  */

  const formatDOB = (value) => {

    const numbers =
      value
        .replace(/\D/g, "")
        .slice(0, 8);

    if (numbers.length <= 2)
      return numbers;

    if (numbers.length <= 4)

      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;

    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(4)}`;

  };

  /*
  |--------------------------------------------------------------------------
  | VALIDATE DOB
  |--------------------------------------------------------------------------
  */

  const isValidDOB = (dob) => {

    const regex =
      /^(\d{2})\/(\d{2})\/(\d{4})$/;

    const match =
      dob.match(regex);

    if (!match)
      return false;

    const day =
      Number(match[1]);

    const month =
      Number(match[2]);

    const year =
      Number(match[3]);

    const currentYear =
      new Date().getFullYear();

    if (
      year < 1950 ||
      year > currentYear
    ) {

      return false;

    }

    const date =
      new Date(
        year,
        month - 1,
        day
      );

    return (

      date.getFullYear() === year &&

      date.getMonth() === month - 1 &&

      date.getDate() === day

    );

  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE CHANGE
  |--------------------------------------------------------------------------
  */

  const handleChange = (e) => {

    const {
      name,
      value
    } = e.target;

    /*
    |--------------------------------------------------------------------------
    | DOB FORMAT
    |--------------------------------------------------------------------------
    */

    if (name === "dob") {

      setForm((prev) => ({

        ...prev,

        dob:
          formatDOB(value)

      }));

      return;

    }

    /*
    |--------------------------------------------------------------------------
    | MOBILE ONLY NUMBERS
    |--------------------------------------------------------------------------
    */

    if (name === "mobile") {

      const onlyNumbers =
        value.replace(/\D/g, "");

      setForm((prev) => ({

        ...prev,

        mobile:
          onlyNumbers

      }));

      return;

    }

    setForm((prev) => ({

      ...prev,

      [name]:
        value

    }));

  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE SUBMIT
  |--------------------------------------------------------------------------
  */

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    setApplication(null);

    setPayment(null);

    /*
    |--------------------------------------------------------------------------
    | VALIDATION
    |--------------------------------------------------------------------------
    */

    if (

      !form.registrationNumber ||

      !form.mobile ||

      !form.dob

    ) {

      alert(
        "Please fill all required fields"
      );

      return;

    }

    /*
    |--------------------------------------------------------------------------
    | MOBILE VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
      form.mobile.length !== 10
    ) {

      alert(
        "Please enter valid mobile number"
      );

      return;

    }

    /*
    |--------------------------------------------------------------------------
    | DOB VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
      !isValidDOB(form.dob)
    ) {

      alert(
        "Please enter Date of Birth in dd/mm/yyyy format"
      );

      return;

    }

    try {

      /*
      |--------------------------------------------------------------------------
      | BACKEND API CALL
      |--------------------------------------------------------------------------
      */

      const response =
        await fetch(

          
          `${API_BASE_URL}/api/payments/print`,

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body: JSON.stringify({

              registrationNumber:
                form.registrationNumber,

              mobile:
                form.mobile,

              dob:
                form.dob

            })

          }

        );

      const result =
        await response.json();

      console.log(
        "PRINT RESPONSE =>",
        result
      );

      /*
      |--------------------------------------------------------------------------
      | FAILED
      |--------------------------------------------------------------------------
      */

      if (!result.success) {

        alert(
          result.message
        );

        return;

      }

      /*
      |--------------------------------------------------------------------------
      | SUCCESS
      |--------------------------------------------------------------------------
      */

      setApplication(
        result.application
      );

      setPayment(
        result.payment
      );

    }

    catch (error) {

      console.log(
        "PRINT ERROR =>",
        error
      );

      alert(
        "Server error. Please try again."
      );

    }

  };

  /*
  |--------------------------------------------------------------------------
  | HANDLE PRINT
  |--------------------------------------------------------------------------
  */
const handlePrint = async () => {

  try {

    const input =
      document.getElementById(
        "application-print"
      );
      const buttons =
  document.querySelectorAll(".no-print");

buttons.forEach((btn) => {
  btn.style.display = "none";
});

    if (!input) {

      alert("Print area not found");

      return;

    }

    const canvas =
  await html2canvas(input, {

    scale: 2,

    useCORS: true,

    allowTaint: false,

    backgroundColor: "#ffffff",

    imageTimeout: 0

  });

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF({

        orientation: "portrait",

        unit: "mm",

        format: "a4"

      });

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      (canvas.height * pdfWidth) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      pdfWidth,
      pdfHeight
    );
    
pdf.save("TG_ECET_Application.pdf");

  }

  catch (error) {

    console.log(
      "PDF ERROR =>",
      error
    );

    alert(
      "PDF generation failed" +
      error.message
    );

  }

};

  return (

    <SiteLayout>

      <style>{printStyles}</style>

      {/* SCREEN ONLY */}

      <div className="print:hidden">

        <PageBanner

          title="Download Application"

          crumbs={[
            {
              label:
                "Download Application"
            }
          ]}

        />

        <div className="container mx-auto max-w-7xl py-12 px-4">

          <PageBox
            title="PRINT M.E/M.Tech.(CEEP) - 2026 APPLICATION FORM"
          >

            <form onSubmit={handleSubmit}>

              <div className="grid md:grid-cols-3 gap-8">

                <Input

                  label="Registration Number *"

                  name="registrationNumber"

                  value={
                    form.registrationNumber
                  }

                  onChange={handleChange}

                  placeholder="Enter Registration Number"

                />

                <Input

                  label="Mobile Number *"

                  name="mobile"

                  value={form.mobile}

                  onChange={handleChange}

                  placeholder="Enter Mobile Number"

                />

                <Input

                  label="Date of Birth * (dd/mm/yyyy)"

                  name="dob"

                  value={form.dob}

                  onChange={handleChange}

                  placeholder="dd/mm/yyyy"

                />

              </div>

              <div className="text-center mt-8">

                <button

                  type="submit"

                  className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"

                >

                  Get Application Details

                </button>

              </div>

            </form>

          </PageBox>

        </div>

      </div>

      {/* PRINT AREA */}

      {application && (

       <div className="fixed inset-0 z-50 bg-black/60 overflow-auto">

    <div className="min-h-screen flex justify-center items-start py-10">

      <div className="bg-white w-[95%] max-w-6xl relative rounded shadow-lg p-4">
        

<button
  onClick={() => {
    setApplication(null);
    setPayment(null);
  }}
  className="fixed top-5 right-5 bg-red-600 hover:bg-red-700 text-white w-10 h-10 rounded-full text-xl font-bold flex items-center justify-center shadow-lg z-[9999]"
>
  X
</button>


<div
  id="application-print"
  className="print-area max-w-5xl mx-auto bg-white p-5 text-[14px] mb-12"
  style={{
    border: "2px solid black"
  }}
>
            {/* HEADER */}

            <div className="text-center border-b-2 border-black pb-3 mb-3">

              <div className="flex items-center justify-between px-4">

                {/* LEFT LOGO */}

                <img
                  crossOrigin="anonymous"
                  src="/left-logo.png"

                  alt="Left Logo"

                  className="w-14 h-14 object-contain"

                />

                {/* TITLE */}

                <div className="flex-1 text-center">

                  <h1

                    style={{

                      fontFamily:
                        "Arial, Helvetica, sans-serif",

                      fontSize:
                        "30px",

                      fontWeight:
                        "700",

                      color:
                        "#06254D"

                    }}

                  >

                    M.E/M.Tech.(CEEP) - 2026 APPLICATION FORM

                  </h1>

                </div>

                {/* RIGHT LOGO */}

                <img
                crossOrigin="anonymous"

                  src="/right-logo.png"

                  alt="Right Logo"

                  className="w-14 h-14 object-contain"

                />

              </div>

            </div>

            {/* REGISTRATION */}

            <div className="flex justify-between border-b border-black py-1 mb-3">

              <p>

                <b>Registration No:</b>{" "}

                {
                  application.registration_number
                }

              </p>

              <p>

                <b>Payment Ref ID:</b>{" "}

                {
                  application.payment_reference_id
                }

              </p>

            </div>

            {/* PERSONAL INFO */}

            <SectionTitle
              title="1. Personal Information"
            />
<div className="flex border border-black">

  {/* LEFT SIDE */}

  <div className="flex-1">

    <Table>

      <Row
        label="Candidate Name"
        value={application.candidate_name}
      />

      <Row
        label="Father Name"
        value={application.father_name}
      />

      <Row
        label="Mother Name"
        value={application.mother_name}
      />

      <Row
        label="Date of Birth"
        value={application.date_of_birth}
      />

      <Row
        label="Gender"
        value={application.gender}
      />

      <Row
        label="Hall Ticket Number"
        value={application.hall_ticket_no}
      />

      <Row
        label="Mobile Number"
        value={application.mobile_number}
      />

      <Row
        label="Alternate Mobile"
        value={application.alternate_mobile}
      />

      <Row
        label="Email"
        value={application.email}
      />

    </Table>

  </div>

  {/* RIGHT SIDE PHOTO */}

  <div className="w-40 border-l border-black flex flex-col items-center justify-start p-2">
    <p className="font-bold mb-2">

    Candidate Photo

  </p>

    <img
    crossOrigin="anonymous"
      src={application.photo_url}
      alt="Candidate"
      className="w-28 h-32 border border-black object-cover"
    />
    <p className="font-bold mt-4 mb-2">

    Signature

  </p>

    <img
    crossOrigin="anonymous"
      src={application.signature_url}
      alt="Signature"
      className="w-28 h-12 mt-3 border border-black object-contain"
    />

  </div>

</div>
{/* RESERVATION */}

<SectionTitle
  title="2. Reservation Information"
/>

<div className="grid grid-cols-2">

  {/* LEFT */}

  <Table>

    <Row
      label="Category"
      value={
        application.category
      }
    />

    <Row
      label="PH Status"
      value={
        application.ph_status
      }
    />

  </Table>

  {/* RIGHT */}

  <Table>

    <Row
      label="Local Area Status"
      value={
        application.local_area || "-"
      }
    />

    <Row
      label="Payment Status"
      value={
        payment?.payment_status ||
        "PAID"
      }
    />

  </Table>

</div>

            {/* ACADEMIC */}

            {/* <SectionTitle
              title="3. Academic Details"
            />

            <Table>

              <Row
                label="Diploma Branch"
                value={
                  application.branch_diploma
                }
              />

              <Row
                label="Entrance Branch"
                value={
                  application.branch_entrance
                }
              />

              <Row
                label="Passing Year"
                value={
                  application.passing_year
                }
              />
              <Row
  label="Marks Percentage"
  value={
    application.marks_percentage
  }
/>

            </Table> */}
            <div className="grid grid-cols-2 gap-3 mt-3">

  {/* LEFT SIDE */}

  <div>

    <SectionTitle
      title="3. Academic Details"
    />

    <Table>

      <Row
        label="Diploma Branch"
        value={
          application.branch_diploma
        }
      />

      <Row
        label="Entrance Branch"
        value={
          application.branch_entrance
        }
      />

      <Row
        label="Passing Year"
        value={
          application.passing_year
        }
      />

      <Row
        label="Marks Percentage"
        value={
          application.marks_percentage
        }
      />

    </Table>

  </div>

  {/* RIGHT SIDE */}

  <div>

    <SectionTitle
      title="4. Payment Information"
    />

    <Table>

      <Row
        label="Payment Reference ID"
        value={
          application.payment_reference_id
        }
      />

      <Row
        label="Payment Mode"
        value={
          payment?.payment_mode
        }
      />

      <Row
        label="Payment Status"
        value={
          payment?.payment_status
        }
      />

      <Row
        label="Submitted Date"
        value={
          application.created_at
            ? new Date(
                application.created_at
              ).toLocaleString()
            : "-"
        }
      />

    </Table>

  </div>

</div>

           
  
{/* EMPLOYMENT */}

<SectionTitle
  title="5. Employment Details"
/>

<Table>

  <Row
    label="Employer Name & Address"
    value={
      application.employer_name_address
    }
  />

  <Row
    label="Designation"
    value={
      application.employment_designation
    }
  />

</Table>
{/* <div className="border border-black border-t-0 p-4 text-[11px] leading-8">

  <ol className="list-decimal pl-5">

    <li>
     Permission letter from employer to pursue the programme must be produced during counselling.
    </li>

    <li>
      Minimum one year experience certificate should be produced during counselling.
    </li>

    <li>
     Original employer permission letter should be submitted at the time of counselling.
    </li>

  </ol>

</div> */}

            <div className="border border-black border-t-0 p-3 text-[11px]">
              <ol className="list-decimal ml-4 space-y-1">
                <li>
                  Permission letter from employer to pursue the programme must
                  be produced during counselling.
                </li>
                <li>
                  Minimum one year experience certificate should be produced
                  during counselling.
                </li>
                <li>
                  Original employer permission letter should be submitted at the
                  time of counselling.
                </li>
              </ol>
            </div>

{/* ADDRESS SECTIONS */}

<div className="grid grid-cols-2 gap-3 mt-3">

  {/* COMMUNICATION ADDRESS */}

  <div>

    <SectionTitle
      title="6. Communication Address"
    />

    <Table>

      <Row
        label="Address"
        value={
          application.address
        }
      />

      <Row
        label="District"
        value={
          application.district
        }
      />

      <Row
        label="State"
        value={
          application.state
        }
      />

      <Row
        label="Pincode"
        value={
          application.pincode
        }
      />

    </Table>

  </div>

  {/* PERMANENT ADDRESS */}

  <div>

    <SectionTitle
      title="7. Permanent Address"
    />

    <Table>

      <Row
        label="Address"
        value={
          application.permanent_address
        }
      />

      <Row
        label="District"
        value={
          application.permanent_district
        }
      />

      <Row
        label="State"
        value={
          application.permanent_state
        }
      />

      <Row
        label="Pincode"
        value={
          application.permanent_pincode
        }
      />

    </Table>

  </div>

</div>
<div className="border border-black p-3 mt-4">

  <p className="font-bold mb-1">

    Declaration:

  </p>

  <p>

    I declare that the details furnished above are true and correct to the best of my knowledge. I am responsible for the correctness of the information submitted.

  </p>

</div>
<div
  className="print:hidden text-center mb-8 mt-6 no-print"
>

  <button
   type="button"

    onClick={handlePrint}

    className="bg-[#06254D] text-white px-8 py-3 rounded-md hover:opacity-90"

  >

       Download PDF

  </button>

</div>
          </div>

        </div>

      </div>

    </div>

)}

    </SiteLayout>

  );

}

/*
|--------------------------------------------------------------------------
| PAGE BOX
|--------------------------------------------------------------------------
*/

function PageBox({
  title,
  children
}) {

  return (

    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[330px]">

      <h2 className="bg-[#4b3f8f] text-white font-bold text-xl px-4 py-2">

        {title}

      </h2>

      <div className="p-6">

        {children}

      </div>

    </div>

  );

}

/*
|--------------------------------------------------------------------------
| INPUT
|--------------------------------------------------------------------------
*/

function Input({

  label,

  name,

  value,

  onChange,

  placeholder

}) {

  return (

    <div>

      <label className="font-semibold block mb-2">

        {label}

      </label>

      <input

        type="text"

        name={name}

        value={value}

        onChange={onChange}

        maxLength={
          name === "dob"
            ? 10
            : name === "mobile"
            ? 10
            : undefined
        }

        className="w-full border border-gray-300 rounded-md px-4 py-3"

        placeholder={placeholder}

      />

    </div>

  );

}

/*
|--------------------------------------------------------------------------
| SECTION TITLE
|--------------------------------------------------------------------------
*/

function SectionTitle({
  title
}) {

  return (

    <h3 className="bg-gray-200 text-[#06254D] font-semibold text-[15px] px-3 py-2 border border-black mt-4">

      {title}

    </h3>

  );

}

/*
|--------------------------------------------------------------------------
| TABLE
|--------------------------------------------------------------------------
*/
function Table({
  children
}) {

  return (

    <div className="section-box border border-black">

      {children}

    </div>

  );

}

/*
|--------------------------------------------------------------------------
| ROW
|--------------------------------------------------------------------------
*/

function Row({
  label,
  value
}) {

  return (
<div className="grid grid-cols-[180px_1fr] border-t border-black min-h-[28px]">
      <div className="border-r border-black px-2 py-1 font-semibold">

        {label}

      </div>

      <div className="px-2 py-1">

        {value || "-"}

      </div>

    </div>

  );

}


