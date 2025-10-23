import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import addressRouter from "./routes/address.routes.js";
import customerRouter from "./routes/customer.routes.js";
import deliveryStaffRouter from "./routes/delivery_staff.routes.js";
import districtsRouter from "./routes/districts.routes.js";
import orderItemsRouter from "./routes/order_items.routes.js";
import ordersRouter from "./routes/orders.routes.js";
import paymentsRouter from "./routes/payments.routes.js";
import waterProductsRouter from "./routes/water_products.routes.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/address", addressRouter);
app.use("/api/customers", customerRouter);
app.use("/api/delivery_staff", deliveryStaffRouter);
app.use("/api/districts", districtsRouter);
app.use("/api/order_items", orderItemsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/payments", paymentsRouter);
app.use("/api/water_products", waterProductsRouter);

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/uygavazifa1";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(" MongoDB connection error:", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
