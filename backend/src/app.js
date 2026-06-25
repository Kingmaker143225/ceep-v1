
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const paymentRoutes = require("./routes/paymentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const sbiPaymentRoutes = require("./routes/sbiPaymentRoutes");
const authRoutes = require("./routes/authRoutes");
 
const app = express();
app.set("trust proxy", 1);
app.use(helmet());

const rateLimit = require("express-rate-limit");

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes"
  }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 15,
  message: {
    success: false,
    message: "Too many login attempts, please try again after 15 minutes"
  }
});

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    success: false,
    message: "Too many submissions, please try again after 15 minutes"
  }
});
 
/*
|--------------------------------------------------------------------------
| CORS
|--------------------------------------------------------------------------
*/
 
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://tgecetwp.in",
      "https://www.tgecetwp.in"
    ],
    credentials: true
  })
);
 
/*
|--------------------------------------------------------------------------
| BODY PARSER
|--------------------------------------------------------------------------
*/
 
// app.use(express.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
/*
|--------------------------------------------------------------------------
| ROOT ROUTE
|--------------------------------------------------------------------------
*/
 
app.get("/", (req, res) => {
 
  res.status(200).send("Backend Running Successfully");
 
});
 
/*
|--------------------------------------------------------------------------
| API ROOT
|--------------------------------------------------------------------------
*/
 
app.get("/api", (req, res) => {
 
  res.status(200).json({
    success: true,
    message: "API is working"
  });
 
});
 
/*
|--------------------------------------------------------------------------
| HEALTH CHECK
|--------------------------------------------------------------------------
*/
 
app.get("/api/health", (req, res) => {
 
  res.status(200).json({
    success: true,
    message: "Backend is healthy"
  });
 
});
 
/*
|--------------------------------------------------------------------------
| PAYMENT HEALTH
|--------------------------------------------------------------------------
*/
 
app.get("/api/payments/health", (req, res) => {
 
  res.status(200).json({
    success: true,
    message: "Payment API working"
  });
 
});
 
/*
|--------------------------------------------------------------------------
| SBI HEALTH
|--------------------------------------------------------------------------
*/
 
app.get("/api/sbi/health", (req, res) => {
 
  res.status(200).json({
    success: true,
    message: "SBI API routes working"
  });
 
});
 
/*
|--------------------------------------------------------------------------
| AUTH ROUTES
|--------------------------------------------------------------------------
*/
app.use("/api/auth", authLimiter, authRoutes);

/*
|--------------------------------------------------------------------------
| PAYMENT ROUTES
|--------------------------------------------------------------------------
*/
app.use("/api/payments", apiLimiter, paymentRoutes);
 
/*
|--------------------------------------------------------------------------
| UPLOAD ROUTE
|--------------------------------------------------------------------------
*/
app.use("/api/upload", submitLimiter, uploadRoutes);
 
/*
|--------------------------------------------------------------------------
| APPLICATION ROUTE
|--------------------------------------------------------------------------
*/
app.use("/api/application", submitLimiter, applicationRoutes);

/*
|--------------------------------------------------------------------------
| SBI PAYMENT ROUTES
|--------------------------------------------------------------------------
*/
app.use("/api/sbi", sbiPaymentRoutes);
 
/*
|--------------------------------------------------------------------------
| 404 HANDLER
|--------------------------------------------------------------------------
*/
 
app.use((req, res) => {
 
  return res.status(404).json({
    success: false,
    message: "Route Not Found"
  });
 
});
 
/*
|--------------------------------------------------------------------------
| GLOBAL ERROR HANDLER
|--------------------------------------------------------------------------
*/
 
app.use((err, req, res, next) => {
  console.error("=================================");
  console.error("GLOBAL ERROR =>", err);
  console.error("=================================");
 
  const isProduction = process.env.NODE_ENV === "production";
  return res.status(500).json({
    success: false,
    message: isProduction ? "Internal Server Error" : (err.message || "Internal Server Error")
  });
});
 
module.exports = app;
