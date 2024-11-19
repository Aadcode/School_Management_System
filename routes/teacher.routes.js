import { Router } from "express";
const router = Router();
import upload from "../middlewares/multer.js";

//Teacher Routes

router.post("/create_teacher", upload.single("file"));
router.get("/get_teachers");
router.get("get_teacher/:id");
router.put("/update_teacher");
router.delete("/delete_teacher");

export default router;
