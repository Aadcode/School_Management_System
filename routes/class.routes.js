import { Router } from "express";
const router = Router();

//Class Routes

router.post("/create_class");
router.get("/Assign_teacher");
router.get("get_classes");
router.put("/update_class");
router.delete("/delete_delete");

export default router;
