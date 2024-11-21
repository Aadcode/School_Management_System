import { Router } from "express";
import { SignIn, SignUp } from "../controllers/admin.controller.js";
const router = Router();

//Class Routes

router.post("/SignUp", SignUp);
router.post("/SignIn", SignIn);

export default router;
