import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  building: { type: String },
  districtId: { type: mongoose.Schema.Types.ObjectId, ref: "Districts" },
});

const addressModel = mongoose.model("Address", addressSchema);
export default addressModel;
