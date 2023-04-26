import { Router } from "express";
import user from "./user/routes";
// import product from "./product/routes";
import category from "./category/routes";
// import service from "./treatment/routes";

const router = Router();
router.use("/user", user);
// router.use("/product", product);
router.use("/category", category);
// router.use("/service", service);

export default router;
