import express from "express";
import {
  createAddress,
  getAllAddress,
  getOneAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js"; 

const router = express.Router();

router.post("/", createAddress);
router.get("/", getAllAddress);
router.get("/:id", getOneAddress);
router.put("/:id", updateAddress);
router.delete("/:id", deleteAddress);

export default router;
