import { Router } from "express";
import user from "./user/routes";
import category from "./category/routes";
import product from "./product/routes";
import service from "./treatment/routes";
import appointment from "./appointment/routes";
import auth from "./auth/routes";
const router = Router();

router.use("/auth", auth);
router.use("/user", user);
router.use("/category", category);
router.use("/product", product);
router.use("/service", service);
router.use("/appointment", appointment);

export default router;
