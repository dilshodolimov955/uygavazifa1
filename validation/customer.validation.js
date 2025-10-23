
import express from "express";
import validate from "../middleware/validate.js";

const router = express.Router();

router.post("/customers", validate, (req, res) => {
  res.json({
    message: `Customer ${req.body.name} added successfully!`,
  });
});

export default router;
