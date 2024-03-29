import { Router } from "express";

import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.get("/childCategories/:parentId", controller.getChildCategories);
router.put("/:id", controller.update);
router.post("/", controller.create);
router.delete("/:id", controller.delete);
router.post("/:id/upload/image", controller.uploadImage);
router.put("/:id/upload/image", controller.uploadImage);

export default router;
