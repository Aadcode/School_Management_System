import { Router } from "express";
const router = Router();
import upload from "../middlewares/multer.js";
import {
  create_teacher,
  delete_teacher,
  get_teacher,
  get_teachers,
  update_teacher,
} from "../controllers/teacher.controller.js";
import isAuth from "../middlewares/isAuth.js";

//Teacher Routes

router.post("/create_teacher", isAuth, upload.single("file"), create_teacher);
router.get("/get_teachers", isAuth, get_teachers);
router.get("get_teacher/:id", isAuth, get_teacher);
router.put("/update_teacher", isAuth, update_teacher);
router.delete("/delete_teacher", isAuth, delete_teacher);

export default router;
