import { Router } from "express";
import user from "./user/routes";
import category from "./category/routes";
// import product from "./product/routes";
// import service from "./treatment/routes";

const router = Router();
router.use("/user", user);
router.use("/category", category);
// router.use("/product", product);
// router.use("/service", service);

export default router;
