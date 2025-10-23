import Joi from "joi";

export const addressValidation = Joi.object({
  street: Joi.string().min(3).required(),
  building: Joi.string().optional(),
  districtId: Joi.string().hex().length(24).optional(),
});
