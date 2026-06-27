import { useState } from "react";

import { useLocation, Link }
from "wouter";

import SiteLayout
from "@/components/layout/SiteLayout";

import PageBanner
from "@/components/layout/PageBanner";

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export default function ApplicationForm() {

  const [, navigate] =
    useLocation();

  const [form, setForm] =
    useState({

      mobile: "",

      dob: ""

    });

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

    if (name === "dob") {

      setForm((prev) => ({

        ...prev,

        dob:
          formatDOB(value)

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

    /*
    |--------------------------------------------------------------------------
    | REQUIRED VALIDATION
    |--------------------------------------------------------------------------
    */

    if (
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
      | CALL BACKEND API
      |--------------------------------------------------------------------------
      */

      const response =
        await fetch(

          `${API_BASE_URL}/api/payments/verify`,

          {

            method: "POST",

            headers: {

              "Content-Type":
                "application/json"

            },

            body: JSON.stringify({

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
        "VERIFY RESPONSE =>",
        result
      );

      /*
      |--------------------------------------------------------------------------
      | PAYMENT VALIDATION FAILED
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
      | APPLICATION ALREADY EXISTS
      |--------------------------------------------------------------------------
      */

      if (
        result.applicationExists
      ) {

        alert(

          "Application already submitted.\nYour Registration Number is: " +

          result.registrationNumber

        );

        return;

      }

      /*
      |--------------------------------------------------------------------------
      | SAVE VERIFIED DATA
      |--------------------------------------------------------------------------
      */

      sessionStorage.setItem(

        "verifiedPaymentData",

        JSON.stringify(
          result.payment
        )

      );

      /*
      |--------------------------------------------------------------------------
      | REDIRECT
      |--------------------------------------------------------------------------
      */

      navigate(
        "/full-application"
      );

    }

    catch (error) {

      console.log(
        "VERIFY ERROR =>",
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

        title="Application Form"

        crumbs={[
          {
            label:
              "Application Form"
          }
        ]}

      />

      <div className="container mx-auto max-w-7xl py-12 px-4">

        <PageBox
          title="M.E/M.Tech.(CEEP)- 2026 APPLICATION FORM"
        >

          <p className="mb-4">

            <span className="text-red-600 font-bold">

              NOTE :

            </span>{" "}

            In case you have not paid the fee yet,
            please visit this page{" "}

            <Link href="/fee-payment">

              <span className="text-blue-700 underline cursor-pointer hover:text-blue-900">

                (Click Here)

              </span>

            </Link>{" "}

            and pay the fee first.

          </p>

          <form onSubmit={handleSubmit}>

            <div className="grid md:grid-cols-4 gap-4">

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

            <div className="text-center mt-6">

              <button

                type="submit"

                className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"

              >

                Proceed to Fill Application

              </button>

            </div>

          </form>

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

    <div className="border border-gray-300 bg-[#f8fbf8] shadow-sm min-h-[260px]">

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

        name={name}

        value={value}

        onChange={onChange}

        className="w-full border border-gray-300 rounded-md px-4 py-3"

        placeholder={placeholder}

      />

    </div>

  );

}
