import { Router } from "express";
const router = Router();

//Student Routes

router.post("/create_student");
router.get("/get_students");
router.get("get_student/:id");
router.put("/update_student");
router.delete("/delete_student");

export default router;
