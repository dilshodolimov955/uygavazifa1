export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      res.status(400).json({
        message: "Validation failed",
        errors: error.details
          ? error.details.map((err) => err.message)
          : [error.message],
      });
    }
  };
};
