import Joi from "joi";

export const orderSchema = Joi.object({
  userId: Joi.string().required(),
  products: Joi.array()
    .items(
      Joi.object({
        productId: Joi.string().required(),
        quantity: Joi.number().min(1).required(),
      })
    )
    .required(),
  totalPrice: Joi.number().min(0).required(),
  status: Joi.string().valid("pending", "completed", "canceled"),
});
