import { Router } from "express";
import {
  createCustomers,
  getAllCustomers,
  getOneCustomers,
  updateCustomers,
  deleteCustomer,
} from "../controllers/customers.controller.js"; 
import validate from '../middleware/validate.js';


import { validate } from "../middleware/validate.js";
import { customerValidation } from "../validation/customers.validation.js";

const router = Router();

router.post("/", validate(customerValidation), createCustomers);
router.get("/", getAllCustomers);
router.get("/:id", getOneCustomers);
router.put("/:id", validate(customerValidation), updateCustomers);
router.delete("/:id", deleteCustomer);

export default router;
