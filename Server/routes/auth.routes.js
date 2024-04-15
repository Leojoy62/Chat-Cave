import express from "express";
import {
  resgiterUser,
  loginUser,
  logoutUser,
} from "../controllers/auth.controller.js";
import { userValidator } from "../middleware/user.register.js";
import { runValidator } from "../middleware/runValidator.js";

const router = express.Router();

router.post("/register", userValidator, runValidator, resgiterUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
export default router;
