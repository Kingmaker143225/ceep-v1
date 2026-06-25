
import { useState } from "react";
import { Printer, Download, Search } from "lucide-react";

import SiteLayout from "@/components/layout/SiteLayout";
import PageBanner from "@/components/layout/PageBanner";

export default function HallTicket() {
  const [showTicket, setShowTicket] = useState(false);

  const [form, setForm] = useState({
    regno: "",
    dob: "",
    mobile: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (form.regno.trim().length < 5) {
      newErrors.regno = "Registration number is required";
    }

    if (!form.dob) {
      newErrors.dob = "Date of birth is required";
    }

    if (!/^\d{10}$/.test(form.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Hall Ticket retrieved successfully.");
      setShowTicket(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const inputClass =
    "w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500";

  const buttonClass =
    "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <SiteLayout>
      <PageBanner title="Download Hall Ticket" crumbs={[{ label: "Hall Ticket" }]} />

      <div className="container mx-auto max-w-4xl py-12 px-4">
        <div className="no-print mb-12">
          <div className="max-w-xl mx-auto shadow-md border border-gray-200 rounded-xl bg-white">
            <div className="bg-gray-100 border-b px-6 py-4 rounded-t-xl">
              <h2 className="text-xl font-serif text-primary font-semibold">
                Search Hall Ticket
              </h2>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Registration Number
                  </label>
                  <input
                    name="regno"
                    value={form.regno}
                    onChange={handleChange}
                    placeholder="e.g. PGCET20261234"
                    className={inputClass}
                  />
                  {errors.regno && (
                    <p className="text-red-600 text-xs mt-1">{errors.regno}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors.dob && (
                    <p className="text-red-600 text-xs mt-1">{errors.dob}</p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-medium block mb-1">
                    Mobile Number
                  </label>
                  <input
                    name="mobile"
                    value={form.mobile}
                    onChange={handleChange}
                    placeholder="10 digit mobile number"
                    maxLength={10}
                    className={inputClass}
                  />
                  {errors.mobile && (
                    <p className="text-red-600 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className={`${buttonClass} w-full mt-2 h-12 text-base font-bold bg-secondary text-secondary-foreground hover:bg-secondary/90`}
                >
                  <Search className="w-5 h-5 mr-2" />
                  Get Hall Ticket
                </button>
              </form>
            </div>
          </div>
        </div>

        {showTicket && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-end gap-4 no-print">
              <button
                onClick={handlePrint}
                className={`${buttonClass} border border-gray-300 bg-white text-primary hover:bg-gray-50 gap-2`}
              >
                <Printer className="w-4 h-4" />
                Print Ticket
              </button>

              <button
                onClick={handlePrint}
                className={`${buttonClass} bg-primary text-white hover:opacity-90 gap-2`}
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>

            <div className="print-area bg-white border-2 border-gray-300 p-8 max-w-4xl mx-auto shadow-xl">
              <div className="text-center border-b-2 border-primary pb-4 mb-6">
                <h1 className="text-2xl font-serif font-bold text-primary uppercase tracking-wider">
                  TS PGCET - 2026
                </h1>
                <h2 className="text-xl font-bold mt-1">HALL TICKET</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Telangana State Council of Higher Education
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="font-bold text-sm text-primary uppercase border-b pb-1 mb-3">
                      Candidate Details
                    </h3>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold text-muted-foreground">Candidate Name:</div>
                      <div className="col-span-2 font-bold">RAHUL SHARMA</div>

                      <div className="font-semibold text-muted-foreground">Registration No:</div>
                      <div className="col-span-2">
                        {form.regno.toUpperCase() || "PGCET20261234"}
                      </div>

                      <div className="font-semibold text-muted-foreground">Date of Birth:</div>
                      <div className="col-span-2">{form.dob || "15-08-2002"}</div>

                      <div className="font-semibold text-muted-foreground">Category:</div>
                      <div className="col-span-2">BC-B</div>

                      <div className="font-semibold text-muted-foreground">Gender:</div>
                      <div className="col-span-2">Male</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-primary uppercase border-b pb-1 mb-3">
                      Examination Details
                    </h3>

                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="font-semibold text-muted-foreground">Test Paper:</div>
                      <div className="col-span-2 font-bold text-secondary">
                        CSE - Computer Science & Engineering
                      </div>

                      <div className="font-semibold text-muted-foreground">Date & Time:</div>
                      <div className="col-span-2 font-bold">
                        15 May 2026 — 10:00 AM to 1:00 PM
                      </div>

                      <div className="font-semibold text-muted-foreground">Test Center:</div>
                      <div className="col-span-2">
                        <p className="font-bold">JNTU Hyderabad - Block A</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Kukatpally, Hyderabad, Telangana 500085
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-48 flex flex-col gap-4 flex-shrink-0 items-center">
                  <div className="w-32 h-40 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-sm">
                    Photo
                  </div>

                  <div className="w-40 h-12 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs">
                    Candidate Signature
                  </div>

                  <div className="w-40 h-12 border-2 border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 text-xs mt-6">
                    Invigilator Signature
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t-2 border-gray-200 pt-6">
                <h3 className="font-bold text-sm uppercase mb-3 text-red-700">
                  Important Instructions to the Candidate
                </h3>

                <ul className="text-xs space-y-2 list-disc pl-5 text-gray-700">
                  <li>The candidate must carry a printed copy of this Hall Ticket with valid original Photo ID proof.</li>
                  <li>Candidates should report to the examination center at least 90 minutes before the exam.</li>
                  <li>No candidate will be allowed after exam commencement.</li>
                  <li>Electronic devices, calculators, smartwatches, and study materials are prohibited.</li>
                  <li>Preserve this Hall Ticket for counseling and admission processes.</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </SiteLayout>
  );
}