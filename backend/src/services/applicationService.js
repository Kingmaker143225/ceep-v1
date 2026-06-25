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
  console.log("=================================");
  console.log("SUPABASE INSERT ERROR =>");
  console.log(error);
  console.log(JSON.stringify(error, null, 2));
  console.log("=================================");
  throw new Error(error.message);
}
 
  return data;
 
};
 
module.exports = {
  saveApplication
};
