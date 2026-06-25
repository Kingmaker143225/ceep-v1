// const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
 
// if (import.meta.env.DEV) {
//   console.log("API_BASE_URL:", API_BASE_URL);
// }
 
// export const api = {
 
//   // PAYMENT APIs

//   payment: {
 
//     // CREATE PAYMENT

//     createPayment: async (payload) => {

//       try {
 
//         const res = await fetch(

//           `${API_BASE_URL}/api/payments/create`,

//           {

//             method: "POST",

//             headers: {

//               "Content-Type": "application/json"

//             },

//             body: JSON.stringify(payload),

//           }

//         );
 
//         const data = await res.json();
 
//         if (!res.ok) {

//           throw new Error(

//             data.message || "Failed to create payment"

//           );

//         }
 
//         return {

//           data,

//           error: null

//         };
 
//       } catch (err) {
 
//         return {

//           data: null,

//           error: err

//         };
 
//       }

//     },
 
 
//     // CHECK PAYMENT STATUS

//     checkPaymentStatus: async (payload) => {

//       try {
 
//         const res = await fetch(

//           `${API_BASE_URL}/api/payments/status`,

//           {

//             method: "POST",

//             headers: {

//               "Content-Type": "application/json"

//             },

//             body: JSON.stringify(payload),

//           }

//         );
 
//         const data = await res.json();
 
//         if (!res.ok) {

//           throw new Error(

//             data.message || "Failed to check payment status"

//           );

//         }
 
//         return {

//           data,

//           error: null

//         };
 
//       } catch (err) {
 
//         return {

//           data: null,

//           error: err

//         };
 
//       }

//     },
 
 
//     // VERIFY PAYMENT

//     verifyPayment: async (payload) => {

//       try {
 
//         const res = await fetch(

//           `${API_BASE_URL}/api/payments/verify`,

//           {

//             method: "POST",

//             headers: {

//               "Content-Type": "application/json"

//             },

//             body: JSON.stringify(payload),

//           }

//         );
 
//         const data = await res.json();
 
//         if (!res.ok) {

//           throw new Error(

//             data.message || "Failed to verify payment"

//           );

//         }
 
//         return {

//           data,

//           error: null

//         };
 
//       } catch (err) {
 
//         return {

//           data: null,

//           error: err

//         };
 
//       }

//     },
 
 
//     // PRINT APPLICATION

//     printApplication: async (payload) => {

//       try {
 
//         const res = await fetch(

//           `${API_BASE_URL}/api/payments/print`,

//           {

//             method: "POST",

//             headers: {

//               "Content-Type": "application/json"

//             },

//             body: JSON.stringify(payload),

//           }

//         );
 
//         const data = await res.json();
 
//         if (!res.ok) {

//           throw new Error(

//             data.message || "Failed to fetch application"

//           );

//         }
 
//         return {

//           data,

//           error: null

//         };
 
//       } catch (err) {
 
//         return {

//           data: null,

//           error: err

//         };
 
//       }

//     },
 
 
//     // GET REGISTRATION NUMBER

//     getRegistrationNumber: async (payload) => {

//       try {
 
//         const res = await fetch(

//           `${API_BASE_URL}/api/payments/registration-number`,

//           {

//             method: "POST",

//             headers: {

//               "Content-Type": "application/json"

//             },

//             body: JSON.stringify(payload),

//           }

//         );
 
//         const data = await res.json();
 
//         if (!res.ok) {

//           throw new Error(

//             data.message || "Failed to get registration number"

//           );

//         }
 
//         return {

//           data,

//           error: null

//         };
 
//       } catch (err) {
 
//         return {

//           data: null,

//           error: err

//         };
 
//       }

//     },
 
//    },
 
 
// application: {
 
//   fetchPaymentDetails: async (payload) => {
 
//     try {
 
//       const res = await fetch(
 
//         `${API_BASE_URL}/api/payments/verify`,
 
//         {
 
//           method: "POST",
 
//           headers: {
 
//             "Content-Type":

//               "application/json"
 
//           },
 
//           body:

//             JSON.stringify(payload),
 
//         }
 
//       );
 
//       const result =

//         await res.json();
 
//       if (!res.ok) {
 
//         throw new Error(
 
//           result.message ||

//           "Failed to fetch payment details"
 
//         );
 
//       }
 
//       return {
 
//         data:

//           result.payment,
 
//         error: null
 
//       };
 
//     }
 
//     catch (err) {
 
//       return {
 
//         data: null,
 
//         error: err
 
//       };
 
//     }
 
//   },
 
//   submitApplication: async (payload) => {
 
//     try {
 
//       const res = await fetch(
 
//         `${API_BASE_URL}/api/application/create`,
 
//         {
 
//           method: "POST",
 
//           headers: {
 
//             "Content-Type":

//               "application/json"
 
//           },
 
//           body:

//             JSON.stringify(payload),
 
//         }
 
//       );
 
//       const data =

//         await res.json();
 
//       if (!res.ok) {
 
//         throw new Error(
 
//           data.message ||

//           "Failed to submit application"
 
//         );
 
//       }
 
//       return {
 
//         data,

//         error: null
 
//       };
 
//     }
 
//     catch (err) {
 
//       return {
 
//         data: null,

//         error: err
 
//       };
 
//     }
 
//   },
 
// },

// };
 



























const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
 
if (import.meta.env.DEV) {
  console.log("API_BASE_URL:", API_BASE_URL);
}
 
export const api = {
 
  // PAYMENT APIs

  payment: {
 
    // CREATE PAYMENT

    createPayment: async (payload) => {

      try {
 
        const res = await fetch(

          `${API_BASE_URL}/api/payments/create`,

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },

            body: JSON.stringify(payload),

          }

        );
 
        const data = await res.json();
 
        if (!res.ok) {

          throw new Error(

            data.message || "Failed to create payment"

          );

        }
 
        return {

          data,

          error: null

        };
 
      } catch (err) {
 
        return {

          data: null,

          error: err

        };
 
      }

    },
 
 
    // CHECK PAYMENT STATUS

    checkPaymentStatus: async (payload) => {

      try {
 
        const res = await fetch(

          `${API_BASE_URL}/api/payments/status`,

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },

            body: JSON.stringify(payload),

          }

        );
 
        const data = await res.json();
 
        if (!res.ok) {

          throw new Error(

            data.message || "Failed to check payment status"

          );

        }
 
        return {

          data,

          error: null

        };
 
      } catch (err) {
 
        return {

          data: null,

          error: err

        };
 
      }

    },
 
 
    // VERIFY PAYMENT

    verifyPayment: async (payload) => {

      try {
 
        const res = await fetch(

          `${API_BASE_URL}/api/payments/verify`,

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },

            body: JSON.stringify(payload),

          }

        );
 
        const data = await res.json();
 
        if (!res.ok) {

          throw new Error(

            data.message || "Failed to verify payment"

          );

        }
 
        return {

          data,

          error: null

        };
 
      } catch (err) {
 
        return {

          data: null,

          error: err

        };
 
      }

    },
 
 
    // PRINT APPLICATION

    printApplication: async (payload) => {

      try {
 
        const res = await fetch(

          `${API_BASE_URL}/api/payments/print`,

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },

            body: JSON.stringify(payload),

          }

        );
 
        const data = await res.json();
 
        if (!res.ok) {

          throw new Error(

            data.message || "Failed to fetch application"

          );

        }
 
        return {

          data,

          error: null

        };
 
      } catch (err) {
 
        return {

          data: null,

          error: err

        };
 
      }

    },
 
 
    // GET REGISTRATION NUMBER

    getRegistrationNumber: async (payload) => {

      try {
 
        const res = await fetch(

          `${API_BASE_URL}/api/payments/registration-number`,

          {

            method: "POST",

            headers: {

              "Content-Type": "application/json"

            },

            body: JSON.stringify(payload),

          }

        );
 
        const data = await res.json();
 
        if (!res.ok) {

          throw new Error(

            data.message || "Failed to get registration number"

          );

        }
 
        return {

          data,

          error: null

        };
 
      } catch (err) {
 
        return {

          data: null,

          error: err

        };
 
      }

    },
 
   },
 
 
application: {
 
  fetchPaymentDetails: async (payload) => {
 
    try {
 
      const res = await fetch(
 
        `${API_BASE_URL}/api/payments/verify`,
 
        {
 
          method: "POST",
 
          headers: {
 
            "Content-Type":

              "application/json"
 
          },
 
          body:

            JSON.stringify(payload),
 
        }
 
      );
 
      const result =

        await res.json();
 
      if (!res.ok) {
 
        throw new Error(
 
          result.message ||

          "Failed to fetch payment details"
 
        );
 
      }
 
      return {
 
        data:

          result.payment,
 
        error: null
 
      };
 
    }
 
    catch (err) {
 
      return {
 
        data: null,
 
        error: err
 
      };
 
    }
 
  },
 
  // submitApplication: async (payload) => {
 
  //   try {
 
  //     const res = await fetch(
 
  //       `${API_BASE_URL}/api/application/create`,
 
  //       {
 
  //         method: "POST",
 
  //         headers: {
 
  //           "Content-Type":

  //             "application/json"
 
  //         },
 
  //         body:

  //           JSON.stringify(payload),
 
  //       }
 
  //     );
 
  //     const data =

  //       await res.json();
 
  //     if (!res.ok) {
 
  //       throw new Error(
 
  //         data.message ||

  //         "Failed to submit application"
 
  //       );
 
  //     }
 
  //     return {
 
  //       data,

  //       error: null
 
  //     };
 
  //   }
 
  //   catch (err) {
 
  //     return {
 
  //       data: null,

  //       error: err
 
  //     };
 
  //   }
 
  // },
 submitApplication: async (payload) => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/application/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      }
    );

    console.log("STATUS =>", res.status);

    const data = await res.json();

    console.log("BACKEND RESPONSE =>", data);

    if (!res.ok) {
      throw new Error(data.message || "Validation failed");
    }

    return {
      data,
      error: null
    };

  } catch (err) {
    console.log("SUBMIT ERROR =>", err);
    return {
      data: null,
      error: err
    };
  }
}
},

};
 
