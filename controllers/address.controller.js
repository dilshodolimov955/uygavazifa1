import addressModel from "../models/address.model.js";
import { addressValidation } from "../validation/address.validation.js";

export const createAddress = async (req, res, next) => {
  try {
    const { error } = addressValidation.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const newAddress = await addressModel.create(req.body);
    res.status(201).json({ message: "Address created", data: newAddress });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getAllAddress = async (req, res, next) => {
  try {
    const data = await addressModel.find().populate("districtId");
    res.status(200).json({ count: data.length, data });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const getOneAddress = async (req, res, next) => {
  try {
    const data = await addressModel.findById(req.params.id).populate("districtId");
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ data });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const updateAddress = async (req, res, next) => {
  try {
    const { error } = addressValidation.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });

    const data = await addressModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Updated", data });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export const deleteAddress = async (req, res, next) => {
  try {
    const data = await addressModel.findByIdAndDelete(req.params.id);
    if (!data) return res.status(404).json({ message: "Address not found" });
    res.status(200).json({ message: "Deleted" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};
