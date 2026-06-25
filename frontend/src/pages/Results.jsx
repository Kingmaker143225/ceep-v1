import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Response() {

  const [, navigate] = useLocation();

  const params =
    new URLSearchParams(window.location.search);

  const status =
    params.get("status");

  const paymentRef =
    params.get("paymentRef");

  useEffect(() => {

    if (status === "success") {

      sessionStorage.setItem(

        "verifiedPaymentData",

        JSON.stringify({

          paymentRef

        })

      );

      setTimeout(() => {

        navigate(

          `/full-application?paymentRef=${paymentRef}`

        );

      }, 5000);

    }

  }, []);

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md text-center">

        {

          status === "success"

          ? (

            <>

              <div className="text-green-600 text-6xl mb-5">
                ✓
              </div>

              <h1 className="text-3xl font-bold text-green-700 mb-4">

                Payment Successful

              </h1>

              <p className="text-gray-700 mb-4">

                Your payment has been completed successfully.

              </p>

              <div className="bg-gray-100 rounded-lg p-4 text-left">

                <p className="text-sm text-gray-500 mb-1">

                  Payment Reference ID

                </p>

                <p className="font-bold text-lg break-all">

                  {paymentRef}

                </p>

              </div>

              <p className="text-sm text-gray-500 mt-6">

                Redirecting to application form...

              </p>

            </>

          )

          : (

            <>

              <div className="text-red-600 text-6xl mb-5">
                ✕
              </div>

              <h1 className="text-3xl font-bold text-red-700 mb-4">

                Payment Failed

              </h1>

              <p className="text-gray-700 mb-4">

                Your payment could not be completed.

              </p>

              <div className="bg-gray-100 rounded-lg p-4 text-left">

                <p className="text-sm text-gray-500 mb-1">

                  Payment Reference ID

                </p>

                <p className="font-bold text-lg break-all">

                  {paymentRef || "N/A"}

                </p>

              </div>

              <button

                onClick={() => navigate("/FeePayment")}

                className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"

              >

                Try Again

              </button>

            </>

          )

        }

      </div>

    </div>

  );

}
