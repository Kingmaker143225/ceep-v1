const supabase =

  require("../config/supabase");

/*

|--------------------------------------------------------------------------

| SAVE PAYMENT

|--------------------------------------------------------------------------

*/

const savePayment =

async (paymentData) => {

  console.log(

    "================================="

  );

  console.log(

    "INSERTING PAYMENT DATA"

  );

  console.log(

    "PAYMENT REF =>",

    paymentData

      .payment_reference_id

  );

  console.log(

    "PAYMENT STATUS =>",

    paymentData

      .payment_status

  );

  console.log(

    "================================="

  );

  const {

    data,

    error

  } = await supabase

    .from("fee_payments")

    .insert([paymentData])

    .select();

  // if (error) {

  //   console.error(

  //     "================================="

  //   );

  //   console.error(

  //     "SUPABASE INSERT ERROR =>"

  //   );

  //   console.error(

  //     error.message

  //   );

  //   console.error(

  //     "================================="

  //   );

  //   throw new Error(

  //     error.message

  //   );

  // }
  if (error) {
  console.error("=================================");
  console.error("SUPABASE INSERT ERROR =>");
  console.error(error); // full error object
  console.error("ERROR MESSAGE =>", error.message);
  console.error("=================================");

  throw new Error(error.message);
}

  console.log(

    "================================="

  );

  console.log(

    "PAYMENT SAVED SUCCESSFULLY"

  );

  console.log(

    "================================="

  );

  return data;

};

/*

|--------------------------------------------------------------------------

| GET PAYMENT STATUS

|--------------------------------------------------------------------------

*/

const getPaymentStatus =

async (

  hallTicket,

  mobile

) => {

  const {

    data,

    error

  } = await supabase

    .from("fee_payments")

    .select("*")

    .eq(

      "hall_ticket_no",

      hallTicket

    )

    .eq(

      "mobile_number",

      mobile

    )

    .maybeSingle();

  if (error) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      error.message

    );

    throw new Error(

      error.message

    );

  }

  return data;

};

/*

|--------------------------------------------------------------------------

| VERIFY PAYMENT

|--------------------------------------------------------------------------

*/

const verifyPayment =

async (

  mobile,

  dob

) => {

  const {

    data,

    error

  } = await supabase

    .from("fee_payments")

    .select("*")

    .eq(

      "mobile_number",

      mobile

    )

    .eq(

      "date_of_birth",

      dob

    )

    .eq(

      "payment_status",

      "PAID"

    )

    .maybeSingle();

  if (error) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      error.message

    );

    throw new Error(

      error.message

    );

  }

  return data;

};

/*

|--------------------------------------------------------------------------

| CHECK EXISTING APPLICATION

|--------------------------------------------------------------------------

*/

const checkExistingApplication =

async (paymentRef) => {

  const {

    data,

    error

  } = await supabase

    .from("applications")

    .select("*")

    .eq(

      "payment_reference_id",

      paymentRef

    )

    .maybeSingle();

  if (error) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      error.message

    );

    throw new Error(

      error.message

    );

  }

  return data;

};

/*

|--------------------------------------------------------------------------

| GET APPLICATION DETAILS

|--------------------------------------------------------------------------

*/

const getApplicationDetails =

async (

  registrationNumber,

  mobile,

  dob

) => {

  /*

  |--------------------------------------------------------------------------

  | GET APPLICATION

  |--------------------------------------------------------------------------

  */

  const {

    data: application,

    error: appError

  } = await supabase

    .from("applications")

    .select("*")

    .eq(

      "registration_number",

      registrationNumber

    )

    .eq(

      "mobile_number",

      mobile

    )
    .eq("date_of_birth", dob)

    .maybeSingle();

  if (appError) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      appError.message

    );

    throw new Error(

      appError.message

    );

  }

  if (!application) {

    return null;

  }

  /*

  |--------------------------------------------------------------------------

  | GET PAYMENT

  |--------------------------------------------------------------------------

  */

  const {

    data: payment,

    error: paymentError

  } = await supabase

    .from("fee_payments")

    .select("*")

    .eq(

      "payment_reference_id",

      application.payment_reference_id

    )

    .maybeSingle();

  if (paymentError) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      paymentError.message

    );

    throw new Error(

      paymentError.message

    );

  }



  const {
  data: qualifications,
  error: qualificationError
} = await supabase
  .from("qualification_details")
  .select("*")
  .eq("registration_number", registrationNumber);

if (qualificationError) {
  console.error("QUALIFICATION ERROR =>");
  console.error(qualificationError.message);
  throw new Error(qualificationError.message);
}

  return {

    application,

    payment,

    qualifications

  };

};

/*

|--------------------------------------------------------------------------

| GET REGISTRATION NUMBER

|--------------------------------------------------------------------------

*/

const getRegistrationNumber =

async (

  mobile,

  dob

) => {

  const {

    data,

    error

  } = await supabase

    .from("applications")

    .select("*")

    .eq(

      "mobile_number",

      mobile

    )

    .eq(

      "date_of_birth",

      dob

    )

    .maybeSingle();

  if (error) {

    console.error(

      "SUPABASE ERROR =>"

    );

    console.error(

      error.message

    );

    throw new Error(

      error.message

    );

  }

  return data;

};

/*

|--------------------------------------------------------------------------

| UPDATE PAYMENT STATUS

|--------------------------------------------------------------------------

*/

const updatePaymentStatus =

async (

  paymentRef,

  updateData

) => {

  console.log(

    "================================="

  );

  console.log(

    "UPDATING PAYMENT STATUS"

  );

  console.log(

    "PAYMENT REF =>",

    paymentRef

  );

  console.log(

    "NEW STATUS =>",

    updateData.payment_status

  );

  console.log(

    "================================="

  );

  const {

    data,

    error

  } = await supabase

    .from("fee_payments")

    .update(updateData)

    .eq(

      "payment_reference_id",

      paymentRef

    )

    .select();

  if (error) {

    console.error(

      "UPDATE PAYMENT ERROR =>"

    );

    console.error(

      error.message

    );

    throw new Error(

      error.message

    );

  }

  console.log(

    "PAYMENT STATUS UPDATED SUCCESSFULLY"

  );

  return data;

};

const getPaymentByRef = async (paymentRef) => {
  const { data, error } = await supabase
    .from("fee_payments")
    .select("*")
    .eq("payment_reference_id", paymentRef)
    .maybeSingle();

  if (error) {
    console.error("SUPABASE GET BY REF ERROR =>", error.message);
    throw new Error(error.message);
  }
  return data;
};

/*

|--------------------------------------------------------------------------

| EXPORTS

|--------------------------------------------------------------------------

*/

module.exports = {

  savePayment,

  getPaymentStatus,

  verifyPayment,

  checkExistingApplication,

  getApplicationDetails,

  getRegistrationNumber,

  updatePaymentStatus,

  getPaymentByRef

};
