import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  receiveMessages,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protectedRoute, receiveMessages);
router.post("/send/:id", protectedRoute, sendMessage);
export default router;
