import { Router } from "express";
import categoryRoutes from "./category.route.js";
import orderRoutes from "./order.route.js"; 

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/orders", orderRoutes); 

export default router;
