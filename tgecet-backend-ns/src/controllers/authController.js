const supabase = require("../config/supabase");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    if (!username || !password || !role) {
      return res.status(400).json({
        success: false,
        message: "Username, password and role are required"
      });
    }

    if (role === "admin") {
      const adminEmail = process.env.ADMIN_EMAIL || "admin@pgcet.ts";
      const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

      if (username.toLowerCase() === adminEmail.toLowerCase() && password === adminPassword) {
        const token = jwt.sign(
          { username: adminEmail, role: "admin" },
          process.env.JWT_SECRET || "tgecet_jwt_secret_key_2026",
          { expiresIn: "8h" }
        );

        return res.status(200).json({
          success: true,
          token,
          user: {
            username: adminEmail,
            role: "admin",
            name: "Administrator"
          }
        });
      }

      return res.status(401).json({
        success: false,
        message: "Invalid admin credentials"
      });
    } else if (role === "student") {
      const { data: student, error } = await supabase
        .from("applications")
        .select("*")
        .or(`registration_number.eq.${username},email.eq.${username}`)
        .maybeSingle();

      if (error) {
        throw new Error(error.message);
      }

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student application details not found. Please ensure you have submitted the application form."
        });
      }

      const cleanPassword = password.trim().replace(/\//g, "").replace(/-/g, "");
      const cleanMobile = student.mobile_number ? student.mobile_number.trim() : "";
      const cleanDOB = student.date_of_birth ? student.date_of_birth.trim().replace(/\//g, "").replace(/-/g, "") : "";

      if (cleanPassword === cleanMobile || cleanPassword === cleanDOB) {
        const token = jwt.sign(
          { username: student.registration_number, role: "student" },
          process.env.JWT_SECRET || "tgecet_jwt_secret_key_2026",
          { expiresIn: "8h" }
        );

        return res.status(200).json({
          success: true,
          token,
          user: {
            username: student.registration_number,
            name: student.candidate_name,
            role: "student",
            details: student
          }
        });
      }

      return res.status(401).json({
        success: false,
        message: "Invalid credentials. Please enter your correct Date of Birth or Mobile Number."
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid role specified"
      });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error"
    });
  }
};

module.exports = { login };
