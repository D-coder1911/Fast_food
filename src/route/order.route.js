import { Router } from "express";
import orderController from "../controller/order.controller.js";
import { validate } from "../middleware/validation.middleware.js";
import { orderSchema } from "../schema/order.schema.js";

const router = Router();

router.get("/", orderController.getAllOrders);
router.get("/:id", orderController.getOneOrder);
router.post("/", validate(orderSchema), orderController.createOrder);
router.put("/:id", validate(orderSchema), orderController.updateOrder);
router.delete("/:id", orderController.deleteOrder);

export default router;
