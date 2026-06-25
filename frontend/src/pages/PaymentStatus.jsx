
import { useState } from "react";

import SiteLayout
from "@/components/layout/SiteLayout";

import PageBanner
from "@/components/layout/PageBanner";

const API_BASE_URL =
  import.meta.env.VITE_BACKEND_URL;

export default function PaymentStatus() {

  const [form, setForm] =
    useState({

      hallTicket: "",

      mobile: ""

    });

  const [payment, setPayment] =
    useState(null);

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

    setPayment(null);

    /*
    |--------------------------------------------------------------------------
    | VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
      !form.hallTicket ||
      !form.mobile
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

    try {

      /*
      |--------------------------------------------------------------------------
      | BACKEND API CALL
      |--------------------------------------------------------------------------
      */

      const response =
        await fetch(

          
          `${API_BASE_URL}/api/payments/status`,

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body: JSON.stringify({

              hallTicket:
                form.hallTicket,

              mobile:
                form.mobile

            })

          }

        );

      const result =
        await response.json();

      console.log(
        "PAYMENT STATUS RESPONSE =>",
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

      setPayment(
        result.payment
      );

    }

    catch (error) {

      console.log(
        "PAYMENT STATUS ERROR =>",
        error
      );

      alert(
        "Server error. Please try again."
      );

    }

  };

  return (

    <SiteLayout>

      <PageBanner

        title="Payment Status"

        crumbs={[
          {
            label:
              "Payment Status"
          }
        ]}

      />

      <div className="container mx-auto max-w-7xl py-12 px-4">

        <PageBox
          title="KNOW YOUR PAYMENT STATUS"
        >

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-2 gap-14 max-w-4xl">

              <Input

                label="Diploma Hall Ticket No *"

                name="hallTicket"

                value={
                  form.hallTicket
                }

                onChange={handleChange}

                placeholder="Enter Diploma Hall Ticket No"

              />

              <Input

                label="Mobile Number *"

                name="mobile"

                value={form.mobile}

                onChange={handleChange}

                placeholder="Enter Mobile Number"

              />

            </div>

            <div className="text-center mt-8">

              <button

                type="submit"

                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"

              >

                Check Payment Status

              </button>

            </div>

          </form>

          {/* RESULT */}

          {payment && (

            // <div className="mt-8 border border-green-400 bg-white rounded-md p-6 max-w-4xl">
            <div className="fixed inset-0 z-50 bg-[#001B3A]/70 overflow-auto">

  <div className="min-h-screen flex justify-center items-start py-10">

    <div className="bg-[#F5F9FF] border-2 border-[#06254D] w-[95%] max-w-4xl relative rounded-lg shadow-2xl p-6">

      {/* CLOSE BUTTON */}

      <button

        onClick={() => {

          setPayment(null);

        }}

        className="absolute top-3 right-3 bg-[#06254D] hover:bg-[#0A3A75] text-white px-3 py-1 rounded"

      >

        X

      </button>

              <h3 className="text-xl font-bold text-green-700 mb-4">

                Payment Details

              </h3>

              <div className="grid md:grid-cols-2 gap-4 text-sm">

                <Detail

                  label="Payment Reference ID"

                  value={
                    payment.payment_reference_id
                  }

                />

                <Detail

                  label="Payment Status"

                  value={
                    payment.payment_status
                  }

                />

                <Detail

                  label="Candidate Name"

                  value={
                    payment.candidate_name
                  }

                />

                <Detail

                  label="Hall Ticket Number"

                  value={
                    payment.hall_ticket_no
                  }

                />

                <Detail

                  label="Mobile Number"

                  value={
                    payment.mobile_number
                  }

                />

                <Detail

                  label="Payment Mode"

                  value={
                    payment.payment_mode
                  }

                />

              </div>

                        </div>

          </div>

        </div>

    

)}

        </PageBox>

      </div>

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

      <div className="p-8">

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
          name === "mobile"
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
| DETAIL
|--------------------------------------------------------------------------
*/

function Detail({
  label,
  value
}) {

  return (

    <div className="border p-3 rounded-md">

      <p className="font-semibold text-[#06254D]">

        {label}

      </p>

      <p>{value}</p>

    </div>

  );

}












