import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import { getAllUsers } from "../controllers/getAllUser.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getAllUsers);

export default router;
