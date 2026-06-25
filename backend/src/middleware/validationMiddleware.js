const validateSchema = (schema) => {
  return (req, res, next) => {
    try {
      // Parse query, params, or body depending on request
      schema.parse(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.errors.map(err => ({
          field: err.path.join("."),
          message: err.message
        }))
      });
    }
  };
};

module.exports = validateSchema;
