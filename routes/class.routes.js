import { Router } from "express";
import {
  assignTeacher,
  createClass,
  deleteClass,
  getClasses,
  updateClass,
} from "../controllers/class.controller";
const router = Router();
import isAuth from "../middlewares/isAuth.js";

//Class Routes

router.post("/create_class", isAuth, createClass);
router.get("/Assign_teacher", isAuth, assignTeacher);
router.get("/get_classes", isAuth, getClasses);
router.put("/update_class/:classId", isAuth, updateClass);
router.delete("/delete_class/:classId", isAuth, deleteClass);

export default router;
