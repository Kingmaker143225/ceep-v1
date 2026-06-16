
import { useEffect } from "react";

import { useLocation } from "wouter";

 

export default function Response() {

  const [, navigate] = useLocation();

 

  const params = new URLSearchParams(window.location.search);

 

  const rawStatus =

    params.get("status") ||

    params.get("paymentStatus") ||

    params.get("PAYMENT_STATUS") ||

    "";

 

  const paymentRef =

    params.get("paymentRef") ||

    params.get("payment_ref") ||

    params.get("PAYMENT_REF") ||

    "";

 

  const atrn =

    params.get("atrn") ||

    params.get("ATRN") ||

    params.get("atrnNumber") ||

    "";

 

  const orderId =

    params.get("orderId") ||

    params.get("ORDER_ID") ||

    params.get("order_id") ||

    "";

 

  const normalizedStatus = rawStatus.toLowerCase().trim();

 

  const isSuccess =

    normalizedStatus === "success" ||

    normalizedStatus === "paid" ||

    normalizedStatus === "completed" ||

    normalizedStatus === "ok";

useEffect(() => {
  if (isSuccess && paymentRef) {
    const fetchPaymentDetails = async () => {
      try {
        const apiBaseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";
        const res = await fetch(`${apiBaseUrl}/api/payments/details/${encodeURIComponent(paymentRef)}`);
        const result = await res.json();
        if (result.success && result.payment) {
          sessionStorage.setItem("verifiedPaymentData", JSON.stringify(result.payment));
        } else {
          console.error("Failed to fetch verified payment data from backend:", result.message);
        }
      } catch (error) {
        console.error("Error fetching payment details:", error);
      }
    };

    fetchPaymentDetails();

    const timer = setTimeout(() => {
      navigate("/application");
    }, 5000);

    return () => clearTimeout(timer);
  } else {
    const timer = setTimeout(() => {
      window.location.href = "/fee-payment";
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [
  isSuccess,
  paymentRef,
  atrn,
  orderId,
  rawStatus,
  navigate
]);

 

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-md text-center">

        {isSuccess ? (

          <>

            <div className="text-green-600 text-6xl mb-5">✓</div>

 

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

                {paymentRef || "N/A"}

              </p>

 

              {atrn && (

                <>

                  <p className="text-sm text-gray-500 mt-3 mb-1">

                    ATRN Number

                  </p>

 

                  <p className="font-bold text-lg break-all">{atrn}</p>

                </>

              )}

 

              {orderId && (

                <>

                  <p className="text-sm text-gray-500 mt-3 mb-1">

                    Order ID

                  </p>

 

                  <p className="font-bold text-lg break-all">{orderId}</p>

                </>

              )}

 

              <p className="text-sm text-gray-500 mt-3 mb-1">

                Payment Status

              </p>

 

              <p className="font-bold text-lg break-all text-green-700">

                {rawStatus || "SUCCESS"}

              </p>

            </div>

 

            <p className="text-sm text-gray-500 mt-6">

              Redirecting to application form...

            </p>

          </>

        ) : (

          <>

            <div className="text-red-600 text-6xl mb-5">✕</div>

 

            <h1 className="text-3xl font-bold text-red-700 mb-4">

              Payment Failed

            </h1>

 

            <p className="text-gray-700 mb-4">

              Your payment could not be completed.

            </p>

 

            <div className="bg-gray-100 rounded-lg p-4 text-left">

              <p className="text-sm text-gray-500 mb-1">

                Payment Status

              </p>

 

              <p className="font-bold text-lg break-all text-red-700">

                {rawStatus || "N/A"}

              </p>

 

              <p className="text-sm text-gray-500 mt-3 mb-1">

                Payment Reference ID

              </p>

 

              <p className="font-bold text-lg break-all">

                {paymentRef || "N/A"}

              </p>

 

              {atrn && (

                <>

                  <p className="text-sm text-gray-500 mt-3 mb-1">

                    ATRN Number

                  </p>

 

                  <p className="font-bold text-lg break-all">{atrn}</p>

                </>

              )}

 

              {orderId && (

                <>

                  <p className="text-sm text-gray-500 mt-3 mb-1">

                    Order ID

                  </p>

 

                  <p className="font-bold text-lg break-all">{orderId}</p>

                </>

              )}

            </div>

 

            <button

              // onClick={() => navigate("/fee-payment")}

              onClick={() => {

 

  window.location.href =

    "/fee-payment";

}}

              className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold"

            >

              Try Again

            </button>

          </>

        )}

      </div>

    </div>

  );

}


