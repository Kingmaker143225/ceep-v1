const express = require("express");
const multer = require("multer");
const path = require("path");
const supabase = require("../config/supabase");

const router = express.Router();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const mimetype = allowedTypes.test(file.mimetype);
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimetype && extname) {
    return cb(null, true);
  }
  cb(new Error("Only image files (JPEG, JPG, PNG, GIF) are allowed"));
};

const upload = multer({
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: fileFilter
});

router.post(
  "/",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res.status(400).json({ success: false, message: "File size exceeds 2MB limit" });
        }
        return res.status(400).json({ success: false, message: err.message });
      } else if (err) {
        return res.status(400).json({ success: false, message: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      const file = req.file;
      let folder = req.body.folder || "uploads";

      if (!file) {
        return res.status(400).json({
          success: false,
          message: "File is required"
        });
      }

      if (!/^[a-zA-Z0-9_-]+$/.test(folder)) {
        return res.status(400).json({
          success: false,
          message: "Invalid folder name"
        });
      }

      const cleanExt = path.extname(file.originalname).toLowerCase();
      const cleanBase = path.basename(file.originalname, cleanExt)
        .replace(/[^a-zA-Z0-9]/g, "_")
        .substring(0, 50);
      const fileName = `${folder}/${Date.now()}-${cleanBase}${cleanExt}`;

      const { error } = await supabase.storage
        .from("application-files")
        .upload(fileName, file.buffer, {
          contentType: file.mimetype,
          cacheControl: "3600"
        });

      if (error) {
        throw error;
      }

      const url = supabase.storage
        .from("application-files")
        .getPublicUrl(fileName)
        .data.publicUrl;

      return res.status(200).json({
        success: true,
        url
      });
    } catch (error) {
      console.error("UPLOAD ERROR =>", error);
      return res.status(500).json({
        success: false,
        message: "File upload failed"
      });
    }
  }
);

module.exports = router;
