const supabase =
require("../config/supabase");
 
const saveApplication =
async (applicationData) => {
 
  console.log(
    "SAVING DATA =>",
    applicationData
  );
 
  const {
    data,
    error
  } = await supabase
 
    .from("applications")
 
    .insert([
      applicationData
    ])
 
    .select()
 
    .single();
 
  if (error) {
 
    console.log(
      "SUPABASE INSERT ERROR =>",
      error
    );
 
    throw new Error(
      error.message
    );
 
  }
 
  return data;
 
};
 
module.exports = {
  saveApplication
};
