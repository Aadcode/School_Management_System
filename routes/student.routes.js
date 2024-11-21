import { Router } from "express";
import upload from "../middlewares/multer.js";
import {
  create_student,
  get_students,
  get_student,
  update_student,
  delete_student,
} from "../controllers/student.controller";
const router = Router();
import isAuth from "../middlewares/isAuth";

//Student Routes

router.post("/create_student", isAuth, upload.single("file"), create_student);
router.get("/get_students", isAuth, get_students);
router.get("/get_student/:id", isAuth, get_student);
router.put("/update_student/:id", isAuth, update_student);
router.delete("/delete_student/:id", isAuth, delete_student);

export default router;
